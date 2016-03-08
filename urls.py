from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

from django.contrib import admin
admin.autodiscover()

from django.conf.urls.static import static
from filebrowser.sites import site
from commons import settings
from commons.forms import MessageComposeForm
from commons.views import UserAutocomplete # , OerAutocomplete

# from .wizards import DocumentCreateWizard

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pippo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^robots.txt$', 'commons.views.robots', name='robots'),
    url(r'^dmuc$', TemplateView.as_view(template_name='dmuc/home.html')),
    url(r'^ViewerJS', TemplateView.as_view(template_name='viewerjs/index.html')),
    # Import urls from app datatrans
    url(r'^datatrans/', include('datatrans.urls')),
    # url(r'', include('taggit_live.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^admin/filebrowser/', include(site.urls)),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^select2/', include('django_select2.urls')),
    url(r'^my_mail/compose/', 'django_messages.views.compose', {'form_class': MessageComposeForm,}, name='messages_compose'),
    url(r'^my_mail/reply/(?P<message_id>[\d]+)/$', 'django_messages.views.reply', {'form_class': MessageComposeForm,}, name='messages_reply'),
    url(r'^my_mail/', include('django_messages.urls')),
    url(r'^weblog/', include('zinnia.urls', namespace='zinnia')),
    url(r'^forum/', include('pybb.urls', namespace='pybb')),
    url(r'^comments/', include('django_comments.urls')),
    url(r"^notification/", include("notification.urls")),
    # url(r"^notification/", include("pinax.notifications.urls")),
    url(r"^my_profile/$", 'commons.views.my_profile', name="account_settings"),
    url(r"^my_dashboard/$", 'commons.views.my_dashboard', name="user_dashboard"),
    url(r"^my_chat/$", 'commons.views.my_chat', name="my_chat"),
    url(r"^my_preferences/$", 'commons.views.my_preferences', name="my_preferences"),
    url(r"^edit_preferences/$", 'commons.views.edit_preferences', name="edit_preferences"),
    url(r"^profile/(?P<username>[\w\.-]+)/edit/$", 'commons.views.profile_edit', name="profile_edit"),
    url(r"^profile/(?P<username>[\w\.-]+)/$", 'commons.views.user_profile', name="user_profile"),
    # url(r'^/mayansources/create/from/local/multiple/$', DocumentCreateWizard.as_view(), name='commons_document_create_multiple'),
    # url(r'^mayan', include('mayan.urls')),
    # url(r'^sources', include('sources.urls')),
    # url(r'^documents/', include('documents.urls')),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^info/', include('django.contrib.flatpages.urls')),
    # url(r"^$", TemplateView.as_view(template_name="homepage.html"), name="commons.home"),
    url(r"^$", 'commons.views.home', name="commons.home"),
    url(r"^test/$", TemplateView.as_view(template_name="test.html"), name="home"),
    url(r"^cops/$", 'commons.views.cops_tree', name="cops_tree"),
    url(r"^create_project_folders/$", 'commons.views.create_project_folders', name="create_project_folders"),
    url(r"^projects/$", 'commons.views.projects', name="projects"),
    url(r"^project/(?P<project_slug>[\w-]+)/apply/(?P<username>[\w\.-]+)/$", 'commons.views.apply_for_membership', name="apply_for_membership"),
    url(r"^project/(?P<project_slug>[\w-]+)/accept/(?P<username>[\w\.-]+)/$", 'commons.views.accept_application', name="accept_application"),
    url(r"^project/(?P<project_id>[\d-]+)/oer_new/$", 'commons.views.project_add_oer', name="project_add_oer"),
    url(r"^lp_new/$", 'commons.views.user_add_lp', name="user_add_lp"),
    url(r"^project/(?P<project_id>[\d-]+)/lp_new/$", 'commons.views.project_add_lp', name="project_add_lp"),
    url(r"^project/(?P<project_id>[\d-]+)/toggle_supervisor_role/$", 'commons.views.project_toggle_supervisor_role', name="project_toggle_supervisor_role"),
    url(r"^project/(?P<project_id>[\d-]+)/compose_message/$", 'commons.views.project_compose_message', name="project_compose_message"),
    url(r"^project/(?P<project_slug>[\w-]+)/mailing_list/$", 'commons.views.project_mailing_list', name="project_mailing_list"),
    url(r"^project/(?P<project_id>[\d-]+)/create_forum/$", 'commons.views.project_create_forum', name="project_create_forum"),
    url(r"^forum_edit/(?P<forum_id>[\d-]+)/$", 'commons.views.forum_edit_by_id', name="forum_edit"),
    url(r"^project/(?P<project_id>[\d-]+)/create_room/$", 'commons.views.project_create_room', name="project_create_room"),
    url(r"^project/(?P<project_id>[\d-]+)/sync_xmpp/$", 'commons.views.project_sync_xmppaccounts', name="project_sync_xmppaccounts"),
    url(r"^project/(?P<project_id>[\d-]+)/paste_oer/(?P<oer_id>[\d-]+)/$", 'commons.views.project_paste_oer', name="project_paste_oer"),
    url(r"^project/(?P<project_id>[\d-]+)/paste_lp/(?P<lp_id>[\d-]+)/$", 'commons.views.project_paste_lp', name="project_paste_lp"),
    url(r"^project/(?P<project_slug>[\w-]+)/edit/$", 'commons.views.project_edit_by_slug', name="project_edit_by_slug"),
    url(r"^project/(?P<project_id>[\d-]+)/propose/$", 'commons.views.project_propose', name="project_propose"),
    url(r"^project/(?P<project_id>[\d-]+)/open/$", 'commons.views.project_open', name="project_open"),
    url(r"^project/(?P<project_id>[\d-]+)/close/$", 'commons.views.project_close', name="project_close"),
    url(r"^project/edit/$", 'commons.views.project_edit', name="project_edit"),
    # url(r"^project/(?P<project_slug>[\w-]+)/project_new/$", 'commons.views.project_new_by_slug', name="create_subproject"),
    url(r"^project/(?P<project_slug>[\w-]+)/project_new/(?P<type_name>[\w-]+)/$", 'commons.views.project_new_by_slug', name="create_subproject"),
    url(r"^project/(?P<project_slug>[\w-]+)/oers/$", 'commons.views.oer_list', name="oer_list"),
    url(r"^project/(?P<project_slug>[\w-]+)/project_results/$", 'commons.views.project_results', name="project_results"),
    url(r"^project/(?P<project_slug>[\w-]+)/folder/$", 'commons.views.project_folder', name="project_folder"),
    url(r"^project/add_document/$", 'commons.views.project_add_document', name="project_add_document"),
    url(r"^folderdocument/(?P<folderdocument_id>[\d-]+)/delete/$", 'commons.views.folderdocument_delete', name="folderdocument_delete"),
    url(r"^folderdocument/(?P<folderdocument_id>[\d-]+)/edit/$", 'commons.views.folderdocument_edit', name="folderdocument_edit"),
    url(r"^project/(?P<project_slug>[\w-]+)/$", 'commons.views.project_detail_by_slug', name="project_detail"),
    url(r"^set_mentor/$", 'commons.views.project_set_mentor', name="project_set_mentor"),
    # url(r"^repos/$", 'commons.views.repo_list', name="repo_list"),
    url(r"^browse_people/$", 'commons.views.browse_people', name="browse_people"),
    url(r"^people/search/$", 'commons.views.people_search', name="people_search"),
    url(r"^browse/$", 'commons.views.browse', name="browse"),
    url(r"^repos/$", 'commons.views.browse_repos', name="browse_repos"),
    url(r"^repos_by/(?P<username>[\w\.-]+)/$", 'commons.views.repos_by_user', name="repos_by_user"),
    url(r"^repositories/contributors/$", 'commons.views.repo_contributors', name="repo_contributors"),
    url(r"^repo/new/$", 'commons.views.repo_new', name="repo_new"),
    url(r"^repo/save/$", 'commons.views.repo_save', name="repo_save"),
    url(r"^repo/(?P<repo_slug>[\w-]+)/edit/$", 'commons.views.repo_edit_by_slug', name="repo_edit"),
    url(r"^repo/(?P<repo_id>[\d-]+)/submit/$", 'commons.views.repo_submit', name="repo_submit"),
    url(r"^repo/(?P<repo_id>[\d-]+)/withdraw/$", 'commons.views.repo_withdraw', name="repo_withdraw"),
    url(r"^repo/(?P<repo_id>[\d-]+)/reject/$", 'commons.views.repo_reject', name="repo_reject"),
    url(r"^repo/(?P<repo_id>[\d-]+)/publish/$", 'commons.views.repo_publish', name="repo_publish"),
    url(r"^repo/(?P<repo_id>[\d-]+)/un_publish/$", 'commons.views.repo_un_publish', name="repo_un_publish"),
    url(r"^repo/(?P<repo_slug>[\w-]+)/$", 'commons.views.repo_detail_by_slug', name="repo_detail"),
    url(r"^repo_oers/(?P<repo_slug>[\w-]+)/$", 'commons.views.repo_oers_by_slug', name="repo_oers"),
    url(r"^repos/search/$", 'commons.views.repos_search', name="repos_search"),
    url(r"^oer/edit/$", 'commons.views.oer_edit', name='oer_new_edit'),
    url(r"^oer/add_document/$", 'commons.views.oer_add_document', name='oer_add_document'),  
    url(r"^oer/(?P<oer_slug>[\w\d-]+)/edit/$", 'commons.views.oer_edit_by_slug', name="oer_edit"),
    url(r"^oer/(?P<oer_id>[\d-]+)/submit/$", 'commons.views.oer_submit', name="oer_submit"),
    url(r"^oer/(?P<oer_id>[\d-]+)/withdraw/$", 'commons.views.oer_withdraw', name="oer_withdraw"),
    url(r"^oer/(?P<oer_id>[\d-]+)/reject/$", 'commons.views.oer_reject', name="oer_reject"),
    url(r"^oer/(?P<oer_id>[\d-]+)/publish/$", 'commons.views.oer_publish', name="oer_publish"),
    url(r"^oer/(?P<oer_id>[\d-]+)/un_publish/$", 'commons.views.oer_un_publish', name="oer_un_publish"),
    url(r"^oer/(?P<oer_slug>[\w\d-]+)/evaluate/$", 'commons.views.oer_evaluate_by_slug', name="oer_evaluate"),
    url(r"^oer_evaluation/(?P<evaluation_id>[\d-]+)/edit/$", 'commons.views.oer_evaluation_edit_by_id', name="oer_evaluation_edit"),
    url(r"^oer_evaluation/(?P<evaluation_id>[\d-]+)/$", 'commons.views.oer_evaluation_by_id', name="oer_evaluation"),
    url(r"^oer/(?P<oer_slug>[\w\d-]+)/$", 'commons.views.oer_detail_by_slug', name="oer_detail"),
    url(r"^oer/(?P<oer_slug>[\w\d-]+)/view/$", 'commons.views.oer_view_by_slug', name="oer_view"),
    url(r"^oers_by/(?P<username>[\w\.-]+)/$", 'commons.views.oers_by_user', name="oers_by_user"),
    url(r"^oers/contributors/$", 'commons.views.oer_contributors', name="oer_contributors"),
    url(r"^oers/search/$", 'commons.views.oers_search', name="oers_search"),
    url(r'^document/(?P<document_id>[\d-]+)/download/$', 'commons.views.document_download', (), 'document_download'),
    url(r'^document/(?P<document_id>[\d-]+)/download_range/(?P<page_range>[\d\,-]+)/$', 'commons.views.document_download_range', (), 'document_download_range'),
    url(r'^document/(?P<document_id>[\d-]+)/download.pdf/$', 'commons.views.document_download', (), 'document_download_pdf'),
    url(r'^document/(?P<document_id>[\d-]+)/view/$', 'commons.views.document_view', (), 'document_view'),
    url(r'^document/(?P<document_id>[\d-]+)/view_range/(?P<page_range>[\d\,-]+)/$', 'commons.views.document_view_range', (), 'document_view_range'),
    url(r"^document/(?P<document_id>[\d-]+)/delete/$", 'commons.views.document_delete', name="document_delete"),
    url(r"^document/(?P<document_id>[\d-]+)/up/$", 'commons.views.document_up', name="document_up"),
    url(r"^document/(?P<document_id>[\d-]+)/down/$", 'commons.views.document_down', name="document_down"),
    url(r"^lp/edit/$", 'commons.views.lp_edit', name='lp_edit'),
    url(r"^lp/add_node/$", 'commons.views.lp_add_node', name='lp_add_node'),  
    url(r"^lp/(?P<lp_slug>[\w\d-]+)/edit/$", 'commons.views.lp_edit_by_slug', name="lp_edit"),
    url(r"^lp/(?P<lp_slug>[\w\d-]+)/pathnode_new/$", 'commons.views.lp_add_node', name="lp_add_node"),
    url(r"^lp/(?P<lp_slug>[\w\d-]+)/pathnode_add/(?P<oer_id>[\d-]+)/$", 'commons.views.lp_add_oer', name="lp_add_oer"),
    url(r"^lp/(?P<lp_id>[\d-]+)/submit/$", 'commons.views.lp_submit', name="lp_submit"),
    url(r"^lp/(?P<lp_id>[\d-]+)/withdraw/$", 'commons.views.lp_withdraw', name="lp_withdraw"),
    url(r"^lp/(?P<lp_id>[\d-]+)/reject/$", 'commons.views.lp_reject', name="lp_reject"),
    url(r"^lp/(?P<lp_id>[\d-]+)/publish/$", 'commons.views.lp_publish', name="lp_publish"),
    url(r"^lp/(?P<lp_id>[\d-]+)/un_publish/$", 'commons.views.lp_un_publish', name="lp_un_publish"),
    url(r"^lp/(?P<lp_id>[\d-]+)/delete/$", 'commons.views.lp_delete', name="lp_delete"),
    url(r"^lp/(?P<lp_id>[\d-]+)/make_sequence/$", 'commons.views.lp_make_sequence', name="lp_make_sequence"),
    url(r"^lp/(?P<lp_slug>[\w\d-]+)/play/$", 'commons.views.lp_play_by_slug', name="lp_play"),
    url(r"^lp/(?P<lp_slug>[\w\d-]+)/$", 'commons.views.lp_detail_by_slug', name="lp_detail"),
    url(r"^pathnode/edit/$", 'commons.views.pathnode_edit', name='pathnode_edit'),
    url(r"^pathnode/(?P<node_id>[\d-]+)/edit/$", 'commons.views.pathnode_edit_by_id', name="pathnode_edit"),
    url(r"^pathnode/(?P<node_id>[\d-]+)/delete/$", 'commons.views.pathnode_delete', name="pathnode_delete"),
    url(r"^pathnode/(?P<node_id>[\d-]+)/up/$", 'commons.views.pathnode_up', name="pathnode_up"),
    url(r"^pathnode/(?P<node_id>[\d-]+)/down/$", 'commons.views.pathnode_down', name="pathnode_down"),
    url(r"^pathnode/(?P<node_id>[\d-]+)/$", 'commons.views.pathnode_detail', name="pathnode_detail"),
    url(r"^lps/search/$", 'commons.views.lps_search', name="lps_search"),
    url(r"^resources/contributors/$", 'commons.views.resource_contributors', name="resource_contributors"),
    url(r"^resources_by/(?P<username>[\w\.-]+)/$", 'commons.views.resources_by', name="resources_by"),
    url(r"^mentoring/$", 'commons.views.mentoring', name="mentoring"),
    url(r"^testlive/$", 'commons.views.testlive', name="testlive"),
    url(r'^navigation_autocomplete$', 'commons.search_indexes.navigation_autocomplete', name='navigation_autocomplete'),
    url('user-autocomplete/$', UserAutocomplete.as_view(), name='user-autocomplete',),
    # url('oer-autocomplete/$', OerAutocomplete.as_view(), name='oer-autocomplete',),
    url('repo-autocomplete/$', 'commons.views.repo_autocomplete', name='repo-autocomplete',),
    url('oer-autocomplete/$', 'commons.views.oer_autocomplete', name='oer-autocomplete',),
    ) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
""" http://stackoverflow.com/questions/28013711/django-zinnia-can-not-get-image-for-entrys-illustration
    https://docs.djangoproject.com/en/1.8/howto/static-files/ """

if settings.USE_HAYSTACK:
    # urlpatterns += patterns('', url(r'^haystack/', include('haystack.urls')),
    from haystack.views import SearchView
    # from haystack.forms import ModelSearchForm
    from commons.search_indexes import commonsModelSearchForm
    from haystack.query import SearchQuerySet
    sqs = SearchQuerySet()
    urlpatterns += patterns('haystack.views',
        url(r'^cercaveloce/', SearchView(
                template='search/search.html',
                searchqueryset=sqs,
                form_class=commonsModelSearchForm,
                results_per_page=100,
                load_all=False
            ), name='haystack_search'),
    )
