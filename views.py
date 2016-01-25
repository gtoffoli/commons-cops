'''
Created on 02/apr/2015
@author: Giovanni Toffoli - LINK srl
'''

from django.template import RequestContext
from django.db.models import Count
from django.db.models import Q
# from django.db import transaction
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User, Group
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.utils.text import capfirst
from django.utils.translation import pgettext, ugettext_lazy as _, string_concat
from django_messages.models import Message
from django_messages.views import compose as message_compose
from actstream import action, registry

from commons import settings
from documents import DocumentType, Document
# from sources.models import WebFormSource
from models import UserProfile, Folder, FolderDocument, Repo, ProjType, Project, ProjectMember, OER, OerMetadata, OerEvaluation, OerDocument
from models import LearningPath, PathNode
from models import PUBLISHED
from models import PROJECT_SUBMITTED, PROJECT_OPEN
from models import OER_TYPE_DICT, QUALITY_SCORE_DICT
from models import LP_COLLECTION, LP_SEQUENCE

from forms import UserProfileExtendedForm, UserPreferencesForm, DocumentForm, ProjectForm, FolderDocumentForm
from forms import RepoForm, OerForm, OerMetadataFormSet, OerEvaluationForm, OerQualityFormSet, DocumentUploadForm, LpForm, PathNodeForm
from forms import PeopleSearchForm, RepoSearchForm, OerSearchForm, LpSearchForm
from forms import ProjectMessageComposeForm, ForumForm, MatchMentorForm

from permissions import ForumPermissionHandler
from session import get_clipboard, set_clipboard

from conversejs.models import XMPPAccount
from dmuc.models import Room, RoomMember
from dmuc.middleware import create_xmpp_account

from roles.utils import add_local_role, remove_local_role, grant_permission
from roles.models import Role
from taggit.models import Tag
from filetransfers.api import serve_file
from notification import models as notification
# from pinax.notifications import models as notification
from pybb.models import Forum, Category
from zinnia.models import Entry

registry.register(Project)
registry.register(Forum)
registry.register(Room)

def robots(request):
    response = render_to_response('robots.txt', {}, context_instance=RequestContext(request))
    response['Content-Type'] = 'text/plain; charset=utf-8'
    return response

def group_has_project(group):
    try:
        return group.project
    except:
        return None  

def home(request):
    MAX_MEMBERS = 10
    MAX_FORUMS = 5
    MAX_ARTICLES = 5
    MAX_OERS = 10
    MAX_REPOS = 5
    wall_dict = {}
    wall_dict['members'] = ProjectMember.objects.filter(state=1).order_by('-created')[:MAX_MEMBERS]
    wall_dict['forums'] = Forum.objects.filter(category_id=1).exclude(post_count=0).order_by('-post_count')[:MAX_FORUMS]
    wall_dict['articles'] = Entry.objects.order_by('-creation_date')[:MAX_ARTICLES]
    wall_dict['oers'] = OER.objects.filter(state=3).order_by('-created')[:MAX_OERS]
    wall_dict['repos'] = Repo.objects.filter(state=3).order_by('-created')[:MAX_REPOS]
    return render_to_response('homepage.html', wall_dict, context_instance=RequestContext(request))

def my_chat(request):
    rooms = []
    user = request.user
    if user.is_authenticated():
        xmpp_accounts = XMPPAccount.objects.filter(user=user)
        for xmpp_account in xmpp_accounts:
            room_members = RoomMember.objects.filter(xmpp_account=xmpp_account)
            for room_member in room_members:
                room = room_member.room
                rooms.append(room)
    chat_dict = {}
    chat_dict['rooms'] = rooms
    return render_to_response('chat.html', chat_dict, context_instance=RequestContext(request))

def user_profile(request, username, user=None):
    # assert username or (user and user.is_authenticated())
    if not username and (not user or not user.is_authenticated()):
        return HttpResponseRedirect('/')
    MAX_REPOS = MAX_OERS = 5
    if not user:
        user = get_object_or_404(User, username=username)
    memberships = ProjectMember.objects.filter(user=user, state=1)
    if user.is_authenticated() and user==request.user:
        can_edit = True
        applications = ProjectMember.objects.filter(user=user, state=0)
        repos = Repo.objects.filter(creator=user).order_by('-created')
        oers = OER.objects.filter(creator=user).order_by('-created')
    else:
        can_edit = False
        applications = []
        repos = Repo.objects.filter(creator=user, state=PUBLISHED).order_by('-created')
        oers = OER.objects.filter(creator=user, state=PUBLISHED).order_by('-created')
    more_repos = repos.count() > MAX_REPOS
    repos = repos[:MAX_REPOS]
    more_oers = oers.count() > MAX_OERS
    oers = oers[:MAX_REPOS]
    profile = user.get_profile()
    return render_to_response('user_profile.html', {'can_edit': can_edit, 'profile_user': user, 'profile': profile, 'memberships': memberships, 'applications': applications, 'repos': repos, 'more_repos': more_repos, 'oers': oers, 'more_oers': more_oers,}, context_instance=RequestContext(request))

def my_profile(request):
    user = request.user
    return user_profile(request, None, user=user)

def my_dashboard(request):
    MAX_REPOS = MAX_OERS = MAX_LP = 5
    var_dict = {}
    var_dict['user'] = user = request.user
    var_dict['profile'] = profile = user.get_profile()
    var_dict['memberships'] = memberships = ProjectMember.objects.filter(user=user, state=1)
    var_dict['applications'] = applications = ProjectMember.objects.filter(user=user, state=0)
    var_dict['mentoring_rels'] = mentoring_rels = ProjectMember.objects.filter(user=user, project__proj_type__name='ment')
    print 'mentoring_rels : ', mentoring_rels
    repos = Repo.objects.filter(creator=user).order_by('-created')
    var_dict['more_repos'] = more_repos = repos.count() > MAX_REPOS
    var_dict['repos'] = repos = repos[:MAX_REPOS]
    oers = OER.objects.filter(creator=user).order_by('-created')
    var_dict['more_oers'] = more_oers = oers.count() > MAX_OERS
    var_dict['oers'] = oers = oers[:MAX_OERS]
    lps = LearningPath.objects.filter(creator=user, project__isnull=False).order_by('-created')
    var_dict['more_lps'] = more_lps = lps.count() > MAX_LP
    var_dict['lps'] = lps = lps[:MAX_LP]
    var_dict['my_lps'] = my_lps = LearningPath.objects.filter(creator=user, project__isnull=True).order_by('-created')
    # return render_to_response('user_dashboard.html', {'user': user, 'profile': user.get_profile(), 'memberships': memberships, 'applications': applications, 'repos': repos, 'more_repos': more_repos, 'oers': oers, 'more_oers': more_oers, 'lps': lps, 'more_lps': more_lps, 'my_lps': my_lps,}, context_instance=RequestContext(request))
    return render_to_response('user_dashboard.html', var_dict, context_instance=RequestContext(request))
 
def profile_edit(request, username):
    user = get_object_or_404(User, username=username)
    if not user.can_edit(request):
        return HttpResponseRedirect('/profile/%s/' % username)
    profiles = UserProfile.objects.filter(user=user)
    profile = profiles and profiles[0] or None
    if request.POST:
        form = UserProfileExtendedForm(request.POST, request.FILES, instance=profile)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                form.save()
                user.first_name = request.POST.get('first_name', '')
                user.last_name = request.POST.get('last_name', '')
                user.save()
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/profile/%s/' % username)
                else: 
                    return render_to_response('profile_edit.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))
            else:
                return render_to_response('profile_edit.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            return HttpResponseRedirect('/profile/%s/' % username)
    elif profile:
        form = UserProfileExtendedForm(instance=profile, initial={'first_name': user.first_name, 'last_name': user.last_name,})
    else:
        form = UserProfileExtendedForm(initial={'user': user.id, 'first_name': user.first_name, 'last_name': user.last_name,})
    return render_to_response('profile_edit.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))

def my_preferences(request):
    user = request.user
    return render_to_response('user_preferences.html', {'user': user, 'profile': user.get_profile(),}, context_instance=RequestContext(request))
 
def edit_preferences(request):
    user = request.user
    profile = UserProfile.objects.get(user=user)
    if request.POST:
        form = UserPreferencesForm(request.POST, instance=profile)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                form.save()
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/my_preferences/')
                else: 
                    return render_to_response('edit_preferences.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))
            else:
                return render_to_response('edit_preferences.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            return HttpResponseRedirect('/my_dashboard/')
    else:
        form = UserPreferencesForm(instance=profile)
    return render_to_response('edit_preferences.html', {'form': form, 'user': user,}, context_instance=RequestContext(request))

def cops_tree(request):
    """
    groups = Group.objects.all()
    groups = [group for group in groups if group_has_project(group)]
    """
    nodes = Group.objects.filter(level=0)
    if nodes:
        root = nodes[0]
        nodes = root.get_descendants()
        filtered_nodes = []
        for node in nodes:
            project = node.project
            if project and project.proj_type.public and project.state==PROJECT_OPEN:
                filtered_nodes.append(node)
    return render_to_response('cops_tree.html', {'nodes': filtered_nodes,}, context_instance=RequestContext(request))

def create_project_folders(request):  
    projects = Project.objects.all()
    for project in projects:
        project.create_folder()
    return HttpResponseRedirect('/cops/')

def projects(request):
    nodes = Group.objects.filter(level=0)
    if nodes:
        root = nodes[0]
        nodes = root.get_descendants()
        filtered_nodes = []
        for node in nodes:
            project = node.project
            if project and project.proj_type.public and project.state==PROJECT_OPEN:
                filtered_nodes.append(node)
    return render_to_response('projects.html', {'nodes': filtered_nodes,}, context_instance=RequestContext(request))

def project_add_document(request):
    project_id = request.POST.get('id', '')
    project = get_object_or_404(Project, id=project_id)
    folder = project.get_folder()
    form = DocumentUploadForm(request.POST, request.FILES)
    if form.is_valid():
        uploaded_file = request.FILES['docfile']
        version = handle_uploaded_file(uploaded_file)
        folderdocument = FolderDocument(folder=folder, document=version.document, user=request.user)
        folderdocument.save()
        return HttpResponseRedirect('/project/%s/folder/' % project.slug)
    else:
        # return render_to_response('project_folder.html', {'form': form,}, context_instance=RequestContext(request))
        return HttpResponseRedirect('/project/%s/folder/' % project.slug)

def folderdocument_edit(request, folderdocument_id):
    folderdocument = get_object_or_404(FolderDocument, id=folderdocument_id)
    folder = folderdocument.folder
    if request.POST:
        form = FolderDocumentForm(request.POST, instance=folderdocument)
        if form.is_valid():
            if request.POST.get('save', ''): 
                form.save()
            projects = Project.objects.filter(folders = folder)
            if projects:
                return HttpResponseRedirect('/project/%s/folder/' % projects[0].slug)
    else:
        form = FolderDocumentForm(instance=folderdocument)
        action = '/folderdocument/%d/edit/' % folderdocument.id
        return render_to_response('folderdocument_edit.html', {'folderdocument': folderdocument, 'folder': folder, 'form': form, 'action': action}, context_instance=RequestContext(request))
 
def folderdocument_delete(request, folderdocument_id):
    folderdocument = get_object_or_404(FolderDocument, id=folderdocument_id)
    folder = folderdocument.folder
    document = folderdocument.document
    project = Project.objects.get(folders=folder)
    folder.remove_document(document, request)
    return HttpResponseRedirect('/project/%s/folder/' % project.slug)

def project_folder(request, project_slug):
    user = request.user
    # assert user.is_authenticated()
    project = get_object_or_404(Project, slug=project_slug)
    if not user.is_authenticated():
        return project_detail(request, project.id, project=project)
    proj_type = project.proj_type
    var_dict = {'project': project, 'proj_type': proj_type,}
    var_dict['can_share'] = user.is_superuser or project.is_member(user)
    var_dict['is_admin'] = project.is_admin(user)
    var_dict['folder'] = project.get_folder()
    var_dict['folderdocuments'] = project.get_folderdocuments(user)
    var_dict['form'] = DocumentUploadForm()
    return render_to_response('project_folder.html', var_dict, context_instance=RequestContext(request))

def project_detail(request, project_id, project=None):
    MAX_OERS = 10
    MAX_EVALUATIONS = 10
    MAX_MESSAGES = 5
    if not project:
        project = get_object_or_404(Project, pk=project_id)
    proj_type = project.proj_type
    type_name = proj_type.name
    is_open = project.state==PROJECT_OPEN
    is_submitted = project.state==PROJECT_SUBMITTED
    var_dict = {'project': project, 'proj_type': proj_type,}
    var_dict['proj_types'] = ProjType.objects.filter(public=True).exclude(name='com')
    user = request.user
    if user.is_authenticated():
        var_dict['membership'] = membership = project.get_membership(user)
        var_dict['is_member'] = is_member = project.is_member(user)
        var_dict['is_admin'] = is_admin = project.is_admin(user)
        var_dict['parent'] = parent = project.get_parent()
        var_dict['is_parent_admin'] = is_parent_admin = parent and parent.is_admin(user)
        var_dict['can_delegate'] = user.is_superuser or user==project.get_senior_admin()
        var_dict['can_accept_member'] = project.can_accept_member(user)
        var_dict['can_add_repo'] = project.can_add_repo(user) and is_open
        var_dict['can_add_oer'] = can_add_oer = project.can_add_oer(user) and is_open
        if can_add_oer:
            var_dict['cut_oers'] = [get_object_or_404(OER, pk=oer_id) for oer_id in get_clipboard(request, key='cut_oers') or []]
        var_dict['can_add_lp'] = can_add_lp = project.can_add_lp(user) and is_open
        if can_add_lp:
            var_dict['cut_lps'] = [get_object_or_404(LearningPath, pk=lp_id) for lp_id in get_clipboard(request, key='cut_lps') or []]
        var_dict['can_edit'] = project.can_edit(user)
        var_dict['can_open'] = project.can_open(user)
        var_dict['can_propose'] = project.can_propose(user)
        var_dict['can_close'] = project.can_close(user)
        var_dict['can_chat'] = project.can_chat(user) and is_open
        var_dict['xmpp_server'] = settings.XMPP_SERVER
        var_dict['room_label'] = project.slug
        var_dict['project_no_chat'] = proj_type.name in settings.COMMONS_PROJECTS_NO_CHAT
        var_dict['project_no_apply'] = project_no_apply = proj_type.name in settings.COMMONS_PROJECTS_NO_APPLY
        var_dict['project_no_children'] = project.group.level >= settings.COMMONS_PROJECTS_MAX_DEPTH
        can_apply = not membership and not project_no_apply and (is_open or is_submitted)
        if parent and not proj_type.public:
            can_apply = can_apply and parent.is_member(user)
        var_dict['can_apply'] = can_apply
        if type_name=='com':
            var_dict['roll'] = roll = project.get_roll_of_mentors()
            var_dict['mentoring_projects'] = is_admin and project.get_mentoring_projects()
            var_dict['mentoring'] = project.get_mentoring(user=user)
            var_dict['can_add_roll'] = is_open and is_admin and not roll
            var_dict['can_request_mentor'] = is_open and is_member and roll and roll.state==PROJECT_OPEN and not project.get_mentoring(user=user)
        elif type_name=='ment':
            var_dict['mentor'] = mentor = project.get_mentor()
            var_dict['mentee'] = mentee = project.get_mentee()
            mentor_user = mentor and mentor.user
            mentee_user = mentee and mentee.user
            if is_open and is_member:
                if user==mentor_user:
                    inbox = Message.objects.filter(recipient=user, sender=mentee_user, recipient_deleted_at__isnull=True,).order_by('-sent_at')
                    outbox = Message.objects.filter(recipient=mentee_user, sender=user, sender_deleted_at__isnull=True,).order_by('-sent_at')
                elif user==mentee_user:
                    inbox = Message.objects.filter(recipient=user, sender=mentor_user, recipient_deleted_at__isnull=True,).order_by('-sent_at')
                    outbox = Message.objects.filter(recipient=mentor_user, sender=user, sender_deleted_at__isnull=True,).order_by('-sent_at')
                var_dict['n_inbox'] = inbox.count()
                var_dict['n_outbox'] = outbox.count()
                var_dict['inbox'] = inbox[:MAX_MESSAGES]
                var_dict['outbox'] = outbox[:MAX_MESSAGES]
            var_dict['parent_roll'] = parent_roll = parent.get_roll_of_mentors()
            if is_parent_admin:
                var_dict['candidate_mentors'] = candidate_mentors = project.get_candidate_mentors()
                if candidate_mentors:
                    if mentor:
                        form = MatchMentorForm(initial={'project': project_id, 'mentor': mentor.user.username})
                    else:
                        form = MatchMentorForm(initial={'project': project_id })
                    form.fields['mentor'].queryset = User.objects.filter(username__in=[mentor.username for mentor in candidate_mentors])
                    var_dict['match_mentor_form'] = form
    var_dict['repos'] = []
    if project.is_admin(user) or user.is_superuser:
        oers = OER.objects.filter(project_id=project_id).order_by('-created')       
    elif user.is_authenticated():
        oers = OER.objects.filter(project_id=project_id).filter(Q(state=PUBLISHED) | Q(creator=user)).order_by('-created')
    else:
        oers = OER.objects.filter(project_id=project_id, state=PUBLISHED).order_by('-created')
    var_dict['n_oers'] = oers.count()
    var_dict['oers'] = oers[:MAX_OERS]
    oer_evaluations = project.get_oer_evaluations()
    var_dict['n_oer_evaluations'] = oer_evaluations.count()
    var_dict['oer_evaluations'] = oer_evaluations[:MAX_EVALUATIONS]
    # lps = LearningPath.objects.filter(group=project.group).order_by('-created')
    lps = LearningPath.objects.filter(project=project).order_by('-created')
    lps = [lp for lp in lps if lp.state==PUBLISHED or project.is_admin(user) or user.is_superuser]
    var_dict['lps'] = lps
    if proj_type.name == 'ment':
        return render_to_response('mentoring_detail.html', var_dict, context_instance=RequestContext(request))
    else:
        return render_to_response('project_detail.html', var_dict, context_instance=RequestContext(request))

def project_detail_by_slug(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    return project_detail(request, project.id, project)

# def project_edit(request, project_id=None, parent_id=None):
# def project_edit(request, project_id=None, parent_id=None, proj_type_id=None):
def project_edit(request, project_id=None, parent_id=None, proj_type_id=None):
    """
    project_id: edit existent project
    parent_id: create sub-project
    """
    user = request.user
    project = project_id and get_object_or_404(Project, pk=project_id)
    parent = parent_id and get_object_or_404(Project, pk=parent_id)
    proj_type = proj_type_id and get_object_or_404(ProjType, pk=proj_type_id)
    if project_id:
        if project.can_edit(user):
            if not project.name:
                project.name = project.group.name
            form = ProjectForm(instance=project)
            return render_to_response('project_edit.html', {'form': form, 'project': project,}, context_instance=RequestContext(request))
        else:
            return HttpResponseRedirect('/project/%s/' % project.slug)
    elif parent_id:
        if parent.can_edit(user) or (proj_type and proj_type.name=='ment'):
            # form = ProjectForm(initial={'creator': user.id, 'editor': user.id})
            form = ProjectForm(initial={'proj_type': proj_type_id, 'creator': user.id, 'editor': user.id})
            initial = {'proj_type': proj_type_id, 'creator': user.id, 'editor': user.id}
            if proj_type.name == 'roll':
                initial['name'] = string_concat(capfirst(_('roll of mentors')), ' ', _('for'), ' ', parent.name)
            elif proj_type.name == 'ment':
                initial['name'] = string_concat(capfirst(_('mentoring request')), ' ', _('of'), ' ', user.get_display_name())
            form = ProjectForm(initial=initial)
            return render_to_response('project_edit.html', {'form': form, 'parent': parent, 'proj_type': proj_type, }, context_instance=RequestContext(request))
        else:
            return HttpResponseRedirect('/project/%s/' % parent.slug)
    elif request.POST:
        project_id = request.POST.get('id', '')
        parent_id = request.POST.get('parent', '')
        if project_id:
            project = get_object_or_404(Project, id=project_id)
            form = ProjectForm(request.POST, instance=project)
        elif parent_id:
            parent = get_object_or_404(Project, pk=parent_id)
            form = ProjectForm(request.POST)
            name = request.POST.get('name', '')
        else:
            raise
        if request.POST.get('cancel', ''):
            if project_id:
                return HttpResponseRedirect('/project/%s/' % project.slug)
            elif parent_id:
                return HttpResponseRedirect('/project/%s/' % parent.slug)
            else:
                return HttpResponseRedirect('/cops/')
        else: # Save or Save & continue
            if form.is_valid():
                project = form.save(commit=False)
                if parent:
                    group_name = slugify(name[:50])
                    group = Group(name=group_name)
                    group.parent = parent.group
                    group.save()
                    project.group = group
                    project.creator = user
                    project.editor = user
                    project.save()
                    proj_type_name = project.get_type_name()
                    role_member = Role.objects.get(name='member')
                    add_local_role(project, group, role_member)
                    membership = project.add_member(user)
                    project.accept_application(request, membership)
                    if not proj_type_name == 'ment':
                        role_admin = Role.objects.get(name='admin')
                        add_local_role(project, user, role_admin)
                    if proj_type_name == 'oer':
                        grant_permission(project, role_member, 'add-repo')
                        grant_permission(project, role_member, 'add-oer')
                    elif proj_type_name == 'lp':
                        grant_permission(project, role_member, 'add-oer')
                        grant_permission(project, role_member, 'add-lp')
                    elif proj_type_name == 'ment':
                        grant_permission(project, role_member, 'add-oer')
                        grant_permission(project, role_member, 'add-lp')
                else:
                    project.editor = user
                    project.save()
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/project/%s/' % project.slug)
                else: # continue
                    form = ProjectForm(request.POST, instance=project) # togliere ?
                    return render_to_response('project_edit.html', {'form': form, 'project': project,}, context_instance=RequestContext(request))
            else:
                print form.errors
                # return render_to_response('project_edit.html', {'form': form, 'project': project, 'parent_id': parent_id,}, context_instance=RequestContext(request))
                return render_to_response('project_edit.html', {'form': form, 'project': project, 'parent': parent,}, context_instance=RequestContext(request))
    else:
        raise

def project_edit_by_slug(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    return project_edit(request, project_id=project.id)

"""
def project_new_by_slug(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    return project_edit(request, parent_id=project.id)
"""
def project_new_by_slug(request, project_slug, type_name):
    project = get_object_or_404(Project, slug=project_slug)
    proj_type = get_object_or_404(ProjType, name=type_name)
    return project_edit(request, parent_id=project.id, proj_type_id=proj_type.id)

def project_propose(request, project_id):
    project = Project.objects.get(pk=project_id)
    project.propose(request)
    return HttpResponseRedirect('/project/%s/' % project.slug)
def project_open(request, project_id):
    project = Project.objects.get(pk=project_id)
    project.open(request)
    return HttpResponseRedirect('/project/%s/' % project.slug)
def project_close(request, project_id):
    project = Project.objects.get(pk=project_id)
    project.close(request)
    return HttpResponseRedirect('/project/%s/' % project.slug)

def apply_for_membership(request, username, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    user = get_object_or_404(User, username=username)
    if user.id == request.user.id:
        membership = project.add_member(user)
        if membership:
            role_admin = Role.objects.get(name='admin')
            receivers = role_admin.get_users(content=project)
            extra_content = {'sender': 'postmaster@commonspaces.eu', 'subject': _('membership application'), 'body': string_concat(_('has applied for membership in'), _(' ')), 'user_name': user.get_display_name(), 'project_name': project.get_name(),}
            notification.send(receivers, 'membership_application', extra_content)
            return my_profile(request)
    return HttpResponseRedirect('/project/%s/' % project.slug)    

def accept_application(request, username, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    membership = project.get_membership(request.user)
    users = User.objects.filter(username=username)
    if users and users.count()==1:
        applicant = users[0]
        if project.can_accept_member(request.user):
            application = get_object_or_404(ProjectMember, user=applicant, project=project, state=0)
            project.accept_application(request, application)
    # return render_to_response('project_detail.html', {'project': project, 'proj_type': project.proj_type, 'membership': membership,}, context_instance=RequestContext(request))
    return HttpResponseRedirect('/project/%s/' % project.slug)    

def project_membership(request, project_id, user_id):
    membership = ProjectMember.objects.get(project_id=project_id, user_id=user_id)
    return render_to_response('project_membership.html', {'membership': membership,}, context_instance=RequestContext(request))

def project_toggle_supervisor_role(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    if request.POST:
        username = request.POST.get('user', '')
        user = get_object_or_404(User, username=username)
        role_admin = Role.objects.get(name='admin')
        if project.is_admin(user):
            remove_local_role(project, user, role_admin)
        else:
            add_local_role(project, user, role_admin)
        project.editor = request.user
        project.save
    return HttpResponseRedirect('/project/%s/' % project.slug)    

def project_set_mentor(request):
    if request.POST:
        project_id = request.POST.get('project')
        project = get_object_or_404(Project, id=project_id)
        mentor_id = request.POST.get('mentor', None)
        print 'mentor_id : ', mentor_id
        if mentor_id:
            mentor_user = get_object_or_404(User, id=mentor_id)
            mentor_member = project.add_member(mentor_user)
            project.accept_application(request, mentor_member)
            role_admin = Role.objects.get(name='admin')
            add_local_role(project, mentor_user, role_admin)
    return HttpResponseRedirect('/project/%s/' % project.slug)    
        
def project_paste_oer(request, project_id, oer_id):
    oer_id = int(oer_id)
    cut_oers = get_clipboard(request, key='cut_oers') or []
    project = get_object_or_404(Project, pk=project_id)
    user = request.user
    if user.is_authenticated() and project.can_add_oer(user) and oer_id in cut_oers:
        oer = get_object_or_404(OER, pk=oer_id)
        oer.project = project
        oer.save()
    cut_oers.remove(oer_id)
    set_clipboard(request, key='cut_oers', value=cut_oers or None)
    return HttpResponseRedirect('/project/%s/' % project.slug)    
        
def project_paste_lp(request, project_id, lp_id):
    lp_id = int(lp_id)
    cut_lps = get_clipboard(request, key='cut_lps') or []
    project = get_object_or_404(Project, id=project_id)
    user = request.user
    if user.is_authenticated() and project.can_add_lp(user) and lp_id in cut_lps:
        lp = get_object_or_404(LearningPath, pk=lp_id)
        lp.project = project
        lp.save()
    cut_lps.remove(lp_id)
    set_clipboard(request, key='cut_lps', value=cut_lps or None)
    return HttpResponseRedirect('/project/%s/' % project.slug)    

def project_create_forum(request, project_id):
    user = request.user
    project = get_object_or_404(Project, id=project_id)
    name = project.get_name()
    type_name = project.proj_type.name
    if type_name == 'com' and request.GET.get('thematic', ''):
        position = 1
        name = string_concat(capfirst(_('thematic forum')), '-', str(Forum.objects.all().count()+1), ' (', _('please change this name'), ')')
    else:
        # assert not project.forum
        if project.forum:
            return project_detail(request, project_id, project=project)    
        position = 2
    category = get_object_or_404(Category, position=position)
    forum = Forum(name=name, category_id=category.id)
    forum.save()
    action.send(user, verb='Create', action_object=forum, target=project)
    if type_name == 'com' and request.GET.get('thematic', ''):
        forum.moderators.add(user)
        return HttpResponseRedirect('/forum/forum/%d/' % forum.id)    
    else:
        project.forum = forum
        project.editor = user
        project.save()
        return project_detail(request, project_id, project=project)    

def forum_edit(request, forum_id=None):
    user = request.user
    if forum_id:
        forum = get_object_or_404(Forum, id=forum_id)
        forum_permission_handler = ForumPermissionHandler()
        if not forum_permission_handler.may_create_topic(user, forum):
            return HttpResponseRedirect(forum.get_absolute_url())
    if request.POST:
        forum_id = request.POST.get('id')
        forum = Forum.objects.get(id=forum_id)
        if request.POST.get('save', ''):
            form = ForumForm(request.POST, instance=forum)
            if form.is_valid():
                forum = form.save()
                return HttpResponseRedirect(forum.get_absolute_url())
            else:
                print form.errors
                return render_to_response('forum_edit.html', {'form': form,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            return HttpResponseRedirect(forum.get_absolute_url())
    else:
        form = ForumForm(instance=forum)
        return render_to_response('forum_edit.html', {'forum': forum, 'form': form,}, context_instance=RequestContext(request))

def forum_edit_by_id(request, forum_id):
    forum = get_object_or_404(Forum, id=forum_id)
    return forum_edit(request, forum_id=forum.id)

def project_create_room(request, project_id):
    project = get_object_or_404(Project,id=project_id)
    # assert project.need_create_room()
    if not project.need_create_room():
        return project_detail(request, project_id, project=project)    
    name = project.slug
    title = project.get_name()
    room = Room(name=name, title=title)
    room.save()
    project.chat_room = room
    project.editor = request.user
    project.save()
    action.send(request.user, verb='Create', action_object=room, target=project)
    return project_detail(request, project_id, project=project)    

def project_sync_xmppaccounts(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    # assert project.chat_type in [1]
    if not project.chat_type in [1]:
        return project_detail(request, project_id, project=project)    
    room = project.chat_room
    # assert room
    if not room:
        return project_detail(request, project_id, project=project)    
    users = project.members(user_only=True)
    for user in users:
        try:
            xmpp_account = XMPPAccount.objects.get(user=user)
        except:
            xmpp_account = create_xmpp_account(request, user)
        if xmpp_account:
            RoomMember.objects.get_or_create(xmpp_account=xmpp_account, room=room)
        else:
            pass
    return project_detail(request, project_id, project=project)

def project_compose_message(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    members = project.members(user_only=True)
    # recipient_filter = [member.username for member in members]
    recipient_filter = [member.username for member in members if not member==request.user]
    return message_compose(request, form_class=ProjectMessageComposeForm, recipient_filter=recipient_filter)

def project_mailing_list(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    # assert project.is_admin(request.user), "forbidden"
    if not project.is_admin(request.user):
        return HttpResponseRedirect('/project/%s/' % project.slug)    
    state = int(request.GET.get('state', 1))
    memberships = project.get_memberships(state=state)
    members = [membership.user for membership in memberships]
    members = sorted(members, key = lambda x: x.last_name and x.last_name or 'z'+x.username)
    emails = ['%s <%s>' % (member.get_display_name(), member.email) for member in members]
    return HttpResponse(', '.join(emails), content_type="text/plain")

def repo_list(request):
    user = request.user
    can_add = user.is_authenticated() and user.can_add_repo(request)
    repo_list = []
    for repo in Repo.objects.filter(state=PUBLISHED).order_by('name'):
        oers = OER.objects.filter(source=repo, state=PUBLISHED)
        n = len(oers)
        repo_list.append([repo, n])
    return render_to_response('repo_list.html', {'can_add': can_add, 'repo_list': repo_list,}, context_instance=RequestContext(request))

def mentoring(request):
    rolls = Project.objects.filter(proj_type__name='roll', state=PROJECT_OPEN)
    return render_to_response('mentoring_support.html', {'rolls': rolls,}, context_instance=RequestContext(request))

def repos_by_user(request, username):
    user = get_object_or_404(User, username=username)
    can_add = user.is_authenticated() and user.can_add_repo(request) and user==request.user
    if user == request.user:
        repos = Repo.objects.filter(creator=user).order_by('-created')
    else:
        repos = Repo.objects.filter(creator=user, state=PUBLISHED).order_by('-created')
    repo_list = []
    for repo in repos:
        oers = OER.objects.filter(source=repo, state=PUBLISHED)
        n = len(oers)
        repo_list.append([repo, n])
    return render_to_response('repo_list.html', {'can_add': can_add, 'repo_list': repo_list, 'user': user, 'submitter': user}, context_instance=RequestContext(request))

def repo_detail(request, repo_id, repo=None):
    if not repo:
        repo = get_object_or_404(Repo, pk=repo_id)
    var_dict = { 'repo': repo, }
    var_dict['repo_type'] = repo.repo_type
    var_dict['can_edit'] = repo.can_edit(request)
    var_dict['can_submit'] = repo.can_submit(request)
    var_dict['can_withdraw'] = repo.can_withdraw(request)
    var_dict['can_reject'] = repo.can_reject(request)
    var_dict['can_publish'] = repo.can_publish(request)
    var_dict['can_un_publish'] = repo.can_un_publish(request)
    return render_to_response('repo_detail.html', var_dict, context_instance=RequestContext(request))

def repo_detail_by_slug(request, repo_slug):
    repo = get_object_or_404(Repo, slug=repo_slug)
    return repo_detail(request, repo.id, repo)

def repo_contributors(request):
    users = User.objects.annotate(num_repos=Count('repo_creator')).exclude(num_repos=0).order_by('-num_repos')
    user_list = []
    for user in users:
        n = Repo.objects.filter(creator=user, state=PUBLISHED).count()
        if n:
            user.num_repos = n
            user_list.append(user)
    return render_to_response('repo_contributors.html', { 'user_list': user_list, }, context_instance=RequestContext(request))

def oer_contributors(request):
    users = User.objects.annotate(num_oers=Count('oer_creator')).exclude(num_oers=0).order_by('-num_oers')
    user_list = []
    for user in users:
        n = OER.objects.filter(creator=user, state=PUBLISHED).count()
        if n:
            user.num_oers = n
            user_list.append(user)
    return render_to_response('oer_contributors.html', { 'user_list': user_list, }, context_instance=RequestContext(request))

def resource_contributors(request):
    users = User.objects.annotate(num_lps=Count('path_creator')).exclude(num_lps=0).order_by('-num_lps')
    var_dict = {}
    lp_contributors = []
    for user in users:
        # n = LearningPath.objects.filter(creator=user, state=PUBLISHED).count()
        n = LearningPath.objects.filter(creator=user).count()
        if n:
            user.num_lps = n
            lp_contributors.append(user)
    var_dict['lp_contributors'] = lp_contributors
    users = User.objects.annotate(num_oers=Count('oer_creator')).exclude(num_oers=0).order_by('-num_oers')
    oer_evaluation_contributors = []
    for user in users:
        n = OerEvaluation.objects.filter(user=user).count()
        if n:
            user.num_oer_evaluations = n
            oer_evaluation_contributors.append(user)
    var_dict['oer_evaluation_contributors'] = oer_evaluation_contributors
    resource_contributors = []
    for user in users:
        n = OER.objects.filter(creator=user, state=PUBLISHED).count()
        if n:
            user.num_oers = n
            resource_contributors.append(user)
    var_dict['resource_contributors'] = resource_contributors
    users = User.objects.annotate(num_repos=Count('repo_creator')).exclude(num_repos=0).order_by('-num_repos')
    source_contributors = []
    for user in users:
        n = Repo.objects.filter(creator=user, state=PUBLISHED).count()
        if n:
            user.num_repos = n
            source_contributors.append(user)
    var_dict['source_contributors'] = source_contributors
    # return render_to_response('contributors.html', { 'lp_contributors': lp_contributors, 'resource_contributors': resource_contributors, 'source_contributors': source_contributors, }, context_instance=RequestContext(request))
    return render_to_response('contributors.html', var_dict, context_instance=RequestContext(request))

def oers_by_user(request, username):
    user = get_object_or_404(User, username=username)
    oers = OER.objects.filter(creator=user, state=PUBLISHED)
    return render_to_response('oer_list.html', {'oers': oers, 'user': user, 'submitter': user}, context_instance=RequestContext(request))

def resources_by(request, username):
    user = get_object_or_404(User, username=username)
    # lps = LearningPath.objects.filter(creator=user, state=PUBLISHED)
    lps = LearningPath.objects.filter(creator=user)
    oer_evaluations = OerEvaluation.objects.filter(user=user)
    oers = OER.objects.filter(creator=user, state=PUBLISHED)
    repos = Repo.objects.filter(creator=user, state=PUBLISHED)
    return render_to_response('resources_by.html', {'lps': lps, 'oer_evaluations': oer_evaluations,'oers': oers, 'repos': repos, 'user': user, 'submitter': user}, context_instance=RequestContext(request))

def project_results(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    var_dict = { 'project': project }
    user = request.user
    if project.is_admin(user) or user.is_superuser:
        var_dict['lps'] = LearningPath.objects.filter(project=project).order_by('-created')
        var_dict['oers'] = OER.objects.filter(project=project).order_by('-created')
    else:
        var_dict['lps'] = LearningPath.objects.filter(project=project, state=PUBLISHED).order_by('-created')
        var_dict['oers'] = OER.objects.filter(project=project, state=PUBLISHED).order_by('-created')
    oer_evaluations = project.get_oer_evaluations()
    var_dict['oer_evaluations'] = oer_evaluations
    return render_to_response('project_results.html', var_dict, context_instance=RequestContext(request))

def repo_oers(request, repo_id, repo=None):
    if not repo:
        repo = get_object_or_404(Repo, pk=repo_id)
    oers = OER.objects.filter(source=repo, state=PUBLISHED)
    return render_to_response('repo_oers.html', {'repo': repo, 'oers': oers,}, context_instance=RequestContext(request))

def repo_oers_by_slug(request, repo_slug):
    repo = get_object_or_404(Repo, slug=repo_slug)
    return repo_oers(request, repo.id, repo)

def repo_new(request):
    user = request.user
    form = RepoForm(initial={'creator': user.id, 'editor': user.id})
    return render_to_response('repo_edit.html', {'form': form, 'repo': None,}, context_instance=RequestContext(request))

def repo_save(request, repo=None):
    if request.POST:
        repo_id = request.POST.get('id', '')
        if repo_id:
            repo = get_object_or_404(Repo, id=repo_id)
        form = RepoForm(request.POST, instance=repo)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                # repo = form.save(commit=False)
                repo = form.save()
                user = request.user
                """
                try:
                    repo.creator
                except:
                    repo.creator = user
                """
                if repo.creator_id == 1:
                    repo.creator = user
                repo.editor = user
                repo.save()
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/repo/%s/' % repo.slug)
                else:
                    return HttpResponseRedirect('/repo/%s/edit/' % repo.slug)
            else:
                print form.errors
                return render_to_response('repo_edit.html', {'repo': repo, 'form': form,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            return HttpResponseRedirect('/repo/%s/' % request.POST.get('slug', ''))
    else:
        return repo_new(request)

def repo_edit(request, repo_id):
    repo = get_object_or_404(Repo, id=repo_id)
    if not repo.can_edit(request):
        return HttpResponseRedirect('/repo/%s/' % repo.slug)
    user = request.user
    if request.POST:
        """
        form = RepoForm(request.POST, instance=repo)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                form.save()
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/repo/%s/' % repo.slug)
                else: 
                    return render_to_response('repo_edit.html', {'form': form,}, context_instance=RequestContext(request))
            else:
                return render_to_response('repo_edit.html', {'form': form,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            return HttpResponseRedirect('/repo/%s/' % repo.slug)
        """
        return repo_save(request, repo=repo)
    elif repo:
        form = RepoForm(instance=repo)
    else:
        form = RepoForm(initial={'creator': user.id, 'editor': user.id})
    return render_to_response('repo_edit.html', {'form': form, 'repo': repo,}, context_instance=RequestContext(request))

def repo_edit_by_slug(request, repo_slug):
    repo = get_object_or_404(Repo, slug=repo_slug)
    return repo_edit(request, repo.id)

def repo_submit(request, repo_id):
    repo = Repo.objects.get(pk=repo_id)
    repo.submit(request)
    return HttpResponseRedirect('/repo/%s/' % repo.slug)
def repo_withdraw(request, repo_id):
    repo = Repo.objects.get(pk=repo_id)
    repo.withdraw(request)
    return HttpResponseRedirect('/repo/%s/' % repo.slug)
def repo_reject(request, repo_id):
    repo = Repo.objects.get(pk=repo_id)
    repo.reject(request)
    return HttpResponseRedirect('/repo/%s/' % repo.slug)
def repo_publish(request, repo_id):
    repo = Repo.objects.get(pk=repo_id)
    repo.publish(request)
    return HttpResponseRedirect('/repo/%s/' % repo.slug)
def repo_un_publish(request, repo_id):
    repo = Repo.objects.get(pk=repo_id)
    repo.un_publish(request)
    return HttpResponseRedirect('/repo/%s/' % repo.slug)

def browse_repos(request):
    form = RepoSearchForm
    field_names = ['features', 'languages', 'subjects', 'repo_type',]
    browse_list = []
    base_fields = form.base_fields
    for field_name in field_names:
        field = base_fields[field_name]
        field_label = pgettext(RequestContext(request), field.label)
        queryset = field.queryset
        entries = []
        for entry in queryset:    
            try:
                code = entry.code
                label = entry.name
            except:
                try:
                    label = entry.name
                    code = entry.id
                except:
                    label = entry.description
                    code = entry.name
            try:
                prefix = '-' * entry.level
            except:
                prefix = ''
            n = Repo.objects.filter(**{field_name: entry}).count()
            print entry, n
            entries.append([code, label, prefix, n])
        browse_list.append([field_name, field_label, entries])
    return render_to_response('browse_repos.html', {'field_names': field_names, 'browse_list': browse_list,}, context_instance=RequestContext(request))
 
def browse(request):
    form = LpSearchForm
    field_names = ['path_type', 'levels', 'subjects', 'tags', ]
    lps_browse_list = []
    base_fields = form.base_fields
    for field_name in field_names:
        field = base_fields[field_name]
        field_label = pgettext(RequestContext(request), field.label)
        entries = []
        if hasattr(field, 'queryset'):
            queryset = field.queryset
            entries = []
            for entry in queryset:    
                try:
                    code = entry.code
                    label = entry.name
                except:
                    try:
                        label = entry.name
                        code = entry.id
                    except:
                        label = entry.description
                        code = entry.name
                try:
                    prefix = '-' * entry.level
                except:
                    prefix = ''
                n = LearningPath.objects.filter(Q(**{field_name: entry}), state=PUBLISHED).count()
                # print entry, n
                if n:
                    entries.append([code, label, prefix, n])
        else:
            choices = field.choices
            for entry in choices:
                code = entry[0]
                label= pgettext(RequestContext(request), entry[1])
                n = LearningPath.objects.filter(Q(**{field_name: code}), state=PUBLISHED).count()
                if n:
                    entries.append([code, label, '', n])
        if entries:
            lps_browse_list.append([field_name, field_label, entries])
    form = OerSearchForm
    field_names = ['oer_type', 'source_type', 'levels', 'material', 'languages', 'subjects', 'tags', 'media', 'accessibility', 'license', ]
    oers_browse_list = []
    base_fields = form.base_fields
    for field_name in field_names:
        field = base_fields[field_name]
        field_label = pgettext(RequestContext(request), field.label)
        entries = []
        if hasattr(field, 'queryset'):
            queryset = field.queryset
            entries = []
            for entry in queryset:    
                try:
                    code = entry.code
                    label = entry.name
                except:
                    try:
                        label = entry.name
                        code = entry.id
                    except:
                        label = entry.description
                        code = entry.name
                try:
                    prefix = '-' * entry.level
                except:
                    prefix = ''
                n = OER.objects.filter(Q(**{field_name: entry}), state=PUBLISHED).count()
                # print entry, n
                if n:
                    entries.append([code, label, prefix, n])
        else:
            choices = field.choices
            for entry in choices:
                code = entry[0]
                label = pgettext(RequestContext(request), entry[1])
                n = OER.objects.filter(Q(**{field_name: code}), state=PUBLISHED).count()
                if n:
                    entries.append([code, label, '', n])
        if entries:
            oers_browse_list.append([field_name, field_label, entries])
    form = RepoSearchForm
    field_names = ['features', 'languages', 'subjects', 'repo_type',]
    repos_browse_list = []
    base_fields = form.base_fields
    for field_name in field_names:
        field = base_fields[field_name]
        field_label = pgettext(RequestContext(request), field.label)
        queryset = field.queryset
        entries = []
        for entry in queryset:    
            try:
                code = entry.code
                label = entry.name
            except:
                try:
                    label = entry.description
                    code = entry.id
                except:
                    label = entry.name
                    code = entry.id
            try:
                prefix = '-' * entry.level
            except:
                prefix = ''
            n = Repo.objects.filter(Q(**{field_name: entry}) & Q(state=PUBLISHED)).count()
            # print entry, n
            if n:
                entries.append([code, label, prefix, n])
        repos_browse_list.append([field_name, field_label, entries])
    return render_to_response('browse.html', {'lps_browse_list': lps_browse_list, 'oers_browse_list': oers_browse_list, 'repos_browse_list': repos_browse_list,}, context_instance=RequestContext(request))


def people_search(request):
    query = qq = []
    profiles = []
    if request.method == 'POST': # If the form has been submitted...
        form = PeopleSearchForm(request.POST) # A form bound to the POST data
        if form.is_valid(): # All validation rules pass
            countries = request.POST.getlist('country')
            if countries:
                qq.append(Q(country__in=countries))
            edu_levels = request.POST.getlist('edu_level')
            if edu_levels:
                qq.append(Q(edu_level__in=edu_levels))
            pro_statuses = request.POST.getlist('pro_status')
            if pro_statuses:
                qq.append(Q(pro_status__in=pro_statuses))
            edu_fields = request.POST.getlist('edu_field')
            if edu_fields:
                qq.append(Q(edu_field__in=edu_fields))
            pro_fields = request.POST.getlist('pro_field')
            if pro_fields:
                qq.append(Q(pro_field__in=pro_fields))
            subjects = request.POST.getlist('subjects')
            if subjects:
                qq.append(Q(subjects__in=subjects))
            languages = request.POST.getlist('languages')
            if languages:
                qq.append(Q(languages__in=languages))
            networks = request.POST.getlist('networks')
            if networks:
                qq.append(Q(networks__in=networks))
            if qq:
                query = qq.pop()
                for q in qq:
                    query = query & q
                # profiles = UserProfile.objects.filter(query).distinct().order_by('title')
                profiles = UserProfile.objects.filter(query).distinct()
    else:
        form = PeopleSearchForm()
    return render_to_response('search_people.html', {'profiles': profiles, 'query': query, 'form': form,}, context_instance=RequestContext(request))

def browse_people(request):
    form = PeopleSearchForm
    field_names = ['country', 'edu_level', 'pro_status', 'edu_field', 'pro_field', 'subjects', 'languages', 'networks', ]
    people_browse_list = []
    base_fields = form.base_fields
    for field_name in field_names:
        field = base_fields[field_name]
        field_label = pgettext(RequestContext(request), field.label)
        entries = []
        if hasattr(field, 'queryset'):
            queryset = field.queryset
            entries = []
            for entry in queryset:    
                try:
                    code = entry.code
                    label = entry.name
                except:
                    try:
                        label = entry.name
                        code = entry.id
                    except:
                        label = entry.description
                        code = entry.name
                try:
                    prefix = '-' * entry.level
                except:
                    prefix = ''
                # n = UserProfile.objects.filter(Q(**{field_name: entry}), state=PUBLISHED).count()
                n = UserProfile.objects.filter(Q(**{field_name: entry}),).count()
                # print entry, n
                if n:
                    entries.append([code, label, prefix, n])
        else:
            choices = field.choices
            for entry in choices:
                code = entry[0]
                label = pgettext(RequestContext(request), entry[1])
                n = UserProfile.objects.filter(Q(**{field_name: code}), state=PUBLISHED).count()
                if n:
                    entries.append([code, label, '', n])
        if entries:
            people_browse_list.append([field_name, field_label, entries])
    return render_to_response('browse_people.html', {'people_browse_list': people_browse_list,}, context_instance=RequestContext(request))
   

def oer_list(request, field_name='', field_value=None):
    oers = []
    if field_name=='tags' and field_value:
        tag = get_object_or_404(Tag, slug=field_value)
        q = Q(tags=tag)
        oers = OER.objects.filter(q & Q(state=PUBLISHED))
        return render_to_response('oer_list.html', {'oers': oers, 'field_name': field_name, 'field_value': field_value,}, context_instance=RequestContext(request))

"""
def oers_by_project(request):
    project_list = []
    for project in Project.objects.all().order_by('group__name'):
        oers = OER.objects.filter(project=project, state=PUBLISHED)
        n = len(oers)
        if n:
            project_list.append([project, n])
    return render_to_response('oers_by_project.html', {'project_list': project_list,}, context_instance=RequestContext(request))
"""

def oer_detail(request, oer_id, oer=None):
    if not oer:
        oer_id = int(oer_id)
        oer = get_object_or_404(OER, pk=oer_id)
    elif not oer_id:
        oer_id = oer.id
    var_dict = { 'oer': oer, }
    var_dict['type'] = OER_TYPE_DICT[oer.oer_type]
    if request.user.is_authenticated() and request.GET.get('copy', ''):
        bookmarked_oers = get_clipboard(request, key='bookmarked_oers') or []
        if not oer_id in bookmarked_oers:
            set_clipboard(request, key='bookmarked_oers', value=bookmarked_oers+[oer_id])
    var_dict['in_bookmarked_oers'] = oer_id in (get_clipboard(request, key='bookmarked_oers') or [])
    var_dict['can_edit'] = can_edit = oer.can_edit(request.user)
    var_dict['can_delete'] = can_delete = oer.can_delete(request.user)
    if can_delete and request.GET.get('cut', ''):
        cut_oers = get_clipboard(request, key='cut_oers') or []
        if not oer_id in cut_oers:
            set_clipboard(request, key='cut_oers', value=cut_oers+[oer_id])
    var_dict['in_cut_oers'] = oer_id in (get_clipboard(request, key='cut_oers') or [])
    var_dict['can_submit'] = oer.can_submit(request)
    var_dict['can_withdraw'] = oer.can_withdraw(request)
    var_dict['can_reject'] = oer.can_reject(request)
    var_dict['can_publish'] = oer.can_publish(request)
    var_dict['can_un_publish'] = oer.can_un_publish(request)
    var_dict['can_evaluate'] = oer.can_evaluate(request.user)
    if can_edit:
        var_dict['form'] = DocumentUploadForm()
    var_dict['evaluations'] = oer.get_evaluations()
    if request.GET.get('core', ''):
        return render_to_response('oer_core.html', var_dict, context_instance=RequestContext(request))
    else:
        return render_to_response('oer_detail.html', var_dict, context_instance=RequestContext(request))

def oer_detail_by_slug(request, oer_slug):
    # oer = get_object_or_404(OER, slug=oer_slug)
    oer = OER.objects.get(slug=oer_slug)
    return oer_detail(request, oer.id, oer)

def oer_edit(request, oer_id=None, project_id=None):
    user = request.user
    oer = None
    action = '/oer/edit/'
    if oer_id:
        oer = get_object_or_404(OER, pk=oer_id)
        action = '/oer/%s/edit/' % oer.slug
        # if not user.can_edit(request):
        if not oer.can_edit(user):
            return HttpResponseRedirect('/oer/%s/' % oer.slug)
    if request.POST:
        oer_id = request.POST.get('id', '')
        if oer_id:
            oer = get_object_or_404(OER, id=oer_id)
            action = '/oer/%s/edit/' % oer.slug
            project_id = oer.project_id
        form = OerForm(request.POST, instance=oer)
        metadata_formset = OerMetadataFormSet(request.POST, instance=oer)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                oer = form.save(commit=False)
                oer.editor = user
                oer.save()
                form.save_m2m()
                # oer = get_object_or_404(OER, id=oer.id)
                n = len(metadata_formset)
                for i in range(n):
                    if request.POST.get('metadata_set-%d-DELETE' % i, None):
                        metadatum_id = request.POST.get('metadata_set-%d-id' % i, None)
                        if metadatum_id:
                            metadatum = OerMetadata.objects.get(id=metadatum_id)
                            metadatum.delete()
                    metadata_form = metadata_formset[i]
                    if metadata_form.is_valid():
                        try:
                            metadata_form.save()
                        except:
                            pass
                action = '/oer/%s/edit/' % oer.slug
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/oer/%s/' % oer.slug)
                    """
                else:
                    return render_to_response('oer_edit.html', {'form': form, 'metadata_formset': metadata_formset, 'oer': oer, 'action': action,}, context_instance=RequestContext(request))
                    """
            else:
                print form.errors
                print metadata_formset.errors
            return render_to_response('oer_edit.html', {'form': form, 'metadata_formset': metadata_formset, 'oer': oer, 'action': action,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            if oer:
                return HttpResponseRedirect('/oer/%s/' % oer.slug)
            else:
                project_id = project_id or request.POST.get('project')
                project = get_object_or_404(Project, id=project_id)
                return HttpResponseRedirect('/project/%s/' % project.slug)
    elif oer:
        form = OerForm(instance=oer)
        metadata_formset = OerMetadataFormSet(instance=oer)
    else:
        form = OerForm(initial={'project': project_id, 'creator': user.id, 'editor': user.id})
        metadata_formset = OerMetadataFormSet()
    return render_to_response('oer_edit.html', {'form': form, 'metadata_formset': metadata_formset, 'oer': oer, 'action': action}, context_instance=RequestContext(request))

def oer_edit_by_slug(request, oer_slug):
    oer = get_object_or_404(OER, slug=oer_slug)
    return oer_edit(request, oer_id=oer.id)

def oer_submit(request, oer_id):
    oer = OER.objects.get(pk=oer_id)
    oer.submit(request)
    return HttpResponseRedirect('/oer/%s/' % oer.slug)
def oer_withdraw(request, oer_id):
    oer = OER.objects.get(pk=oer_id)
    oer.withdraw(request)
    return HttpResponseRedirect('/oer/%s/' % oer.slug)
def oer_reject(request, oer_id):
    oer = OER.objects.get(pk=oer_id)
    oer.reject(request)
    return HttpResponseRedirect('/oer/%s/' % oer.slug)
def oer_publish(request, oer_id):
    oer = OER.objects.get(pk=oer_id)
    oer.publish(request)
    return HttpResponseRedirect('/oer/%s/' % oer.slug)
def oer_un_publish(request, oer_id):
    oer = OER.objects.get(pk=oer_id)
    oer.un_publish(request)
    return HttpResponseRedirect('/oer/%s/' % oer.slug)

def oer_evaluation_detail(request, evaluation=None):
    var_dict = { 'evaluation': evaluation, }
    var_dict['oer'] = evaluation.oer
    var_dict['can_edit'] = evaluation.user==request.user
    var_dict['overall_score'] = QUALITY_SCORE_DICT[evaluation.overall_score]
    quality_metadata = []
    for metadatum in evaluation.get_quality_metadata():
        quality_metadata.append([metadatum.quality_facet.name, metadatum.value, QUALITY_SCORE_DICT[metadatum.value]])
    var_dict['quality_metadata'] = quality_metadata
    return render_to_response('oer_evaluation_detail.html', var_dict, context_instance=RequestContext(request))

def oer_evaluation_by_id(request, evaluation_id):
    evaluation = get_object_or_404(OerEvaluation, pk=evaluation_id)
    return oer_evaluation_detail(request, evaluation=evaluation)

# @transaction.atomic
def oer_evaluation_edit(request, evaluation_id=None, oer=None):
    user = request.user
    evaluation = None
    action = '/oer_evaluation/edit/'
    if evaluation_id:
        evaluation = get_object_or_404(OerEvaluation, pk=evaluation_id)
        oer = evaluation.oer
        action = '/oer_evaluation/%s/edit/' % evaluation_id
    if request.POST:
        evaluation_id = request.POST.get('id', '')
        if evaluation_id:
            evaluation = get_object_or_404(OerEvaluation, pk=evaluation_id)
            action = '/oer_evaluation/%s/edit/' % evaluation_id
            oer = evaluation.oer
        form = OerEvaluationForm(request.POST, instance=evaluation)
        metadata_formset = OerQualityFormSet(request.POST, instance=evaluation)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                evaluation = form.save(commit=False)
                evaluation.user = user
                evaluation.save()
                form.save_m2m()
                evaluation = get_object_or_404(OerEvaluation, pk=evaluation.id)
                n = len(metadata_formset)
                for i in range(n):
                    if request.POST.get('metadata_set-%d-DELETE' % i, None):
                        quality_metadatum_id = request.POST.get('metadata_set-%d-id' % i, None)
                        if quality_metadatum_id:
                            quality_metadatum = OerMetadata.objects.get(id=metadatum_id)
                            quality_metadatum.delete()
                    metadata_form = metadata_formset[i]
                    if metadata_form.is_valid():
                        try:
                            metadata_form.save()
                        except:
                            pass
                action = '/oer_evaluation/%s/edit/' % evaluation.id
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/oer/%s/' % oer.slug)
            else:
                print form.errors
                print metadata_formset.errors
            return render_to_response('oer_evaluation_edit.html', {'form': form, 'metadata_formset': metadata_formset, 'oer': oer, 'evaluation': evaluation, 'action': action,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            if evaluation:
                oer = evaluation.oer
            else:
                oer_id = oer and oer.id or request.POST.get('oer')
                oer = get_object_or_404(OER, pk=oer_id)
            return HttpResponseRedirect('/oer/%s/' % oer.slug)
    elif evaluation:
        form = OerEvaluationForm(instance=evaluation)
        metadata_formset = OerQualityFormSet(instance=evaluation)
        action = '/oer_evaluation/%s/edit/' % evaluation.id
    else: # oer
        form = OerEvaluationForm(initial={'oer': oer.id, 'user': user.id,})
        metadata_formset = OerQualityFormSet()
        action = '/oer/%s/evaluate/' % oer.slug
    return render_to_response('oer_evaluation_edit.html', {'form': form, 'metadata_formset': metadata_formset, 'oer': oer, 'evaluation': evaluation, 'action': action}, context_instance=RequestContext(request))

def oer_evaluate_by_slug(request, oer_slug):
    oer = OER.objects.get(slug=oer_slug)
    evaluations = oer.get_evaluations(request.user)
    if evaluations:
        evaluation = evaluations[0]
        return oer_evaluation_edit(request, evaluation_id=evaluation.id, oer=oer)
    else:
        return oer_evaluation_edit(request, oer=oer)

def oer_evaluation_edit_by_id(request, evaluation_id):
    evaluation = get_object_or_404(OerEvaluation, pk=evaluation_id)
    oer = evaluation.oer
    return oer_evaluation_edit(request, evaluation_id=evaluation.id, oer=oer)

def handle_uploaded_file(file_object):
    document_type = DocumentType.objects.get(pk=2) # OER file type
    """
    source = get_object_or_404(WebFormSource, pk=1) # WebForm source
    source.upload_document(f, f.name, document_type=document_type)
    """
    # from documents.settings import LANGUAGE
    from documents import LANGUAGE
    version = Document.objects.upload_single_document(document_type, file_object, language=LANGUAGE)
    return version

def oer_add_document(request):
    if request.POST:
        oer_id = request.POST.get('id')
        oer = get_object_or_404(OER, id=oer_id)
        if request.POST.get('cancel', ''):
            return HttpResponseRedirect('/oer/%s/' % oer.slug)
        form = DocumentUploadForm(request.POST, request.FILES)
        if form.is_valid():
            uploaded_file = request.FILES['docfile']
            version = handle_uploaded_file(uploaded_file)
            # oer.documents.add(version.document)
            oer_document = OerDocument(oer=oer, document=version.document)
            oer_document.save()
            return HttpResponseRedirect('/oer/%s/' % oer.slug)
        else:
            can_edit = oer.can_edit(request.user)
            return render_to_response('oer_detail.html', {'oer': oer, 'can_edit': can_edit, 'form': form,}, context_instance=RequestContext(request))

# def document_download(request):
def document_download(request, document_id, document=None):
    if not document:
        document = get_object_or_404(Document, pk=document_id)
    document_version = document.latest_version
    file_descriptor = document_version.open()
    file_descriptor.close()
    return serve_file(
        request,
        document_version.file,
        save_as='"%s"' % document_version.document.label,
        content_type=document_version.mimetype if document_version.mimetype else 'application/octet-stream'
        )
def parse_page_range(page_range):
    """ parses the value of the page_range
    as a list of lists of 2 or 3 integers: [document, first_page, last_page (optional)]
    """
    subranges = []
    splitted = page_range.split(',')
    for s in splitted:
        first_page = 1
        last_page = None
        s = s.strip()
        if not s:
            continue
        if s.count('-'):
            l = s.split('-')
            if len(l)>2 or not l[1].isdigit():
                return None
            last_page = int(l[1])
            s = l[0]
        if not s.isdigit():
            return None
        first_page = int(s)
        if first_page < 1:
            return None
        subrange = [first_page]
        if not last_page is None:
            if last_page < first_page:
                return None
            subrange.append(last_page)
        subranges.append(subrange)
    return subranges            

def document_download_range(request, document_id, page_range):
    document = get_object_or_404(Document, pk=document_id)
    document_version = document.latest_version
    pageranges = parse_page_range(page_range)
    document_version.get_pages(pageranges)
    # return serve_file( ... )
    file = document_version.o_stream
    if not file:
        return
    content_type=document_version.mimetype if document_version.mimetype else 'application/octet-stream'
    response = HttpResponse(file.getvalue(), content_type=content_type)
    if file.len:
        response['Content-Length'] = file.len
    return response

def document_view(request, document_id, return_url=False):
    document = get_object_or_404(Document, pk=document_id)
    if document.viewerjs_viewable:
        url = '/ViewerJS/#http://%s/document/%s/download/' % (request.META['HTTP_HOST'], document_id)
        if return_url:
            return url
        else:
            return HttpResponseRedirect(url)
    else:
        document_version = document.latest_version
        return serve_file(
            request,
            document_version.file,
            content_type=document_version.mimetype
            )

def document_view_range(request, document_id, page_range):
    url = '/ViewerJS/#http://%s/document/%s/download_range/%s/' % (request.META['HTTP_HOST'], document_id, page_range)
    return url

def document_delete(request, document_id):
    oer_document = OerDocument.objects.get(document_id=document_id)
    oer = oer_document.oer
    oer.remove_document(oer_document.document, request)
    return oer_detail(request, oer.id, oer=oer)
def document_up(request, document_id):
    oer_document = OerDocument.objects.get(document_id=document_id)
    oer = oer_document.oer
    oer.document_up(oer_document.document, request)
    return oer_detail(request, oer.id, oer=oer)
def document_down(request, document_id):
    oer_document = OerDocument.objects.get(document_id=document_id)
    oer = oer_document.oer
    oer.document_down(oer_document.document, request)
    return oer_detail(request, oer.id, oer=oer)

def project_add_oer(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    if not project.can_add_oer(request.user):
        return HttpResponseRedirect('/project/%s/' % project.slug)
    return oer_edit(request, project_id=project_id) 

def lp_detail(request, lp_id, lp=None):
    if not lp:
        lp_id = int(lp_id)
        lp = get_object_or_404(LearningPath, pk=lp_id)
    elif not lp_id:
        lp_id = lp.id
    user = request.user
    var_dict = { 'lp': lp, }
    var_dict['project'] = lp.project
    var_dict['can_play'] = lp.can_play(request)
    var_dict['can_edit'] = can_edit = lp.can_edit(request)
    var_dict['can_delete'] = can_delete = lp.can_delete(request)
    if can_delete and request.GET.get('cut', ''):
        set_clipboard(request, key='cut_lps', value=(get_clipboard(request, key='cut_lps') or []) + [lp_id])
        cut_lps = get_clipboard(request, key='cut_lps') or []
        if not lp_id in cut_lps:
            set_clipboard(request, key='cut_lps', value=cut_lps+[lp_id])
    var_dict['in_cut_lps'] = lp_id in (get_clipboard(request, key='cut_lps') or [])
    var_dict['can_submit'] = lp.can_submit(request)
    var_dict['can_withdraw'] = lp.can_withdraw(request)
    var_dict['can_reject'] = lp.can_reject(request)
    var_dict['can_publish'] = lp.can_publish(request)
    var_dict['can_un_publish'] = lp.can_un_publish(request)
    var_dict['can_chain'] = lp.can_chain(request)
    if can_edit:
        var_dict['bookmarked_oers'] = [get_object_or_404(OER, pk=oer_id) for oer_id in get_clipboard(request, key='bookmarked_oers') or []]
    return render_to_response('lp_detail.html', var_dict, context_instance=RequestContext(request))

def lp_detail_by_slug(request, lp_slug):
    lp = LearningPath.objects.get(slug=lp_slug)
    return lp_detail(request, lp.id, lp)

DOCUMENT_VIEW_TEMPLATE = """<div class="flex-video widescreen">
<iframe src="%s" frameborder="0" allowfullscreen="">
</iframe>
</div>
"""
YOUTUBE_TEMPLATE = """<div class="flex-video widescreen">
<iframe src="%s?autoplay=1" frameborder="0" allowfullscreen="">
</iframe>
</div>
"""
SLIDESHARE_TEMPLATE = """<div class="flex-video widescreen">
%s
</div>
"""
TED_TALK_TEMPLATE = """<div class="flex-video widescreen">
<iframe src="https://embed-ssl.ted.com/talks/lang/%s/%s" width="854" height="480" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
"""

def lp_play(request, lp_id, lp=None):
    if not lp:
        lp = get_object_or_404(LearningPath, pk=lp_id)
    language = request.LANGUAGE_CODE
    var_dict = { 'lp': lp, }
    var_dict['project'] = lp.project
    nodes = lp.get_ordered_nodes()
    n_nodes = len(nodes)
    var_dict['nodes'] = nodes
    var_dict['max_node'] = n_nodes-1
    var_dict['node_range'] = range(n_nodes)
    i_node = request.GET.get('node', '')
    i_node = i_node.isdigit() and int(i_node) or 0
    var_dict['i_node'] = i_node
    current_node = nodes[i_node]
    var_dict['current_node'] = current_node
    oer = current_node.oer
    documents = oer.get_sorted_documents()
    page_range = current_node.range
    if documents:
        document = documents[0]
        if page_range:
            url = document_view_range(request, document.id, page_range)
        else:
            url = document_view(request, document.id, return_url=True)
        var_dict['document_view'] = DOCUMENT_VIEW_TEMPLATE % url
    var_dict['oer'] = oer
    url = oer.url
    var_dict['oer_url'] = oer.url
    youtube = url and (url.count('youtube.com') or url.count('youtu.be')) and url or ''
    if youtube:
        if youtube.count('embed'):
            pass
            print 1, youtube
        elif youtube.count('youtu.be/'):
            youtube = 'http://www.youtube.com/embed/%s' % youtube[youtube.index('youtu.be/')+9:]
            print 2, youtube
        elif youtube.count('watch?v='):
            youtube = 'http://www.youtube.com/embed/%s' % youtube[youtube.index('watch?v=')+8:]
            print 3, youtube
        youtube = YOUTUBE_TEMPLATE % youtube
    var_dict['youtube'] = youtube
    ted_talk = url and url.count('www.ted.com/talks/') and url or ''
    if ted_talk:
        if ted_talk.count('?'):
            ted_talk = url[ted_talk.index('www.ted.com/talks/')+18:ted_talk.index('?')]
        else:
            ted_talk = url[ted_talk.index('www.ted.com/talks/')+18:]
        ted_talk = TED_TALK_TEMPLATE % (language, ted_talk)
    var_dict['ted_talk'] = ted_talk
    reference = oer.reference
    slideshare = reference and reference.count('slideshare.net') and reference.count('<iframe') and reference or ''
    if slideshare:
        slideshare = SLIDESHARE_TEMPLATE % slideshare
    var_dict['slideshare'] = slideshare
    var_dict['embed_code'] = oer.embed_code
    i_page = request.GET.get('page', '')
    i_page = i_page.isdigit() and int(i_page) or 0
    var_dict['i_page'] = i_page
    return render_to_response('lp_play.html', var_dict, context_instance=RequestContext(request))

def lp_play_by_slug(request, lp_slug):
    lp = LearningPath.objects.get(slug=lp_slug)
    return lp_play(request, lp.id, lp)

def lp_edit(request, lp_id=None, project_id=None):
    user = request.user
    lp = None
    action = '/lp/edit/'
    if lp_id:
        lp = get_object_or_404(LearningPath, pk=lp_id)
        action = '/lp/%s/edit/' % lp.slug
        # if not user.can_edit(request):
        if not lp.can_edit(request):
            return HttpResponseRedirect('/lp/%s/' % lp.slug)
    if request.POST:
        lp_id = request.POST.get('id', '')
        if lp_id:
            lp = get_object_or_404(LearningPath, id=lp_id)
            action = '/lp/%s/edit/' % lp.slug
            group_id = lp.group_id
        form = LpForm(request.POST, instance=lp)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                lp = form.save(commit=False)
                lp.editor = user
                lp.save()
                form.save_m2m()
                lp = get_object_or_404(LearningPath, id=lp.id)
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/lp/%s/' % lp.slug)
            else:
                print form.errors
            return render_to_response('lp_edit.html', {'form': form, 'lp': lp, 'action': action,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            if lp:
                return HttpResponseRedirect('/lp/%s/' % lp.slug)
            else:
                if project_id:
                    project = get_object_or_404(Project, id=project_id)
                else:
                    group_id = request.POST.get('group')
                    if group_id:
                        group = get_object_or_404(Group, id=int(group_id))
                        project = group.project
                if project_id or group_id:
                    return HttpResponseRedirect('/project/%s/' % project.slug)
                else:
                    return my_dashboard(request)
    elif lp:
        form = LpForm(instance=lp)
    else:
        """
        if project_id:
            project = get_object_or_404(Project, id=project_id)
            group_id = project.group_id
        else:
            group_id = 0
        form = LpForm(initial={'group': group_id, 'creator': user.id, 'editor': user.id})
        """
        if not project_id:
            project_id = 0
        form = LpForm(initial={'project': project_id, 'creator': user.id, 'editor': user.id})
    return render_to_response('lp_edit.html', {'form': form, 'lp': lp, 'action': action}, context_instance=RequestContext(request))

def lp_edit_by_slug(request, lp_slug):
    lp = get_object_or_404(LearningPath, slug=lp_slug)
    return lp_edit(request, lp_id=lp.id)

def lp_submit(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    lp.submit(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)
def lp_withdraw(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    lp.withdraw(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)
def lp_reject(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    lp.reject(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)
def lp_publish(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    lp.publish(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)
def lp_un_publish(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    lp.un_publish(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)

def lp_delete(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    project = lp.project
    lp.lp_delete(request)
    if project:
        return HttpResponseRedirect('/project/%s/' % project.slug)
    else:
        return my_profile(request)

def lp_add_node(request, lp_slug):
    path = get_object_or_404(LearningPath, slug=lp_slug)
    return pathnode_edit(request, path_id=path.id) 

def lp_add_oer(request, lp_slug, oer_id):
    oer_id = int(oer_id)
    bookmarked_oers = get_clipboard(request, key='bookmarked_oers') or []
    user = request.user
    path = get_object_or_404(LearningPath, slug=lp_slug)
    if path.can_edit(request) and oer_id in bookmarked_oers:
        oer = get_object_or_404(OER, pk=oer_id)
        node = PathNode(path=path, oer=oer, label=oer.title, creator=user, editor=user)
        node.save()
        bookmarked_oers.remove(oer_id)
        set_clipboard(request, key='bookmarked_oers', value=bookmarked_oers or None)
        if path.path_type==LP_SEQUENCE:
            path.append_node(node, request)
    return HttpResponseRedirect('/lp/%s/' % lp_slug)

def lp_make_sequence(request, lp_id):
    lp = LearningPath.objects.get(pk=lp_id)
    head = lp.make_sequence(request)
    return HttpResponseRedirect('/lp/%s/' % lp.slug)

def pathnode_detail(request, node_id, node=None):
    if not node:
        node = get_object_or_404(PathNode, pk=node_id)
    var_dict = { 'node': node, }
    var_dict['lp'] = node.path
    var_dict['can_edit'] = node.can_edit(request)
    return render_to_response('pathnode_detail.html', var_dict, context_instance=RequestContext(request))

def pathnode_detail_by_id(request, node_id):
    return pathnode_detail(request, node_id=node_id)

def pathnode_edit(request, node_id=None, path_id=None):
    user = request.user
    node = None
    action = '/pathnode/edit/'
    if path_id:
        path = get_object_or_404(LearningPath, id=path_id)
    if node_id:
        node = get_object_or_404(PathNode, id=node_id)
        path = node.path
        action = '/pathnode/%d/edit/' % node.id
        if not path.can_edit(request):
            return HttpResponseRedirect('/lp/%s/' % path.slug)
    if request.POST:
        node_id = request.POST.get('id', '')
        if node_id:
            node = get_object_or_404(PathNode, id=node_id)
            action = '/pathnode/%d/edit/' % node.id
            path = node.path
        form = PathNodeForm(request.POST, instance=node)
        if request.POST.get('save', '') or request.POST.get('continue', ''): 
            if form.is_valid():
                node = form.save(commit=False)
                node.editor = user
                node.save()
                form.save_m2m()
                node = get_object_or_404(PathNode, id=node.id)
                if not node.label:
                    # node.label = slugify(node.oer.title[:50])
                    node.label = node.oer.title
                    node.save()
                path = node.path
                # if path.path_type==LP_SEQUENCE and not node.parents():
                if path.path_type==LP_SEQUENCE and node.is_island():
                    path.append_node(node, request)
                if request.POST.get('save', ''): 
                    return HttpResponseRedirect('/pathnode/%d/' % node.id)
            else:
                print form.errors
            return render_to_response('pathnode_edit.html', {'form': form, 'node': node, 'action': action,}, context_instance=RequestContext(request))
        elif request.POST.get('cancel', ''):
            if node:
                node_id = node.id
            else:
                node_id = request.POST.get('id', '')
            if node_id:
                return HttpResponseRedirect('/pathnode/%d/' % node_id)
            else:
                if not path_id:
                    path_id = request.POST.get('path', '')
                path = get_object_or_404(LearningPath, id=path_id)
                return HttpResponseRedirect('/lp/%s/' % path.slug)
    elif node:
        form = PathNodeForm(instance=node)
    else:
        form = PathNodeForm(initial={'path': path_id, 'creator': user.id, 'editor': user.id})
    return render_to_response('pathnode_edit.html', {'form': form, 'node': node, 'action': action}, context_instance=RequestContext(request))

def pathnode_edit_by_id(request, node_id):
    return pathnode_edit(request, node_id=node_id)

def pathnode_delete(request, node_id):
    node = get_object_or_404(PathNode, id=node_id)
    path = node.path
    path.remove_node(node, request)
    return lp_detail(request, path.id, lp=path)
def pathnode_up(request, node_id):
    node = get_object_or_404(PathNode, id=node_id)
    path = node.path
    path.node_up(node, request)
    return lp_detail(request, path.id, lp=path)
def pathnode_down(request, node_id):
    node = get_object_or_404(PathNode, id=node_id)
    path = node.path
    path.node_down(node, request)
    return lp_detail(request, path.id, lp=path)

def project_add_lp(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    if not project.can_add_lp(request.user):
        return HttpResponseRedirect('/project/%s/' % project.slug)
    return lp_edit(request, project_id=project_id) 

def user_add_lp(request):
    return lp_edit(request, project_id=0) 

def repos_search(request):
    query = qq = []
    repos = []
    include_all = ''
    if request.method == 'POST': # If the form has been submitted...
        form = RepoSearchForm(request.POST) # A form bound to the POST data
        if form.is_valid(): # All validation rules pass
            include_all = request.POST.get('include_all')
            repo_types = request.POST.getlist('repo_type')
            if repo_types:
                qq.append(Q(repo_type_id__in=repo_types))
            subjects = request.POST.getlist('subjects')
            if subjects:
                # qq.append(Q(subjects__isnull=True) | Q(subjects__in=subjects))
                qq.append(Q(state=PUBLISHED) & Q(subjects__in=subjects))
            languages = request.POST.getlist('languages')
            if languages:
                # qq.append(Q(languages__isnull=True) | Q(languages__in=languages))
                qq.append(Q(state=PUBLISHED) & Q(languages__in=languages))
            repo_features = request.POST.getlist('features')
            if repo_features:
                qq.append(Q(features__in=repo_features))
            if qq:
                if include_all:
                    query = qq.pop()
                else:
                    query = Q(state=PUBLISHED)
                for q in qq:
                    query = query & q
                repos = Repo.objects.filter(query).distinct().order_by('name')
    else:
        form = RepoSearchForm()
    return render_to_response('search_repos.html', {'repos': repos, 'query': query, 'include_all': include_all, 'form': form,}, context_instance=RequestContext(request))

q_extra = ['(', ')', '[', ']', '"']
def clean_q(q):
    for c in q_extra:
        q = q.replace(c, '')
    return q

def search_by_string(request, q, subjects=[], languages=[]):
    pass

def oers_search(request):
    query = qq = []
    oers = []
    include_all = ''
    if request.method == 'POST': # If the form has been submitted...
        form = OerSearchForm(request.POST) # A form bound to the POST data
        if form.is_valid(): # All validation rules pass
            include_all = request.POST.get('include_all')
            oer_types = request.POST.getlist('oer_type')
            if oer_types:
                qq.append(Q(oer_type__in=oer_types))
                print 'oer_types = ', oer_types
            source_types = request.POST.getlist('source_type')
            if source_types:
                qq.append(Q(source_type__in=source_types))
            materials = request.POST.getlist('material')
            if materials:
                qq.append(Q(material__in=materials))
            licenses = request.POST.getlist('license')
            if licenses:
                qq.append(Q(license__in=licenses))
            levels = request.POST.getlist('levels')
            if levels:
                qq.append(Q(levels__in=levels))
            subjects = request.POST.getlist('subjects')
            if subjects:
                qq.append(Q(subjects__isnull=True) | Q(subjects__in=subjects))
            tags = request.POST.getlist('tags')
            if tags:
                qq.append(Q(tags__in=tags))
            languages = request.POST.getlist('languages')
            if languages:
                qq.append(Q(languages__isnull=True) | Q(languages__in=languages))
            media = request.POST.getlist('media')
            if media:
                qq.append(Q(media__in=media))
            acc_features = request.POST.getlist('accessibility')
            if acc_features:
                qq.append(Q(accessibility__in=acc_features))
            if qq:
                if include_all:
                    query = qq.pop()
                else:
                    query = Q(state=PUBLISHED)
                for q in qq:
                    query = query & q
                oers = OER.objects.filter(query).distinct().order_by('title')
    else:
        form = OerSearchForm()
    return render_to_response('search_oers.html', {'oers': oers, 'query': query, 'include_all': include_all, 'form': form,}, context_instance=RequestContext(request))

def lps_search(request):
    query = qq = []
    lps = []
    include_all = ''
    if request.method == 'POST': # If the form has been submitted...
        form = LpSearchForm(request.POST) # A form bound to the POST data
        if form.is_valid(): # All validation rules pass
            qq.append(Q(project__isnull=False))
            include_all = request.POST.get('include_all')
            path_types = request.POST.getlist('path_type')
            if path_types:
                qq.append(Q(path_type__in=path_types))
                print 'path_types = ', path_types
            levels = request.POST.getlist('levels')
            if levels:
                qq.append(Q(levels__in=levels))
            subjects = request.POST.getlist('subjects')
            if subjects:
                qq.append(Q(subjects__isnull=True) | Q(subjects__in=subjects))
            tags = request.POST.getlist('tags')
            if tags:
                qq.append(Q(tags__in=tags))
            if qq:
                if include_all:
                    query = qq.pop()
                else:
                    query = Q(state=PUBLISHED)
                for q in qq:
                    query = query & q
                lps = LearningPath.objects.filter(query).distinct().order_by('title')
    else:
        form = LpSearchForm()
    return render_to_response('search_lps.html', {'lps': lps, 'query': query, 'include_all': include_all, 'form': form,}, context_instance=RequestContext(request))
