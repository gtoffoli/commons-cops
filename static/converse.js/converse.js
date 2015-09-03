﻿/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

/*
jed.js
v0.5.0beta

https://github.com/SlexAxton/Jed
-----------
A gettext compatible i18n library for modern JavaScript Applications

by Alex Sexton - AlexSexton [at] gmail - @SlexAxton
WTFPL license for use
Dojo CLA for contributions

Jed offers the entire applicable GNU gettext spec'd set of
functions, but also offers some nicer wrappers around them.
The api for gettext was written for a language with no function
overloading, so Jed allows a little more of that.

Many thanks to Joshua I. Miller - unrtst@cpan.org - who wrote
gettext.js back in 2008. I was able to vet a lot of my ideas
against his. I also made sure Jed passed against his tests
in order to offer easy upgrades -- jsgettext.berlios.de
*/

// Underscore 1.3.0 was used to port and is licensed

/**
   sprintf() for JavaScript 0.7-beta1
   http://www.diveintojavascript.com/projects/javascript-sprintf

   Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:
       * Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
       * Neither the name of sprintf() for JavaScript nor the
         names of its contributors may be used to endorse or promote products
         derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
   DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*! TinySort
 * Copyright (c) 2008-2013 Ron Valstar http://tinysort.sjeiti.com/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
    This program is distributed under the terms of the MIT license.
    Please see the LICENSE file for details.

    Copyright 2006-2008, OGG, LLC
*/

/*
  Copyright 2010, FranÃ§ois de Metz <francois@2metz.fr>
*/

/*!
 * Converse.js (Web-based XMPP instant messaging client)
 * http://conversejs.org
 *
 * Copyright (c) 2012, Jan-Carel Brand <jc@opkode.com>
 * Dual licensed under the MIT and GPL Licenses
 */

function hex_sha1(e) {
    return binb2hex(core_sha1(str2binb(e), e.length * chrsz))
}

function b64_sha1(e) {
    return binb2b64(core_sha1(str2binb(e), e.length * chrsz))
}

function str_sha1(e) {
    return binb2str(core_sha1(str2binb(e), e.length * chrsz))
}

function hex_hmac_sha1(e, t) {
    return binb2hex(core_hmac_sha1(e, t))
}

function b64_hmac_sha1(e, t) {
    return binb2b64(core_hmac_sha1(e, t))
}

function str_hmac_sha1(e, t) {
    return binb2str(core_hmac_sha1(e, t))
}

function sha1_vm_test() {
    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d"
}

function core_sha1(e, t) {
    e[t >> 5] |= 128 << 24 - t % 32, e[(t + 64 >> 9 << 4) + 15] = t;
    var n = new Array(80),
        r = 1732584193,
        i = -271733879,
        s = -1732584194,
        o = 271733878,
        u = -1009589776,
        a, f, l, c, h, p, d, v;
    for (a = 0; a < e.length; a += 16) {
        c = r, h = i, p = s, d = o, v = u;
        for (f = 0; f < 80; f++) f < 16 ? n[f] = e[a + f] : n[f] = rol(n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16], 1), l = safe_add(safe_add(rol(r, 5), sha1_ft(f, i, s, o)), safe_add(safe_add(u, n[f]), sha1_kt(f))), u = o, o = s, s = rol(i, 30), i = r, r = l;
        r = safe_add(r, c), i = safe_add(i, h), s = safe_add(s, p), o = safe_add(o, d), u = safe_add(u, v)
    }
    return [r, i, s, o, u]
}

function sha1_ft(e, t, n, r) {
    return e < 20 ? t & n | ~t & r : e < 40 ? t ^ n ^ r : e < 60 ? t & n | t & r | n & r : t ^ n ^ r
}

function sha1_kt(e) {
    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
}

function core_hmac_sha1(e, t) {
    var n = str2binb(e);
    n.length > 16 && (n = core_sha1(n, e.length * chrsz));
    var r = new Array(16),
        i = new Array(16);
    for (var s = 0; s < 16; s++) r[s] = n[s] ^ 909522486, i[s] = n[s] ^ 1549556828;
    var o = core_sha1(r.concat(str2binb(t)), 512 + t.length * chrsz);
    return core_sha1(i.concat(o), 672)
}

function safe_add(e, t) {
    var n = (e & 65535) + (t & 65535),
        r = (e >> 16) + (t >> 16) + (n >> 16);
    return r << 16 | n & 65535
}

function rol(e, t) {
    return e << t | e >>> 32 - t
}

function str2binb(e) {
    var t = [],
        n = (1 << chrsz) - 1;
    for (var r = 0; r < e.length * chrsz; r += chrsz) t[r >> 5] |= (e.charCodeAt(r / chrsz) & n) << 32 - chrsz - r % 32;
    return t
}

function binb2str(e) {
    var t = "",
        n = (1 << chrsz) - 1;
    for (var r = 0; r < e.length * 32; r += chrsz) t += String.fromCharCode(e[r >> 5] >>> 32 - chrsz - r % 32 & n);
    return t
}

function binb2hex(e) {
    var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef",
        n = "";
    for (var r = 0; r < e.length * 4; r++) n += t.charAt(e[r >> 2] >> (3 - r % 4) * 8 + 4 & 15) + t.charAt(e[r >> 2] >> (3 - r % 4) * 8 & 15);
    return n
}

function binb2b64(e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = "",
        r, i;
    for (var s = 0; s < e.length * 4; s += 3) {
        r = (e[s >> 2] >> 8 * (3 - s % 4) & 255) << 16 | (e[s + 1 >> 2] >> 8 * (3 - (s + 1) % 4) & 255) << 8 | e[s + 2 >> 2] >> 8 * (3 - (s + 2) % 4) & 255;
        for (i = 0; i < 4; i++) s * 8 + i * 6 > e.length * 32 ? n += b64pad : n += t.charAt(r >> 6 * (3 - i) & 63)
    }
    return n
}
var requirejs, require, define;
(function(e) {
    function c(e, t) {
        return f.call(e, t)
    }

    function h(e, t) {
        var n, r, i, s, o, a, f, l, c, h, p = t && t.split("/"),
            d = u.map,
            v = d && d["*"] || {};
        if (e && e.charAt(0) === ".")
            if (t) {
                p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                for (l = 0; l < e.length; l += 1) {
                    h = e[l];
                    if (h === ".") e.splice(l, 1), l -= 1;
                    else if (h === "..") {
                        if (l === 1 && (e[2] === ".." || e[0] === "..")) break;
                        l > 0 && (e.splice(l - 1, 2), l -= 2)
                    }
                }
                e = e.join("/")
            } else e.indexOf("./") === 0 && (e = e.substring(2));
        if ((p || v) && d) {
            n = e.split("/");
            for (l = n.length; l > 0; l -= 1) {
                r = n.slice(0, l).join("/");
                if (p)
                    for (c = p.length; c > 0; c -= 1) {
                        i = d[p.slice(0, c).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                s = i, o = l;
                                break
                            }
                        }
                    }
                if (s) break;
                !a && v && v[r] && (a = v[r], f = l)
            }!s && a && (s = a, o = f), s && (n.splice(0, o, s), e = n.join("/"))
        }
        return e
    }

    function p(t, r) {
        return function() {
            return n.apply(e, l.call(arguments, 0).concat([t, r]))
        }
    }

    function d(e) {
        return function(t) {
            return h(t, e)
        }
    }

    function v(e) {
        return function(t) {
            s[e] = t
        }
    }

    function m(n) {
        if (c(o, n)) {
            var r = o[n];
            delete o[n], a[n] = !0, t.apply(e, r)
        }
        if (!c(s, n) && !c(a, n)) throw new Error("No " + n);
        return s[n]
    }

    function g(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }

    function y(e) {
        return function() {
            return u && u.config && u.config[e] || {}
        }
    }
    var t, n, r, i, s = {}, o = {}, u = {}, a = {}, f = Object.prototype.hasOwnProperty,
        l = [].slice;
    r = function(e, t) {
        var n, r = g(e),
            i = r[0];
        return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {
            f: i ? i + "!" + e : e,
            n: e,
            pr: i,
            p: n
        }
    }, i = {
        require: function(e) {
            return p(e)
        },
        exports: function(e) {
            var t = s[e];
            return typeof t != "undefined" ? t : s[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: s[e],
                config: y(e)
            }
        }
    }, t = function(t, n, u, f) {
        var l, h, d, g, y, b = [],
            w;
        f = f || t;
        if (typeof u == "function") {
            n = !n.length && u.length ? ["require", "exports", "module"] : n;
            for (y = 0; y < n.length; y += 1) {
                g = r(n[y], f), h = g.f;
                if (h === "require") b[y] = i.require(t);
                else if (h === "exports") b[y] = i.exports(t), w = !0;
                else if (h === "module") l = b[y] = i.module(t);
                else if (c(s, h) || c(o, h) || c(a, h)) b[y] = m(h);
                else {
                    if (!g.p) throw new Error(t + " missing " + h);
                    g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                }
            }
            d = u.apply(s[t], b);
            if (t)
                if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                else if (d !== e || !w) s[t] = d
        } else t && (s[t] = u)
    }, requirejs = require = n = function(s, o, a, f, l) {
        return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || function() {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function() {
            t(e, s, o, a)
        }, 4), n)
    }, n.config = function(e) {
        return u = e, u.deps && n(u.deps, u.callback), n
    }, requirejs._defined = s, define = function(e, t, n) {
        t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
    }, define.amd = {
        jQuery: !0
    }
})(), define("components/almond/almond.js", function() {}),
function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {}, m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        }, A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("ï»¿Â ") ? function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function(n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = l.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if (m && (!n.button || n.type !== "click"))
                for (s = n.target; s != this; s = s.parentNode || this)
                    if (s.disabled !== !0 || n.type !== "click") {
                        u = {}, f = [];
                        for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                        f.length && w.push({
                            elem: s,
                            matches: f
                        })
                    }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function(e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function() {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function() {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function() {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et;
            else if (!i) return this;
            return s === 1 && (o = i, i = function(e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function() {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        },
        die: function(e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function(n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function(e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r)
                if (i = R.exec(e))
                    if (f = i[1]) {
                        if (l === 9) {
                            s = t.getElementById(f);
                            if (!s || !s.parentNode) return n;
                            if (s.id === f) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                    } else {
                        if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                        if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                    }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }

        function rt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function st(e) {
            return N(function(t) {
                return t = +t, N(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }

        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }

        function at(e, t, r) {
            var i = t.dir,
                s = r && t.dir === "parentNode",
                o = w++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (s || t.nodeType === 1) return e(t, n, r)
            } : function(t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ",
                        l = f + n;
                    while (t = t[i])
                        if (s || t.nodeType === 1) {
                            if ((a = t[d]) === l) return t.sizset;
                            if (typeof a == "string" && a.indexOf(f) === 0) {
                                if (t.sizset) return t
                            } else {
                                t[d] = l;
                                if (e(t, r, u)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                } else
                    while (t = t[i])
                        if (s || t.nodeType === 1)
                            if (e(t, r, u)) return t
            }
        }

        function ft(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function lt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }

        function ht(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                f = at(function(e) {
                    return e === t
                }, u, !0),
                l = at(function(e) {
                    return T.call(t, e) > -1
                }, u, !0),
                h = [
                    function(e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }
                ];
            for (; a < s; a++)
                if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[d]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type]) break;
                        return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                    }
                    h.push(n)
                }
            return ft(h)
        }

        function pt(e, t) {
            var r = t.length > 0,
                s = e.length > 0,
                o = function(u, a, f, l, h) {
                    var p, d, v, m = [],
                        y = 0,
                        w = "0",
                        x = u && [],
                        T = h != null,
                        N = c,
                        C = u || s && i.find.TAG("*", h && a.parentNode || a),
                        k = b += N == null ? 1 : Math.E;
                    T && (c = a !== g && a, n = o.el);
                    for (;
                        (p = C[w]) != null; w++) {
                        if (s && p) {
                            for (d = 0; v = e[d]; d++)
                                if (v(p, a, f)) {
                                    l.push(p);
                                    break
                                }
                            T && (b = k, n = ++o.el)
                        }
                        r && ((p = !v && p) && y--, u && x.push(p))
                    }
                    y += w;
                    if (r && w !== y) {
                        for (d = 0; v = t[d]; d++) v(x, m, a, f);
                        if (u) {
                            if (y > 0)
                                while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                            m = lt(m)
                        }
                        S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                    }
                    return T && (b = k, c = N), x
                };
            return o.el = 0, r ? N(o) : o
        }

        function dt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) nt(e, t[r], n);
            return n
        }

        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e),
                p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l])
                        if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                            u.splice(o, 1), e = r.length && u.join("");
                            if (!e) return S.apply(n, x.call(r, 0)), n;
                            break
                        }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }

        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0,
            p = "undefined",
            d = ("sizcache" + Math.random()).replace(".", ""),
            m = String,
            g = e.document,
            y = g.documentElement,
            b = 0,
            w = 0,
            E = [].pop,
            S = [].push,
            x = [].slice,
            T = [].indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            }, N = function(e, t) {
                return e[d] = t == null || t, e
            }, C = function() {
                var e = {}, t = [];
                return N(function(n, r) {
                    return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                }, e)
            }, k = C(),
            L = C(),
            A = C(),
            O = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            _ = M.replace("w", "w#"),
            D = "([*^$|!~]?=)",
            P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
            H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
            B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
            j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            F = new RegExp("^" + O + "*," + O + "*"),
            I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
            q = new RegExp(H),
            R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            U = /^:not/,
            z = /[\x20\t\r\n\f]*[+~]/,
            W = /:not\($/,
            X = /h\d/i,
            V = /input|select|textarea|button/i,
            $ = /\\(?!\\)/g,
            J = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + H),
                POS: new RegExp(B, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
            }, K = function(e) {
                var t = g.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, Q = K(function(e) {
                return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
            }),
            G = K(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
            }),
            Y = K(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }),
            Z = K(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }),
            et = K(function(e) {
                e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                return r = !g.getElementById(d), y.removeChild(e), t
            });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function(e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n
            }
        }
        nt.matches = function(e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function(e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += s(t);
            return n
        }, o = nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ? function(e, t) {
            return t && !! (e.compareDocumentPosition(t) & 16)
        } : function(e, t) {
            while (t = t.parentNode)
                if (t === e) return !0;
            return !1
        }, nt.attr = function(e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function(e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function(e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                },
                TAG: Q ? function(e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [],
                            s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                },
                NAME: et && function(e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                },
                CLASS: Z && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3];
                    else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                } : function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ? function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1) {
                                    i++;
                                    if (e === t) break
                                }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function(t) {
                        var n = t;
                        switch (e) {
                            case "only":
                            case "first":
                                while (n = n.previousSibling)
                                    if (n.nodeType === 1) return !1;
                                if (e === "first") return !0;
                                n = t;
                            case "last":
                                while (n = n.nextSibling)
                                    if (n.nodeType === 1) return !1;
                                return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function(e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(j, "$1"));
                    return r[d] ? N(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function(e) {
                    return function(t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return X.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function() {
                    return [0]
                }),
                last: st(function(e, t) {
                    return [t - 1]
                }),
                eq: st(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: st(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ? function(e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function(e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                u = t.parentNode,
                a = o;
            if (o === u) return ot(e, t);
            if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++)
                if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
            var t, n = [],
                r = 1,
                i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll && function() {
            var e, t = vt,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [":focus"],
                s = [":active"],
                u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0,
                        c = d,
                        h = r,
                        p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p) try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {} finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n)) try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11) return a
                } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function(e) {
            return v.access(this, function(e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (;
                (n = this[r]) != null; r++)
                if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return v.clone(this, e, t)
            })
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                v(this).domManip(e, n, r)
            });
            if (v.isFunction(f)) return this.each(function(i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function(e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function(e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function(e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0;
                (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string")
                    if (!gt.test(u)) u = t.createTextNode(u);
                    else {
                        y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                        while (l--) c = c.lastChild;
                        if (!v.support.tbody) {
                            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                        }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                    }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked)
                for (s = 0;
                    (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function(e) {
                    if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0;
                    (u = b[s]) != null; s++)
                    if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for (;
                (i = e[o]) != null; o++)
                if (t || v.acceptData(i)) {
                    r = i[u], n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                    }
                }
        }
    }),
    function() {
        var e, t;
        v.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        }, Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Vt = {
            letterSpacing: 0,
            fontWeight: 400
        }, $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {}, b = {}, w = {}, E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Fn() || In()
    } : Fn,
    function(e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [
                function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = zn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = v.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            }, l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
}(window),
function(e, t) {
    function l(e) {
        return f.PF.compile(e || "nplurals=2; plural=(n != 1);")
    }

    function c(e, t) {
        this._key = e, this._i18n = t
    }
    var n = Array.prototype,
        r = Object.prototype,
        i = n.slice,
        s = r.hasOwnProperty,
        o = n.forEach,
        u = {}, a = {
            forEach: function(e, t, n) {
                var r, i, a;
                if (e === null) return;
                if (o && e.forEach === o) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (r = 0, i = e.length; r < i; r++)
                        if (r in e && t.call(n, e[r], r, e) === u) return
                } else
                    for (a in e)
                        if (s.call(e, a) && t.call(n, e[a], a, e) === u) return
            },
            extend: function(e) {
                return this.forEach(i.call(arguments, 1), function(t) {
                    for (var n in t) e[n] = t[n]
                }), e
            }
        }, f = function(e) {
            this.defaults = {
                locale_data: {
                    messages: {
                        "": {
                            domain: "messages",
                            lang: "en",
                            plural_forms: "nplurals=2; plural=(n != 1);"
                        }
                    }
                },
                domain: "messages"
            }, this.options = a.extend({}, this.defaults, e), this.textdomain(this.options.domain);
            if (e.domain && !this.options.locale_data[this.options.domain]) throw new Error("Text domain set to non-existent domain: `" + e.domain + "`")
        };
    f.context_delimiter = String.fromCharCode(4), a.extend(c.prototype, {
        onDomain: function(e) {
            return this._domain = e, this
        },
        withContext: function(e) {
            return this._context = e, this
        },
        ifPlural: function(e, t) {
            return this._val = e, this._pkey = t, this
        },
        fetch: function(e) {
            return {}.toString.call(e) != "[object Array]" && (e = [].slice.call(arguments)), (e && e.length ? f.sprintf : function(e) {
                return e
            })(this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val), e)
        }
    }), a.extend(f.prototype, {
        translate: function(e) {
            return new c(e, this)
        },
        textdomain: function(e) {
            if (!e) return this._textdomain;
            this._textdomain = e
        },
        gettext: function(e) {
            return this.dcnpgettext.call(this, t, t, e)
        },
        dgettext: function(e, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        dcgettext: function(e, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        ngettext: function(e, n, r) {
            return this.dcnpgettext.call(this, t, t, e, n, r)
        },
        dngettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        dcngettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        pgettext: function(e, n) {
            return this.dcnpgettext.call(this, t, e, n)
        },
        dpgettext: function(e, t, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        dcpgettext: function(e, t, n) {
            return this.dcnpgettext.call(this, e, t, n)
        },
        npgettext: function(e, n, r, i) {
            return this.dcnpgettext.call(this, t, e, n, r, i)
        },
        dnpgettext: function(e, t, n, r, i) {
            return this.dcnpgettext.call(this, e, t, n, r, i)
        },
        dcnpgettext: function(e, t, n, r, i) {
            r = r || n, e = e || this._textdomain, i = typeof i == "undefined" ? 1 : i;
            var s;
            if (!this.options) return s = new f, s.dcnpgettext.call(s, undefined, undefined, n, r, i);
            if (!this.options.locale_data) throw new Error("No locale data provided.");
            if (!this.options.locale_data[e]) throw new Error("Domain `" + e + "` was not found.");
            if (!this.options.locale_data[e][""]) throw new Error("No locale meta information provided.");
            if (!n) throw new Error("No translation key found.");
            if (typeof i != "number") {
                i = parseInt(i, 10);
                if (isNaN(i)) throw new Error("The number that was passed in is not a number.")
            }
            var o = t ? t + f.context_delimiter + n : n,
                u = this.options.locale_data,
                a = u[e],
                c = a[""].plural_forms || (u.messages || this.defaults.locale_data.messages)[""].plural_forms,
                h = l(c)(i) + 1,
                p, d;
            if (!a) throw new Error("No domain named `" + e + "` could be found.");
            return p = a[o], !p || h >= p.length ? (this.options.missing_key_callback && this.options.missing_key_callback(o), d = [null, n, r], d[l(c)(i) + 1]) : (d = p[h], d ? d : (d = [null, n, r], d[l(c)(i) + 1]))
        }
    });
    var h = function() {
        function e(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
        }

        function t(e, t) {
            for (var n = []; t > 0; n[--t] = e);
            return n.join("")
        }
        var n = function() {
            return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), n.format.call(null, n.cache[arguments[0]], arguments)
        };
        return n.format = function(n, r) {
            var i = 1,
                s = n.length,
                o = "",
                u, a = [],
                f, l, c, p, d, v;
            for (f = 0; f < s; f++) {
                o = e(n[f]);
                if (o === "string") a.push(n[f]);
                else if (o === "array") {
                    c = n[f];
                    if (c[2]) {
                        u = r[i];
                        for (l = 0; l < c[2].length; l++) {
                            if (!u.hasOwnProperty(c[2][l])) throw h('[sprintf] property "%s" does not exist', c[2][l]);
                            u = u[c[2][l]]
                        }
                    } else c[1] ? u = r[c[1]] : u = r[i++]; if (/[^s]/.test(c[8]) && e(u) != "number") throw h("[sprintf] expecting number but found %s", e(u));
                    if (typeof u == "undefined" || u === null) u = "";
                    switch (c[8]) {
                        case "b":
                            u = u.toString(2);
                            break;
                        case "c":
                            u = String.fromCharCode(u);
                            break;
                        case "d":
                            u = parseInt(u, 10);
                            break;
                        case "e":
                            u = c[7] ? u.toExponential(c[7]) : u.toExponential();
                            break;
                        case "f":
                            u = c[7] ? parseFloat(u).toFixed(c[7]) : parseFloat(u);
                            break;
                        case "o":
                            u = u.toString(8);
                            break;
                        case "s":
                            u = (u = String(u)) && c[7] ? u.substring(0, c[7]) : u;
                            break;
                        case "u":
                            u = Math.abs(u);
                            break;
                        case "x":
                            u = u.toString(16);
                            break;
                        case "X":
                            u = u.toString(16).toUpperCase()
                    }
                    u = /[def]/.test(c[8]) && c[3] && u >= 0 ? "+" + u : u, d = c[4] ? c[4] == "0" ? "0" : c[4].charAt(1) : " ", v = c[6] - String(u).length, p = c[6] ? t(d, v) : "", a.push(c[5] ? u + p : p + u)
                }
            }
            return a.join("")
        }, n.cache = {}, n.parse = function(e) {
            var t = e,
                n = [],
                r = [],
                i = 0;
            while (t) {
                if ((n = /^[^\x25]+/.exec(t)) !== null) r.push(n[0]);
                else if ((n = /^\x25{2}/.exec(t)) !== null) r.push("%");
                else {
                    if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null) throw "[sprintf] huh?";
                    if (n[2]) {
                        i |= 1;
                        var s = [],
                            o = n[2],
                            u = [];
                        if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null) throw "[sprintf] huh?";
                        s.push(u[1]);
                        while ((o = o.substring(u[0].length)) !== "")
                            if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) s.push(u[1]);
                            else {
                                if ((u = /^\[(\d+)\]/.exec(o)) === null) throw "[sprintf] huh?";
                                s.push(u[1])
                            }
                        n[2] = s
                    } else i |= 2; if (i === 3) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                    r.push(n)
                }
                t = t.substring(n[0].length)
            }
            return r
        }, n
    }(),
        p = function(e, t) {
            return t.unshift(e), h.apply(null, t)
        };
    f.parse_plural = function(e, t) {
        return e = e.replace(/n/g, t), f.parse_expression(e)
    }, f.sprintf = function(e, t) {
        return {}.toString.call(t) == "[object Array]" ? p(e, [].slice.call(t)) : h.apply(this, [].slice.call(arguments))
    }, f.prototype.sprintf = function() {
        return f.sprintf.apply(this, arguments)
    }, f.PF = {}, f.PF.parse = function(e) {
        var t = f.PF.extractPluralExpr(e);
        return f.PF.parser.parse.call(f.PF.parser, t)
    }, f.PF.compile = function(e) {
        function t(e) {
            return e === !0 ? 1 : e ? e : 0
        }
        var n = f.PF.parse(e);
        return function(e) {
            return t(f.PF.interpreter(n)(e))
        }
    }, f.PF.interpreter = function(e) {
        return function(t) {
            var n;
            switch (e.type) {
                case "GROUP":
                    return f.PF.interpreter(e.expr)(t);
                case "TERNARY":
                    if (f.PF.interpreter(e.expr)(t)) return f.PF.interpreter(e.truthy)(t);
                    return f.PF.interpreter(e.falsey)(t);
                case "OR":
                    return f.PF.interpreter(e.left)(t) || f.PF.interpreter(e.right)(t);
                case "AND":
                    return f.PF.interpreter(e.left)(t) && f.PF.interpreter(e.right)(t);
                case "LT":
                    return f.PF.interpreter(e.left)(t) < f.PF.interpreter(e.right)(t);
                case "GT":
                    return f.PF.interpreter(e.left)(t) > f.PF.interpreter(e.right)(t);
                case "LTE":
                    return f.PF.interpreter(e.left)(t) <= f.PF.interpreter(e.right)(t);
                case "GTE":
                    return f.PF.interpreter(e.left)(t) >= f.PF.interpreter(e.right)(t);
                case "EQ":
                    return f.PF.interpreter(e.left)(t) == f.PF.interpreter(e.right)(t);
                case "NEQ":
                    return f.PF.interpreter(e.left)(t) != f.PF.interpreter(e.right)(t);
                case "MOD":
                    return f.PF.interpreter(e.left)(t) % f.PF.interpreter(e.right)(t);
                case "VAR":
                    return t;
                case "NUM":
                    return e.val;
                default:
                    throw new Error("Invalid Token found.")
            }
        }
    }, f.PF.extractPluralExpr = function(e) {
        e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), /;\s*$/.test(e) || (e = e.concat(";"));
        var t = /nplurals\=(\d+);/,
            n = /plural\=(.*);/,
            r = e.match(t),
            i = {}, s;
        if (r.length > 1) {
            i.nplurals = r[1], e = e.replace(t, ""), s = e.match(n);
            if (!(s && s.length > 1)) throw new Error("`plural` expression not found: " + e);
            return s[1]
        }
        throw new Error("nplurals not found in plural_forms string: " + e)
    }, f.PF.parser = function() {
        var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                expressions: 3,
                e: 4,
                EOF: 5,
                "?": 6,
                ":": 7,
                "||": 8,
                "&&": 9,
                "<": 10,
                "<=": 11,
                ">": 12,
                ">=": 13,
                "!=": 14,
                "==": 15,
                "%": 16,
                "(": 17,
                ")": 18,
                n: 19,
                NUMBER: 20,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                6: "?",
                7: ":",
                8: "||",
                9: "&&",
                10: "<",
                11: "<=",
                12: ">",
                13: ">=",
                14: "!=",
                15: "==",
                16: "%",
                17: "(",
                18: ")",
                19: "n",
                20: "NUMBER"
            },
            productions_: [0, [3, 2],
                [4, 5],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 3],
                [4, 1],
                [4, 1]
            ],
            performAction: function(t, n, r, i, s, o, u) {
                var a = o.length - 1;
                switch (s) {
                    case 1:
                        return {
                            type: "GROUP",
                            expr: o[a - 1]
                        };
                    case 2:
                        this.$ = {
                            type: "TERNARY",
                            expr: o[a - 4],
                            truthy: o[a - 2],
                            falsey: o[a]
                        };
                        break;
                    case 3:
                        this.$ = {
                            type: "OR",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 4:
                        this.$ = {
                            type: "AND",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 5:
                        this.$ = {
                            type: "LT",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 6:
                        this.$ = {
                            type: "LTE",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 7:
                        this.$ = {
                            type: "GT",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 8:
                        this.$ = {
                            type: "GTE",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 9:
                        this.$ = {
                            type: "NEQ",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 10:
                        this.$ = {
                            type: "EQ",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 11:
                        this.$ = {
                            type: "MOD",
                            left: o[a - 2],
                            right: o[a]
                        };
                        break;
                    case 12:
                        this.$ = {
                            type: "GROUP",
                            expr: o[a - 1]
                        };
                        break;
                    case 13:
                        this.$ = {
                            type: "VAR"
                        };
                        break;
                    case 14:
                        this.$ = {
                            type: "NUM",
                            val: Number(t)
                        }
                }
            },
            table: [{
                3: 1,
                4: 2,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                1: [3]
            }, {
                5: [1, 6],
                6: [1, 7],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16]
            }, {
                4: 17,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                5: [2, 13],
                6: [2, 13],
                7: [2, 13],
                8: [2, 13],
                9: [2, 13],
                10: [2, 13],
                11: [2, 13],
                12: [2, 13],
                13: [2, 13],
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                18: [2, 13]
            }, {
                5: [2, 14],
                6: [2, 14],
                7: [2, 14],
                8: [2, 14],
                9: [2, 14],
                10: [2, 14],
                11: [2, 14],
                12: [2, 14],
                13: [2, 14],
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                18: [2, 14]
            }, {
                1: [2, 1]
            }, {
                4: 18,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 19,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 20,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 21,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 22,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 23,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 24,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 25,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 26,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                4: 27,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                6: [1, 7],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [1, 28]
            }, {
                6: [1, 7],
                7: [1, 29],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16]
            }, {
                5: [2, 3],
                6: [2, 3],
                7: [2, 3],
                8: [2, 3],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 3]
            }, {
                5: [2, 4],
                6: [2, 4],
                7: [2, 4],
                8: [2, 4],
                9: [2, 4],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 4]
            }, {
                5: [2, 5],
                6: [2, 5],
                7: [2, 5],
                8: [2, 5],
                9: [2, 5],
                10: [2, 5],
                11: [2, 5],
                12: [2, 5],
                13: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [1, 16],
                18: [2, 5]
            }, {
                5: [2, 6],
                6: [2, 6],
                7: [2, 6],
                8: [2, 6],
                9: [2, 6],
                10: [2, 6],
                11: [2, 6],
                12: [2, 6],
                13: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [1, 16],
                18: [2, 6]
            }, {
                5: [2, 7],
                6: [2, 7],
                7: [2, 7],
                8: [2, 7],
                9: [2, 7],
                10: [2, 7],
                11: [2, 7],
                12: [2, 7],
                13: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [1, 16],
                18: [2, 7]
            }, {
                5: [2, 8],
                6: [2, 8],
                7: [2, 8],
                8: [2, 8],
                9: [2, 8],
                10: [2, 8],
                11: [2, 8],
                12: [2, 8],
                13: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [1, 16],
                18: [2, 8]
            }, {
                5: [2, 9],
                6: [2, 9],
                7: [2, 9],
                8: [2, 9],
                9: [2, 9],
                10: [2, 9],
                11: [2, 9],
                12: [2, 9],
                13: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [1, 16],
                18: [2, 9]
            }, {
                5: [2, 10],
                6: [2, 10],
                7: [2, 10],
                8: [2, 10],
                9: [2, 10],
                10: [2, 10],
                11: [2, 10],
                12: [2, 10],
                13: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [1, 16],
                18: [2, 10]
            }, {
                5: [2, 11],
                6: [2, 11],
                7: [2, 11],
                8: [2, 11],
                9: [2, 11],
                10: [2, 11],
                11: [2, 11],
                12: [2, 11],
                13: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                18: [2, 11]
            }, {
                5: [2, 12],
                6: [2, 12],
                7: [2, 12],
                8: [2, 12],
                9: [2, 12],
                10: [2, 12],
                11: [2, 12],
                12: [2, 12],
                13: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                18: [2, 12]
            }, {
                4: 30,
                17: [1, 3],
                19: [1, 4],
                20: [1, 5]
            }, {
                5: [2, 2],
                6: [1, 7],
                7: [2, 2],
                8: [1, 8],
                9: [1, 9],
                10: [1, 10],
                11: [1, 11],
                12: [1, 12],
                13: [1, 13],
                14: [1, 14],
                15: [1, 15],
                16: [1, 16],
                18: [2, 2]
            }],
            defaultActions: {
                6: [2, 1]
            },
            parseError: function(t, n) {
                throw new Error(t)
            },
            parse: function(t) {
                function d(e) {
                    r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
                }

                function v() {
                    var e;
                    return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
                }
                var n = this,
                    r = [0],
                    i = [null],
                    s = [],
                    o = this.table,
                    u = "",
                    a = 0,
                    f = 0,
                    l = 0,
                    c = 2,
                    h = 1;
                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
                var p = this.lexer.yylloc;
                s.push(p), typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
                var m, g, y, b, w, E, S = {}, x, T, N, C;
                for (;;) {
                    y = r[r.length - 1], this.defaultActions[y] ? b = this.defaultActions[y] : (m == null && (m = v()), b = o[y] && o[y][m]);
                    if (typeof b == "undefined" || !b.length || !b[0]) {
                        if (!l) {
                            C = [];
                            for (x in o[y]) this.terminals_[x] && x > 2 && C.push("'" + this.terminals_[x] + "'");
                            var k = "";
                            this.lexer.showPosition ? k = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + C.join(", ") + ", got '" + this.terminals_[m] + "'" : k = "Parse error on line " + (a + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'"), this.parseError(k, {
                                text: this.lexer.match,
                                token: this.terminals_[m] || m,
                                line: this.lexer.yylineno,
                                loc: p,
                                expected: C
                            })
                        }
                        if (l == 3) {
                            if (m == h) throw new Error(k || "Parsing halted.");
                            f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, m = v()
                        }
                        for (;;) {
                            if (c.toString() in o[y]) break;
                            if (y == 0) throw new Error(k || "Parsing halted.");
                            d(1), y = r[r.length - 1]
                        }
                        g = m, m = c, y = r[r.length - 1], b = o[y] && o[y][c], l = 3
                    }
                    if (b[0] instanceof Array && b.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + y + ", token: " + m);
                    switch (b[0]) {
                        case 1:
                            r.push(m), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(b[1]), m = null, g ? (m = g, g = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                            break;
                        case 2:
                            T = this.productions_[b[1]][1], S.$ = i[i.length - T], S._$ = {
                                first_line: s[s.length - (T || 1)].first_line,
                                last_line: s[s.length - 1].last_line,
                                first_column: s[s.length - (T || 1)].first_column,
                                last_column: s[s.length - 1].last_column
                            }, E = this.performAction.call(S, u, f, a, this.yy, b[1], i, s);
                            if (typeof E != "undefined") return E;
                            T && (r = r.slice(0, -1 * T * 2), i = i.slice(0, -1 * T), s = s.slice(0, -1 * T)), r.push(this.productions_[b[1]][0]), i.push(S.$), s.push(S._$), N = o[r[r.length - 2]][r[r.length - 1]], r.push(N);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        }, t = function() {
                var e = {
                    EOF: 1,
                    parseError: function(t, n) {
                        if (!this.yy.parseError) throw new Error(t);
                        this.yy.parseError(t, n)
                    },
                    setInput: function(e) {
                        return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this
                    },
                    input: function() {
                        var e = this._input[0];
                        this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
                        var t = e.match(/\n/);
                        return t && this.yylineno++, this._input = this._input.slice(1), e
                    },
                    unput: function(e) {
                        return this._input = e + this._input, this
                    },
                    more: function() {
                        return this._more = !0, this
                    },
                    pastInput: function() {
                        var e = this.matched.substr(0, this.matched.length - this.match.length);
                        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var e = this.match;
                        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var e = this.pastInput(),
                            t = (new Array(e.length + 1)).join("-");
                        return e + this.upcomingInput() + "\n" + t + "^"
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var e, t, n, r;
                        this._more || (this.yytext = "", this.match = "");
                        var i = this._currentRules();
                        for (var s = 0; s < i.length; s++) {
                            t = this._input.match(this.rules[i[s]]);
                            if (t) {
                                r = t[0].match(/\n.*/g), r && (this.yylineno += r.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: r ? r[r.length - 1].length - 1 : this.yylloc.last_column + t[0].length
                                }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, i[s], this.conditionStack[this.conditionStack.length - 1]);
                                if (e) return e;
                                return
                            }
                        }
                        if (this._input === "") return this.EOF;
                        this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var t = this.next();
                        return typeof t != "undefined" ? t : this.lex()
                    },
                    begin: function(t) {
                        this.conditionStack.push(t)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(t) {
                        this.begin(t)
                    }
                };
                return e.performAction = function(t, n, r, i) {
                    var s = i;
                    switch (r) {
                        case 0:
                            break;
                        case 1:
                            return 20;
                        case 2:
                            return 19;
                        case 3:
                            return 8;
                        case 4:
                            return 9;
                        case 5:
                            return 6;
                        case 6:
                            return 7;
                        case 7:
                            return 11;
                        case 8:
                            return 13;
                        case 9:
                            return 10;
                        case 10:
                            return 12;
                        case 11:
                            return 14;
                        case 12:
                            return 15;
                        case 13:
                            return 16;
                        case 14:
                            return 17;
                        case 15:
                            return 18;
                        case 16:
                            return 5;
                        case 17:
                            return "INVALID"
                    }
                }, e.rules = [/^\s+/, /^[0-9]+(\.[0-9]+)?\b/, /^n\b/, /^\|\|/, /^&&/, /^\?/, /^:/, /^<=/, /^>=/, /^</, /^>/, /^!=/, /^==/, /^%/, /^\(/, /^\)/, /^$/, /^./], e.conditions = {
                    INITIAL: {
                        rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        inclusive: !0
                    }
                }, e
            }();
        return e.lexer = t, e
    }(), typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = f), exports.Jed = f) : (typeof define == "function" && define.amd && define("jed", [], function() {
        return f
    }), e.Jed = f)
}(this),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-13 16:02+0200",
                    "PO-Revision-Date": "2013-09-15 11:44+0200",
                    "Last-Translator": "JC Brand <jc@opkode.com>",
                    "Language-Team": "Afrikaans",
                    Language: "af",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=ASCII",
                    "Content-Transfer-Encoding": "8bit",
                    domain: "converse",
                    lang: "af",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                Disconnected: [null, "Verbindung onderbreek"],
                Error: [null, "Fout"],
                Connecting: [null, "Verbind tans"],
                "Connection Failed": [null, "Verbinding het gefaal"],
                Authenticating: [null, "Besig om te bekragtig"],
                "Authentication Failed": [null, "Bekragtiging het gefaal"],
                Disconnecting: [null, "Onderbreek verbinding"],
                me: [null, "ek"],
                "%1$s is typing": [null, "%1$s tik tans"],
                "Show this menu": [null, "Vertoon hierdie keuselys"],
                "Write in the third person": [null, "Skryf in die derde persoon"],
                "Remove messages": [null, "Verwyder boodskappe"],
                "Personal message": [null, "Persoonlike boodskap"],
                Contacts: [null, "Kontakte"],
                Online: [null, "Aangemeld"],
                Busy: [null, "Besig"],
                Away: [null, "Afwesig"],
                Offline: [null, "Afgemeld"],
                "Click to add new chat contacts": [null, "Kliek om nuwe kletskontakte by te voeg"],
                "Add a contact": [null, "Voeg 'n kontak by"],
                "Contact username": [null, "Konak gebruikersnaam"],
                Add: [null, "Voeg by"],
                "Contact name": [null, "Kontaknaam"],
                Search: [null, "Soek"],
                "No users found": [null, "Geen gebruikers gevind"],
                "Click to add as a chat contact": [null, "Kliek om as kletskontak by te voeg"],
                "Click to open this room": [null, "Kliek om hierdie kletskamer te open"],
                "Show more information on this room": [null, "Wys meer inligting aangaande hierdie kletskamer"],
                "Description:": [null, "Beskrywing:"],
                "Occupants:": [null, "Deelnemers:"],
                "Features:": [null, "Eienskappe:"],
                "Requires authentication": [null, "Benodig magtiging"],
                Hidden: [null, "Verskuil"],
                "Requires an invitation": [null, "Benodig 'n uitnodiging"],
                Moderated: [null, "Gemodereer"],
                "Non-anonymous": [null, "Nie-anoniem"],
                "Open room": [null, "Oop kletskamer"],
                "Permanent room": [null, "Permanente kamer"],
                Public: [null, "Publiek"],
                "Semi-anonymous": [null, "Deels anoniem"],
                "Temporary room": [null, "Tydelike kamer"],
                Unmoderated: [null, "Ongemodereer"],
                Rooms: [null, "Kamers"],
                "Room name": [null, "Kamer naam"],
                Nickname: [null, "Bynaam"],
                Server: [null, "Bediener"],
                Join: [null, "Sluit aan"],
                "Show rooms": [null, "Wys kamers"],
                "No rooms on %1$s": [null, "Geen kamers op %1$s"],
                "Rooms on %1$s": [null, "Kamers op %1$s"],
                "Set chatroom topic": [null, "Stel kletskamer onderwerp"],
                "Kick user from chatroom": [null, "Skop gebruiker uit die kletskamer"],
                "Ban user from chatroom": [null, "Verban gebruiker vanuit die kletskamer"],
                Message: [null, "Boodskap"],
                Save: [null, "Stoor"],
                Cancel: [null, "Kanseleer"],
                "An error occurred while trying to save the form.": [null, "A fout het voorgekom terwyl probeer is om die vorm te stoor."],
                "This chatroom requires a password": [null, "Hiedie kletskamer benodig 'n wagwoord"],
                "Password: ": [null, "Wagwoord:"],
                Submit: [null, "Dien in"],
                "This room is not anonymous": [null, "Hierdie vertrek is nie anoniem nie"],
                "This room now shows unavailable members": [null, "Hierdie vertrek wys nou onbeskikbare lede"],
                "This room does not show unavailable members": [null, "Hierdie vertrek wys nie onbeskikbare lede nie"],
                "Non-privacy-related room configuration has changed": [null, "Nie-privaatheidverwante kamer instellings het verander"],
                "Room logging is now enabled": [null, "Kamer log is nou aangeskakel"],
                "Room logging is now disabled": [null, "Kamer log is nou afgeskakel"],
                "This room is now non-anonymous": [null, "Hiedie kamer is nou nie anoniem nie"],
                "This room is now semi-anonymous": [null, "Hierdie kamer is nou gedeeltelik anoniem"],
                "This room is now fully-anonymous": [null, "Hierdie kamer is nou ten volle anoniem"],
                "A new room has been created": [null, "'n Nuwe kamer is geskep"],
                "Your nickname has been changed": [null, "Jou bynaam is verander"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> is verban"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> is uitgeskop"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> is verwyder a.g.v 'n verandering van affiliasie"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> is nie 'n lid nie, en dus verwyder"],
                "You have been banned from this room": [null, "Jy is uit die kamer verban"],
                "You have been kicked from this room": [null, "Jy is uit die kamer geskop"],
                "You have been removed from this room because of an affiliation change": [null, "Jy is vanuit die kamer verwyder a.g.v 'n verandering van affiliasie"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Jy is vanuit die kamer verwyder omdat die kamer nou slegs tot lede beperk word en jy nie 'n lid is nie."],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Jy is van hierdie kamer verwyder aangesien die MUC (Multi-user chat) diens nou afgeskakel word."],
                "You are not on the member list of this room": [null, "Jy is nie op die ledelys van hierdie kamer nie"],
                "No nickname was specified": [null, "Geen bynaam verskaf nie"],
                "You are not allowed to create new rooms": [null, "Jy word nie toegelaat om nog kamers te skep nie"],
                "Your nickname doesn't conform to this room's policies": [null, "Jou bynaam voldoen nie aan die kamer se beleid nie"],
                "Your nickname is already taken": [null, "Jou bynaam is reeds geneem"],
                "This room does not (yet) exist": [null, "Hierdie kamer bestaan tans (nog) nie"],
                "This room has reached it's maximum number of occupants": [null, "Hierdie kamer het sy maksimum aantal deelnemers bereik"],
                "Topic set by %1$s to: %2$s": [null, "Onderwerp deur %1$s bygewerk na: %2$s"],
                "This user is a moderator": [null, "Hierdie gebruiker is 'n moderator"],
                "This user can send messages in this room": [null, "Hierdie gebruiker kan boodskappe na die kamer stuur"],
                "This user can NOT send messages in this room": [null, "Hierdie gebruiker kan NIE boodskappe na die kamer stuur nie"],
                "Click to chat with this contact": [null, "Kliek om met hierdie kontak te klets"],
                "Click to remove this contact": [null, "Kliek om hierdie kontak te verwyder"],
                "This contact is busy": [null, "Hierdie persoon is besig"],
                "This contact is online": [null, "Hierdie persoon is aanlyn"],
                "This contact is offline": [null, "Hierdie persoon is aflyn"],
                "This contact is unavailable": [null, "Hierdie persoon is onbeskikbaar"],
                "This contact is away for an extended period": [null, "Hierdie persoon is vir lank afwesig"],
                "This contact is away": [null, "Hierdie persoon is afwesig"],
                "Contact requests": [null, "Kontak versoeke"],
                "My contacts": [null, "My kontakte"],
                "Pending contacts": [null, "Hangende kontakte"],
                "Custom status": [null, "Doelgemaakte status"],
                "Click to change your chat status": [null, "Kliek om jou klets-status te verander"],
                "Click here to write a custom status message": [null, "Kliek hier om jou eie statusboodskap te skryf"],
                online: [null, "aangemeld"],
                busy: [null, "besig"],
                "away for long": [null, "vir lank afwesig"],
                away: [null, "afwesig"],
                "I am %1$s": [null, "Ek is %1$s"],
                "Sign in": [null, "Teken in"],
                "XMPP/Jabber Username:": [null, "XMPP/Jabber Gebruikersnaam:"],
                "Password:": [null, "Wagwoord"],
                "Log In": [null, "Meld aan"],
                "BOSH Service URL:": [null, "BOSH bediener URL"],
                "Online Contacts": [null, "Kontakte aangemeld"],
                Connected: [null, "Verbind"],
                Attached: [null, "Geheg"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("af", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.af = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-13 16:02+0200",
                    "PO-Revision-Date": "2013-09-15 11:44+0200",
                    "Last-Translator": "JC Brand <jc@opkode.com>",
                    "Language-Team": "German",
                    Language: "de",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    "Plural-Forms": "nplurals=2; plural=(n != 1);",
                    domain: "converse",
                    lang: "de",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                Disconnected: [null, "Verbindung unterbrochen."],
                Error: [null, "Fehler"],
                Connecting: [null, "Verbindungsaufbau â€¦"],
                "Connection Failed": [null, "Entfernte Verbindung fehlgeschlagen"],
                Authenticating: [null, "Authentifizierung"],
                "Authentication Failed": [null, "Authentifizierung gescheitert"],
                Disconnecting: [null, "Trenne Verbindung"],
                me: [null, "Ich"],
                "%1$s is typing": [null, "%1$s tippt"],
                "Show this menu": [null, "Dieses MenÃ¼ anzeigen"],
                "Write in the third person": [null, "In der dritten Person schreiben"],
                "Remove messages": [null, "Nachrichten entfernen"],
                "Personal message": [null, "PersÃ¶nliche Nachricht"],
                Contacts: [null, "Kontakte"],
                Online: [null, "Online"],
                Busy: [null, "BeschÃ¤fticht"],
                Away: [null, "Abwesend"],
                Offline: [null, "Abgemeldet"],
                "Click to add new chat contacts": [null, "Klicken Sie, um einen neuen Kontakt hinzuzufÃ¼gen"],
                "Add a contact": [null, "Kontakte hinzufÃ¼gen"],
                "Contact username": [null, "Benutzername"],
                Add: [null, "HinzufÃ¼gen"],
                "Contact name": [null, "Name des Kontakts"],
                Search: [null, "Suche"],
                "No users found": [null, "Keine Benutzer gefunden"],
                "Click to add as a chat contact": [null, "Hier klicken um als Kontakt hinzuzufÃ¼gen"],
                "Click to open this room": [null, "Hier klicken um diesen Raum zu Ã¶ffnen"],
                "Show more information on this room": [null, "Mehr Information Ã¼ber diesen Raum zeigen"],
                "Description:": [null, "Beschreibung"],
                "Occupants:": [null, "Teilnehmer"],
                "Features:": [null, "Funktionen:"],
                "Requires authentication": [null, "Authentifizierung erforderlich"],
                Hidden: [null, "Versteckt"],
                "Requires an invitation": [null, "Einladung erforderlich"],
                Moderated: [null, "Moderiert"],
                "Non-anonymous": [null, "Nicht anonym"],
                "Open room": [null, "Offener Raum"],
                "Permanent room": [null, "Dauerhafter Raum"],
                Public: [null, "Ã–ffentlich"],
                "Semi-anonymous": [null, "Teils anonym"],
                "Temporary room": [null, "VorÃ¼bergehender Raum"],
                Unmoderated: [null, "Unmoderiert"],
                Rooms: [null, "RÃ¤ume"],
                "Room name": [null, "Raumname"],
                Nickname: [null, "Spitzname"],
                Server: [null, "Server"],
                Join: [null, "Beitreten"],
                "Show rooms": [null, "RÃ¤ume anzeigen"],
                "No rooms on %1$s": [null, "Keine RÃ¤ume auf %1$s"],
                "Rooms on %1$s": [null, "RÃ¤ume auf %1$s"],
                "Set chatroom topic": [null, "Chatraum Thema festlegen"],
                "Kick user from chatroom": [null, "Werfe einen Benutzer aus dem Raum."],
                "Ban user from chatroom": [null, "Verbanne einen Benutzer aus dem Raum."],
                Message: [null, "Nachricht"],
                Save: [null, "Speichern"],
                Cancel: [null, "Abbrechen"],
                "An error occurred while trying to save the form.": [null, "Beim Speichern der Formular is ein Fehler aufgetreten."],
                "This chatroom requires a password": [null, "Passwort wird fÃ¼r die Anmeldung benÃ¶tigt."],
                "Password: ": [null, "Passwort: "],
                Submit: [null, "Einreichen"],
                "This room is not anonymous": [null, "Dieser Raum ist nicht anonym"],
                "This room now shows unavailable members": [null, "Dieser Raum zeigt jetzt unferfÃ¼gbare Mitglieder"],
                "This room does not show unavailable members": [null, "Dieser Raum zeigt nicht unverfÃ¼gbare Mitglieder"],
                "Non-privacy-related room configuration has changed": [null, "Die Konfiguration, die nicht auf die PrivatsphÃ¤re bezogen ist, hat sich geÃ¤ndert"],
                "Room logging is now enabled": [null, "ZukÃ¼nftige Nachrichten dieses Raums werden protokolliert."],
                "Room logging is now disabled": [null, "ZukÃ¼nftige Nachrichten dieses Raums werden nicht protokolliert."],
                "This room is now non-anonymous": [null, "Dieser Raum ist jetzt nicht anonym"],
                "This room is now semi-anonymous": [null, "Dieser Raum ist jetzt teils anonym"],
                "This room is now fully-anonymous": [null, "Dieser Raum ist jetzt anonym"],
                "A new room has been created": [null, "Einen neuen Raum ist erstellen"],
                "Your nickname has been changed": [null, "Spitzname festgelegen"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> ist verbannt"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> ist hinausgeworfen"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> wurde wegen einer ZugehÃ¶rigkeitsÃ¤nderung entfernt"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> ist kein Mitglied und wurde daher entfernt"],
                "You have been banned from this room": [null, "Sie sind aus diesem Raum verbannt worden"],
                "You have been kicked from this room": [null, "Sie wurden aus diesem Raum hinausgeworfen"],
                "You have been removed from this room because of an affiliation change": [null, "Sie wurden wegen einer ZugehÃ¶rigkeitsÃ¤nderung entfernt"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Sie wurden aus diesem Raum entfernt da Sie kein Mitglied sind."],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Sie werden aus diesem Raum entfernt da der MUC (Muli-user chat) Dienst gerade abgeschalten wird."],
                "You are not on the member list of this room": [null, "Sie sind nicht auf der Mitgliederliste dieses Raums"],
                "No nickname was specified": [null, "Kein Spitzname festgelegt"],
                "You are not allowed to create new rooms": [null, "Es ist Ihnen nicht erlaubt, neue RÃ¤ume anzulegen"],
                "Your nickname doesn't conform to this room's policies": [null, "UngÃ¼ltiger Spitzname"],
                "Your nickname is already taken": [null, "Ihre Spitzname existiert bereits."],
                "This room does not (yet) exist": [null, "Dieser Raum existiert (noch) nicht"],
                "This room has reached it's maximum number of occupants": [null, "Dieser Raum hat die maximale Mitgliederanzahl erreicht"],
                "Topic set by %1$s to: %2$s": [null, '%1$s hat das Thema zu "%2$s" abgeÃ¤ndert'],
                "This user is a moderator": [null, "Dieser Benutzer ist ein Moderator"],
                "This user can send messages in this room": [null, "Dieser Benutzer kann Nachrichten in diesem Raum verschicken"],
                "This user can NOT send messages in this room": [null, "Dieser Benutzer kann keine Nachrichten in diesem Raum verschicken"],
                "Click to chat with this contact": [null, "Hier klicken um mit diesem Kontakt zu chatten"],
                "Click to remove this contact": [null, "Hier klicken um diesen Kontakt zu entfernen"],
                "This contact is busy": [null, "Dieser Kontakt ist beschÃ¤fticht"],
                "This contact is online": [null, "Dieser Kontakt ist online"],
                "This contact is offline": [null, "Dieser Kontakt ist offline"],
                "This contact is unavailable": [null, "Dieser Kontakt ist nicht verfÃ¼gbar"],
                "This contact is away for an extended period": [null, "Dieser Kontakt is fÃ¼r lÃ¤ngere Zeit abwesend"],
                "This contact is away": [null, "Dieser Kontakt ist abwesend"],
                "Contact requests": [null, "Kontaktanfragen"],
                "My contacts": [null, "Meine Kontakte"],
                "Pending contacts": [null, "UnbestÃ¤tigte Kontakte"],
                "Custom status": [null, "Status-Nachricht"],
                "Click to change your chat status": [null, "Klicken Sie, um ihrer Status to Ã¤ndern"],
                "Click here to write a custom status message": [null, "Klicken Sie hier, um ihrer Status-Nachricht to Ã¤ndern"],
                online: [null, "online"],
                busy: [null, "beschÃ¤fticht"],
                "away for long": [null, "lÃ¤nger abwesend"],
                away: [null, "abwesend"],
                "I am %1$s": [null, "Ich bin %1$s"],
                "Sign in": [null, "Anmelden"],
                "XMPP/Jabber Username:": [null, "XMPP/Jabber Benutzername"],
                "Password:": [null, "Passwort:"],
                "Log In": [null, "Anmelden"],
                "BOSH Service URL:": [null, "BOSH "],
                "Online Contacts": [null, "Online-Kontakte"],
                Connected: [null, "Verbunden"],
                Attached: [null, "AngehÃ¤ngt"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("de", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.de = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    domain: "converse",
                    lang: "en",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                }
            }
        }
    };
    typeof define == "function" && define.amd ? define("en", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.en = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    domain: "converse",
                    lang: "es",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                "Show this menu": [null, "Mostrar este menÃº"],
                "Write in the third person": [null, "Escribir en tercera persona"],
                "Remove messages": [null, "Eliminar mensajes"],
                "Personal message": [null, "Mensaje personal"],
                Contacts: [null, "Contactos"],
                Online: [null, "En linea"],
                Busy: [null, "Ocupado"],
                Away: [null, "Ausente"],
                Offline: [null, "Desconectado"],
                "Click to add new chat contacts": [null, "Haga clic para agregar nuevos contactos al chat"],
                "Add a contact": [null, "Agregar un contacto"],
                "Contact username": [null, "Nombre de usuario de contacto"],
                Add: [null, "Agregar"],
                "Contact name": [null, "Nombre de contacto"],
                Search: [null, "BÃºsqueda"],
                "No users found": [null, "Sin usuarios encontrados"],
                "Click to add as a chat contact": [null, "Haga clic para agregar como un contacto de chat"],
                "Click to open this room": [null, "Haga clic para abrir esta sala"],
                "Show more information on this room": [null, "Mostrar mas informaciÃ³n en esta sala"],
                "Description:": [null, "DescripciÃ³n"],
                "Occupants:": [null, "Ocupantes:"],
                "Features:": [null, "CaracterÃ­sticas:"],
                "Requires authentication": [null, "AutenticaciÃ³n requerida"],
                Hidden: [null, "Oculto"],
                "Requires an invitation": [null, "Requiere una invitaciÃ³n"],
                Moderated: [null, "Moderado"],
                "Non-anonymous": [null, "No usuario anÃ³nimo"],
                "Open room": [null, "Abrir sala"],
                "Permanent room": [null, "Sala permanente"],
                Public: [null, "Publico"],
                "Semi-anonymous": [null, "Semi anÃ³nimo"],
                "Temporary room": [null, "Sala temporal"],
                Unmoderated: [null, "Sin moderar"],
                Rooms: [null, "Salas"],
                "Room name": [null, "Nombre de sala"],
                Nickname: [null, "Apodo"],
                Server: [null, "Servidor"],
                Join: [null, "Unirse"],
                "Show rooms": [null, "Mostrar salas"],
                "No rooms on %1$s": [null, "Sin salas en %1$s"],
                "Rooms on %1$s": [null, "Salas en %1$s"],
                "Set chatroom topic": [null, "Defina tema de sala de chat"],
                "Kick user from chatroom": [null, "Expulsar usuario de sala de chat."],
                "Ban user from chatroom": [null, "Prohibir usuario de sala de chat."],
                Message: [null, "Mensaje"],
                Save: [null, "Guardar"],
                Cancel: [null, "Cancelar"],
                "An error occurred while trying to save the form.": [null, "Un error ocurrido mientras trataba de guardar el formulario."],
                "This chatroom requires a password": [null, "Esta sala de chat requiere una contraseÃ±a."],
                "Password: ": [null, "ContraseÃ±a: "],
                Submit: [null, "Enviar"],
                "This room is not anonymous": [null, "Esta sala no es para usuarios anÃ³nimos"],
                "This room now shows unavailable members": [null, "Esta sala ahora muestra los miembros no disponibles"],
                "This room does not show unavailable members": [null, "Esta sala no muestra los miembros no disponibles"],
                "Non-privacy-related room configuration has changed": [null, "ConfiguraciÃ³n de la sala para no relacionada con la privacidad ha sido cambiada"],
                "Room logging is now enabled": [null, "El registro de la sala ahora estÃ¡ habilitada"],
                "Room logging is now disabled": [null, "El registro de la sala ahora estÃ¡ deshabilitada"],
                "This room is now non-anonymous": [null, "Esta sala ahora es para los usuarios no anÃ³nimos"],
                "This room is now semi-anonymous": [null, "Esta sala ahora es para los usuarios semi-anÃ³nimos"],
                "This room is now fully-anonymous": [null, "Esta sala ahora es para los usuarios completamente-anÃ³nimos"],
                "A new room has been created": [null, "Una nueva sala ha sido creada"],
                "Your nickname has been changed": [null, "Su apodo ha sido cambiado"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> ha sido prohibido"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> ha sido expulsado"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> ha sido eliminado debido a un cambio de afiliaciÃ³n"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> ha sido eliminado debido a que no es miembro"],
                "You have been banned from this room": [null, "Usted ha sido prohibido de esta sala"],
                "You have been kicked from this room": [null, "Usted ha sido expulsado de esta sala"],
                "You have been removed from this room because of an affiliation change": [null, "Usted ha sido eliminado de esta sala debido a un cambio de afiliaciÃ³n"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Usted ha sido eliminado de esta sala debido a que la sala cambio su configuraciÃ³n a solo-miembros y usted no es un miembro"],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Usted ha sido eliminado de esta sala debido al servicio MUC (Multi-user chat) estÃ¡ apagado."],
                "You are not on the member list of this room": [null, "Usted no estÃ¡ en la lista de miembros de esta sala"],
                "No nickname was specified": [null, "Sin apodo especificado"],
                "You are not allowed to create new rooms": [null, "A usted no se le permite crear nuevas salas"],
                "Your nickname doesn't conform to this room's policies": [null, "Su apodo no se ajusta a la polÃ­tica de esta sala"],
                "Your nickname is already taken": [null, "Su apodo ya ha sido tomando por otro usuario"],
                "This room does not (yet) exist": [null, "Esta sala (aÃºn) no existe"],
                "This room has reached it's maximum number of occupants": [null, "Esta sala ha alcanzado su nÃºmero mÃ¡ximo de ocupantes"],
                "Topic set by %1$s to: %2$s": [null, "Tema fijado por %1$s a: %2$s"],
                "This user is a moderator": [null, "Este usuario es un moderador"],
                "This user can send messages in this room": [null, "Este usuario puede enviar mensajes en esta sala"],
                "This user can NOT send messages in this room": [null, "Este usuario NO puede enviar mensajes en esta"],
                "Click to chat with this contact": [null, "Haga clic para conversar con este contacto"],
                "Click to remove this contact": [null, "Haga clic para eliminar este contacto"],
                "Contact requests": [null, "Solicitudes de contacto"],
                "My contacts": [null, "Mi contactos"],
                "Pending contacts": [null, "Contactos pendientes"],
                "Custom status": [null, "Personalice estatus"],
                "Click to change your chat status": [null, "Haga clic para cambiar su estatus de chat"],
                "Click here to write a custom status message": [null, "Haga clic para escribir un mensaje de estatus personalizado"],
                online: [null, "en linea"],
                busy: [null, "ocupado"],
                "away for long": [null, "lejos por mucho tiempo"],
                away: [null, "ausente"],
                "I am %1$s": [null, "Yo soy %1$s"],
                "Sign in": [null, "Registro"],
                "XMPP/Jabber Username:": [null, "Nombre de usuario XMPP/Jabber"],
                "Password:": [null, "ContraseÃ±a:"],
                "Log In": [null, "Iniciar sesiÃ³n"],
                "BOSH Service URL:": [null, "URL del servicio BOSH:"],
                Connected: [null, "Conectado"],
                Disconnected: [null, "Desconectado"],
                Error: [null, "Error"],
                Connecting: [null, "Conectando"],
                "Connection Failed": [null, "ConexiÃ³n fallo"],
                Authenticating: [null, "Autenticando"],
                "Authentication Failed": [null, "AutenticaciÃ³n fallo"],
                Disconnecting: [null, "Desconectando"],
                Attached: [null, "Adjuntado"],
                "Online Contacts": [null, "Contactos en linea"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("es", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.es = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-06-01 23:03+0200",
                    "PO-Revision-Date": "2013-07-22 18:13-0400",
                    "Last-Translator": "Leonardo J. Caballero G. <leonardocaballero@gmail.com>",
                    "Language-Team": "ES <LL@li.org>",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    "Plural-Forms": "nplurals=2; plural=(n != 1);",
                    plural_forms: "nplurals=2; plural=(n != 1);",
                    Language: "es",
                    lang: "es",
                    "Language-Code": "es",
                    "Language-Name": "EspaÃ±ol",
                    "Preferred-Encodings": "utf-8 latin1",
                    Domain: "converse",
                    domain: "converse",
                    "X-Is-Fallback-For": "es-ar es-bo es-cl es-co es-cr es-do es-ec es-es es-sv es-gt es-hn es-mx es-ni es-pa es-py es-pe es-pr es-us es-uy es-ve"
                },
                "Show this menu": [null, "Afficher ce menu"],
                "Write in the third person": [null, "Ã‰crire Ã  la troisiÃ¨me personne"],
                "Remove messages": [null, "Effacer les messages"],
                "Personal message": [null, "Message personnel"],
                Contacts: [null, "Contacts"],
                Online: [null, "En ligne"],
                Busy: [null, "OccupÃ©"],
                Away: [null, "Absent"],
                Offline: [null, "DÃ©connectÃ©"],
                "Click to add new chat contacts": [null, "Cliquez pour ajouter de nouveaux contacts"],
                "Add a contact": [null, "Ajouter un contact"],
                "Contact username": [null, "Nom du contact"],
                Add: [null, "Ajouter"],
                "Contact name": [null, "Nom du contact"],
                Search: [null, "Rechercher"],
                "No users found": [null, "Aucun utilisateur trouvÃ©"],
                "Click to add as a chat contact": [null, "Cliquer pour ajouter aux contacts de chat"],
                "Click to open this room": [null, "Cliquer pour ouvrir ce salon"],
                "Show more information on this room": [null, "Afficher davantage d'informations sur ce salon"],
                "Description:": [null, "Description :"],
                "Occupants:": [null, "Participants :"],
                "Features:": [null, "CaractÃ©ristiques :"],
                "Requires authentication": [null, "NÃ©cessite une authentification"],
                Hidden: [null, "MasquÃ©"],
                "Requires an invitation": [null, "NÃ©cessite une invitation"],
                Moderated: [null, "ModÃ©rÃ©"],
                "Non-anonymous": [null, "Non-anonyme"],
                "Open room": [null, "Ouvrir un salon"],
                "Permanent room": [null, "Salon permanent"],
                Public: [null, "Public"],
                "Semi-anonymous": [null, "Semi-anonyme"],
                "Temporary room": [null, "Salon temporaire"],
                Unmoderated: [null, "Non modÃ©rÃ©"],
                Rooms: [null, "Salons"],
                "Room name": [null, "NumÃ©ro de salon"],
                Nickname: [null, "Alias"],
                Server: [null, "Serveur"],
                Join: [null, "Rejoindre"],
                "Show rooms": [null, "Afficher les salons"],
                "No rooms on %1$s": [null, "Aucun salon dans %1$s"],
                "Rooms on %1$s": [null, "Salons dans %1$s"],
                "Set chatroom topic": [null, "Indiquer le sujet du salon"],
                "Kick user from chatroom": [null, "Expulser l'utilisateur du salon."],
                "Ban user from chatroom": [null, "Bannir l'utilisateur du salon."],
                Message: [null, "Message"],
                Save: [null, "Enregistrer"],
                Cancel: [null, "Annuler"],
                "An error occurred while trying to save the form.": [null, "Une erreur est survenue lors de l'enregistrement du formulaire."],
                "This chatroom requires a password": [null, "Ce salon nÃ©cessite un mot de passe."],
                "Password: ": [null, "Mot de passe : "],
                Submit: [null, "Soumettre"],
                "This room is not anonymous": [null, "Ce salon n'est pas anonyme"],
                "This room now shows unavailable members": [null, "Ce salon affiche maintenant des membres indisponibles"],
                "This room does not show unavailable members": [null, "Ce salon n'affiche pas les membres indisponibles"],
                "Non-privacy-related room configuration has changed": [null, "Les paramÃ¨tres du salon non liÃ©s Ã  la confidentialitÃ© ont Ã©tÃ© modifiÃ©s"],
                "Room logging is now enabled": [null, "Le logging du salon est activÃ©"],
                "Room logging is now disabled": [null, "Le logging du salon est dÃ©sactivÃ©"],
                "This room is now non-anonymous": [null, "Ce salon est maintenant non-anonyme"],
                "This room is now semi-anonymous": [null, "Ce salon est maintenant semi-anonyme"],
                "This room is now fully-anonymous": [null, "Ce salon est maintenant entiÃ¨rement anonyme"],
                "A new room has been created": [null, "Un nouveau salon a Ã©tÃ© crÃ©Ã©"],
                "Your nickname has been changed": [null, "Votre alias a Ã©tÃ© modifiÃ©"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> a Ã©tÃ© banni"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> a Ã©tÃ© expulsÃ©"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> a Ã©tÃ© supprimÃ© Ã  cause d'un changement d'affiliation"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> a Ã©tÃ© supprimÃ© car il n'est pas membre"],
                "You have been banned from this room": [null, "Vous avez Ã©tÃ© banni de ce salon"],
                "You have been kicked from this room": [null, "Vous avez Ã©tÃ© expulsÃ© de ce salon"],
                "You have been removed from this room because of an affiliation change": [null, "Vous avez Ã©tÃ© retirÃ© de ce salon du fait d'un changement d'affiliation"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Vous avez Ã©tÃ© retirÃ© de ce salon parce que ce salon est devenu rÃ©servÃ© aux membres et vous n'Ãªtes pas membre"],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Vous avez Ã©tÃ© retirÃ© de ce salon parce que le service de chat multi-utilisateur a Ã©tÃ© dÃ©sactivÃ©."],
                "You are not on the member list of this room": [null, "Vous n'Ãªtes pas dans la liste des membres de ce salon"],
                "No nickname was specified": [null, "Aucun alias n'a Ã©tÃ© indiquÃ©"],
                "You are not allowed to create new rooms": [null, "Vous n'Ãªtes pas autorisÃ© Ã  crÃ©er des salons"],
                "Your nickname doesn't conform to this room's policies": [null, "Votre alias n'est pas conforme Ã  la politique de ce salon"],
                "Your nickname is already taken": [null, "Votre alias est dÃ©jÃ  utilisÃ©"],
                "This room does not (yet) exist": [null, "Ce salon n'existe pas encore"],
                "This room has reached it's maximum number of occupants": [null, "Ce salon a atteint la limite maximale d'occupants"],
                "Topic set by %1$s to: %2$s": [null, "Le sujet '%1$s' a Ã©tÃ© dÃ©fini par %2$s"],
                "This user is a moderator": [null, "Cet utilisateur est modÃ©rateur"],
                "This user can send messages in this room": [null, "Cet utilisateur peut envoyer des messages dans ce salon"],
                "This user can NOT send messages in this room": [null, "Cet utilisateur ne peut PAS envoyer de messages dans ce salon"],
                "Click to chat with this contact": [null, "Cliquez pour discuter avec ce contact"],
                "Click to remove this contact": [null, "Cliquez pour supprimer ce contact"],
                "Contact requests": [null, "Demandes de contacts"],
                "My contacts": [null, "Mes contacts"],
                "Pending contacts": [null, "Contacts en attente"],
                "Custom status": [null, "Statut personnel"],
                "Click to change your chat status": [null, "Cliquez pour changer votre statut"],
                "Click here to write a custom status message": [null, "Cliquez ici pour indiquer votre statut personnel"],
                online: [null, "en ligne"],
                busy: [null, "occupÃ©"],
                "away for long": [null, "absent pour une longue durÃ©e"],
                away: [null, "absent"],
                "I am %1$s": [null, "Je suis %1$s"],
                "Sign in": [null, "S'inscrire"],
                "XMPP/Jabber Username:": [null, "Nom d'utilisateur XMPP/Jabber"],
                "Password:": [null, "Mot de passe :"],
                "Log In": [null, "Se connecter"],
                "BOSH Service URL:": [null, "URL du service BOSH:"],
                Connected: [null, "ConnectÃ©"],
                Disconnected: [null, "DÃ©connectÃ©"],
                Error: [null, "Erreur"],
                Connecting: [null, "Connection"],
                "Connection Failed": [null, "La connection a Ã©chouÃ©"],
                Authenticating: [null, "Authentification"],
                "Authentication Failed": [null, "L'authentification a Ã©chouÃ©"],
                Disconnecting: [null, "DÃ©connection"],
                Attached: [null, "AttachÃ©"],
                "Online Contacts": [null, "Contacts en ligne"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("fr", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.fr = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-24 23:22+0200",
                    "PO-Revision-Date": "2013-09-25 22:42+0200",
                    "Last-Translator": "Krisztian Kompar <w3host@w3host.hu>",
                    "Language-Team": "Hungarian",
                    Language: "hu",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    domain: "converse",
                    lang: "hu",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                Disconnected: [null, "SzÃ©tkapcsolva"],
                Error: [null, "Hiba"],
                Connecting: [null, "KapcsolÃ³dÃ¡s"],
                "Connection Failed": [null, "KapcsolÃ³dÃ¡si hiba"],
                Authenticating: [null, "AzonosÃ­tÃ¡s"],
                "Authentication Failed": [null, "AzonosÃ­tÃ¡si hiba"],
                Disconnecting: [null, "SzÃ©tkapcsolÃ¡s"],
                me: [null, "Ã©n"],
                "%1$s is typing": [null, "%1$s gÃ©pel"],
                "Show this menu": [null, "Mutasd ezt a menÃ¼t"],
                "Write in the third person": [null, ""],
                "Remove messages": [null, "Ãœzenet tÃ¶rlÃ©se"],
                "Personal message": [null, "SajÃ¡t Ã¼zenet"],
                Contacts: [null, "Kapcsolatok"],
                Online: [null, "ElÃ©rhetÅ‘"],
                Busy: [null, "Foglalt"],
                Away: [null, "TÃ¡vol"],
                Offline: [null, "Nem elÃ©rhetÅ‘"],
                "Click to add new chat contacts": [null, "Ãšj kapcsolatok hozzÃ¡adÃ¡sa"],
                "Add a contact": [null, "Ãšj kapcsolat"],
                "Contact username": [null, "FelhasznÃ¡lÃ³nÃ©v"],
                Add: [null, "HozzÃ¡adÃ¡s"],
                "Contact name": [null, "Kapcsolat neve"],
                Search: [null, "KeresÃ©s"],
                "No users found": [null, "Nincs talÃ¡lat"],
                "Click to add as a chat contact": [null, "CsevegÅ‘ kapcsolatkÃ©nt hozzÃ¡ad"],
                "Click to open this room": [null, "BelÃ©pÃ©s a csevegÅ‘ szobÃ¡ba"],
                "Show more information on this room": [null, "TovÃ¡bbi informÃ¡ciÃ³k a csevegÅ‘ szobÃ¡rÃ³l"],
                "Description:": [null, "LeÃ­rÃ¡s:"],
                "Occupants:": [null, "JelenlevÅ‘k:"],
                "Features:": [null, "TulajdonsÃ¡gok"],
                "Requires authentication": [null, "AzonosÃ­tÃ¡s szÃ¼ksÃ©ges"],
                Hidden: [null, "Rejtett"],
                "Requires an invitation": [null, "MeghÃ­vÃ¡s szÃ¼ksÃ©ges"],
                Moderated: [null, "ModerÃ¡lt"],
                "Non-anonymous": [null, "NEM nÃ©vtelen"],
                "Open room": [null, "Nyitott szoba"],
                "Permanent room": [null, "Ã�llandÃ³ szoba"],
                Public: [null, "NyÃ­lvÃ¡nos"],
                "Semi-anonymous": [null, "FÃ©lig nÃ©vtelen"],
                "Temporary room": [null, "Ideiglenes szoba"],
                Unmoderated: [null, "ModerÃ¡latlan"],
                Rooms: [null, "SzobÃ¡k"],
                "Room name": [null, "A szoba neve"],
                Nickname: [null, "BecenÃ©v"],
                Server: [null, "Szerver"],
                Join: [null, "CsatlakozÃ¡s"],
                "Show rooms": [null, "LÃ©tezÅ‘ szobÃ¡k"],
                "No rooms on %1$s": [null, "Nincs csevegÅ‘ szoba a(z) %1$s szerveren"],
                "Rooms on %1$s": [null, "CsevegÅ‘ szobÃ¡k a(z) %1$s szerveren"],
                "Set chatroom topic": [null, "CsevegÅ‘szoba tÃ©ma beÃ¡llÃ­tÃ¡s"],
                "Kick user from chatroom": [null, "FelhasznÃ¡lÃ³ kilÃ©ptetÃ©se a csevegÅ‘ szobÃ¡bÃ³l"],
                "Ban user from chatroom": [null, "FelhasznÃ¡lÃ³ kitÃ­ltÃ¡sa a csevegÅ‘ szobÃ¡bÃ³l"],
                Message: [null, "Ãœzenet"],
                Save: [null, "MentÃ©s"],
                Cancel: [null, "MÃ©gsem"],
                "An error occurred while trying to save the form.": [null, "Hiba tÃ¶rtÃ©nt az adatok mentÃ©se kÃ¶zben."],
                "This chatroom requires a password": [null, "A csevegÅ‘ szoba belÃ©pÃ©shez jelszÃ³ szÃ¼ksÃ©ges"],
                "Password: ": [null, "JelszÃ³:"],
                Submit: [null, "KÃ¼ldÃ©s"],
                "This room is not anonymous": [null, "Ez a szoba NEM nÃ©vtelen"],
                "This room now shows unavailable members": [null, "Ez a szoba mutatja az elÃ©rhetetlen tagokat"],
                "This room does not show unavailable members": [null, "Ez a szoba nem mutatja az elÃ©rhetetlen tagokat"],
                "Non-privacy-related room configuration has changed": [null, "A szoba Ã¡ltalÃ¡nos konfigurÃ¡ciÃ³ja mÃ³dosult"],
                "Room logging is now enabled": [null, "A szobÃ¡ba a belÃ©pÃ©s lehetsÃ©ges"],
                "Room logging is now disabled": [null, "A szobÃ¡ba a belÃ©pÃ©s szÃ¼netel"],
                "This room is now non-anonymous": [null, "Ez a szoba most NEM nÃ©vtelen"],
                "This room is now semi-anonymous": [null, "Ez a szoba most fÃ©lig nÃ©vtelen"],
                "This room is now fully-anonymous": [null, "Ez a szoba most teljesen nÃ©vtelen"],
                "A new room has been created": [null, "LÃ©trejÃ¶tt egy Ãºj csevegÅ‘ szoba"],
                "Your nickname has been changed": [null, "A beceneved mÃ³dosÃ­tÃ¡sra kerÃ¼lt"],
                "<strong>%1$s</strong> has been banned": [null, "A szobÃ¡bÃ³l kitÃ­ltva: <strong>%1$s</strong>"],
                "<strong>%1$s</strong> has been kicked out": [null, "A szobÃ¡bÃ³l kidobva: <strong>%1$s</strong>"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "Taglista mÃ³dosÃ­tÃ¡s miatt a szobÃ¡bÃ³l kilÃ©ptetve: <strong>%1$s</strong>"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "A taglistÃ¡n nem szerepel Ã­gy a szobÃ¡bÃ³l kilÃ©ptetve: <strong>%1$s</strong>"],
                "You have been banned from this room": [null, "Ki lettÃ©l tÃ­ltva ebbÅ‘l a szobÃ¡bÃ³l"],
                "You have been kicked from this room": [null, "Ki lettÃ©l dobva ebbÅ‘l a szobÃ¡bÃ³l"],
                "You have been removed from this room because of an affiliation change": [null, "Taglista mÃ³dosÃ­tÃ¡s miatt kilÃ©ptettÃ¼nk a csevegÅ‘ szobÃ¡bÃ³l"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "KilÃ©ptettÃ¼nk a csevegÅ‘ szobÃ¡bÃ³l, mert mostantÃ³l csak a taglistÃ¡n szereplÅ‘k lehetnek jelen."],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "KilÃ©ptettÃ¼nk a csevegÅ‘ szobÃ¡bÃ³l, mert a MUC (Multi-User Chat) szolgÃ¡ltatÃ¡s leÃ¡llÃ­tÃ¡sra kerÃ¼lt."],
                "You are not on the member list of this room": [null, "Nem szerepelsz a csevegÅ‘ szoba taglistÃ¡jÃ¡n"],
                "No nickname was specified": [null, "Nem lett megadva becenÃ©v"],
                "You are not allowed to create new rooms": [null, "Nem lehet Ãºj csevegÅ‘ szobÃ¡t lÃ©trehozni"],
                "Your nickname doesn't conform to this room's policies": [null, "A beceneved Ã¼tkÃ¶zik a csevegÅ‘ szoba szabÃ¡lyzataival"],
                "Your nickname is already taken": [null, "A becenevedet mÃ¡r valaki hasznÃ¡lja"],
                "This room does not (yet) exist": [null, "Ez a szoba (mÃ©g) nem lÃ©tezik"],
                "This room has reached it's maximum number of occupants": [null, "Ez a csevegÅ‘ szoba elÃ©rte a maximÃ¡lis jelenlevÅ‘k szÃ¡mÃ¡t"],
                "Topic set by %1$s to: %2$s": [null, "A kÃ¶vetkezÅ‘ tÃ©mÃ¡t Ã¡llÃ­totta be %1$s: %2$s"],
                "This user is a moderator": [null, "Ez a felhasznÃ¡lÃ³ egy moderÃ¡tor"],
                "This user can send messages in this room": [null, "Ez a felhasznÃ¡lÃ³ kÃ¼ldhet Ã¼zenetet ebbe a szobÃ¡ba"],
                "This user can NOT send messages in this room": [null, "Ez a felhasznÃ¡lÃ³ NEM kÃ¼ldhet Ã¼zenetet ebbe a szobÃ¡ba"],
                "Click to chat with this contact": [null, "CsevegÃ©s indÃ­tÃ¡sa ezzel a kapcsolatunkkal"],
                "Click to remove this contact": [null, "A kapcsolat tÃ¶rlÃ©se"],
                "This contact is busy": [null, "Elfoglalt"],
                "This contact is online": [null, "Online"],
                "This contact is offline": [null, "Nincs bejelentkezve"],
                "This contact is unavailable": [null, "ElÃ©rhetetlen"],
                "This contact is away for an extended period": [null, "Hosszabb ideje tÃ¡vol"],
                "This contact is away": [null, "TÃ¡vol"],
                "Contact requests": [null, "Kapcsolat felvÃ©teli kÃ©rÃ©s"],
                "My contacts": [null, "Kapcsolatok:"],
                "Pending contacts": [null, "FÃ¼ggÅ‘ben levÅ‘ kapcsolatok"],
                "Custom status": [null, "Egyedi stÃ¡tusz"],
                "Click to change your chat status": [null, "SajÃ¡t stÃ¡tusz beÃ¡llÃ­tÃ¡sa"],
                "Click here to write a custom status message": [null, "Egyedi stÃ¡tusz Ã¼zenet Ã­rÃ¡sa"],
                online: [null, "online"],
                busy: [null, "elfoglalt"],
                "away for long": [null, "hosszÃº ideje tÃ¡vol"],
                away: [null, "tÃ¡vol"],
                "I am %1$s": [null, "%1$s vagyok"],
                "Sign in": [null, "BelÃ©pÃ©s"],
                "XMPP/Jabber Username:": [null, "XMPP/Jabber azonosÃ­tÃ³:"],
                "Password:": [null, "JelszÃ³:"],
                "Log In": [null, "BelÃ©pÃ©s"],
                "BOSH Service URL:": [null, "BOSH szerver URL"],
                "Online Contacts": [null, "Online kapcsolatok"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("hu", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.de = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-07-20 23:03+0200",
                    "PO-Revision-Date": "2013-07-20 13:58+0200",
                    "Last-Translator": "Fabio Bas <ctrlaltca@gmail.com>",
                    "Language-Team": "Italian",
                    Language: "it",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=ASCII",
                    "Content-Transfer-Encoding": "8bit",
                    "Plural-Forms": "nplurals=2; plural=(n != 1);",
                    domain: "converse",
                    lang: "it",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                "Show this menu": [null, "Mostra questo menu"],
                "Write in the third person": [null, "Scrivi in terza persona"],
                "Remove messages": [null, "Rimuovi messaggi"],
                "Personal message": [null, "Messaggio personale"],
                Contacts: [null, "Contatti"],
                Online: [null, "In linea"],
                Busy: [null, "Occupato"],
                Away: [null, "Assente"],
                Offline: [null, "Non in linea"],
                "Click to add new chat contacts": [null, "Clicca per aggiungere nuovi contatti alla chat"],
                "Add a contact": [null, "Aggiungi un contatto"],
                "Contact username": [null, "Nome utente del contatto"],
                Add: [null, "Aggiungi"],
                "Contact name": [null, "Nome del contatto"],
                Search: [null, "Cerca"],
                "No users found": [null, "Nessun utente trovato"],
                "Click to add as a chat contact": [null, "Clicca per aggiungere il contatto alla chat"],
                "Click to open this room": [null, "Clicca per aprire questa stanza"],
                "Show more information on this room": [null, "Mostra piÃƒÂ¹ informazioni su questa stanza"],
                "Description:": [null, "Descrizione:"],
                "Occupants:": [null, "Utenti presenti:"],
                "Features:": [null, "FunzionalitÃƒÂ :"],
                "Requires authentication": [null, "Richiede autenticazione"],
                Hidden: [null, "Nascosta"],
                "Requires an invitation": [null, "Richiede un invito"],
                Moderated: [null, "Moderata"],
                "Non-anonymous": [null, "Non-anonima"],
                "Open room": [null, "Stanza aperta"],
                "Permanent room": [null, "Stanza permanente"],
                Public: [null, "Pubblica"],
                "Semi-anonymous": [null, "Semi-anonima"],
                "Temporary room": [null, "Stanza temporanea"],
                Unmoderated: [null, "Non moderata"],
                Rooms: [null, "Stanze"],
                "Room name": [null, "Nome stanza"],
                Nickname: [null, "Soprannome"],
                Server: [null, "Server"],
                Join: [null, "Entra"],
                "Show rooms": [null, "Mostra stanze"],
                "No rooms on %1$s": [null, "Nessuna stanza su %1$s"],
                "Rooms on %1$s": [null, "Stanze su %1$s"],
                "Set chatroom topic": [null, "Cambia oggetto della stanza"],
                "Kick user from chatroom": [null, "Espelli utente dalla stanza"],
                "Ban user from chatroom": [null, "Bandisci utente dalla stanza"],
                Message: [null, "Messaggio"],
                Save: [null, "Salva"],
                Cancel: [null, "Annulla"],
                "An error occurred while trying to save the form.": [null, "Errore durante il salvataggio del modulo"],
                "This chatroom requires a password": [null, "Questa stanza richiede una password"],
                "Password: ": [null, "Password: "],
                Submit: [null, "Invia"],
                "This room is not anonymous": [null, "Questa stanza non ÃƒÂ¨ anonima"],
                "This room now shows unavailable members": [null, "Questa stanza mostra i membri non disponibili al momento"],
                "This room does not show unavailable members": [null, "Questa stanza non mostra i membri non disponibili"],
                "Non-privacy-related room configuration has changed": [null, "Una configurazione della stanza non legata alla privacy ÃƒÂ¨ stata modificata"],
                "Room logging is now enabled": [null, "La registrazione ÃƒÂ¨ abilitata nella stanza"],
                "Room logging is now disabled": [null, "La registrazione ÃƒÂ¨ disabilitata nella stanza"],
                "This room is now non-anonymous": [null, "Questa stanza ÃƒÂ¨ non-anonima"],
                "This room is now semi-anonymous": [null, "Questa stanza ÃƒÂ¨ semi-anonima"],
                "This room is now fully-anonymous": [null, "Questa stanza ÃƒÂ¨ completamente-anonima"],
                "A new room has been created": [null, "Una nuova stanza ÃƒÂ¨ stata creata"],
                "Your nickname has been changed": [null, "Il tuo soprannome ÃƒÂ¨ stato cambiato"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> ÃƒÂ¨ stato bandito"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> ÃƒÂ¨ stato espulso"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> ÃƒÂ¨ stato rimosso a causa di un cambio di affiliazione"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> ÃƒÂ¨ stato rimosso in quanto non membro"],
                "You have been banned from this room": [null, "Sei stato bandito da questa stanza"],
                "You have been kicked from this room": [null, "Sei stato espulso da questa stanza"],
                "You have been removed from this room because of an affiliation change": [null, "Sei stato rimosso da questa stanza a causa di un cambio di affiliazione"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Sei stato rimosso da questa stanza poichÃƒÂ© ora la stanza accetta solo membri"],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Sei stato rimosso da questa stanza poichÃƒÂ© il servizio MUC (Chat multi utente) ÃƒÂ¨ in fase di spegnimento"],
                "You are not on the member list of this room": [null, "Non sei nella lista dei membri di questa stanza"],
                "No nickname was specified": [null, "Nessun soprannome specificato"],
                "You are not allowed to create new rooms": [null, "Non ti ÃƒÂ¨ permesso creare nuove stanze"],
                "Your nickname doesn't conform to this room's policies": [null, "Il tuo soprannome non ÃƒÂ¨ conforme alle regole di questa stanza"],
                "Your nickname is already taken": [null, "Il tuo soprannome ÃƒÂ¨ giÃƒÂ  utilizzato"],
                "This room does not (yet) exist": [null, "Questa stanza non esiste (per ora)"],
                "This room has reached it's maximum number of occupants": [null, "Questa stanza ha raggiunto il limite massimo di utenti"],
                "Topic set by %1$s to: %2$s": [null, "Topic impostato da %1$s a: %2$s"],
                "This user is a moderator": [null, "Questo utente ÃƒÂ¨ un moderatore"],
                "This user can send messages in this room": [null, "Questo utente puÃƒÂ² inviare messaggi in questa stanza"],
                "This user can NOT send messages in this room": [null, "Questo utente NON puÃƒÂ² inviare messaggi in questa stanza"],
                "Click to chat with this contact": [null, "Clicca per parlare con questo contatto"],
                "Click to remove this contact": [null, "Clicca per rimuovere questo contatto"],
                "Contact requests": [null, "Richieste dei contatti"],
                "My contacts": [null, "I miei contatti"],
                "Pending contacts": [null, "Contatti in attesa"],
                "Custom status": [null, "Stato personalizzato"],
                "Click to change your chat status": [null, "Clicca per cambiare il tuo stato"],
                "Click here to write a custom status message": [null, "Clicca qui per scrivere un messaggio di stato personalizzato"],
                online: [null, "in linea"],
                busy: [null, "occupato"],
                "away for long": [null, "assente da molto"],
                away: [null, "assente"],
                "I am %1$s": [null, "Sono %1$s"],
                "Sign in": [null, "Entra"],
                "XMPP/Jabber Username:": [null, "Nome utente:"],
                "Password:": [null, "Password:"],
                "Log In": [null, "Entra"],
                "BOSH Service URL:": [null, "Indirizzo servizio BOSH:"],
                Connected: [null, "Connesso"],
                Disconnected: [null, "Disconnesso"],
                Error: [null, "Errore"],
                Connecting: [null, "Connessione in corso"],
                "Connection Failed": [null, "Connessione fallita"],
                Authenticating: [null, "Autenticazione in corso"],
                "Authentication Failed": [null, "Autenticazione fallita"],
                Disconnecting: [null, "Disconnessione in corso"],
                Attached: [null, "Allegato"],
                "Online Contacts": [null, "Contatti in linea"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("it", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.it = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-15 21:55+0200",
                    "PO-Revision-Date": "2013-09-15 22:03+0200",
                    "Last-Translator": "Maarten Kling <maarten@fourdigits.nl>",
                    "Language-Team": "Dutch",
                    Language: "nl",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    "Plural-Forms": "nplurals=2; plural=(n != 1);",
                    domain: "converse",
                    lang: "nl",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                unencrypted: [null, "ongecodeerde"],
                unverified: [null, "niet geverifieerd"],
                verified: [null, "geverifieerd"],
                finished: [null, "klaar"],
                Disconnected: [null, "Verbinding verbroken."],
                Error: [null, "Error"],
                Connecting: [null, "Verbinden"],
                "Connection Failed": [null, "Verbinden mislukt"],
                Authenticating: [null, "Authenticeren"],
                "Authentication Failed": [null, "Authenticeren mislukt"],
                Disconnecting: [null, ""],
                "Re-establishing encrypted session": [null, "Bezig versleutelde sessie te herstellen"],
                "Your browser needs to generate a private key, which will be used in your encrypted chat session. This can take up to 30 seconds during which your browser might freeze and become unresponsive.": [null, ""],
                "Private key generated.": [null, "Private key gegenereerd."],
                "Authentication request from %1$s\n\nYour buddy is attempting to verify your identity, by asking you the question below.\n\n%2$s": [null, ""],
                "Could not verify this user's identify.": [null, "Niet kon de identiteit van deze gebruiker niet identificeren."],
                "Personal message": [null, "Persoonlijk bericht"],
                "Start encrypted conversation": [null, "Start encrypted gesprek"],
                "Refresh encrypted conversation": [null, "Ververs encrypted gesprek"],
                "End encrypted conversation": [null, "Beeindig encrypted gesprek"],
                "Verify with SMP": [null, ""],
                "Verify with fingerprints": [null, ""],
                "What's this?": [null, "Wat is dit?"],
                me: [null, "ikzelf"],
                "Show this menu": [null, "Toon dit menu"],
                "Write in the third person": [null, "Schrijf in de 3de persoon"],
                "Remove messages": [null, "Verwijder bericht"],
                "Your message could not be sent": [null, "Je bericht kon niet worden verzonden"],
                "We received an unencrypted message": [null, "We ontvingen een unencrypted bericht "],
                "We received an unreadable encrypted message": [null, "We ontvangen een onleesbaar unencrypted bericht"],
                "This user has requested an encrypted session.": [null, "Deze gebruiker heeft een encrypted sessie aangevraagd."],
                "Here are the fingerprints, please confirm them with %1$s, outside of this chat.\n\nFingerprint for you, %2$s: %3$s\n\nFingerprint for %1$s: %4$s\n\nIf you have confirmed that the fingerprints match, click OK, otherwise click Cancel.": [null, ""],
                "You will be prompted to provide a security question and then an answer to that question.\n\nYour buddy will then be prompted the same question and if they type the exact same answer (case sensitive), their identity will have been verified.": [null, ""],
                "What is your security question?": [null, "Wat is jou sericury vraag?"],
                "What is the answer to the security question?": [null, "Wat is het antwoord op de security vraag?"],
                "Invalid authentication scheme provided": [null, ""],
                "Your messages are not encrypted anymore": [null, "Je berichten zijn niet meer encrypted"],
                "Your messages are now encrypted but your buddy's identity has not been verified.": [null, ""],
                "Your buddy's identify has been verified.": [null, "Jou contact is geverifieerd"],
                "Your buddy has ended encryption on their end, you should do the same.": [null, "Jou contact heeft encryption aanstaan, je moet het zelfde doen."],
                "Your messages are not encrypted. Click here to enable OTR encryption.": [null, "Jou bericht is niet encrypted. KLik hier om ORC encrytion aan te zetten."],
                "Your messages are encrypted, but your buddy has not been verified.": [null, "Jou berichten zijn encrypted, maar je contact is niet geverifieerd."],
                "Your messages are encrypted and your buddy verified.": [null, "Jou bericht is encrypted en jou contact is geverifieerd."],
                "Your buddy has closed their end of the private session, you should do the same": [null, ""],
                Contacts: [null, "Contacten"],
                Online: [null, "Online"],
                Busy: [null, "Bezet"],
                Away: [null, "Afwezig"],
                Offline: [null, ""],
                "Click to add new chat contacts": [null, "Klik om nieuwe contacten toe te voegen"],
                "Add a contact": [null, "Voeg contact toe"],
                "Contact username": [null, "Contact gebruikernaam"],
                Add: [null, "Toevoegen"],
                "Contact name": [null, "Contact naam"],
                Search: [null, "Zoeken"],
                "No users found": [null, "Geen gebruikers gevonden"],
                "Click to add as a chat contact": [null, "Klik om contact toe te voegen"],
                "Click to open this room": [null, "Klik om room te openen"],
                "Show more information on this room": [null, "Toon meer informatie over deze room"],
                "Description:": [null, "Beschrijving"],
                "Occupants:": [null, "Deelnemers:"],
                "Features:": [null, "Functies:"],
                "Requires authentication": [null, "Verificatie vereist"],
                Hidden: [null, "Verborgen"],
                "Requires an invitation": [null, "Veriest een uitnodiging"],
                Moderated: [null, "Gemodereerd"],
                "Non-anonymous": [null, "Niet annoniem"],
                "Open room": [null, "Open room"],
                "Permanent room": [null, "Blijvend room"],
                Public: [null, "Publiek"],
                "Semi-anonymous": [null, "Semi annoniem"],
                "Temporary room": [null, "Tijdelijke room"],
                Unmoderated: [null, "Niet gemodereerd"],
                Rooms: [null, "Rooms"],
                "Room name": [null, "Room naam"],
                Nickname: [null, "Nickname"],
                Server: [null, "Server"],
                Join: [null, "Deelnemen"],
                "Show rooms": [null, "Toon rooms"],
                "No rooms on %1$s": [null, "Geen room op %1$s"],
                "Rooms on %1$s": [null, "Room op %1$s"],
                "Set chatroom topic": [null, "Zet chatroom topic"],
                "Kick user from chatroom": [null, "Goei gebruiker uit chatroom"],
                "Ban user from chatroom": [null, "Ban gebruiker van chatroom"],
                Message: [null, "Bericht"],
                Save: [null, "Opslaan"],
                Cancel: [null, "Annuleren"],
                "An error occurred while trying to save the form.": [null, "Een error tijdens het opslaan van het formulier."],
                "This chatroom requires a password": [null, "Chatroom heeft een wachtwoord"],
                "Password: ": [null, "Wachtwoord: "],
                Submit: [null, "Indienen"],
                "This room is not anonymous": [null, "Deze room is niet annoniem"],
                "This room now shows unavailable members": [null, ""],
                "This room does not show unavailable members": [null, ""],
                "Non-privacy-related room configuration has changed": [null, ""],
                "Room logging is now enabled": [null, ""],
                "Room logging is now disabled": [null, ""],
                "This room is now non-anonymous": [null, "Deze room is nu niet annoniem"],
                "This room is now semi-anonymous": [null, "Deze room is nu semie annoniem"],
                "This room is now fully-anonymous": [null, "Deze room is nu volledig annoniem"],
                "A new room has been created": [null, "Een nieuwe room is gemaakt"],
                "Your nickname has been changed": [null, "Je nickname is veranderd"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> is verbannen"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> has been kicked out"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, ""],
                "<strong>%1$s</strong> has been removed for not being a member": [null, ""],
                "You have been banned from this room": [null, "Je bent verbannen uit deze room"],
                "You have been kicked from this room": [null, "Je bent uit de room gegooid"],
                "You have been removed from this room because of an affiliation change": [null, ""],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, ""],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, ""],
                "You are not on the member list of this room": [null, "Je bent niet een gebruiker van deze room"],
                "No nickname was specified": [null, "Geen nickname ingegeven"],
                "You are not allowed to create new rooms": [null, "Je bent niet toegestaan nieuwe rooms te maken"],
                "Your nickname doesn't conform to this room's policies": [null, "Je nickname is niet conform policy"],
                "Your nickname is already taken": [null, "Je nickname bestaat al"],
                "This room does not (yet) exist": [null, "Deze room bestaat niet"],
                "This room has reached it's maximum number of occupants": [null, "Deze room heeft het maximale aantal gebruikers"],
                "Topic set by %1$s to: %2$s": [null, ""],
                "This user is a moderator": [null, "Dit is een moderator"],
                "This user can send messages in this room": [null, "Deze gebruiker kan berichten sturen in deze room"],
                "This user can NOT send messages in this room": [null, "Deze gebruiker kan NIET een bericht sturen in deze room"],
                "Click to chat with this contact": [null, "Klik om te chatten met contact"],
                "Click to remove this contact": [null, "Klik om contact te verwijderen"],
                "This contact is busy": [null, "Contact is bezet"],
                "This contact is online": [null, "Contact is online"],
                "This contact is offline": [null, "Contact is offline"],
                "This contact is unavailable": [null, "Contact is niet beschikbaar"],
                "This contact is away for an extended period": [null, "Contact is afwezig voor lange periode"],
                "This contact is away": [null, "Conact is afwezig"],
                "Contact requests": [null, "Contact uitnodiging"],
                "My contacts": [null, "Mijn contacts"],
                "Pending contacts": [null, "Conacten in afwachting van"],
                "Custom status": [null, ""],
                "Click to change your chat status": [null, "Klik hier om status te wijzigen"],
                "Click here to write a custom status message": [null, "Klik hier om custom status bericht te maken"],
                online: [null, "online"],
                busy: [null, "bezet"],
                "away for long": [null, "afwezig lange tijd"],
                away: [null, "afwezig"],
                "I am %1$s": [null, "Ik ben %1$s"],
                "Sign in": [null, "Aanmelden"],
                "XMPP/Jabber Username:": [null, "XMPP/Jabber Username:"],
                "Password:": [null, "Wachtwoord:"],
                "Log In": [null, "Aanmelden"],
                "BOSH Service URL:": [null, ""],
                "Online Contacts": [null, "Online Contacten"],
                "%1$s is typing": [null, "%1$s is aan typen"],
                Connected: [null, "Verbonden"],
                Attached: [null, "Bijlage"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("nl", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.nl = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.6.3",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-13 16:02+0200",
                    "PO-Revision-Date": "2013-07-23 14:34-0300",
                    "Last-Translator": "Sergio Oliveira <sergio@tracy.com.br>",
                    "Language-Team": "Brazilian Portuguese",
                    Language: "pt_BR",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    "Plural-Forms": "nplurals=2; plural=(n > 1);",
                    domain: "converse",
                    lang: "pt_BR",
                    plural_forms: "nplurals=2; plural=(n != 1);"
                },
                Disconnected: [null, "Desconectado"],
                Error: [null, "Erro"],
                Connecting: [null, "Conectando"],
                "Connection Failed": [null, "Falha de conexÃ£o"],
                Authenticating: [null, "Autenticando"],
                "Authentication Failed": [null, "Falha de autenticaÃ§Ã£o"],
                Disconnecting: [null, "Desconectando"],
                me: [null, "eu"],
                "%1$s is typing": [null, "%1$s estÃ¡ digitando"],
                "Show this menu": [null, "Mostrar o menu"],
                "Write in the third person": [null, "Escrever em terceira pessoa"],
                "Remove messages": [null, "Remover mensagens"],
                "Personal message": [null, "Mensagem pessoal"],
                Contacts: [null, "Contatos"],
                Online: [null, "Online"],
                Busy: [null, "Ocupado"],
                Away: [null, "Ausente"],
                Offline: [null, "Offline"],
                "Click to add new chat contacts": [null, "Clique para adicionar novos contatos ao chat"],
                "Add a contact": [null, "Adicionar contato"],
                "Contact username": [null, "UsuÃ¡rio do contatt"],
                Add: [null, "Adicionar"],
                "Contact name": [null, "Nome do contato"],
                Search: [null, "Procurar"],
                "No users found": [null, "NÃ£o foram encontrados usuÃ¡rios"],
                "Click to add as a chat contact": [null, "Clique para adicionar como um contato do chat"],
                "Click to open this room": [null, "CLique para abrir a sala"],
                "Show more information on this room": [null, "Mostrar mais informaÃ§Ãµes nessa sala"],
                "Description:": [null, "DescriÃ§Ã£o:"],
                "Occupants:": [null, "Ocupantes:"],
                "Features:": [null, "Recursos:"],
                "Requires authentication": [null, "Requer autenticaÃ§Ã£o"],
                Hidden: [null, "Escondido"],
                "Requires an invitation": [null, "Requer um convite"],
                Moderated: [null, "Moderado"],
                "Non-anonymous": [null, "NÃ£o anÃ´nimo"],
                "Open room": [null, "Sala aberta"],
                "Permanent room": [null, "Sala permanente"],
                Public: [null, "PÃºblico"],
                "Semi-anonymous": [null, "Semi anÃ´nimo"],
                "Temporary room": [null, "Sala temporÃ¡ria"],
                Unmoderated: [null, "Sem moderaÃ§Ã£o"],
                Rooms: [null, "Salas"],
                "Room name": [null, "Nome da sala"],
                Nickname: [null, "Apelido"],
                Server: [null, "Server"],
                Join: [null, "Entrar"],
                "Show rooms": [null, "Mostar salas"],
                "No rooms on %1$s": [null, "Sem salas em %1$s"],
                "Rooms on %1$s": [null, "Salas em %1$s"],
                "Set chatroom topic": [null, "Definir tÃ³pico do chat"],
                "Kick user from chatroom": [null, "Expulsar usuÃ¡rio do chat"],
                "Ban user from chatroom": [null, "Banir usuÃ¡rio do chat"],
                Message: [null, "Mensagem"],
                Save: [null, "Salvar"],
                Cancel: [null, "Cancelar"],
                "An error occurred while trying to save the form.": [null, "Ocorreu um erro enquanto tentava salvar o formulÃ¡rio"],
                "This chatroom requires a password": [null, "Esse chat precisa de senha"],
                "Password: ": [null, "Senha: "],
                Submit: [null, "Enviar"],
                "This room is not anonymous": [null, "Essa sala nÃ£o Ã© anÃ´nima"],
                "This room now shows unavailable members": [null, "Agora esta sala mostra membros indisponÃ­veis"],
                "This room does not show unavailable members": [null, "Essa sala nÃ£o mostra membros indisponÃ­veis"],
                "Non-privacy-related room configuration has changed": [null, "ConfiguraÃ§Ãµs nÃ£o relacionadas Ã  privacidade mudaram"],
                "Room logging is now enabled": [null, "O log da sala estÃ¡ ativado"],
                "Room logging is now disabled": [null, "O log da sala estÃ¡ desativado"],
                "This room is now non-anonymous": [null, "Esse sala Ã© nÃ£o anÃ´nima"],
                "This room is now semi-anonymous": [null, "Essa sala agora Ã© semi anÃ´nima"],
                "This room is now fully-anonymous": [null, "Essa sala agora Ã© totalmente anÃ´nima"],
                "A new room has been created": [null, "Uma nova sala foi criada"],
                "Your nickname has been changed": [null, "Seu apelido foi mudado"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> foi banido"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> foi expulso"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<srtong>%1$s</strong> foi removido por causa de troca de associaÃ§Ã£o"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> foi removido por nÃ£o ser um membro"],
                "You have been banned from this room": [null, "VocÃª foi banido dessa sala"],
                "You have been kicked from this room": [null, "VocÃª foi expulso dessa sala"],
                "You have been removed from this room because of an affiliation change": [null, "VocÃª foi removido da sala devido a uma mudanÃ§a de associaÃ§Ã£o"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "VocÃª foi removido da sala porque ela foi mudada para somente membrose vocÃª nÃ£o Ã© um membro"],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "VocÃª foi removido da sala devido a MUC (Multi-user chat)o serviÃ§o estÃ¡ sendo desligado"],
                "You are not on the member list of this room": [null, "VocÃª nÃ£o Ã© membro dessa sala"],
                "No nickname was specified": [null, "VocÃª nÃ£o escolheu um apelido "],
                "You are not allowed to create new rooms": [null, "VocÃª nÃ£o tem permitiÃ§Ã£o de criar novas salas"],
                "Your nickname doesn't conform to this room's policies": [null, "Seu apelido nÃ£o estÃ¡ de acordo com as regras da sala"],
                "Your nickname is already taken": [null, "Seu apelido jÃ¡ foi escolhido"],
                "This room does not (yet) exist": [null, "A sala nÃ£o existe (ainda)"],
                "This room has reached it's maximum number of occupants": [null, "A sala atingiu o nÃºmero mÃ¡ximo de ocupantes"],
                "Topic set by %1$s to: %2$s": [null, "Topico definido por %1$s para: %2$s"],
                "This user is a moderator": [null, "Esse usuÃ¡rio Ã© o moderador"],
                "This user can send messages in this room": [null, "Esse usuÃ¡rio pode enviar mensagens nessa sala"],
                "This user can NOT send messages in this room": [null, "Esse usuÃ¡rio NÃƒO pode enviar mensagens nessa sala"],
                "Click to chat with this contact": [null, "Clique para conversar com o contato"],
                "Click to remove this contact": [null, "Clique para remover o contato"],
                "This contact is busy": [null, "Este contato estÃ¡ ocupado"],
                "This contact is online": [null, "Este contato estÃ¡ online"],
                "This contact is offline": [null, "Este contato estÃ¡ offline"],
                "This contact is unavailable": [null, "Este contato estÃ¡ indisponÃ­vel"],
                "This contact is away for an extended period": [null, "Este contato estÃ¡ ausente por um longo perÃ­odo"],
                "This contact is away": [null, "Este contato estÃ¡ ausente"],
                "Contact requests": [null, "SolicitaÃ§Ã£o de contatos"],
                "My contacts": [null, "Meus contatos"],
                "Pending contacts": [null, "Contados pendentes"],
                "Custom status": [null, "Status customizado"],
                "Click to change your chat status": [null, "Clique para mudar seu status no chat"],
                "Click here to write a custom status message": [null, "Clique aqui para customizar a mensagem de status"],
                online: [null, "online"],
                busy: [null, "ocupado"],
                "away for long": [null, "ausente a bastante tempo"],
                away: [null, "ausente"],
                "I am %1$s": [null, "Estou %1$s"],
                "Sign in": [null, "Conectar-se"],
                "XMPP/Jabber Username:": [null, "UsuÃ¡rio XMPP/Jabber:"],
                "Password:": [null, "Senha:"],
                "Log In": [null, "Entrar"],
                "BOSH Service URL:": [null, "URL de serviÃ§o BOSH:"],
                "Online Contacts": [null, "Contatos online"],
                Connected: [null, "Conectado"],
                Attached: [null, "Anexado"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("pt_BR", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.pt_BR = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    var n = {
        domain: "converse",
        locale_data: {
            converse: {
                "": {
                    "Project-Id-Version": "Converse.js 0.4",
                    "Report-Msgid-Bugs-To": "",
                    "POT-Creation-Date": "2013-09-15 22:06+0200",
                    "PO-Revision-Date": "2013-09-29 17:24+0300",
                    "Last-Translator": "Boris Kocherov <bk@raskon.org>",
                    "Language-Team": "<bk@raskon.ru>",
                    Language: "ru",
                    "MIME-Version": "1.0",
                    "Content-Type": "text/plain; charset=UTF-8",
                    "Content-Transfer-Encoding": "8bit",
                    "X-Generator": "Poedit 1.5.5"
                },
                unencrypted: [null, "Ð½Ðµ Ð·Ð°ÑˆÐ¸Ñ„Ñ€Ð¾Ð²Ð°Ð½Ð¾"],
                unverified: [null, "Ð½ÐµÐ¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð¾"],
                verified: [null, "Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð¾"],
                finished: [null, "Ð·Ð°ÐºÐ¾Ð½Ñ‡ÐµÐ½Ð¾"],
                Disconnected: [null, "ÐžÑ‚ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾"],
                Error: [null, "ÐžÑˆÐ¸Ð±ÐºÐ°"],
                Connecting: [null, "Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ"],
                "Connection Failed": [null, "Ð�Ðµ ÑƒÐ´Ð°Ð»Ð¾Ñ�ÑŒ Ñ�Ð¾ÐµÐ´Ð¸Ð½Ð¸Ñ‚Ñ�Ñ�"],
                Authenticating: [null, "Ð�Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ�"],
                "Authentication Failed": [null, "Ð�Ðµ ÑƒÐ´Ð°Ð»Ð¾Ñ�ÑŒ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ñ‚ÑŒÑ�Ñ�"],
                Disconnecting: [null, "ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð°ÐµÐ¼Ñ�Ñ�"],
                "Private key generated.": [null, "ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡ Ñ�Ð³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½."],
                "Personal message": [null, "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ"],
                "What's this?": [null, "Ð§Ñ‚Ð¾ Ñ�Ñ‚Ð¾?"],
                me: [null, "Ð¯"],
                "Show this menu": [null, "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ñ�Ñ‚Ð¾ Ð¼ÐµÐ½ÑŽ"],
                "Remove messages": [null, "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ�"],
                "Your message could not be sent": [null, "Ð’Ð°ÑˆÐµ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ð½Ðµ Ð¿Ð¾Ñ�Ð»Ð°Ð½Ð¾"],
                "Your messages are not encrypted anymore": [null, "Ð’Ð°ÑˆÐ¸ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� Ð±Ð¾Ð»ÑŒÑˆÐµ Ð½Ðµ ÑˆÐ¸Ñ„Ñ€ÑƒÑŽÑ‚Ñ�Ñ�"],
                "Your messages are now encrypted but your buddy's identity has not been verified.": [null, "Ð’Ð°ÑˆÐ¸ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� ÑˆÐ¸Ñ„Ñ€ÑƒÑŽÑ‚Ñ�Ñ�, Ð½Ð¾ Ð²Ð°ÑˆÐ° ÑƒÑ‡Ñ‘Ñ‚Ð½Ð°Ñ� Ð·Ð°Ð¿Ð¸Ñ�ÑŒ Ð½Ðµ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð° Ð²Ð°ÑˆÐ¸Ð¼ Ñ�Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¾Ð¼."],
                "Your buddy's identify has been verified.": [null, "Ð’Ð°ÑˆÐ° ÑƒÑ‡Ñ‘Ñ‚Ð½Ð°Ñ� Ð·Ð°Ð¿Ð¸Ñ�ÑŒ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð° Ð²Ð°ÑˆÐ¸Ð¼ Ñ�Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¾Ð¼."],
                "Your messages are not encrypted. Click here to enable OTR encryption.": [null, "Ð’Ð°ÑˆÐ¸ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� Ð½Ðµ ÑˆÐ¸Ñ„Ñ€ÑƒÑŽÑ‚Ñ�Ñ�. Ð�Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð·Ð´ÐµÑ�ÑŒ Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ð°Ñ�Ñ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ ÑˆÐ¸Ñ„Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ."],
                "Your messages are encrypted, but your buddy has not been verified.": [null, "Ð’Ð°ÑˆÐ¸ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� ÑˆÐ¸Ñ„Ñ€ÑƒÑŽÑ‚Ñ�Ñ�, Ð½Ð¾ Ð²Ð°Ñˆ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚ Ð½Ðµ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½."],
                "Your messages are encrypted and your buddy verified.": [null, "Ð’Ð°ÑˆÐ¸ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� ÑˆÐ¸Ñ„Ñ€ÑƒÑŽÑ‚Ñ�Ñ� Ð¸ Ð²Ð°Ñˆ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½"],
                Contacts: [null, "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹"],
                Online: [null, "Ð’ Ñ�ÐµÑ‚Ð¸"],
                Busy: [null, "Ð—Ð°Ð½Ñ�Ñ‚"],
                Away: [null, "ÐžÑ‚Ð¾ÑˆÑ‘Ð»"],
                Offline: [null, "Ð�Ðµ Ð² Ñ�ÐµÑ‚Ð¸"],
                "Click to add new chat contacts": [null, "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð½Ð¾Ð²ÑƒÑŽ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸ÑŽ"],
                "Add a contact": [null, "Ð”Ð¾Ð±Ð°Ð²Ñ‚ÑŒ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚"],
                "Contact username": [null, "Ð˜Ð¼Ñ� Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ�"],
                Add: [null, "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ"],
                "Contact name": [null, "Ð˜Ð¼Ñ� ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð°"],
                Search: [null, "ÐŸÐ¾Ð¸Ñ�Ðº"],
                "No users found": [null, "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð¸ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ñ‹"],
                "Click to add as a chat contact": [null, "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚"],
                "Click to open this room": [null, "Ð—Ð°Ð¹Ñ‚Ð¸ Ð² ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸ÑŽ"],
                "Show more information on this room": [null, "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ Ð¾Ð± Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸"],
                "Description:": [null, "ÐžÐ¿Ð¸Ñ�Ð°Ð½Ð¸Ðµ:"],
                "Occupants:": [null, "Ð£Ñ‡Ð°Ñ�Ñ‚Ð½Ð¸ÐºÐ¸:"],
                "Features:": [null, "Ð¡Ð²Ð¾Ð¹Ñ�Ñ‚Ð²Ð°:"],
                "Requires authentication": [null, "Ð¢Ñ€ÐµÐ±ÑƒÐµÑ‚Ñ�Ñ� Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ�"],
                Hidden: [null, "Ð¡ÐºÑ€Ñ‹Ñ‚Ð¾"],
                "Requires an invitation": [null, "Ð¢Ñ€ÐµÐ±ÑƒÐµÑ‚Ñ�Ñ� Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ"],
                Moderated: [null, "ÐœÐ¾Ð´ÐµÑ€Ð¸Ñ€ÑƒÐµÐ¼Ð°Ñ�"],
                "Non-anonymous": [null, "Ð�Ðµ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð°Ñ�"],
                "Open room": [null, "ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸ÑŽ"],
                "Permanent room": [null, "ÐŸÐµÑ€Ð¼Ð°Ð½ÐµÐ½Ñ‚Ð½Ð°Ñ� ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ñ�"],
                Public: [null, "ÐŸÑƒÐ±Ð»Ð¸Ñ‡Ð½Ñ‹Ð¹"],
                "Semi-anonymous": [null, "Ð§Ð°Ñ�Ñ‚Ð¸Ñ‡Ð½Ð¾ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð°Ñ�"],
                "Temporary room": [null, "Ð’Ñ€ÐµÐ¼ÐµÐ½Ð½Ð°Ñ� ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ñ�"],
                Unmoderated: [null, "Ð�ÐµÐ¼Ð¾Ð´ÐµÑ€Ð¸Ñ€ÑƒÐµÐ¼Ð°Ñ�"],
                Rooms: [null, "ÐšÐ¾Ð½Ñ„ÐµÑ€."],
                "Room name": [null, "Ð˜Ð¼Ñ� ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸"],
                Nickname: [null, "ÐŸÑ�ÐµÐ²Ð´Ð¾Ð½Ð¸Ð¼"],
                Server: [null, "Ð¡ÐµÑ€Ð²ÐµÑ€"],
                Join: [null, "ÐŸÐ¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒÑ�Ñ�"],
                "Show rooms": [null, "ÐžÐ±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ"],
                "No rooms on %1$s": [null, "Ð�ÐµÑ‚ Ð´Ð¾Ñ�Ñ‚ÑƒÐ¿Ð½Ñ‹Ñ… ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¹ %1$s"],
                "Rooms on %1$s": [null, "ÐšÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸ %1$s:"],
                "Set chatroom topic": [null, "Ð£Ñ�Ñ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ñ‚ÐµÐ¼Ñƒ"],
                "Kick user from chatroom": [null, "ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ� Ð¾Ñ‚ ÐºÐ½Ð¾Ñ„ÐµÑ€."],
                "Ban user from chatroom": [null, "Ð—Ð°Ð±Ð°Ð½Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ� Ð² Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„."],
                Message: [null, "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ"],
                Save: [null, "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ"],
                Cancel: [null, "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ"],
                "An error occurred while trying to save the form.": [null, "ÐŸÑ€Ð¸ Ñ�Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð¿Ñ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°."],
                "This chatroom requires a password": [null, "Ð”Ð»Ñ� Ð´Ð¾Ñ�Ñ‚ÑƒÐ¿Ð° Ð² ÐºÐ¾Ð½Ñ„ÐµÑ€. Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ."],
                "Password: ": [null, "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ: "],
                Submit: [null, "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ"],
                "This room is not anonymous": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð½Ðµ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð°Ñ�"],
                "This room now shows unavailable members": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ Ð´Ð¾Ñ�Ñ‚ÑƒÐ¿Ð½Ñ‹Ñ… Ñ�Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¾Ð²"],
                "This room does not show unavailable members": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð½Ðµ Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ Ð½ÐµÐ´Ð¾Ñ�Ñ‚ÑƒÐ¿Ð½Ñ‹Ñ… Ñ�Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¾Ð²"],
                "This room is now non-anonymous": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð½Ðµ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð°Ñ�"],
                "This room is now semi-anonymous": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ñ‡Ð°Ñ�Ñ‚Ð¸Ñ‡Ð½Ð¾ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð°Ñ�"],
                "This room is now fully-anonymous": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ñ�Ñ‚Ð°Ð»Ð° Ð¿Ð¾Ð»Ð½Ð¾Ñ�Ñ‚ÑŒÑŽ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½Ð¾Ð¹"],
                "A new room has been created": [null, "Ð�Ð¾Ð²Ð°Ñ� ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð±Ñ‹Ð»Ð° Ñ�Ð¾Ð·Ð´Ð°Ð½Ð°"],
                "Your nickname has been changed": [null, "Ð’Ð°Ñˆ Ð¿Ñ�ÐµÐ²Ð´Ð¾Ð½Ð¸Ð¼ ÑƒÐ¶Ðµ Ð¸Ñ�Ð¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ñ�Ñ� Ð´Ñ€ÑƒÐ³Ð¸Ð¼ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼"],
                "<strong>%1$s</strong> has been banned": [null, "<strong>%1$s</strong> Ð·Ð°Ð±Ð°Ð½ÐµÐ½"],
                "<strong>%1$s</strong> has been kicked out": [null, "<strong>%1$s</strong> Ð²Ñ‹Ð´Ð²Ð¾Ñ€ÐµÐ½"],
                "<strong>%1$s</strong> has been removed because of an affiliation change": [null, "<strong>%1$s</strong> has been removed because of an affiliation change"],
                "<strong>%1$s</strong> has been removed for not being a member": [null, "<strong>%1$s</strong> ÑƒÐ´Ð°Ð»Ñ‘Ð½ Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð½Ðµ ÑƒÑ‡Ð°Ñ�Ñ‚Ð½Ð¸Ðº"],
                "You have been banned from this room": [null, "Ð’Ð°Ð¼ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡Ð°Ñ‚Ñ�Ñ� Ðº Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸"],
                "You have been kicked from this room": [null, "Ð’Ð°Ð¼ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡Ð°Ñ‚Ñ�Ñ� Ðº Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸"],
                "You have been removed from this room because of an affiliation change": [null, "<strong>%1$s</strong> ÑƒÐ´Ð°Ð»Ñ‘Ð½ Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ð»Ð¸Ñ�ÑŒ Ð¿Ñ€Ð°Ð²Ð°"],
                "You have been removed from this room because the room has changed to members-only and you're not a member": [null, "Ð’Ñ‹ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡ÐµÐ½Ñ‹ Ð¾Ñ‚ Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸ Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ñ€ÐµÐ¶Ð¸Ð¼ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ð»Ñ�Ñ�: Ñ‚Ð¾Ð»ÑŒÐºÐ¾-ÑƒÑ‡Ð°Ñ�Ñ‚Ð½Ð¸ÐºÐ¸"],
                "You have been removed from this room because the MUC (Multi-user chat) service is being shut down.": [null, "Ð’Ñ‹ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡ÐµÐ½Ñ‹ Ð¾Ñ‚ Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸ Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ñ�ÐµÑ€Ð²Ð¸Ñ�ÑŒ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¹ Ð²Ñ‹ÐºÐ»ÑŽÑ‡ÐµÐ½."],
                "You are not on the member list of this room": [null, "Ð’Ð°Ñ� Ð½ÐµÑ‚ Ð² Ñ�Ð¿Ð¸Ñ�ÐºÐµ Ñ�Ñ‚Ð¾Ð¹ ÐºÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸"],
                "No nickname was specified": [null, "Ð’Ñ‹ Ð½Ðµ ÑƒÐºÐ°Ð·Ð°Ð»Ð¸ Ð¿Ñ�ÐµÐ²Ð´Ð¾Ð½Ð¸Ð¼"],
                "You are not allowed to create new rooms": [null, "Ð’Ñ‹ Ð½Ðµ Ð¸Ð¼ÐµÐµÑ‚Ðµ Ð¿Ñ€Ð°Ð²Ð° Ñ�Ð¾Ð·Ð´Ð°Ð²Ð°Ñ‚ÑŒ ÐºÐ¾Ð½Ñ„ÐµÑ€."],
                "Your nickname doesn't conform to this room's policies": [null, "ÐŸÑ�ÐµÐ²Ð´Ð¾Ð½Ð¸Ð¼ Ð½Ðµ Ñ�Ð¾Ð³Ð»Ð°Ñ�ÑƒÐµÑ‚Ñ�Ñ� Ñ� Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð°Ð¼Ð¸ ÐºÐ¾Ð½Ñ„ÐµÑ€."],
                "Your nickname is already taken": [null, "Ð’Ð°Ñˆ Ð½Ð¸Ðº ÑƒÐ¶Ðµ Ð¸Ñ�Ð¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ñ�Ñ� Ð´Ñ€ÑƒÐ³Ð¸Ð¼ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼"],
                "This room does not (yet) exist": [null, "Ð­Ñ‚Ð° ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð° Ð½Ðµ Ñ�ÑƒÑ‰ÐµÑ�Ñ‚Ð²ÑƒÐµÑ‚"],
                "This room has reached it's maximum number of occupants": [null, "ÐšÐ¾Ð½Ñ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ñ� Ð´Ð¾Ñ�Ñ‚Ð¸Ð³Ð»Ð° Ð¼Ð°ÐºÑ�Ð¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑ�Ñ‚Ð²Ð° ÑƒÑ‡Ð°Ñ�Ñ‚Ð½Ð¸ÐºÐ¾Ð²"],
                "Topic set by %1$s to: %2$s": [null, "Ð¢ÐµÐ¼Ð° %2$s ÑƒÑ�Ñ‚Ð°Ñ‚Ð½Ð¾Ð²Ð»ÐµÐ½Ð° %1$s"],
                "This user is a moderator": [null, "ÐœÐ¾Ð´ÐµÑ€Ð°Ñ‚Ð¾Ñ€"],
                "This user can send messages in this room": [null, "Ð¡Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸Ðº"],
                "This user can NOT send messages in this room": [null, "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾Ñ�Ñ‹Ð»Ð°Ñ‚ÑŒ Ñ�Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ� Ð² Ñ�Ñ‚Ñƒ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ñƒ"],
                "Click to chat with this contact": [null, "Ð�Ð°Ñ‡Ð°Ñ‚ÑŒ Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ"],
                "Click to remove this contact": [null, "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚"],
                "This contact is busy": [null, "Ð—Ð°Ð½Ñ�Ñ‚"],
                "This contact is online": [null, "Ð’ Ñ�ÐµÑ‚Ð¸"],
                "This contact is offline": [null, "Ð�Ðµ Ð² Ñ�ÐµÑ‚Ð¸"],
                "This contact is unavailable": [null, "Ð�Ðµ Ð´Ð¾Ñ�Ñ‚ÑƒÐ¿ÐµÐ½"],
                "This contact is away for an extended period": [null, "Ð�Ð° Ð´Ð¾Ð»Ð³Ð¾ Ð¾Ñ‚Ð¾ÑˆÑ‘Ð»"],
                "This contact is away": [null, "ÐžÑ‚Ð¾ÑˆÑ‘Ð»"],
                "Contact requests": [null, "Ð—Ð°Ð¿Ñ€Ð¾Ñ�Ñ‹ Ð½Ð° Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸ÑŽ"],
                "My contacts": [null, "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹"],
                "Pending contacts": [null, "Ð¡Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¸ Ð¾Ð¶Ð¸Ð´Ð°ÑŽÑ‰Ð¸Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸"],
                "Custom status": [null, "ÐŸÑ€Ð¾Ð¸Ð·Ð²Ð¾Ð»ÑŒÐ½Ñ‹Ð¹ Ñ�Ñ‚Ð°Ñ‚ÑƒÑ�"],
                "Click to change your chat status": [null, "Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð²Ð°Ñˆ Ñ�Ñ‚Ð°Ñ‚ÑƒÑ�"],
                "Click here to write a custom status message": [null, "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð»ÑŒÐ½Ñ‹Ð¹ Ñ�Ñ‚Ð°Ñ‚ÑƒÑ�"],
                online: [null, "Ð½Ð° Ñ�Ð²Ñ�Ð·Ð¸"],
                busy: [null, "Ð·Ð°Ð½Ñ�Ñ‚"],
                "away for long": [null, "Ð¾Ñ‚Ð¾ÑˆÑ‘Ð» Ð½Ð° Ð´Ð¾Ð»Ð³Ð¾"],
                away: [null, "Ð¾Ñ‚Ð¾ÑˆÑ‘Ð»"],
                "I am %1$s": [null, "%1$s"],
                "Sign in": [null, "ÐŸÐ¾Ð´Ð¿Ð¸Ñ�Ð°Ñ‚ÑŒ"],
                "XMPP/Jabber Username:": [null, "JID:"],
                "Password:": [null, "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ:"],
                "Log In": [null, "Ð’Ð¾Ð¹Ñ‚Ð¸"],
                "Online Contacts": [null, "CÐ¿Ð¸Ñ�Ð¾Ðº Ñ�Ð¾Ð±ÐµÑ�ÐµÐ´Ð½Ð¸ÐºÐ¾Ð²"]
            }
        }
    };
    typeof define == "function" && define.amd ? define("ru", ["jed"], function() {
        return t(new Jed(n))
    }) : (window.locales || (window.locales = {}), window.locales.ru = t(new Jed(n)))
}(this, function(e) {
    return e
}),
function(e, t) {
    require.config({
        paths: {
            jed: "components/jed/jed",
            af: "locale/af/LC_MESSAGES/af",
            de: "locale/de/LC_MESSAGES/de",
            en: "locale/en/LC_MESSAGES/en",
            es: "locale/es/LC_MESSAGES/es",
            fr: "locale/fr/LC_MESSAGES/fr",
            hu: "locale/hu/LC_MESSAGES/hu",
            it: "locale/it/LC_MESSAGES/it",
            nl: "locale/nl/LC_MESSAGES/nl",
            pt_BR: "locale/pt_BR/LC_MESSAGES/pt_BR",
            ru: "locale/ru/LC_MESSAGES/ru"
        }
    }), define("locales", ["jed", "af", "de", "en", "es", "fr", "hu", "it", "nl", "pt_BR", "ru"], function(t, n, r, i, s, o, u, a, f, l, c) {
        e.locales = {
            af: n,
            de: r,
            en: i,
            es: s,
            fr: o,
            hu: u,
            it: a,
            nl: f,
            "pt-br": l,
            ru: c
        }
    })
}(this),
function() {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function(e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.1";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !! i)
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    x.contains = x.include = function(e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.where = function(e, t, n) {
        return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function(e, t) {
        return x.where(e, t, !0)
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity,
            value: -Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o > r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function(e, t, n, r) {
        var i = {}, s = k(t == null ? x.identity : t);
        return T(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function(e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, 0, t) : e[0]
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var A = function(e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function(e, t) {
        return A(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function(n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }, x.zip = function() {
        var e = x.max(x.pluck(arguments, "length").concat(0)),
            t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function(e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function() {};
    x.bind = function(e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function() {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        if (t.length === 0) throw new Error("bindAll must be passed function names");
        return T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
        function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
        };
        return function() {
            var f = new Date;
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, x.debounce = function(e, t, n) {
        var r, i = null;
        return function() {
            var s = this,
                o = arguments,
                u = function() {
                    i = null, n || (r = e.apply(s, o))
                }, a = n && !i;
            return clearTimeout(i), i = setTimeout(u, t), a && (r = e.apply(s, o)), r
        }
    }, x.once = function(e) {
        var t = !1,
            n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function(e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var M = function(e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var a = 0,
            l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r))) break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function(e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function(e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function(e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !! x.has(e, "callee")
    }), typeof / . / != "function" && (x.isFunction = function(e) {
        return typeof e == "function"
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function(e) {
        return e === null
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function(e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return t == null ? "" : ("" + t).replace(D[e], function(t) {
                return _[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function(e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var F = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), define("underscore", function() {}),
function() {
    var e = this,
        t = e.Backbone,
        n = [],
        r = n.push,
        i = n.slice,
        s = n.splice,
        o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.0.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function() {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {
        on: function(e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function(e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t) return this;
            var r = this,
                i = u.once(function() {
                    r.off(e, i), t.apply(this, arguments)
                });
            return i._callback = t, this.on(e, i, n)
        },
        off: function(e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [e] : u.keys(this._events);
            for (a = 0, f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n)
                        for (c = 0, h = s.length; c < h; c++) i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            }
            return this
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e],
                r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this
        },
        stopListening: function(e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            typeof t == "object" && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var s in r) r[s].off(t, n, this), i && delete this._listeners[s];
            return this
        }
    }, f = /\s+/,
        l = function(e, t, n, r) {
            if (!n) return !0;
            if (typeof n == "object") {
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (f.test(n)) {
                var s = n.split(f);
                for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                return !1
            }
            return !0
        }, c = function(e, t) {
            var n, r = -1,
                i = e.length,
                s = t[0],
                o = t[1],
                u = t[2];
            switch (t.length) {
                case 0:
                    while (++r < i)(n = e[r]).callback.call(n.ctx);
                    return;
                case 1:
                    while (++r < i)(n = e[r]).callback.call(n.ctx, s);
                    return;
                case 2:
                    while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                    return;
                case 3:
                    while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                    return;
                default:
                    while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
            }
        }, h = {
            listenTo: "on",
            listenToOnce: "once"
        };
    u.each(h, function(e, t) {
        a[t] = function(t, n, r) {
            var i = this._listeners || (this._listeners = {}),
                s = t._listenerId || (t._listenerId = u.uniqueId("l"));
            return i[s] = t, typeof n == "object" && (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function(e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, u.extend(this, u.pick(t, d)), t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    }, d = ["url", "urlRoot", "collection"];
    u.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return u.clone(this.attributes)
        },
        sync: function() {
            return o.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return u.escape(this.get(e))
        },
        has: function(e) {
            return this.get(e) != null
        },
        set: function(e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f) return this;
            if (!a)
                while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function(e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        },
        previous: function(e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function() {
            return u.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function(r) {
                if (!t.set(t.parse(r, e), e)) return !1;
                n && n(t, r, e), t.trigger("sync", t, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        save: function(e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t;
            if (r && (!n || !n.wait) && !this.set(r, n)) return !1;
            n = u.extend({
                validate: !0
            }, n);
            if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this,
                f = n.success;
            return n.success = function(e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n)) return !1;
                f && f(a, e, n), a.trigger("sync", a, e, n)
            }, j(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s
        },
        destroy: function(e) {
            e = e ? u.clone(e) : {};
            var t = this,
                n = e.success,
                r = function() {
                    t.trigger("destroy", t, t.collection, e)
                };
            e.success = function(i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            };
            if (this.isNew()) return e.success(), !1;
            j(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function() {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || B();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return this.id == null
        },
        isValid: function(e) {
            return this._validate({}, u.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t || {}, {
                validationError: n
            })), !1) : !0
        }
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    u.each(v, function(e) {
        p.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t)
        }
    });
    var m = o.Collection = function(e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t))
    }, g = {
            add: !0,
            remove: !0,
            merge: !0
        }, y = {
            add: !0,
            merge: !1,
            remove: !1
        };
    u.extend(m.prototype, a, {
        model: p,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return o.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, u.defaults(t || {}, y))
        },
        remove: function(e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, s;
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
            }
            return this
        },
        set: function(e, t) {
            t = u.defaults(t || {}, g), t.parse && (e = this.parse(e, t)), u.isArray(e) || (e = e ? [e] : []);
            var n, i, o, a, f, l, c = t.at,
                h = this.comparator && c == null && t.sort !== !1,
                p = u.isString(this.comparator) ? this.comparator : null,
                d = [],
                v = [],
                m = {};
            for (n = 0, i = e.length; n < i; n++) {
                if (!(o = this._prepareModel(e[n], t))) continue;
                (f = this.get(o)) ? (t.remove && (m[f.cid] = !0), t.merge && (f.set(o.attributes, t), h && !l && f.hasChanged(p) && (l = !0))) : t.add && (d.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o))
            }
            if (t.remove) {
                for (n = 0, i = this.length; n < i; ++n) m[(o = this.models[n]).cid] || v.push(o);
                v.length && this.remove(v, t)
            }
            d.length && (h && (l = !0), this.length += d.length, c != null ? s.apply(this.models, [c, 0].concat(d)) : r.apply(this.models, d)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, i = d.length; n < i; n++)(o = d[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        reset: function(e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function(e, t) {
            return this.models.slice(e, t)
        },
        get: function(e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e.cid || e]
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e)
                    if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        sortedIndex: function(e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
            return u.sortedIndex(this.models, e, r, n)
        },
        pluck: function(e) {
            return u.invoke(this.models, "get", e)
        },
        fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function(r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        create: function(e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function(i) {
                t.wait && n.add(e, t), r && r(e, i, t)
            }, e.save(null, t), e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1)
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(b, function(e) {
        m.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy"];
    u.each(w, function(e) {
        m.prototype[e] = function(t, n) {
            var r = u.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
            return u[e](this.models, r, n)
        }
    });
    var E = o.View = function(e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, S = /^(\S+)\s*(.*)$/,
        x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(E.prototype, a, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function(e) {
            if (!e && !(e = u.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) continue;
                var r = t.match(S),
                    i = r[1],
                    s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function(e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, x)), this.options = e
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            } else this.setElement(u.result(this, "el"), !1)
        }
    }), o.sync = function(e, t, n) {
        var r = T[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || B()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && window.ActiveXObject && (!window.external || !window.external.msActiveXFilteringEnabled) && (i.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a
    };
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.ajax = function() {
        return o.$.ajax.apply(o.$, arguments)
    };
    var N = o.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g,
        k = /(\(\?)?:\w+/g,
        L = /\*\w+/g,
        A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {
        initialize: function() {},
        route: function(e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function(i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s)
            }), this
        },
        navigate: function(e, t) {
            return o.history.navigate(e, t), this
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e])
        },
        _routeToRegExp: function(e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(k, function(e, t) {
                return t ? e : "([^/]+)"
            }).replace(L, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function(e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var O = o.History = function() {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, M = /^[#\/]|\s+$/g,
        _ = /^\/+|\/+$/g,
        D = /msie [\w.]+/,
        P = /\/$/;
    O.started = !1, u.extend(O.prototype, a, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (e == null)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(P, "");
                    e.indexOf(n) || (e = e.substr(n.length))
                } else e = this.getHash();
            return e.replace(M, "")
        },
        start: function(e) {
            if (O.started) throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(_, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location,
                s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e),
                n = u.any(this.handlers, function(e) {
                    if (e.route.test(t)) return e.callback(t), !0
                });
            return n
        },
        navigate: function(e, t) {
            if (!O.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            t.trigger && this.loadUrl(e)
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), o.history = new O;
    var H = function(e, t) {
        var n = this,
            r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function() {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function() {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    p.extend = m.extend = N.extend = E.extend = O.extend = H;
    var B = function() {
        throw new Error('A "url" property or function must be specified')
    }, j = function(e, t) {
            var n = t.error;
            t.error = function(r) {
                n && n(e, r, t), e.trigger("error", e, r, t)
            }
        }
}.call(this), define("backbone", function() {}),
function(e, t) {
    typeof exports == "object" && e.require ? module.exports = t(require("underscore"), require("backbone")) : typeof define == "function" && define.amd ? define("backbone.localStorage", ["underscore", "backbone"], function(n, r) {
        return t(n || e._, r || e.Backbone)
    }) : t(_, Backbone)
}(this, function(e, t) {
    function n() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
    }

    function r() {
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
    }
    return t.LocalStorage = window.Store = function(e) {
        if (!this.localStorage) throw "Backbone.localStorage: Environment does not support localStorage.";
        this.name = e;
        var t = this.localStorage().getItem(this.name);
        this.records = t && t.split(",") || []
    }, e.extend(t.LocalStorage.prototype, {
        save: function() {
            this.localStorage().setItem(this.name, this.records.join(","))
        },
        create: function(e) {
            return e.id || (e.id = r(), e.set(e.idAttribute, e.id)), this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)), this.records.push(e.id.toString()), this.save(), this.find(e)
        },
        update: function(t) {
            return this.localStorage().setItem(this.name + "-" + t.id, JSON.stringify(t)), e.include(this.records, t.id.toString()) || this.records.push(t.id.toString()), this.save(), this.find(t)
        },
        find: function(e) {
            return this.jsonData(this.localStorage().getItem(this.name + "-" + e.id))
        },
        findAll: function() {
            return (e.chain || e)(this.records).map(function(e) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + e))
            }, this).compact().value()
        },
        destroy: function(t) {
            return t.isNew() ? !1 : (this.localStorage().removeItem(this.name + "-" + t.id), this.records = e.reject(this.records, function(e) {
                return e === t.id.toString()
            }), this.save(), t)
        },
        localStorage: function() {
            return localStorage
        },
        jsonData: function(e) {
            return e && JSON.parse(e)
        },
        _clear: function() {
            var t = this.localStorage(),
                n = new RegExp("^" + this.name + "-");
            t.removeItem(this.name), (e.chain || e)(t).keys().filter(function(e) {
                return n.test(e)
            }).each(function(e) {
                t.removeItem(e)
            }), this.records.length = 0
        },
        _storageSize: function() {
            return this.localStorage().length
        }
    }), t.LocalStorage.sync = window.Store.sync = t.localSync = function(e, n, r) {
        var i = n.localStorage || n.collection.localStorage,
            s, o, u = t.$.Deferred && t.$.Deferred();
        try {
            switch (e) {
                case "read":
                    s = n.id != undefined ? i.find(n) : i.findAll();
                    break;
                case "create":
                    s = i.create(n);
                    break;
                case "update":
                    s = i.update(n);
                    break;
                case "delete":
                    s = i.destroy(n)
            }
        } catch (a) {
            a.code === 22 && i._storageSize() === 0 ? o = "Private browsing is unsupported" : o = a.message
        }
        return s ? (r && r.success && (t.VERSION === "0.9.10" ? r.success(n, s, r) : r.success(s)), u && u.resolve(s)) : (o = o ? o : "Record Not Found", r && r.error && (t.VERSION === "0.9.10" ? r.error(n, o, r) : r.error(o)), u && u.reject(o)), r && r.complete && r.complete(s), u && u.promise()
    }, t.ajaxSync = t.sync, t.getSyncMethod = function(e) {
        return e.localStorage || e.collection && e.collection.localStorage ? t.localSync : t.ajaxSync
    }, t.sync = function(e, n, r) {
        return t.getSyncMethod(n).apply(this, [e, n, r])
    }, t.LocalStorage
}),
function(e, t) {
    function p(e) {
        return e && e.toLowerCase ? e.toLowerCase() : e
    }

    function d(e, t) {
        for (var r = 0, i = e.length; r < i; r++)
            if (e[r] == t) return !n;
        return n
    }
    var n = !1,
        r = null,
        i = parseFloat,
        s = Math.min,
        o = /(-?\d+\.?\d*)$/g,
        u = /(\d+\.?\d*)$/g,
        a = [],
        f = [],
        l = function(e) {
            return typeof e == "string"
        }, c = function(e, t) {
            var n = e.length,
                r = n,
                i;
            while (r--) i = n - r - 1, t(e[i], i)
        }, h = Array.prototype.indexOf || function(e) {
            var t = this.length,
                n = Number(arguments[1]) || 0;
            n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
            for (; n < t; n++)
                if (n in this && this[n] === e) return n;
            return -1
        };
    e.tinysort = {
        id: "TinySort",
        version: "1.5.6",
        copyright: "Copyright (c) 2008-2013 Ron Valstar",
        uri: "http://tinysort.sjeiti.com/",
        licensed: {
            MIT: "http://www.opensource.org/licenses/mit-license.php",
            GPL: "http://www.gnu.org/licenses/gpl.html"
        },
        plugin: function() {
            var e = function(e, t) {
                a.push(e), f.push(t)
            };
            return e.indexOf = h, e
        }(),
        defaults: {
            order: "asc",
            attr: r,
            data: r,
            useVal: n,
            place: "start",
            returns: n,
            cases: n,
            forceStrings: n,
            ignoreDashes: n,
            sortFunction: r
        }
    }, e.fn.extend({
        tinysort: function() {
            var v, m, g, y = this,
                b = [],
                w = [],
                E = [],
                S = [],
                x = 0,
                T, N = [],
                C = [],
                k = function(e) {
                    c(a, function(t) {
                        t.call(t, e)
                    })
                }, L = function(e, t) {
                    return typeof t == "string" && (e.cases || (t = p(t)), t = t.replace(/^\s*(.*?)\s*$/i, "$1")), t
                }, A = function(e, t) {
                    var r = 0;
                    x !== 0 && (x = 0);
                    while (r === 0 && x < T) {
                        var s = S[x],
                            a = s.oSettings,
                            h = a.ignoreDashes ? u : o;
                        k(a);
                        if (a.sortFunction) r = a.sortFunction(e, t);
                        else if (a.order == "rand") r = Math.random() < .5 ? 1 : -1;
                        else {
                            var p = n,
                                d = L(a, e.s[x]),
                                v = L(a, t.s[x]);
                            if (!a.forceStrings) {
                                var m = l(d) ? d && d.match(h) : n,
                                    g = l(v) ? v && v.match(h) : n;
                                if (m && g) {
                                    var y = d.substr(0, d.length - m[0].length),
                                        b = v.substr(0, v.length - g[0].length);
                                    y == b && (p = !n, d = i(m[0]), v = i(g[0]))
                                }
                            }
                            r = s.iAsc * (d < v ? -1 : d > v ? 1 : 0)
                        }
                        c(f, function(e) {
                            r = e.call(e, p, d, v, r)
                        }), r === 0 && x++
                    }
                    return r
                };
            for (v = 0, g = arguments.length; v < g; v++) {
                var O = arguments[v];
                l(O) ? N.push(O) - 1 > C.length && (C.length = N.length - 1) : C.push(O) > N.length && (N.length = C.length)
            }
            N.length > C.length && (C.length = N.length), T = N.length, T === 0 && (T = N.length = 1, C.push({}));
            for (v = 0, g = T; v < g; v++) {
                var M = N[v],
                    _ = e.extend({}, e.tinysort.defaults, C[v]),
                    D = !! M && M !== "",
                    P = D && M[0] === ":";
                S.push({
                    sFind: M,
                    oSettings: _,
                    bFind: D,
                    bAttr: _.attr !== r && _.attr !== "",
                    bData: _.data !== r,
                    bFilter: P,
                    $Filter: P ? y.filter(M) : y,
                    fnSort: _.sortFunction,
                    iAsc: _.order == "asc" ? 1 : -1
                })
            }
            return y.each(function(n, r) {
                var i = e(r),
                    s = i.parent().get(0),
                    o, u = [];
                for (m = 0; m < T; m++) {
                    var a = S[m],
                        f = a.bFind ? a.bFilter ? a.$Filter.filter(r) : i.find(a.sFind) : i;
                    u.push(a.bData ? f.data(a.oSettings.data) : a.bAttr ? f.attr(a.oSettings.attr) : a.oSettings.useVal ? f.val() : f.text()), o === t && (o = f)
                }
                var l = h.call(E, s);
                l < 0 && (l = E.push(s) - 1, w[l] = {
                    s: [],
                    n: []
                }), o.length > 0 ? w[l].s.push({
                    s: u,
                    e: i,
                    n: n
                }) : w[l].n.push({
                    e: i,
                    n: n
                })
            }), c(w, function(e) {
                e.s.sort(A)
            }), c(w, function(e) {
                var t = e.s,
                    r = e.n,
                    i = t.length,
                    o = r.length,
                    u = i + o,
                    a = [],
                    f = u,
                    l = [0, 0];
                switch (_.place) {
                    case "first":
                        c(t, function(e) {
                            f = s(f, e.n)
                        });
                        break;
                    case "org":
                        c(t, function(e) {
                            a.push(e.n)
                        });
                        break;
                    case "end":
                        f = o;
                        break;
                    default:
                        f = 0
                }
                for (v = 0; v < u; v++) {
                    var h = d(a, v) ? !n : v >= f && v < f + i,
                        p = h ? 0 : 1,
                        m = (h ? t : r)[l[p]].e;
                    m.parent().append(m), (h || !_.returns) && b.push(m.get(0)), l[p]++
                }
            }), y.length = 0, Array.prototype.push.apply(y, b), y
        }
    }), e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort
}(jQuery), define("jquery.tinysort", function() {});
var Base64 = function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        t = {
            encode: function(t) {
                var n = "",
                    r, i, s, o, u, a, f, l = 0;
                do r = t.charCodeAt(l++), i = t.charCodeAt(l++), s = t.charCodeAt(l++), o = r >> 2, u = (r & 3) << 4 | i >> 4, a = (i & 15) << 2 | s >> 6, f = s & 63, isNaN(i) ? a = f = 64 : isNaN(s) && (f = 64), n = n + e.charAt(o) + e.charAt(u) + e.charAt(a) + e.charAt(f); while (l < t.length);
                return n
            },
            decode: function(t) {
                var n = "",
                    r, i, s, o, u, a, f, l = 0;
                t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do o = e.indexOf(t.charAt(l++)), u = e.indexOf(t.charAt(l++)), a = e.indexOf(t.charAt(l++)), f = e.indexOf(t.charAt(l++)), r = o << 2 | u >> 4, i = (u & 15) << 4 | a >> 2, s = (a & 3) << 6 | f, n += String.fromCharCode(r), a != 64 && (n += String.fromCharCode(i)), f != 64 && (n += String.fromCharCode(s)); while (l < t.length);
                return n
            }
        };
    return t
}(),
    hexcase = 0,
    b64pad = "=",
    chrsz = 8,
    MD5 = function() {
        var e = 0,
            t = "",
            n = 8,
            r = function(e, t) {
                var n = (e & 65535) + (t & 65535),
                    r = (e >> 16) + (t >> 16) + (n >> 16);
                return r << 16 | n & 65535
            }, i = function(e, t) {
                return e << t | e >>> 32 - t
            }, s = function(e) {
                var t = [],
                    r = (1 << n) - 1;
                for (var i = 0; i < e.length * n; i += n) t[i >> 5] |= (e.charCodeAt(i / n) & r) << i % 32;
                return t
            }, o = function(e) {
                var t = "",
                    r = (1 << n) - 1;
                for (var i = 0; i < e.length * 32; i += n) t += String.fromCharCode(e[i >> 5] >>> i % 32 & r);
                return t
            }, u = function(t) {
                var n = e ? "0123456789ABCDEF" : "0123456789abcdef",
                    r = "";
                for (var i = 0; i < t.length * 4; i++) r += n.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + n.charAt(t[i >> 2] >> i % 4 * 8 & 15);
                return r
            }, a = function(e) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    r = "",
                    i, s;
                for (var o = 0; o < e.length * 4; o += 3) {
                    i = (e[o >> 2] >> 8 * (o % 4) & 255) << 16 | (e[o + 1 >> 2] >> 8 * ((o + 1) % 4) & 255) << 8 | e[o + 2 >> 2] >> 8 * ((o + 2) % 4) & 255;
                    for (s = 0; s < 4; s++) o * 8 + s * 6 > e.length * 32 ? r += t : r += n.charAt(i >> 6 * (3 - s) & 63)
                }
                return r
            }, f = function(e, t, n, s, o, u) {
                return r(i(r(r(t, e), r(s, u)), o), n)
            }, l = function(e, t, n, r, i, s, o) {
                return f(t & n | ~t & r, e, t, i, s, o)
            }, c = function(e, t, n, r, i, s, o) {
                return f(t & r | n & ~r, e, t, i, s, o)
            }, h = function(e, t, n, r, i, s, o) {
                return f(t ^ n ^ r, e, t, i, s, o)
            }, p = function(e, t, n, r, i, s, o) {
                return f(n ^ (t | ~r), e, t, i, s, o)
            }, d = function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
                var n = 1732584193,
                    i = -271733879,
                    s = -1732584194,
                    o = 271733878,
                    u, a, f, d;
                for (var v = 0; v < e.length; v += 16) u = n, a = i, f = s, d = o, n = l(n, i, s, o, e[v + 0], 7, -680876936), o = l(o, n, i, s, e[v + 1], 12, -389564586), s = l(s, o, n, i, e[v + 2], 17, 606105819), i = l(i, s, o, n, e[v + 3], 22, -1044525330), n = l(n, i, s, o, e[v + 4], 7, -176418897), o = l(o, n, i, s, e[v + 5], 12, 1200080426), s = l(s, o, n, i, e[v + 6], 17, -1473231341), i = l(i, s, o, n, e[v + 7], 22, -45705983), n = l(n, i, s, o, e[v + 8], 7, 1770035416), o = l(o, n, i, s, e[v + 9], 12, -1958414417), s = l(s, o, n, i, e[v + 10], 17, -42063), i = l(i, s, o, n, e[v + 11], 22, -1990404162), n = l(n, i, s, o, e[v + 12], 7, 1804603682), o = l(o, n, i, s, e[v + 13], 12, -40341101), s = l(s, o, n, i, e[v + 14], 17, -1502002290), i = l(i, s, o, n, e[v + 15], 22, 1236535329), n = c(n, i, s, o, e[v + 1], 5, -165796510), o = c(o, n, i, s, e[v + 6], 9, -1069501632), s = c(s, o, n, i, e[v + 11], 14, 643717713), i = c(i, s, o, n, e[v + 0], 20, -373897302), n = c(n, i, s, o, e[v + 5], 5, -701558691), o = c(o, n, i, s, e[v + 10], 9, 38016083), s = c(s, o, n, i, e[v + 15], 14, -660478335), i = c(i, s, o, n, e[v + 4], 20, -405537848), n = c(n, i, s, o, e[v + 9], 5, 568446438), o = c(o, n, i, s, e[v + 14], 9, -1019803690), s = c(s, o, n, i, e[v + 3], 14, -187363961), i = c(i, s, o, n, e[v + 8], 20, 1163531501), n = c(n, i, s, o, e[v + 13], 5, -1444681467), o = c(o, n, i, s, e[v + 2], 9, -51403784), s = c(s, o, n, i, e[v + 7], 14, 1735328473), i = c(i, s, o, n, e[v + 12], 20, -1926607734), n = h(n, i, s, o, e[v + 5], 4, -378558), o = h(o, n, i, s, e[v + 8], 11, -2022574463), s = h(s, o, n, i, e[v + 11], 16, 1839030562), i = h(i, s, o, n, e[v + 14], 23, -35309556), n = h(n, i, s, o, e[v + 1], 4, -1530992060), o = h(o, n, i, s, e[v + 4], 11, 1272893353), s = h(s, o, n, i, e[v + 7], 16, -155497632), i = h(i, s, o, n, e[v + 10], 23, -1094730640), n = h(n, i, s, o, e[v + 13], 4, 681279174), o = h(o, n, i, s, e[v + 0], 11, -358537222), s = h(s, o, n, i, e[v + 3], 16, -722521979), i = h(i, s, o, n, e[v + 6], 23, 76029189), n = h(n, i, s, o, e[v + 9], 4, -640364487), o = h(o, n, i, s, e[v + 12], 11, -421815835), s = h(s, o, n, i, e[v + 15], 16, 530742520), i = h(i, s, o, n, e[v + 2], 23, -995338651), n = p(n, i, s, o, e[v + 0], 6, -198630844), o = p(o, n, i, s, e[v + 7], 10, 1126891415), s = p(s, o, n, i, e[v + 14], 15, -1416354905), i = p(i, s, o, n, e[v + 5], 21, -57434055), n = p(n, i, s, o, e[v + 12], 6, 1700485571), o = p(o, n, i, s, e[v + 3], 10, -1894986606), s = p(s, o, n, i, e[v + 10], 15, -1051523), i = p(i, s, o, n, e[v + 1], 21, -2054922799), n = p(n, i, s, o, e[v + 8], 6, 1873313359), o = p(o, n, i, s, e[v + 15], 10, -30611744), s = p(s, o, n, i, e[v + 6], 15, -1560198380), i = p(i, s, o, n, e[v + 13], 21, 1309151649), n = p(n, i, s, o, e[v + 4], 6, -145523070), o = p(o, n, i, s, e[v + 11], 10, -1120210379), s = p(s, o, n, i, e[v + 2], 15, 718787259), i = p(i, s, o, n, e[v + 9], 21, -343485551), n = r(n, u), i = r(i, a), s = r(s, f), o = r(o, d);
                return [n, i, s, o]
            }, v = function(e, t) {
                var r = s(e);
                r.length > 16 && (r = d(r, e.length * n));
                var i = new Array(16),
                    o = new Array(16);
                for (var u = 0; u < 16; u++) i[u] = r[u] ^ 909522486, o[u] = r[u] ^ 1549556828;
                var a = d(i.concat(s(t)), 512 + t.length * n);
                return d(o.concat(a), 640)
            }, m = {
                hexdigest: function(e) {
                    return u(d(s(e), e.length * n))
                },
                b64digest: function(e) {
                    return a(d(s(e), e.length * n))
                },
                hash: function(e) {
                    return o(d(s(e), e.length * n))
                },
                hmac_hexdigest: function(e, t) {
                    return u(v(e, t))
                },
                hmac_b64digest: function(e, t) {
                    return a(v(e, t))
                },
                hmac_hash: function(e, t) {
                    return o(v(e, t))
                },
                test: function() {
                    return MD5.hexdigest("abc") === "900150983cd24fb0d6963f7d28e17f72"
                }
            };
        return m
    }();
Function.prototype.bind || (Function.prototype.bind = function(e) {
    var t = this,
        n = Array.prototype.slice,
        r = Array.prototype.concat,
        i = n.call(arguments, 1);
    return function() {
        return t.apply(e ? e : this, r.call(i, n.call(arguments, 0)))
    }
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length,
        n = Number(arguments[1]) || 0;
    n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
    for (; n < t; n++)
        if (n in this && this[n] === e) return n;
    return -1
}),
function(e) {
    function n(e, n) {
        return new t.Builder(e, n)
    }

    function r(e) {
        return new t.Builder("message", e)
    }

    function s(e) {
        return new t.Builder("iq", e)
    }

    function o(e) {
        return new t.Builder("presence", e)
    }
    var t;
    t = {
        VERSION: "e85eb66",
        NS: {
            HTTPBIND: "http://jabber.org/protocol/httpbind",
            BOSH: "urn:xmpp:xbosh",
            CLIENT: "jabber:client",
            AUTH: "jabber:iq:auth",
            ROSTER: "jabber:iq:roster",
            PROFILE: "jabber:iq:profile",
            DISCO_INFO: "http://jabber.org/protocol/disco#info",
            DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
            MUC: "http://jabber.org/protocol/muc",
            SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
            STREAM: "http://etherx.jabber.org/streams",
            BIND: "urn:ietf:params:xml:ns:xmpp-bind",
            SESSION: "urn:ietf:params:xml:ns:xmpp-session",
            VERSION: "jabber:iq:version",
            STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
            XHTML_IM: "http://jabber.org/protocol/xhtml-im",
            XHTML: "http://www.w3.org/1999/xhtml"
        },
        XHTML: {
            tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"],
            attributes: {
                a: ["href"],
                blockquote: ["style"],
                br: [],
                cite: ["style"],
                em: [],
                img: ["src", "alt", "style", "height", "width"],
                li: ["style"],
                ol: ["style"],
                p: ["style"],
                span: ["style"],
                strong: [],
                ul: ["style"],
                body: []
            },
            css: ["background-color", "color", "font-family", "font-size", "font-style", "font-weight", "margin-left", "margin-right", "text-align", "text-decoration"],
            validTag: function(e) {
                for (var n = 0; n < t.XHTML.tags.length; n++)
                    if (e == t.XHTML.tags[n]) return !0;
                return !1
            },
            validAttribute: function(e, n) {
                if (typeof t.XHTML.attributes[e] != "undefined" && t.XHTML.attributes[e].length > 0)
                    for (var r = 0; r < t.XHTML.attributes[e].length; r++)
                        if (n == t.XHTML.attributes[e][r]) return !0;
                return !1
            },
            validCSS: function(e) {
                for (var n = 0; n < t.XHTML.css.length; n++)
                    if (e == t.XHTML.css[n]) return !0;
                return !1
            }
        },
        addNamespace: function(e, n) {
            t.NS[e] = n
        },
        Status: {
            ERROR: 0,
            CONNECTING: 1,
            CONNFAIL: 2,
            AUTHENTICATING: 3,
            AUTHFAIL: 4,
            CONNECTED: 5,
            DISCONNECTED: 6,
            DISCONNECTING: 7,
            ATTACHED: 8
        },
        LogLevel: {
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            FATAL: 4
        },
        ElementType: {
            NORMAL: 1,
            TEXT: 3,
            CDATA: 4,
            FRAGMENT: 11
        },
        TIMEOUT: 1.1,
        SECONDARY_TIMEOUT: .1,
        forEachChild: function(e, n, r) {
            var i, s;
            for (i = 0; i < e.childNodes.length; i++) s = e.childNodes[i], s.nodeType == t.ElementType.NORMAL && (!n || this.isTagEqual(s, n)) && r(s)
        },
        isTagEqual: function(e, t) {
            return e.tagName.toLowerCase() == t.toLowerCase()
        },
        _xmlGenerator: null,
        _makeGenerator: function() {
            var e;
            return document.implementation.createDocument === undefined || document.implementation.createDocument && document.documentMode && document.documentMode < 10 ? (e = this._getIEXmlDom(), e.appendChild(e.createElement("strophe"))) : e = document.implementation.createDocument("jabber:client", "strophe", null), e
        },
        xmlGenerator: function() {
            return t._xmlGenerator || (t._xmlGenerator = t._makeGenerator()), t._xmlGenerator
        },
        _getIEXmlDom: function() {
            var e = null,
                t = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];
            for (var n = 0; n < t.length; n++) {
                if (e !== null) break;
                try {
                    e = new ActiveXObject(t[n])
                } catch (r) {
                    e = null
                }
            }
            return e
        },
        xmlElement: function(e) {
            if (!e) return null;
            var n = t.xmlGenerator().createElement(e),
                r, i, s;
            for (r = 1; r < arguments.length; r++) {
                if (!arguments[r]) continue;
                if (typeof arguments[r] == "string" || typeof arguments[r] == "number") n.appendChild(t.xmlTextNode(arguments[r]));
                else if (typeof arguments[r] == "object" && typeof arguments[r].sort == "function")
                    for (i = 0; i < arguments[r].length; i++) typeof arguments[r][i] == "object" && typeof arguments[r][i].sort == "function" && n.setAttribute(arguments[r][i][0], arguments[r][i][1]);
                else if (typeof arguments[r] == "object")
                    for (s in arguments[r]) arguments[r].hasOwnProperty(s) && n.setAttribute(s, arguments[r][s])
            }
            return n
        },
        xmlescape: function(e) {
            return e = e.replace(/\&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/'/g, "&apos;"), e = e.replace(/"/g, "&quot;"), e
        },
        xmlTextNode: function(e) {
            return t.xmlGenerator().createTextNode(e)
        },
        xmlHtmlNode: function(e) {
            return window.DOMParser ? (parser = new DOMParser, node = parser.parseFromString(e, "text/xml")) : (node = new ActiveXObject("Microsoft.XMLDOM"), node.async = "false", node.loadXML(e)), node
        },
        getText: function(e) {
            if (!e) return null;
            var n = "";
            e.childNodes.length === 0 && e.nodeType == t.ElementType.TEXT && (n += e.nodeValue);
            for (var r = 0; r < e.childNodes.length; r++) e.childNodes[r].nodeType == t.ElementType.TEXT && (n += e.childNodes[r].nodeValue);
            return t.xmlescape(n)
        },
        copyElement: function(e) {
            var n, r;
            if (e.nodeType == t.ElementType.NORMAL) {
                r = t.xmlElement(e.tagName);
                for (n = 0; n < e.attributes.length; n++) r.setAttribute(e.attributes[n].nodeName.toLowerCase(), e.attributes[n].value);
                for (n = 0; n < e.childNodes.length; n++) r.appendChild(t.copyElement(e.childNodes[n]))
            } else e.nodeType == t.ElementType.TEXT && (r = t.xmlGenerator().createTextNode(e.nodeValue));
            return r
        },
        createHtml: function(e) {
            var n, r, i, s, o, u, a, f, l, c, h, p, d;
            if (e.nodeType == t.ElementType.NORMAL) {
                s = e.nodeName.toLowerCase();
                if (t.XHTML.validTag(s)) try {
                    r = t.xmlElement(s);
                    for (n = 0; n < t.XHTML.attributes[s].length; n++) {
                        o = t.XHTML.attributes[s][n], u = e.getAttribute(o);
                        if (typeof u == "undefined" || u === null || u === "" || u === !1 || u === 0) continue;
                        o == "style" && typeof u == "object" && typeof u.cssText != "undefined" && (u = u.cssText);
                        if (o == "style") {
                            a = [], f = u.split(";");
                            for (i = 0; i < f.length; i++) l = f[i].split(":"), c = l[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase(), t.XHTML.validCSS(c) && (h = l[1].replace(/^\s*/, "").replace(/\s*$/, ""), a.push(c + ": " + h));
                            a.length > 0 && (u = a.join("; "), r.setAttribute(o, u))
                        } else r.setAttribute(o, u)
                    }
                    for (n = 0; n < e.childNodes.length; n++) r.appendChild(t.createHtml(e.childNodes[n]))
                } catch (v) {
                    r = t.xmlTextNode("")
                } else {
                    r = t.xmlGenerator().createDocumentFragment();
                    for (n = 0; n < e.childNodes.length; n++) r.appendChild(t.createHtml(e.childNodes[n]))
                }
            } else if (e.nodeType == t.ElementType.FRAGMENT) {
                r = t.xmlGenerator().createDocumentFragment();
                for (n = 0; n < e.childNodes.length; n++) r.appendChild(t.createHtml(e.childNodes[n]))
            } else e.nodeType == t.ElementType.TEXT && (r = t.xmlTextNode(e.nodeValue));
            return r
        },
        escapeNode: function(e) {
            return e.replace(/^\s+|\s+$/g, "").replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40")
        },
        unescapeNode: function(e) {
            return e.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\")
        },
        getNodeFromJid: function(e) {
            return e.indexOf("@") < 0 ? null : e.split("@")[0]
        },
        getDomainFromJid: function(e) {
            var n = t.getBareJidFromJid(e);
            if (n.indexOf("@") < 0) return n;
            var r = n.split("@");
            return r.splice(0, 1), r.join("@")
        },
        getResourceFromJid: function(e) {
            var t = e.split("/");
            return t.length < 2 ? null : (t.splice(0, 1), t.join("/"))
        },
        getBareJidFromJid: function(e) {
            return e ? e.split("/")[0] : null
        },
        log: function(e, t) {
            return
        },
        debug: function(e) {
            this.log(this.LogLevel.DEBUG, e)
        },
        info: function(e) {
            this.log(this.LogLevel.INFO, e)
        },
        warn: function(e) {
            this.log(this.LogLevel.WARN, e)
        },
        error: function(e) {
            this.log(this.LogLevel.ERROR, e)
        },
        fatal: function(e) {
            this.log(this.LogLevel.FATAL, e)
        },
        serialize: function(e) {
            var n;
            if (!e) return null;
            typeof e.tree == "function" && (e = e.tree());
            var r = e.nodeName,
                i, s;
            e.getAttribute("_realname") && (r = e.getAttribute("_realname")), n = "<" + r;
            for (i = 0; i < e.attributes.length; i++) e.attributes[i].nodeName != "_realname" && (n += " " + e.attributes[i].nodeName.toLowerCase() + "='" + e.attributes[i].value.replace(/&/g, "&amp;").replace(/\'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;") + "'");
            if (e.childNodes.length > 0) {
                n += ">";
                for (i = 0; i < e.childNodes.length; i++) {
                    s = e.childNodes[i];
                    switch (s.nodeType) {
                        case t.ElementType.NORMAL:
                            n += t.serialize(s);
                            break;
                        case t.ElementType.TEXT:
                            n += t.xmlescape(s.nodeValue);
                            break;
                        case t.ElementType.CDATA:
                            n += "<![CDATA[" + s.nodeValue + "]]>"
                    }
                }
                n += "</" + r + ">"
            } else n += "/>";
            return n
        },
        _requestId: 0,
        _connectionPlugins: {},
        addConnectionPlugin: function(e, n) {
            t._connectionPlugins[e] = n
        }
    }, t.Builder = function(e, n) {
        if (e == "presence" || e == "message" || e == "iq") n && !n.xmlns ? n.xmlns = t.NS.CLIENT : n || (n = {
            xmlns: t.NS.CLIENT
        });
        this.nodeTree = t.xmlElement(e, n), this.node = this.nodeTree
    }, t.Builder.prototype = {
        tree: function() {
            return this.nodeTree
        },
        toString: function() {
            return t.serialize(this.nodeTree)
        },
        up: function() {
            return this.node = this.node.parentNode, this
        },
        attrs: function(e) {
            for (var t in e) e.hasOwnProperty(t) && this.node.setAttribute(t, e[t]);
            return this
        },
        c: function(e, n, r) {
            var i = t.xmlElement(e, n, r);
            return this.node.appendChild(i), r || (this.node = i), this
        },
        cnode: function(e) {
            var n = t.xmlGenerator();
            try {
                var r = n.importNode !== undefined
            } catch (i) {
                var r = !1
            }
            var s = r ? n.importNode(e, !0) : t.copyElement(e);
            return this.node.appendChild(s), this.node = s, this
        },
        t: function(e) {
            var n = t.xmlTextNode(e);
            return this.node.appendChild(n), this
        },
        h: function(e) {
            var n = document.createElement("body");
            n.innerHTML = e;
            var r = t.createHtml(n);
            while (r.childNodes.length > 0) this.node.appendChild(r.childNodes[0]);
            return this
        }
    }, t.Handler = function(e, n, r, i, s, o, u) {
        this.handler = e, this.ns = n, this.name = r, this.type = i, this.id = s, this.options = u || {
            matchBare: !1
        }, this.options.matchBare || (this.options.matchBare = !1), this.options.matchBare ? this.from = o ? t.getBareJidFromJid(o) : null : this.from = o, this.user = !0
    }, t.Handler.prototype = {
        isMatch: function(e) {
            var n, r = null;
            this.options.matchBare ? r = t.getBareJidFromJid(e.getAttribute("from")) : r = e.getAttribute("from"), n = !1;
            if (!this.ns) n = !0;
            else {
                var i = this;
                t.forEachChild(e, null, function(e) {
                    e.getAttribute("xmlns") == i.ns && (n = !0)
                }), n = n || e.getAttribute("xmlns") == this.ns
            }
            return !n || !! this.name && !t.isTagEqual(e, this.name) || !! this.type && e.getAttribute("type") != this.type || !! this.id && e.getAttribute("id") != this.id || !! this.from && r != this.from ? !1 : !0
        },
        run: function(e) {
            var n = null;
            try {
                n = this.handler(e)
            } catch (r) {
                throw r.sourceURL ? t.fatal("error: " + this.handler + " " + r.sourceURL + ":" + r.line + " - " + r.name + ": " + r.message) : r.fileName ? (typeof console != "undefined" && (console.trace(), console.error(this.handler, " - error - ", r, r.message)), t.fatal("error: " + this.handler + " " + r.fileName + ":" + r.lineNumber + " - " + r.name + ": " + r.message)) : t.fatal("error: " + r.message + "\n" + r.stack), r
            }
            return n
        },
        toString: function() {
            return "{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}"
        }
    }, t.TimedHandler = function(e, t) {
        this.period = e, this.handler = t, this.lastCalled = (new Date).getTime(), this.user = !0
    }, t.TimedHandler.prototype = {
        run: function() {
            return this.lastCalled = (new Date).getTime(), this.handler()
        },
        reset: function() {
            this.lastCalled = (new Date).getTime()
        },
        toString: function() {
            return "{TimedHandler: " + this.handler + "(" + this.period + ")}"
        }
    }, t.Request = function(e, n, r, i) {
        this.id = ++t._requestId, this.xmlData = e, this.data = t.serialize(e), this.origFunc = n, this.func = n, this.rid = r, this.date = NaN, this.sends = i || 0, this.abort = !1, this.dead = null, this.age = function() {
            if (!this.date) return 0;
            var e = new Date;
            return (e - this.date) / 1e3
        }, this.timeDead = function() {
            if (!this.dead) return 0;
            var e = new Date;
            return (e - this.dead) / 1e3
        }, this.xhr = this._newXHR()
    }, t.Request.prototype = {
        getResponse: function() {
            var e = null;
            if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
                e = this.xhr.responseXML.documentElement;
                if (e.tagName == "parsererror") throw t.error("invalid response received"), t.error("responseText: " + this.xhr.responseText), t.error("responseXML: " + t.serialize(this.xhr.responseXML)), "parsererror"
            } else this.xhr.responseText && (t.error("invalid response received"), t.error("responseText: " + this.xhr.responseText), t.error("responseXML: " + t.serialize(this.xhr.responseXML)));
            return e
        },
        _newXHR: function() {
            var e = null;
            return window.XMLHttpRequest ? (e = new XMLHttpRequest, e.overrideMimeType && e.overrideMimeType("text/xml")) : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e.onreadystatechange = this.func.bind(null, this), e
        }
    }, t.Connection = function(e) {
        this.service = e, this.jid = "", this.domain = null, this.rid = Math.floor(Math.random() * 4294967295), this.sid = null, this.streamId = null, this.features = null, this._sasl_data = [], this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this._authentication = {}, this._idleTimeout = null, this._disconnectTimeout = null, this.do_authentication = !0, this.authenticated = !1, this.disconnecting = !1, this.connected = !1, this.errors = 0, this.paused = !1, this.hold = 1, this.wait = 60, this.window = 5, this._data = [], this._requests = [], this._uniqueId = Math.round(Math.random() * 1e4), this._sasl_success_handler = null, this._sasl_failure_handler = null, this._sasl_challenge_handler = null, this.maxRetries = 5, this._idleTimeout = setTimeout(this._onIdle.bind(this), 100);
        for (var n in t._connectionPlugins)
            if (t._connectionPlugins.hasOwnProperty(n)) {
                var r = t._connectionPlugins[n],
                    i = function() {};
                i.prototype = r, this[n] = new i, this[n].init(this)
            }
    }, t.Connection.prototype = {
        reset: function() {
            this.rid = Math.floor(Math.random() * 4294967295), this.sid = null, this.streamId = null, this.do_session = !1, this.do_bind = !1, this.timedHandlers = [], this.handlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = [], this._authentication = {}, this.authenticated = !1, this.disconnecting = !1, this.connected = !1, this.errors = 0, this._requests = [], this._uniqueId = Math.round(Math.random() * 1e4)
        },
        pause: function() {
            this.paused = !0
        },
        resume: function() {
            this.paused = !1
        },
        getUniqueId: function(e) {
            return typeof e == "string" || typeof e == "number" ? ++this._uniqueId + ":" + e : ++this._uniqueId + ""
        },
        connect: function(e, n, r, i, s, o) {
            this.jid = e, this.pass = n, this.connect_callback = r, this.disconnecting = !1, this.connected = !1, this.authenticated = !1, this.errors = 0, this.wait = i || this.wait, this.hold = s || this.hold, this.domain = this.domain || t.getDomainFromJid(this.jid);
            var u = this._buildBody().attrs({
                to: this.domain,
                "xml:lang": "en",
                wait: this.wait,
                hold: this.hold,
                content: "text/xml; charset=utf-8",
                ver: "1.6",
                "xmpp:version": "1.0",
                "xmlns:xmpp": t.NS.BOSH
            });
            o && u.attrs({
                route: o
            }), this._changeConnectStatus(t.Status.CONNECTING, null);
            var a = this._connect_callback || this._connect_cb;
            this._connect_callback = null, this._requests.push(new t.Request(u.tree(), this._onRequestStateChange.bind(this, a.bind(this)), u.tree().getAttribute("rid"))), this._throttledRequestHandler()
        },
        attach: function(e, n, r, i, s, o, u) {
            this.jid = e, this.sid = n, this.rid = r, this.connect_callback = i, this.domain = t.getDomainFromJid(this.jid), this.authenticated = !0, this.connected = !0, this.wait = s || this.wait, this.hold = o || this.hold, this.window = u || this.window, this._changeConnectStatus(t.Status.ATTACHED, null)
        },
        xmlInput: function(e) {
            return
        },
        xmlOutput: function(e) {
            return
        },
        rawInput: function(e) {
            return
        },
        rawOutput: function(e) {
            return
        },
        send: function(e) {
            if (e === null) return;
            if (typeof e.sort == "function")
                for (var t = 0; t < e.length; t++) this._queueData(e[t]);
            else typeof e.tree == "function" ? this._queueData(e.tree()) : this._queueData(e);
            this._throttledRequestHandler(), clearTimeout(this._idleTimeout), this._idleTimeout = setTimeout(this._onIdle.bind(this), 100)
        },
        flush: function() {
            clearTimeout(this._idleTimeout), this._onIdle()
        },
        sendIQ: function(e, t, n, r) {
            var i = null,
                s = this;
            typeof e.tree == "function" && (e = e.tree());
            var o = e.getAttribute("id");
            o || (o = this.getUniqueId("sendIQ"), e.setAttribute("id", o));
            var u = this.addHandler(function(e) {
                i && s.deleteTimedHandler(i);
                var r = e.getAttribute("type");
                if (r == "result") t && t(e);
                else {
                    if (r != "error") throw {
                        name: "StropheError",
                        message: "Got bad IQ type of " + r
                    };
                    n && n(e)
                }
            }, null, "iq", null, o);
            return r && (i = this.addTimedHandler(r, function() {
                return s.deleteHandler(u), n && n(null), !1
            })), this.send(e), o
        },
        _queueData: function(e) {
            if (e === null || !e.tagName || !e.childNodes) throw {
                name: "StropheError",
                message: "Cannot queue non-DOMElement."
            };
            this._data.push(e)
        },
        _sendRestart: function() {
            this._data.push("restart"), this._throttledRequestHandler(), clearTimeout(this._idleTimeout), this._idleTimeout = setTimeout(this._onIdle.bind(this), 100)
        },
        addTimedHandler: function(e, n) {
            var r = new t.TimedHandler(e, n);
            return this.addTimeds.push(r), r
        },
        deleteTimedHandler: function(e) {
            this.removeTimeds.push(e)
        },
        addHandler: function(e, n, r, i, s, o, u) {
            var a = new t.Handler(e, n, r, i, s, o, u);
            return this.addHandlers.push(a), a
        },
        deleteHandler: function(e) {
            this.removeHandlers.push(e)
        },
        disconnect: function(e) {
            this._changeConnectStatus(t.Status.DISCONNECTING, e), t.info("Disconnect was called because: " + e), this.connected && (this._disconnectTimeout = this._addSysTimedHandler(3e3, this._onDisconnectTimeout.bind(this)), this._sendTerminate())
        },
        _changeConnectStatus: function(e, n) {
            for (var r in t._connectionPlugins)
                if (t._connectionPlugins.hasOwnProperty(r)) {
                    var i = this[r];
                    if (i.statusChanged) try {
                        i.statusChanged(e, n)
                    } catch (s) {
                        t.error("" + r + " plugin caused an exception " + "changing status: " + s)
                    }
                }
            if (this.connect_callback) try {
                this.connect_callback(e, n)
            } catch (o) {
                t.error("User connection callback caused an exception: " + o)
            }
        },
        _buildBody: function() {
            var e = n("body", {
                rid: this.rid++,
                xmlns: t.NS.HTTPBIND
            });
            return this.sid !== null && e.attrs({
                sid: this.sid
            }), e
        },
        _removeRequest: function(e) {
            t.debug("removing request");
            var n;
            for (n = this._requests.length - 1; n >= 0; n--) e == this._requests[n] && this._requests.splice(n, 1);
            e.xhr.onreadystatechange = function() {}, this._throttledRequestHandler()
        },
        _restartRequest: function(e) {
            var t = this._requests[e];
            t.dead === null && (t.dead = new Date), this._processRequest(e)
        },
        _processRequest: function(e) {
            var n = this._requests[e],
                r = -1;
            try {
                n.xhr.readyState == 4 && (r = n.xhr.status)
            } catch (i) {
                t.error("caught an error in _requests[" + e + "], reqStatus: " + r)
            }
            typeof r == "undefined" && (r = -1);
            if (n.sends > this.maxRetries) {
                this._onDisconnectTimeout();
                return
            }
            var s = n.age(),
                o = !isNaN(s) && s > Math.floor(t.TIMEOUT * this.wait),
                u = n.dead !== null && n.timeDead() > Math.floor(t.SECONDARY_TIMEOUT * this.wait),
                a = n.xhr.readyState == 4 && (r < 1 || r >= 500);
            if (o || u || a) u && t.error("Request " + this._requests[e].id + " timed out (secondary), restarting"), n.abort = !0, n.xhr.abort(), n.xhr.onreadystatechange = function() {}, this._requests[e] = new t.Request(n.xmlData, n.origFunc, n.rid, n.sends), n = this._requests[e];
            if (n.xhr.readyState === 0) {
                t.debug("request id " + n.id + "." + n.sends + " posting");
                try {
                    n.xhr.open("POST", this.service, !0)
                } catch (f) {
                    t.error("XHR open failed."), this.connected || this._changeConnectStatus(t.Status.CONNFAIL, "bad-service"), this.disconnect();
                    return
                }
                var l = function() {
                    n.date = new Date, n.xhr.send(n.data)
                };
                if (n.sends > 1) {
                    var c = Math.min(Math.floor(t.TIMEOUT * this.wait), Math.pow(n.sends, 3)) * 1e3;
                    setTimeout(l, c)
                } else l();
                n.sends++, this.xmlOutput !== t.Connection.prototype.xmlOutput && this.xmlOutput(n.xmlData), this.rawOutput !== t.Connection.prototype.rawOutput && this.rawOutput(n.data)
            } else t.debug("_processRequest: " + (e === 0 ? "first" : "second") + " request has readyState of " + n.xhr.readyState)
        },
        _throttledRequestHandler: function() {
            this._requests ? t.debug("_throttledRequestHandler called with " + this._requests.length + " requests") : t.debug("_throttledRequestHandler called with undefined requests");
            if (!this._requests || this._requests.length === 0) return;
            this._requests.length > 0 && this._processRequest(0), this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window && this._processRequest(1)
        },
        _onRequestStateChange: function(e, n) {
            t.debug("request id " + n.id + "." + n.sends + " state changed to " + n.xhr.readyState);
            if (n.abort) {
                n.abort = !1;
                return
            }
            var r;
            if (n.xhr.readyState == 4) {
                r = 0;
                try {
                    r = n.xhr.status
                } catch (i) {}
                typeof r == "undefined" && (r = 0);
                if (this.disconnecting && r >= 400) {
                    this._hitError(r);
                    return
                }
                var s = this._requests[0] == n,
                    o = this._requests[1] == n;
                if (r > 0 && r < 500 || n.sends > 5) this._removeRequest(n), t.debug("request id " + n.id + " should now be removed");
                if (r == 200)(o || s && this._requests.length > 0 && this._requests[0].age() > Math.floor(t.SECONDARY_TIMEOUT * this.wait)) && this._restartRequest(0), t.debug("request id " + n.id + "." + n.sends + " got 200"), e(n), this.errors = 0;
                else {
                    t.error("request id " + n.id + "." + n.sends + " error " + r + " happened");
                    if (r === 0 || r >= 400 && r < 600 || r >= 12e3) this._hitError(r), r >= 400 && r < 500 && (this._changeConnectStatus(t.Status.DISCONNECTING, null), this._doDisconnect())
                }
                r > 0 && r < 500 || n.sends > 5 || this._throttledRequestHandler()
            }
        },
        _hitError: function(e) {
            this.errors++, t.warn("request errored, status: " + e + ", number of errors: " + this.errors), this.errors > 4 && this._onDisconnectTimeout()
        },
        _doDisconnect: function() {
            t.info("_doDisconnect was called"), this.authenticated = !1, this.disconnecting = !1, this.sid = null, this.streamId = null, this.rid = Math.floor(Math.random() * 4294967295), this.connected && (this._changeConnectStatus(t.Status.DISCONNECTED, null), this.connected = !1), this.handlers = [], this.timedHandlers = [], this.removeTimeds = [], this.removeHandlers = [], this.addTimeds = [], this.addHandlers = []
        },
        _dataRecv: function(e) {
            try {
                var n = e.getResponse()
            } catch (r) {
                if (r != "parsererror") throw r;
                this.disconnect("strophe-parsererror")
            }
            if (n === null) return;
            this.xmlInput !== t.Connection.prototype.xmlInput && this.xmlInput(n), this.rawInput !== t.Connection.prototype.rawInput && this.rawInput(t.serialize(n));
            var i, s;
            while (this.removeHandlers.length > 0) s = this.removeHandlers.pop(), i = this.handlers.indexOf(s), i >= 0 && this.handlers.splice(i, 1);
            while (this.addHandlers.length > 0) this.handlers.push(this.addHandlers.pop());
            if (this.disconnecting && this._requests.length === 0) {
                this.deleteTimedHandler(this._disconnectTimeout), this._disconnectTimeout = null, this._doDisconnect();
                return
            }
            var o = n.getAttribute("type"),
                u, a;
            if (o !== null && o == "terminate") {
                if (this.disconnecting) return;
                u = n.getAttribute("condition"), a = n.getElementsByTagName("conflict"), u !== null ? (u == "remote-stream-error" && a.length > 0 && (u = "conflict"), this._changeConnectStatus(t.Status.CONNFAIL, u)) : this._changeConnectStatus(t.Status.CONNFAIL, "unknown"), this.disconnect();
                return
            }
            var f = this;
            t.forEachChild(n, null, function(e) {
                var t, n;
                n = f.handlers, f.handlers = [];
                for (t = 0; t < n.length; t++) {
                    var r = n[t];
                    try {
                        r.isMatch(e) && (f.authenticated || !r.user) ? r.run(e) && f.handlers.push(r) : f.handlers.push(r)
                    } catch (i) {}
                }
            })
        },
        _sendTerminate: function() {
            t.info("_sendTerminate was called");
            var e = this._buildBody().attrs({
                type: "terminate"
            });
            this.authenticated && e.c("presence", {
                xmlns: t.NS.CLIENT,
                type: "unavailable"
            }), this.disconnecting = !0;
            var n = new t.Request(e.tree(), this._onRequestStateChange.bind(this, this._dataRecv.bind(this)), e.tree().getAttribute("rid"));
            this._requests.push(n), this._throttledRequestHandler()
        },
        _connect_cb: function(e, n) {
            t.info("_connect_cb was called"), this.connected = !0;
            var r = e.getResponse();
            if (!r) return;
            this.xmlInput !== t.Connection.prototype.xmlInput && this.xmlInput(r), this.rawInput !== t.Connection.prototype.rawInput && this.rawInput(t.serialize(r));
            var i = r.getAttribute("type"),
                s, o;
            if (i !== null && i == "terminate") {
                s = r.getAttribute("condition"), o = r.getElementsByTagName("conflict"), s !== null ? (s == "remote-stream-error" && o.length > 0 && (s = "conflict"), this._changeConnectStatus(t.Status.CONNFAIL, s)) : this._changeConnectStatus(t.Status.CONNFAIL, "unknown");
                return
            }
            this.sid || (this.sid = r.getAttribute("sid")), this.stream_id || (this.stream_id = r.getAttribute("authid"));
            var u = r.getAttribute("requests");
            u && (this.window = parseInt(u, 10));
            var a = r.getAttribute("hold");
            a && (this.hold = parseInt(a, 10));
            var f = r.getAttribute("wait");
            f && (this.wait = parseInt(f, 10)), this._authentication.sasl_scram_sha1 = !1, this._authentication.sasl_plain = !1, this._authentication.sasl_digest_md5 = !1, this._authentication.sasl_anonymous = !1, this._authentication.legacy_auth = !1;
            var l = r.getElementsByTagName("stream:features").length > 0;
            l || (l = r.getElementsByTagName("features").length > 0);
            var c = r.getElementsByTagName("mechanism"),
                h, p, d, v, m = !1;
            if (l && c.length > 0) {
                var g = 0;
                for (h = 0; h < c.length; h++) p = t.getText(c[h]), p == "SCRAM-SHA-1" ? this._authentication.sasl_scram_sha1 = !0 : p == "DIGEST-MD5" ? this._authentication.sasl_digest_md5 = !0 : p == "PLAIN" ? this._authentication.sasl_plain = !0 : p == "ANONYMOUS" ? this._authentication.sasl_anonymous = !0 : g++;
                this._authentication.legacy_auth = r.getElementsByTagName("auth").length > 0, m = this._authentication.legacy_auth || g < c.length
            }
            if (!m) {
                n = n || this._connect_cb;
                var y = this._buildBody();
                this._requests.push(new t.Request(y.tree(), this._onRequestStateChange.bind(this, n.bind(this)), y.tree().getAttribute("rid"))), this._throttledRequestHandler();
                return
            }
            this.do_authentication !== !1 && this.authenticate()
        },
        authenticate: function() {
            if (t.getNodeFromJid(this.jid) === null && this._authentication.sasl_anonymous) this._changeConnectStatus(t.Status.AUTHENTICATING, null), this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("auth", {
                xmlns: t.NS.SASL,
                mechanism: "ANONYMOUS"
            }).tree());
            else if (t.getNodeFromJid(this.jid) === null) this._changeConnectStatus(t.Status.CONNFAIL, "x-strophe-bad-non-anon-jid"), this.disconnect();
            else if (this._authentication.sasl_scram_sha1) {
                var e = MD5.hexdigest(Math.random() * 1234567890),
                    r = "n=" + t.getNodeFromJid(this.jid);
                r += ",r=", r += e, this._sasl_data.cnonce = e, this._sasl_data["client-first-message-bare"] = r, r = "n,," + r, this._changeConnectStatus(t.Status.AUTHENTICATING, null), this._sasl_challenge_handler = this._addSysHandler(this._sasl_scram_challenge_cb.bind(this), null, "challenge", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("auth", {
                    xmlns: t.NS.SASL,
                    mechanism: "SCRAM-SHA-1"
                }).t(Base64.encode(r)).tree())
            } else this._authentication.sasl_digest_md5 ? (this._changeConnectStatus(t.Status.AUTHENTICATING, null), this._sasl_challenge_handler = this._addSysHandler(this._sasl_digest_challenge1_cb.bind(this), null, "challenge", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("auth", {
                xmlns: t.NS.SASL,
                mechanism: "DIGEST-MD5"
            }).tree())) : this._authentication.sasl_plain ? (r = t.getBareJidFromJid(this.jid), r += "\0", r += t.getNodeFromJid(this.jid), r += "\0", r += this.pass, this._changeConnectStatus(t.Status.AUTHENTICATING, null), this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), hashed_auth_str = Base64.encode(r), this.send(n("auth", {
                xmlns: t.NS.SASL,
                mechanism: "PLAIN"
            }).t(hashed_auth_str).tree())) : (this._changeConnectStatus(t.Status.AUTHENTICATING, null), this._addSysHandler(this._auth1_cb.bind(this), null, null, null, "_auth_1"), this.send(s({
                type: "get",
                to: this.domain,
                id: "_auth_1"
            }).c("query", {
                xmlns: t.NS.AUTH
            }).c("username", {}).t(t.getNodeFromJid(this.jid)).tree()))
        },
        _sasl_digest_challenge1_cb: function(e) {
            var r = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/,
                i = Base64.decode(t.getText(e)),
                s = MD5.hexdigest("" + Math.random() * 1234567890),
                o = "",
                u = null,
                a = "",
                f = "",
                l;
            this.deleteHandler(this._sasl_failure_handler);
            while (i.match(r)) {
                l = i.match(r), i = i.replace(l[0], ""), l[2] = l[2].replace(/^"(.+)"$/, "$1");
                switch (l[1]) {
                    case "realm":
                        o = l[2];
                        break;
                    case "nonce":
                        a = l[2];
                        break;
                    case "qop":
                        f = l[2];
                        break;
                    case "host":
                        u = l[2]
                }
            }
            var c = "xmpp/" + this.domain;
            u !== null && (c = c + "/" + u);
            var h = MD5.hash(t.getNodeFromJid(this.jid) + ":" + o + ":" + this.pass) + ":" + a + ":" + s,
                p = "AUTHENTICATE:" + c,
                d = "";
            return d += "username=" + this._quote(t.getNodeFromJid(this.jid)) + ",", d += "realm=" + this._quote(o) + ",", d += "nonce=" + this._quote(a) + ",", d += "cnonce=" + this._quote(s) + ",", d += 'nc="00000001",', d += 'qop="auth",', d += "digest-uri=" + this._quote(c) + ",", d += "response=" + this._quote(MD5.hexdigest(MD5.hexdigest(h) + ":" + a + ":00000001:" + s + ":auth:" + MD5.hexdigest(p))) + ",", d += 'charset="utf-8"', this._sasl_challenge_handler = this._addSysHandler(this._sasl_digest_challenge2_cb.bind(this), null, "challenge", null, null), this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("response", {
                xmlns: t.NS.SASL
            }).t(Base64.encode(d)).tree()), !1
        },
        _quote: function(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
        },
        _sasl_digest_challenge2_cb: function(e) {
            return this.deleteHandler(this._sasl_success_handler), this.deleteHandler(this._sasl_failure_handler), this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("response", {
                xmlns: t.NS.SASL
            }).tree()), !1
        },
        _sasl_scram_challenge_cb: function(e) {
            var r, s, o, u, a, f, l, c, h, p = "c=biws,",
                d = Base64.decode(t.getText(e)),
                v = this._sasl_data["client-first-message-bare"] + "," + d + ",",
                m = this._sasl_data.cnonce,
                g = /([a-z]+)=([^,]+)(,|$)/;
            this.deleteHandler(this._sasl_failure_handler);
            while (d.match(g)) {
                matches = d.match(g), d = d.replace(matches[0], "");
                switch (matches[1]) {
                    case "r":
                        r = matches[2];
                        break;
                    case "s":
                        s = matches[2];
                        break;
                    case "i":
                        o = matches[2]
                }
            }
            if (r.substr(0, m.length) !== m) return this._sasl_data = [], this._sasl_failure_cb(null);
            p += "r=" + r, v += p, s = Base64.decode(s), s += "\0\0\0", u = f = core_hmac_sha1(this.pass, s);
            for (i = 1; i < o; i++) {
                a = core_hmac_sha1(this.pass, binb2str(f));
                for (k = 0; k < 5; k++) u[k] ^= a[k];
                f = a
            }
            u = binb2str(u), l = core_hmac_sha1(u, "Client Key"), c = str_hmac_sha1(u, "Server Key"), h = core_hmac_sha1(str_sha1(binb2str(l)), v), this._sasl_data["server-signature"] = b64_hmac_sha1(c, v);
            for (k = 0; k < 5; k++) l[k] ^= h[k];
            return p += ",p=" + Base64.encode(binb2str(l)), this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null), this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null), this.send(n("response", {
                xmlns: t.NS.SASL
            }).t(Base64.encode(p)).tree()), !1
        },
        _auth1_cb: function(e) {
            var n = s({
                type: "set",
                id: "_auth_2"
            }).c("query", {
                xmlns: t.NS.AUTH
            }).c("username", {}).t(t.getNodeFromJid(this.jid)).up().c("password").t(this.pass);
            return t.getResourceFromJid(this.jid) || (this.jid = t.getBareJidFromJid(this.jid) + "/strophe"), n.up().c("resource", {}).t(t.getResourceFromJid(this.jid)), this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2"), this.send(n.tree()), !1
        },
        _sasl_success_cb: function(e) {
            if (this._sasl_data["server-signature"]) {
                var n, r = Base64.decode(t.getText(e)),
                    i = /([a-z]+)=([^,]+)(,|$)/;
                matches = r.match(i), matches[1] == "v" && (n = matches[2]);
                if (n != this._sasl_data["server-signature"]) return this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._sasl_data = [], this._sasl_failure_cb(null)
            }
            return t.info("SASL authentication succeeded."), this.deleteHandler(this._sasl_failure_handler), this._sasl_failure_handler = null, this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._addSysHandler(this._sasl_auth1_cb.bind(this), null, "stream:features", null, null), this._sendRestart(), !1
        },
        _sasl_auth1_cb: function(e) {
            this.features = e;
            var n, r;
            for (n = 0; n < e.childNodes.length; n++) r = e.childNodes[n], r.nodeName == "bind" && (this.do_bind = !0), r.nodeName == "session" && (this.do_session = !0);
            if (!this.do_bind) return this._changeConnectStatus(t.Status.AUTHFAIL, null), !1;
            this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");
            var i = t.getResourceFromJid(this.jid);
            return i ? this.send(s({
                type: "set",
                id: "_bind_auth_2"
            }).c("bind", {
                xmlns: t.NS.BIND
            }).c("resource", {}).t(i).tree()) : this.send(s({
                type: "set",
                id: "_bind_auth_2"
            }).c("bind", {
                xmlns: t.NS.BIND
            }).tree()), !1
        },
        _sasl_bind_cb: function(e) {
            if (e.getAttribute("type") == "error") {
                t.info("SASL binding failed.");
                var n = e.getElementsByTagName("conflict"),
                    r;
                return n.length > 0 && (r = "conflict"), this._changeConnectStatus(t.Status.AUTHFAIL, r), !1
            }
            var i = e.getElementsByTagName("bind"),
                o;
            if (!(i.length > 0)) return t.info("SASL binding failed."), this._changeConnectStatus(t.Status.AUTHFAIL, null), !1;
            o = i[0].getElementsByTagName("jid"), o.length > 0 && (this.jid = t.getText(o[0]), this.do_session ? (this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2"), this.send(s({
                type: "set",
                id: "_session_auth_2"
            }).c("session", {
                xmlns: t.NS.SESSION
            }).tree())) : (this.authenticated = !0, this._changeConnectStatus(t.Status.CONNECTED, null)))
        },
        _sasl_session_cb: function(e) {
            if (e.getAttribute("type") == "result") this.authenticated = !0, this._changeConnectStatus(t.Status.CONNECTED, null);
            else if (e.getAttribute("type") == "error") return t.info("Session creation failed."), this._changeConnectStatus(t.Status.AUTHFAIL, null), !1;
            return !1
        },
        _sasl_failure_cb: function(e) {
            return this._sasl_success_handler && (this.deleteHandler(this._sasl_success_handler), this._sasl_success_handler = null), this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler), this._sasl_challenge_handler = null), this._changeConnectStatus(t.Status.AUTHFAIL, null), !1
        },
        _auth2_cb: function(e) {
            return e.getAttribute("type") == "result" ? (this.authenticated = !0, this._changeConnectStatus(t.Status.CONNECTED, null)) : e.getAttribute("type") == "error" && (this._changeConnectStatus(t.Status.AUTHFAIL, null), this.disconnect()), !1
        },
        _addSysTimedHandler: function(e, n) {
            var r = new t.TimedHandler(e, n);
            return r.user = !1, this.addTimeds.push(r), r
        },
        _addSysHandler: function(e, n, r, i, s) {
            var o = new t.Handler(e, n, r, i, s);
            return o.user = !1, this.addHandlers.push(o), o
        },
        _onDisconnectTimeout: function() {
            t.info("_onDisconnectTimeout was called");
            var e;
            while (this._requests.length > 0) e = this._requests.pop(), e.abort = !0, e.xhr.abort(), e.xhr.onreadystatechange = function() {};
            return this._doDisconnect(), !1
        },
        _onIdle: function() {
            var e, n, r, i;
            while (this.addTimeds.length > 0) this.timedHandlers.push(this.addTimeds.pop());
            while (this.removeTimeds.length > 0) n = this.removeTimeds.pop(), e = this.timedHandlers.indexOf(n), e >= 0 && this.timedHandlers.splice(e, 1);
            var s = (new Date).getTime();
            i = [];
            for (e = 0; e < this.timedHandlers.length; e++) {
                n = this.timedHandlers[e];
                if (this.authenticated || !n.user) r = n.lastCalled + n.period, r - s <= 0 ? n.run() && i.push(n) : i.push(n)
            }
            this.timedHandlers = i;
            var o, u;
            this.authenticated && this._requests.length === 0 && this._data.length === 0 && !this.disconnecting && (t.info("no requests during idle cycle, sending blank request"), this._data.push(null));
            if (this._requests.length < 2 && this._data.length > 0 && !this.paused) {
                o = this._buildBody();
                for (e = 0; e < this._data.length; e++) this._data[e] !== null && (this._data[e] === "restart" ? o.attrs({
                    to: this.domain,
                    "xml:lang": "en",
                    "xmpp:restart": "true",
                    "xmlns:xmpp": t.NS.BOSH
                }) : o.cnode(this._data[e]).up());
                delete this._data, this._data = [], this._requests.push(new t.Request(o.tree(), this._onRequestStateChange.bind(this, this._dataRecv.bind(this)), o.tree().getAttribute("rid"))), this._processRequest(this._requests.length - 1)
            }
            this._requests.length > 0 && (u = this._requests[0].age(), this._requests[0].dead !== null && this._requests[0].timeDead() > Math.floor(t.SECONDARY_TIMEOUT * this.wait) && this._throttledRequestHandler(), u > Math.floor(t.TIMEOUT * this.wait) && (t.warn("Request " + this._requests[0].id + " timed out, over " + Math.floor(t.TIMEOUT * this.wait) + " seconds since last activity"), this._throttledRequestHandler())), clearTimeout(this._idleTimeout), this.connected && (this._idleTimeout = setTimeout(this._onIdle.bind(this), 100))
        }
    }, e && e(t, n, r, s, o)
}(function() {
    window.Strophe = arguments[0], window.$build = arguments[1], window.$msg = arguments[2], window.$iq = arguments[3], window.$pres = arguments[4]
}), define("strophe", function() {});
var Occupant, RoomConfig, XmppRoom, __bind = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
Strophe.addConnectionPlugin("muc", {
    _connection: null,
    rooms: {},
    roomNames: [],
    init: function(e) {
        return this._connection = e, this._muc_handler = null, Strophe.addNamespace("MUC_OWNER", Strophe.NS.MUC + "#owner"), Strophe.addNamespace("MUC_ADMIN", Strophe.NS.MUC + "#admin"), Strophe.addNamespace("MUC_USER", Strophe.NS.MUC + "#user"), Strophe.addNamespace("MUC_ROOMCONF", Strophe.NS.MUC + "#roomconfig")
    },
    join: function(e, t, n, r, i, s, o) {
        var u, a, f, l = this;
        return a = this.test_append_nick(e, t), u = $pres({
            from: this._connection.jid,
            to: a
        }).c("x", {
            xmlns: Strophe.NS.MUC
        }), o != null && (u = u.c("history", o)), s != null && u.cnode(Strophe.xmlElement("password", [], s)), (f = this._muc_handler) == null && (this._muc_handler = this._connection.addHandler(function(t) {
            var n, r, i, s, o, u, a, f, c, h;
            n = t.getAttribute("from");
            if (!n) return !0;
            o = n.split("/")[0];
            if (!l.rooms[o]) return !0;
            e = l.rooms[o], i = {};
            if (t.nodeName === "message") i = e._message_handlers;
            else if (t.nodeName === "presence") {
                f = t.getElementsByTagName("x");
                if (f.length > 0)
                    for (c = 0, h = f.length; c < h; c++) {
                        u = f[c], a = u.getAttribute("xmlns");
                        if (a && a.match(Strophe.NS.MUC)) {
                            i = e._presence_handlers;
                            break
                        }
                    }
            }
            for (s in i) r = i[s], r(t, e) || delete i[s];
            return !0
        })), this.rooms.hasOwnProperty(e) || (this.rooms[e] = new XmppRoom(this, e, t, s), this.roomNames.push(e)), r && this.rooms[e].addHandler("presence", r), n && this.rooms[e].addHandler("message", n), i && this.rooms[e].addHandler("roster", i), this._connection.send(u)
    },
    leave: function(e, t, n, r) {
        var i, s, o, u;
        return i = this.roomNames.indexOf(e), delete this.rooms[e], i >= 0 && (this.roomNames.splice(i, 1), this.roomNames.length === 0 && (this._connection.deleteHandler(this._muc_handler), this._muc_handler = null)), u = this.test_append_nick(e, t), o = this._connection.getUniqueId(), s = $pres({
            type: "unavailable",
            id: o,
            from: this._connection.jid,
            to: u
        }), r != null && s.c("status", r), n != null && this._connection.addHandler(n, null, "presence", null, o), this._connection.send(s), o
    },
    message: function(e, t, n, r, i) {
        var s, o, u, a;
        return a = this.test_append_nick(e, t), i = i || (t != null ? "chat" : "groupchat"), o = this._connection.getUniqueId(), s = $msg({
            to: a,
            from: this._connection.jid,
            type: i,
            id: o
        }).c("body", {
            xmlns: Strophe.NS.CLIENT
        }).t(n), s.up(), r != null && (s.c("html", {
            xmlns: Strophe.NS.XHTML_IM
        }).c("body", {
            xmlns: Strophe.NS.XHTML
        }).t(r), s.node.childNodes.length === 0 ? (u = s.node.parentNode, s.up().up(), s.node.removeChild(u)) : s.up().up()), s.c("x", {
            xmlns: "jabber:x:event"
        }).c("composing"), this._connection.send(s), o
    },
    groupchat: function(e, t, n) {
        return this.message(e, null, t, n)
    },
    invite: function(e, t, n) {
        var r, i;
        return i = this._connection.getUniqueId(), r = $msg({
            from: this._connection.jid,
            to: e,
            id: i
        }).c("x", {
            xmlns: Strophe.NS.MUC_USER
        }).c("invite", {
            to: t
        }), n != null && r.c("reason", n), this._connection.send(r), i
    },
    directInvite: function(e, t, n, r) {
        var i, s, o;
        return o = this._connection.getUniqueId(), i = {
            xmlns: "jabber:x:conference",
            jid: e
        }, n != null && (i.reason = n), r != null && (i.password = r), s = $msg({
            from: this._connection.jid,
            to: t,
            id: o
        }).c("x", i), this._connection.send(s), o
    },
    queryOccupants: function(e, t, n) {
        var r, i;
        return r = {
            xmlns: Strophe.NS.DISCO_ITEMS
        }, i = $iq({
            from: this._connection.jid,
            to: e,
            type: "get"
        }).c("query", r), this._connection.sendIQ(i, t, n)
    },
    configure: function(e, t, n) {
        var r, i;
        return r = $iq({
            to: e,
            type: "get"
        }).c("query", {
            xmlns: Strophe.NS.MUC_OWNER
        }), i = r.tree(), this._connection.sendIQ(i, t, n)
    },
    cancelConfigure: function(e) {
        var t, n;
        return t = $iq({
            to: e,
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.MUC_OWNER
        }).c("x", {
            xmlns: "jabber:x:data",
            type: "cancel"
        }), n = t.tree(), this._connection.sendIQ(n)
    },
    saveConfiguration: function(e, t, n, r) {
        var i, s, o, u, a;
        s = $iq({
            to: e,
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.MUC_OWNER
        });
        if (t instanceof Form) t.type = "submit", s.cnode(t.toXML());
        else {
            s.c("x", {
                xmlns: "jabber:x:data",
                type: "submit"
            });
            for (u = 0, a = t.length; u < a; u++) i = t[u], s.cnode(i).up()
        }
        return o = s.tree(), this._connection.sendIQ(o, n, r)
    },
    createInstantRoom: function(e, t, n) {
        var r;
        return r = $iq({
            to: e,
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.MUC_OWNER
        }).c("x", {
            xmlns: "jabber:x:data",
            type: "submit"
        }), this._connection.sendIQ(r.tree(), t, n)
    },
    setTopic: function(e, t) {
        var n;
        return n = $msg({
            to: e,
            from: this._connection.jid,
            type: "groupchat"
        }).c("subject", {
            xmlns: "jabber:client"
        }).t(t), this._connection.send(n.tree())
    },
    _modifyPrivilege: function(e, t, n, r, i) {
        var s;
        return s = $iq({
            to: e,
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.MUC_ADMIN
        }).cnode(t.node), n != null && s.c("reason", n), this._connection.sendIQ(s.tree(), r, i)
    },
    modifyRole: function(e, t, n, r, i, s) {
        var o;
        return o = $build("item", {
            nick: t,
            role: n
        }), this._modifyPrivilege(e, o, r, i, s)
    },
    kick: function(e, t, n, r, i) {
        return this.modifyRole(e, t, "none", n, r, i)
    },
    voice: function(e, t, n, r, i) {
        return this.modifyRole(e, t, "participant", n, r, i)
    },
    mute: function(e, t, n, r, i) {
        return this.modifyRole(e, t, "visitor", n, r, i)
    },
    op: function(e, t, n, r, i) {
        return this.modifyRole(e, t, "moderator", n, r, i)
    },
    deop: function(e, t, n, r, i) {
        return this.modifyRole(e, t, "participant", n, r, i)
    },
    modifyAffiliation: function(e, t, n, r, i, s) {
        var o;
        return o = $build("item", {
            jid: t,
            affiliation: n
        }), this._modifyPrivilege(e, o, r, i, s)
    },
    ban: function(e, t, n, r, i) {
        return this.modifyAffiliation(e, t, "outcast", n, r, i)
    },
    member: function(e, t, n, r, i) {
        return this.modifyAffiliation(e, t, "member", n, r, i)
    },
    revoke: function(e, t, n, r, i) {
        return this.modifyAffiliation(e, t, "none", n, r, i)
    },
    owner: function(e, t, n, r, i) {
        return this.modifyAffiliation(e, t, "owner", n, r, i)
    },
    admin: function(e, t, n, r, i) {
        return this.modifyAffiliation(e, t, "admin", n, r, i)
    },
    changeNick: function(e, t) {
        var n, r;
        return r = this.test_append_nick(e, t), n = $pres({
            from: this._connection.jid,
            to: r,
            id: this._connection.getUniqueId()
        }), this._connection.send(n.tree())
    },
    setStatus: function(e, t, n, r) {
        var i, s;
        return s = this.test_append_nick(e, t), i = $pres({
            from: this._connection.jid,
            to: s
        }), n != null && i.c("show", n).up(), r != null && i.c("status", r), this._connection.send(i.tree())
    },
    listRooms: function(e, t, n) {
        var r;
        return r = $iq({
            to: e,
            from: this._connection.jid,
            type: "get"
        }).c("query", {
            xmlns: Strophe.NS.DISCO_ITEMS
        }), this._connection.sendIQ(r, t, n)
    },
    test_append_nick: function(e, t) {
        return e + (t != null ? "/" + Strophe.escapeNode(t) : "")
    }
}), XmppRoom = function() {
    function e(e, t, n, r) {
        this.client = e, this.name = t, this.nick = n, this.password = r, this._roomRosterHandler = __bind(this._roomRosterHandler, this), this._addOccupant = __bind(this._addOccupant, this), this.roster = {}, this._message_handlers = {}, this._presence_handlers = {}, this._roster_handlers = {}, this._handler_ids = 0, e.muc && (this.client = e.muc), this.name = Strophe.getBareJidFromJid(t), this.addHandler("presence", this._roomRosterHandler)
    }
    return e.prototype.join = function(e, t, n) {
        return this.client.join(this.name, this.nick, e, t, n, this.password)
    }, e.prototype.leave = function(e, t) {
        return this.client.leave(this.name, this.nick, e, t), delete this.client.rooms[this.name]
    }, e.prototype.message = function(e, t, n, r) {
        return this.client.message(this.name, e, t, n, r)
    }, e.prototype.groupchat = function(e, t) {
        return this.client.groupchat(this.name, e, t)
    }, e.prototype.invite = function(e, t) {
        return this.client.invite(this.name, e, t)
    }, e.prototype.directInvite = function(e, t) {
        return this.client.directInvite(this.name, e, t, this.password)
    }, e.prototype.configure = function(e) {
        return this.client.configure(this.name, e)
    }, e.prototype.cancelConfigure = function() {
        return this.client.cancelConfigure(this.name)
    }, e.prototype.saveConfiguration = function(e) {
        return this.client.saveConfiguration(this.name, e)
    }, e.prototype.queryOccupants = function(e, t) {
        return this.client.queryOccupants(this.name, e, t)
    }, e.prototype.setTopic = function(e) {
        return this.client.setTopic(this.name, e)
    }, e.prototype.modifyRole = function(e, t, n, r, i) {
        return this.client.modifyRole(this.name, e, t, n, r, i)
    }, e.prototype.kick = function(e, t, n, r) {
        return this.client.kick(this.name, e, t, n, r)
    }, e.prototype.voice = function(e, t, n, r) {
        return this.client.voice(this.name, e, t, n, r)
    }, e.prototype.mute = function(e, t, n, r) {
        return this.client.mute(this.name, e, t, n, r)
    }, e.prototype.op = function(e, t, n, r) {
        return this.client.op(this.name, e, t, n, r)
    }, e.prototype.deop = function(e, t, n, r) {
        return this.client.deop(this.name, e, t, n, r)
    }, e.prototype.modifyAffiliation = function(e, t, n, r, i) {
        return this.client.modifyAffiliation(this.name, e, t, n, r, i)
    }, e.prototype.ban = function(e, t, n, r) {
        return this.client.ban(this.name, e, t, n, r)
    }, e.prototype.member = function(e, t, n, r) {
        return this.client.member(this.name, e, t, n, r)
    }, e.prototype.revoke = function(e, t, n, r) {
        return this.client.revoke(this.name, e, t, n, r)
    }, e.prototype.owner = function(e, t, n, r) {
        return this.client.owner(this.name, e, t, n, r)
    }, e.prototype.admin = function(e, t, n, r) {
        return this.client.admin(this.name, e, t, n, r)
    }, e.prototype.changeNick = function(e) {
        return this.nick = e, this.client.changeNick(this.name, e)
    }, e.prototype.setStatus = function(e, t) {
        return this.client.setStatus(this.name, this.nick, e, t)
    }, e.prototype.addHandler = function(e, t) {
        var n;
        n = this._handler_ids++;
        switch (e) {
            case "presence":
                this._presence_handlers[n] = t;
                break;
            case "message":
                this._message_handlers[n] = t;
                break;
            case "roster":
                this._roster_handlers[n] = t;
                break;
            default:
                return this._handler_ids--, null
        }
        return n
    }, e.prototype.removeHandler = function(e) {
        return delete this._presence_handlers[e], delete this._message_handlers[e], delete this._roster_handlers[e]
    }, e.prototype._addOccupant = function(e) {
        var t;
        return t = new Occupant(e, this), this.roster[t.nick] = t, t
    }, e.prototype._roomRosterHandler = function(t) {
        var n, r, i, s, o, u;
        n = e._parsePresence(t), o = n.nick, s = n.newnick || null;
        switch (n.type) {
            case "error":
                return;
            case "unavailable":
                s && (n.nick = s, this.roster[o] && this.roster[s] && (this.roster[o].update(this.roster[s]), this.roster[s] = this.roster[o]), this.roster[o] && !this.roster[s] && (this.roster[s] = this.roster[o].update(n))), delete this.roster[o];
                break;
            default:
                this.roster[o] ? this.roster[o].update(n) : this._addOccupant(n)
        }
        u = this._roster_handlers;
        for (i in u) r = u[i], r(this.roster, this) || delete this._roster_handlers[i];
        return !0
    }, e._parsePresence = function(e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m;
        i = {}, t = e.attributes, i.nick = Strophe.getResourceFromJid(t.from.textContent), i.type = ((f = t.type) != null ? f.textContent : void 0) || null, i.states = [], l = e.childNodes;
        for (s = 0, u = l.length; s < u; s++) {
            n = l[s];
            switch (n.nodeName) {
                case "status":
                    i.status = n.textContent || null;
                    break;
                case "show":
                    i.show = n.textContent || null;
                    break;
                case "x":
                    t = n.attributes;
                    if (((c = t.xmlns) != null ? c.textContent : void 0) === Strophe.NS.MUC_USER) {
                        h = n.childNodes;
                        for (o = 0, a = h.length; o < a; o++) {
                            r = h[o];
                            switch (r.nodeName) {
                                case "item":
                                    t = r.attributes, i.affiliation = ((p = t.affiliation) != null ? p.textContent : void 0) || null, i.role = ((d = t.role) != null ? d.textContent : void 0) || null, i.jid = ((v = t.jid) != null ? v.textContent : void 0) || null, i.newnick = ((m = t.nick) != null ? m.textContent : void 0) || null;
                                    break;
                                case "status":
                                    r.attributes.code && i.states.push(r.attributes.code.textContent)
                            }
                        }
                    }
            }
        }
        return i
    }, e
}(), RoomConfig = function() {
    function e(e) {
        this.parse = __bind(this.parse, this), e != null && this.parse(e)
    }
    return e.prototype.parse = function(e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p;
        o = e.getElementsByTagName("query")[0].childNodes, this.identities = [], this.features = [], this.x = [];
        for (u = 0, l = o.length; u < l; u++) {
            r = o[u], n = r.attributes;
            switch (r.nodeName) {
                case "identity":
                    s = {};
                    for (a = 0, c = n.length; a < c; a++) t = n[a], s[t.name] = t.textContent;
                    this.identities.push(s);
                    break;
                case "feature":
                    this.features.push(n["var"].textContent);
                    break;
                case "x":
                    n = r.childNodes[0].attributes;
                    if (!n["var"].textContent === "FORM_TYPE" || !n.type.textContent === "hidden") break;
                    p = r.childNodes;
                    for (f = 0, h = p.length; f < h; f++) {
                        i = p[f];
                        if ( !! i.attributes.type) continue;
                        n = i.attributes, this.x.push({
                            "var": n["var"].textContent,
                            label: n.label.textContent || "",
                            value: i.firstChild.textContent || ""
                        })
                    }
            }
        }
        return {
            identities: this.identities,
            features: this.features,
            x: this.x
        }
    }, e
}(), Occupant = function() {
    function e(e, t) {
        this.room = t, this.update = __bind(this.update, this), this.admin = __bind(this.admin, this), this.owner = __bind(this.owner, this), this.revoke = __bind(this.revoke, this), this.member = __bind(this.member, this), this.ban = __bind(this.ban, this), this.modifyAffiliation = __bind(this.modifyAffiliation, this), this.deop = __bind(this.deop, this), this.op = __bind(this.op, this), this.mute = __bind(this.mute, this), this.voice = __bind(this.voice, this), this.kick = __bind(this.kick, this), this.modifyRole = __bind(this.modifyRole, this), this.update(e)
    }
    return e.prototype.modifyRole = function(e, t, n, r) {
        return this.room.modifyRole(this.nick, e, t, n, r)
    }, e.prototype.kick = function(e, t, n) {
        return this.room.kick(this.nick, e, t, n)
    }, e.prototype.voice = function(e, t, n) {
        return this.room.voice(this.nick, e, t, n)
    }, e.prototype.mute = function(e, t, n) {
        return this.room.mute(this.nick, e, t, n)
    }, e.prototype.op = function(e, t, n) {
        return this.room.op(this.nick, e, t, n)
    }, e.prototype.deop = function(e, t, n) {
        return this.room.deop(this.nick, e, t, n)
    }, e.prototype.modifyAffiliation = function(e, t, n, r) {
        return this.room.modifyAffiliation(this.jid, e, t, n, r)
    }, e.prototype.ban = function(e, t, n) {
        return this.room.ban(this.jid, e, t, n)
    }, e.prototype.member = function(e, t, n) {
        return this.room.member(this.jid, e, t, n)
    }, e.prototype.revoke = function(e, t, n) {
        return this.room.revoke(this.jid, e, t, n)
    }, e.prototype.owner = function(e, t, n) {
        return this.room.owner(this.jid, e, t, n)
    }, e.prototype.admin = function(e, t, n) {
        return this.room.admin(this.jid, e, t, n)
    }, e.prototype.update = function(e) {
        return this.nick = e.nick || null, this.affiliation = e.affiliation || null, this.role = e.role || null, this.jid = e.jid || null, this.status = e.status || null, this.show = e.show || null, this
    }, e
}(), define("strophe.muc", function() {}), Strophe.addConnectionPlugin("roster", {
    _connection: null,
    _callbacks: [],
    items: [],
    ver: null,
    init: function(e) {
        this._connection = e, this.items = [];
        var t, n = this,
            r = e.connect,
            i = e.attach,
            s = function(r) {
                if (r == Strophe.Status.ATTACHED || r == Strophe.Status.CONNECTED) try {
                    e.addHandler(n._onReceivePresence.bind(n), null, "presence", null, null, null), e.addHandler(n._onReceiveIQ.bind(n), Strophe.NS.ROSTER, "iq", "set", null, null)
                } catch (i) {
                    Strophe.error(i)
                }
                t !== null && t.apply(this, arguments)
            };
        e.connect = function(n, i, o, u, a) {
            t = o, typeof arguments[0] == "undefined" && (arguments[0] = null), typeof arguments[1] == "undefined" && (arguments[1] = null), arguments[2] = s, r.apply(e, arguments)
        }, e.attach = function(n, r, o, u, a, f, l) {
            t = u, typeof arguments[0] == "undefined" && (arguments[0] = null), typeof arguments[1] == "undefined" && (arguments[1] = null), typeof arguments[2] == "undefined" && (arguments[2] = null), arguments[3] = s, i.apply(e, arguments)
        }, Strophe.addNamespace("ROSTER_VER", "urn:xmpp:features:rosterver"), Strophe.addNamespace("NICK", "http://jabber.org/protocol/nick")
    },
    supportVersioning: function() {
        return this._connection.features && this._connection.features.getElementsByTagName("ver").length > 0
    },
    get: function(e, t, n) {
        var r = {
            xmlns: Strophe.NS.ROSTER
        };
        this.items = [], this.supportVersioning() && (r.ver = t || "", this.items = n || []);
        var i = $iq({
            type: "get",
            id: this._connection.getUniqueId("roster")
        }).c("query", r);
        return this._connection.sendIQ(i, this._onReceiveRosterSuccess.bind(this, e), this._onReceiveRosterError.bind(this, e))
    },
    registerCallback: function(e) {
        this._callbacks.push(e)
    },
    findItem: function(e) {
        for (var t = 0; t < this.items.length; t++)
            if (this.items[t] && this.items[t].jid == e) return this.items[t];
        return !1
    },
    removeItem: function(e) {
        for (var t = 0; t < this.items.length; t++)
            if (this.items[t] && this.items[t].jid == e) return this.items.splice(t, 1), !0;
        return !1
    },
    subscribe: function(e, t, n) {
        var r = $pres({
            to: e,
            type: "subscribe"
        });
        t && t !== "" && r.c("status").t(t), n && n !== "" && r.c("nick", {
            xmlns: Strophe.NS.NICK
        }).t(n), this._connection.send(r)
    },
    unsubscribe: function(e, t) {
        var n = $pres({
            to: e,
            type: "unsubscribe"
        });
        t && t != "" && n.c("status").t(t), this._connection.send(n)
    },
    authorize: function(e, t) {
        var n = $pres({
            to: e,
            type: "subscribed"
        });
        t && t != "" && n.c("status").t(t), this._connection.send(n)
    },
    unauthorize: function(e, t) {
        var n = $pres({
            to: e,
            type: "unsubscribed"
        });
        t && t != "" && n.c("status").t(t), this._connection.send(n)
    },
    add: function(e, t, n, r) {
        var i = $iq({
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.ROSTER
        }).c("item", {
            jid: e,
            name: t
        });
        for (var s = 0; s < n.length; s++) i.c("group").t(n[s]).up();
        this._connection.sendIQ(i, r, r)
    },
    update: function(e, t, n, r) {
        var i = this.findItem(e);
        if (!i) throw "item not found";
        var s = t || i.name,
            o = n || i.groups,
            u = $iq({
                type: "set"
            }).c("query", {
                xmlns: Strophe.NS.ROSTER
            }).c("item", {
                jid: i.jid,
                name: s
            });
        for (var a = 0; a < o.length; a++) u.c("group").t(o[a]).up();
        return this._connection.sendIQ(u, r, r)
    },
    remove: function(e, t) {
        var n = this.findItem(e);
        if (!n) throw "item not found";
        var r = $iq({
            type: "set"
        }).c("query", {
            xmlns: Strophe.NS.ROSTER
        }).c("item", {
            jid: n.jid,
            subscription: "remove"
        });
        this._connection.sendIQ(r, t, t)
    },
    _onReceiveRosterSuccess: function(e, t) {
        this._updateItems(t), e(this.items)
    },
    _onReceiveRosterError: function(e, t) {
        e(this.items)
    },
    _onReceivePresence: function(e) {
        var t = e.getAttribute("from"),
            n = Strophe.getBareJidFromJid(t),
            r = this.findItem(n);
        if (!r) return !0;
        var i = e.getAttribute("type");
        if (i == "unavailable") delete r.resources[Strophe.getResourceFromJid(t)];
        else {
            if ( !! i) return !0;
            r.resources[Strophe.getResourceFromJid(t)] = {
                show: e.getElementsByTagName("show").length != 0 ? Strophe.getText(e.getElementsByTagName("show")[0]) : "",
                status: e.getElementsByTagName("status").length != 0 ? Strophe.getText(e.getElementsByTagName("status")[0]) : "",
                priority: e.getElementsByTagName("priority").length != 0 ? Strophe.getText(e.getElementsByTagName("priority")[0]) : ""
            }
        }
        return this._call_backs(this.items, r), !0
    },
    _call_backs: function(e, t) {
        for (var n = 0; n < this._callbacks.length; n++) this._callbacks[n](e, t)
    },
    _onReceiveIQ: function(e) {
        var t = e.getAttribute("id"),
            n = e.getAttribute("from");
        if (n && n != "" && n != this._connection.jid && n != Strophe.getBareJidFromJid(this._connection.jid)) return !0;
        var r = $iq({
            type: "result",
            id: t,
            from: this._connection.jid
        });
        return this._connection.send(r), this._updateItems(e), !0
    },
    _updateItems: function(e) {
        var t = e.getElementsByTagName("query");
        if (t.length != 0) {
            this.ver = t.item(0).getAttribute("ver");
            var n = this;
            Strophe.forEachChild(t.item(0), "item", function(e) {
                n._updateItem(e)
            })
        }
        this._call_backs(this.items)
    },
    _updateItem: function(e) {
        var t = e.getAttribute("jid"),
            n = e.getAttribute("name"),
            r = e.getAttribute("subscription"),
            i = e.getAttribute("ask"),
            s = [];
        Strophe.forEachChild(e, "group", function(e) {
            s.push(Strophe.getText(e))
        });
        if (r == "remove") {
            this.removeItem(t);
            return
        }
        var e = this.findItem(t);
        e ? (e.name = n, e.subscription = r, e.ask = i, e.groups = s) : this.items.push({
            name: n,
            jid: t,
            subscription: r,
            ask: i,
            groups: s,
            resources: {}
        })
    }
}), define("strophe.roster", function() {});
var buildIq;
buildIq = function(e, t, n) {
    var r;
    return r = $iq(t ? {
        type: e,
        to: t
    } : {
        type: e
    }), r.c("vCard", {
        xmlns: Strophe.NS.VCARD
    }), n && r.cnode(n), r
}, Strophe.addConnectionPlugin("vcard", {
    _connection: null,
    init: function(e) {
        return this._connection = e, Strophe.addNamespace("VCARD", "vcard-temp")
    },
    get: function(e, t, n) {
        var r;
        return r = buildIq("get", t), this._connection.sendIQ(r, e, n)
    },
    set: function(e, t, n, r) {
        var i;
        return i = buildIq("set", n, t), this._connection.sendIQ(i, e, error_rb)
    }
}), define("strophe.vcard", function() {}), Strophe.addConnectionPlugin("disco", {
    _connection: null,
    _identities: [],
    _features: [],
    _items: [],
    init: function(e) {
        this._connection = e, this._identities = [], this._features = [], this._items = [], e.addHandler(this._onDiscoInfo.bind(this), Strophe.NS.DISCO_INFO, "iq", "get", null, null), e.addHandler(this._onDiscoItems.bind(this), Strophe.NS.DISCO_ITEMS, "iq", "get", null, null)
    },
    addIdentity: function(e, t, n, r) {
        for (var i = 0; i < this._identities.length; i++)
            if (this._identities[i].category == e && this._identities[i].type == t && this._identities[i].name == n && this._identities[i].lang == r) return !1;
        return this._identities.push({
            category: e,
            type: t,
            name: n,
            lang: r
        }), !0
    },
    addFeature: function(e) {
        for (var t = 0; t < this._features.length; t++)
            if (this._features[t] == e) return !1;
        return this._features.push(e), !0
    },
    removeFeature: function(e) {
        for (var t = 0; t < this._features.length; t++)
            if (this._features[t] === e) return this._features.splice(t, 1), !0;
        return !1
    },
    addItem: function(e, t, n, r) {
        return n && !r ? !1 : (this._items.push({
            jid: e,
            name: t,
            node: n,
            call_back: r
        }), !0)
    },
    info: function(e, t, n, r, i) {
        var s = {
            xmlns: Strophe.NS.DISCO_INFO
        };
        t && (s.node = t);
        var o = $iq({
            from: this._connection.jid,
            to: e,
            type: "get"
        }).c("query", s);
        this._connection.sendIQ(o, n, r, i)
    },
    items: function(e, t, n, r, i) {
        var s = {
            xmlns: Strophe.NS.DISCO_ITEMS
        };
        t && (s.node = t);
        var o = $iq({
            from: this._connection.jid,
            to: e,
            type: "get"
        }).c("query", s);
        this._connection.sendIQ(o, n, r, i)
    },
    _buildIQResult: function(e, t) {
        var n = e.getAttribute("id"),
            r = e.getAttribute("from"),
            i = $iq({
                type: "result",
                id: n
            });
        return r !== null && i.attrs({
            to: r
        }), i.c("query", t)
    },
    _onDiscoInfo: function(e) {
        var t = e.getElementsByTagName("query")[0].getAttribute("node"),
            n = {
                xmlns: Strophe.NS.DISCO_INFO
            };
        t && (n.node = t);
        var r = this._buildIQResult(e, n);
        for (var i = 0; i < this._identities.length; i++) {
            var n = {
                category: this._identities[i].category,
                type: this._identities[i].type
            };
            this._identities[i].name && (n.name = this._identities[i].name), this._identities[i].lang && (n["xml:lang"] = this._identities[i].lang), r.c("identity", n).up()
        }
        for (var i = 0; i < this._features.length; i++) r.c("feature", {
            "var": this._features[i]
        }).up();
        return this._connection.send(r.tree()), !0
    },
    _onDiscoItems: function(e) {
        var t = {
            xmlns: Strophe.NS.DISCO_ITEMS
        }, n = e.getElementsByTagName("query")[0].getAttribute("node");
        if (n) {
            t.node = n;
            var r = [];
            for (var i = 0; i < this._items.length; i++)
                if (this._items[i].node == n) {
                    r = this._items[i].call_back(e);
                    break
                }
        } else var r = this._items;
        var s = this._buildIQResult(e, t);
        for (var i = 0; i < r.length; i++) {
            var o = {
                jid: r[i].jid
            };
            r[i].name && (o.name = r[i].name), r[i].node && (o.node = r[i].node), s.c("item", o).up()
        }
        return this._connection.send(s.tree()), !0
    }
}), define("strophe.disco", function() {}),
function(e, t) {
    if (console === undefined || console.log === undefined) console = {
        log: function() {},
        error: function() {}
    };
    typeof define == "function" && define.amd ? define("converse", ["locales", "backbone.localStorage", "jquery.tinysort", "strophe", "strophe.muc", "strophe.roster", "strophe.vcard", "strophe.disco"], function() {
        return _.templateSettings = {
            evaluate: /\{\[([\s\S]+?)\]\}/g,
            interpolate: /\{\{([\s\S]+?)\}\}/g
        }, t(jQuery, _, console)
    }) : (_.templateSettings = {
        evaluate: /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g
    }, e.converse = t(jQuery, _, console || {
        log: function() {}
    }))
}(this, function(e, t, n) {
    var r = {};
    return r.initialize = function(r, i) {
        var s = this;
        this.allow_contact_requests = !0, this.allow_muc = !0, this.allow_otr = !0, this.animate = !0, this.auto_list_rooms = !1, this.auto_subscribe = !1, this.bosh_service_url = undefined, this.debug = !1, this.hide_muc_server = !1, this.i18n = locales.en, this.prebind = !1, this.show_controlbox_by_default = !1, this.show_only_online_users = !1, this.testing = !1, this.xhr_custom_status = !1, this.xhr_user_search = !1, t.extend(this, t.pick(r, ["allow_contact_requests", "allow_muc", "animate", "auto_list_rooms", "auto_subscribe", "bosh_service_url", "connection", "debug", "fullname", "hide_muc_server", "i18n", "jid", "prebind", "rid", "show_controlbox_by_default", "show_only_online_users", "sid", "testing", "xhr_custom_status", "xhr_user_search"]));
        var o = e.proxy(function(e) {
            this.i18n === undefined && (this.i18n = locales.en);
            var t = this.i18n.translate(e);
            return arguments.length > 1 ? t.fetch.apply(t, [].slice.call(arguments, 1)) : t.fetch()
        }, this),
            u = function(e) {
                return e
            }, a = {
                dnd: o("This contact is busy"),
                online: o("This contact is online"),
                offline: o("This contact is offline"),
                unavailable: o("This contact is unavailable"),
                xa: o("This contact is away for an extended period"),
                away: o("This contact is away")
            };
        this.callback = i || function() {}, this.initial_presence_sent = 0, this.msg_counter = 0, this.autoLink = function(e) {
            var t = /((http|https|ftp):\/\/[\w?=&.\/\-;#~%\-]+(?![\w\s?&.\/;#~%"=\-]*>))/g;
            return e.replace(t, '<a target="_blank" href="$1">$1</a>')
        }, this.giveFeedback = function(t, n) {
            e(".conn-feedback").text(t), e(".conn-feedback").attr("class", "conn-feedback"), n && e(".conn-feedback").addClass(n)
        }, this.log = function(e) {
            this.debug && n.log(e)
        }, this.getVCard = function(t, n, r) {
            s.connection.vcard.get(e.proxy(function(r) {
                $vcard = e(r).find("vCard");
                var i = $vcard.find("FN").text(),
                    o = $vcard.find("BINVAL").text(),
                    u = $vcard.find("TYPE").text(),
                    a = $vcard.find("URL").text();
                if (t) {
                    var f = s.roster.get(t);
                    f && f.save({
                        fullname: i || t,
                        image_type: u,
                        image: o,
                        url: a,
                        vcard_updated: s.toISOString(new Date)
                    })
                }
                n && n(t, i, o, u, a)
            }, this), t, function(e) {
                var n = s.roster.get(t);
                n && n.save({
                    vcard_updated: s.toISOString(new Date)
                }), r && r(e)
            })
        }, this.onConnect = function(t) {
            var n, r;
            t === Strophe.Status.CONNECTED ? (s.log("Connected"), s.onConnected()) : t === Strophe.Status.DISCONNECTED ? (r = e("#converse-login"), n = r.find("input[type=submit]"), n && n.show().siblings("span").remove(), s.giveFeedback(o("Disconnected"), "error"), s.connection.connect(s.connection.jid, s.connection.pass, s.onConnect)) : t === Strophe.Status.Error ? (r = e("#converse-login"), n = r.find("input[type=submit]"), n && n.show().siblings("span").remove(), s.giveFeedback(o("Error"), "error")) : t === Strophe.Status.CONNECTING ? s.giveFeedback(o("Connecting")) : t === Strophe.Status.CONNFAIL ? (s.chatboxesview.views.controlbox.trigger("connection-fail"), s.giveFeedback(o("Connection Failed"), "error")) : t === Strophe.Status.AUTHENTICATING ? s.giveFeedback(o("Authenticating")) : t === Strophe.Status.AUTHFAIL ? (s.chatboxesview.views.controlbox.trigger("auth-fail"), s.giveFeedback(o("Authentication Failed"), "error")) : t === Strophe.Status.DISCONNECTING ? s.giveFeedback(o("Disconnecting"), "error") : t === Strophe.Status.ATTACHED && (s.log("Attached"), s.onConnected())
        }, this.toISOString = function(e) {
            var t;
            return typeof e.toISOString != "undefined" ? e.toISOString() : (t = function(e) {
                return e < 10 ? "0" + e : "" + e
            }, e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + ".000Z")
        }, this.parseISO8601 = function(e) {
            var t = [1, 4, 5, 6, 7, 10, 11],
                n = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}\.?\d*)Z\s*$/.exec(e),
                r = 0,
                i, s;
            for (i = 0; s = t[i]; ++i) n[s] = +n[s] || 0;
            return n[2] = (+n[2] || 1) - 1, n[3] = +n[3] || 1, n[8] !== "Z" && n[9] !== undefined && (r = n[10] * 60 + n[11], n[9] === "+" && (r = 0 - r)), new Date(Date.UTC(n[1], n[2], n[3], n[4], n[5] + r, n[6], n[7]))
        }, this.updateMsgCounter = function() {
            this.msg_counter > 0 ? (document.title.search(/^Messages \(\d+\) /) == -1 ? document.title = "Messages (" + this.msg_counter + ") " + document.title : document.title = document.title.replace(/^Messages \(\d+\) /, "Messages (" + this.msg_counter + ") "), window.blur(), window.focus()) : document.title.search(/^Messages \(\d+\) /) != -1 && (document.title = document.title.replace(/^Messages \(\d+\) /, ""))
        }, this.incrementMsgCounter = function() {
            this.msg_counter += 1, this.updateMsgCounter()
        }, this.clearMsgCounter = function() {
            this.msg_counter = 0, this.updateMsgCounter()
        }, this.showControlBox = function() {
            var e = this.chatboxes.get("controlbox");
            e ? e.trigger("show") : (this.chatboxes.add({
                id: "controlbox",
                box_id: "controlbox",
                visible: !0
            }), this.connection && this.chatboxes.get("controlbox").save())
        }, this.toggleControlBox = function() {
            if (e("div#controlbox").is(":visible")) {
                var t = this.chatboxes.get("controlbox");
                this.connection ? t.destroy() : t.trigger("hide")
            } else this.showControlBox()
        }, this.initStatus = function(e) {
            this.xmppstatus = new this.XMPPStatus;
            var t = hex_sha1("converse.xmppstatus-" + this.bare_jid);
            this.xmppstatus.id = t, this.xmppstatus.localStorage = new Backbone.LocalStorage(t), this.xmppstatus.fetch({
                success: e,
                error: e
            })
        }, this.initRoster = function() {
            this.roster = new this.RosterItems, this.roster.localStorage = new Backbone.LocalStorage(hex_sha1("converse.rosteritems-" + s.bare_jid)), this.connection.roster.registerCallback(e.proxy(this.roster.rosterHandler, this.roster), null, "presence", null), this.connection.addHandler(e.proxy(this.roster.subscribeToSuggestedItems, this.roster), "http://jabber.org/protocol/rosterx", "message", null), this.connection.addHandler(e.proxy(function(e) {
                return this.presenceHandler(e), !0
            }, this.roster), null, "presence", null), this.rosterview = new this.RosterView({
                model: this.roster
            })
        }, this.onConnected = function() {
            this.debug && (this.connection.xmlInput = function(e) {
                n.log(e)
            }, this.connection.xmlOutput = function(e) {
                n.log(e)
            }, Strophe.log = function(e, t) {
                n.log(e + " " + t)
            }, Strophe.error = function(e) {
                n.log("ERROR: " + e)
            }), this.bare_jid = Strophe.getBareJidFromJid(this.connection.jid), this.domain = Strophe.getDomainFromJid(this.connection.jid), this.features = new this.Features, this.initStatus(e.proxy(function() {
                this.initRoster(), this.chatboxes.onConnected(), this.connection.roster.get(function() {}), e(window).on("blur focus", e.proxy(function(e) {
                    this.windowState != e.type && e.type == "focus" && s.clearMsgCounter(), this.windowState = e.type
                }, this)), this.giveFeedback(o("Chat on/off")), this.testing ? this.callback(this) : this.callback()
            }, this))
        }, this.Message = Backbone.Model.extend(), this.Messages = Backbone.Collection.extend({
            model: s.Message
        }), this.ChatBox = Backbone.Model.extend({
            initialize: function() {
                this.get("box_id") !== "controlbox" && (this.messages = new s.Messages, this.messages.localStorage = new Backbone.LocalStorage(hex_sha1("converse.messages" + this.get("jid") + s.bare_jid)), this.set({
                    user_id: Strophe.getNodeFromJid(this.get("jid")),
                    box_id: hex_sha1(this.get("jid")),
                    fullname: this.get("fullname"),
                    url: this.get("url"),
                    image_type: this.get("image_type"),
                    image: this.get("image")
                }))
            },
            messageReceived: function(t) {
                var n = e(t),
                    r = s.autoLink(n.children("body").text()),
                    i = Strophe.getBareJidFromJid(n.attr("from")),
                    o = n.find("composing"),
                    u = n.find("delay").length > 0,
                    a = (this.get("fullname") || "").split(" ")[0],
                    f, l, c;
                r ? (u ? (f = n.find("delay").attr("stamp"), l = f) : l = s.toISOString(new Date), i == s.bare_jid ? c = "me" : c = "them", this.messages.create({
                    fullname: a,
                    sender: c,
                    delayed: u,
                    time: l,
                    message: r
                })) : o.length && this.messages.add({
                    fullname: a,
                    sender: "them",
                    delayed: u,
                    time: s.toISOString(new Date),
                    composing: o.length
                })
            }
        }), this.ChatBoxView = Backbone.View.extend({
            length: 200,
            tagName: "div",
            className: "chatbox",
            events: {
                "click .close-chatbox-button": "closeChat",
                "keypress textarea.chat-textarea": "keyPressed"
            },
            message_template: t.template('<div class="chat-message {{extra_classes}}"><span class="chat-message-{{sender}}">{{time}} {{username}}:&nbsp;</span><span class="chat-message-content">{{message}}</span></div>'),
            action_template: t.template('<div class="chat-message {{extra_classes}}"><span class="chat-message-{{sender}}">{{time}} **{{username}} </span><span class="chat-message-content">{{message}}</span></div>'),
            new_day_template: t.template('<time class="chat-date" datetime="{{isodate}}">{{datestring}}</time>'),
            appendMessage: function(e, t) {
                var n = s.parseISO8601(t.time),
                    r = t.message,
                    i = r.match(/^\/(.*?)(?: (.*))?$/),
                    u = t.sender,
                    a, f;
                i && i[1] === "me" ? (r = r.replace(/^\/me/, ""), a = this.action_template, f = t.fullname) : (a = this.message_template, f = u === "me" && o("me") || t.fullname), e.find("div.chat-event").remove(), e.append(a({
                    sender: u,
                    time: n.toTimeString().substring(0, 5),
                    message: r,
                    username: f,
                    extra_classes: t.delayed && "delayed" || ""
                }))
            },
            insertStatusNotification: function(t, n) {
                var r = this.$el.find(".chat-content");
                r.find("div.chat-event").remove().end().append(e('<div class="chat-event"></div>').text(t)), this.scrollDown()
            },
            showMessage: function(e) {
                var n = e.get("time"),
                    r = this.model.messages.pluck("time"),
                    i = s.parseISO8601(n),
                    u = this.$el.find(".chat-content"),
                    a, f, l, c, h, p;
                f = t.indexOf(r, n) - 1, f >= 0 && (a = this.model.messages.at(f), l = s.parseISO8601(a.get("time")), c = new Date(i.getTime()), c.setUTCHours(0, 0, 0, 0), c = s.toISOString(c), this.isDifferentDay(l, i) && u.append(this.new_day_template({
                    isodate: c,
                    datestring: i.toString().substring(0, 15)
                })));
                if (e.get("composing")) {
                    this.insertStatusNotification(o("%1$s is typing", e.get("fullname")));
                    return
                }
                this.appendMessage(u, t.clone(e.attributes)), e.get("sender") != "me" && s.windowState == "blur" && s.incrementMsgCounter(), this.scrollDown()
            },
            isDifferentDay: function(e, t) {
                return t.getDate() != e.getDate() || t.getFullYear() != e.getFullYear() || t.getMonth() != e.getMonth()
            },
            addHelpMessages: function(t) {
                var n = this.$el.find(".chat-content"),
                    r, i = t.length;
                for (r = 0; r < i; r++) n.append(e('<div class="chat-info">' + t[r] + "</div>"));
                this.scrollDown()
            },
            sendMessage: function(e) {
                var t = (new Date).getTime(),
                    n = this.model.get("jid"),
                    r = e.replace(/^\s*/, "").match(/^\/(.*)\s*$/),
                    i;
                if (r) {
                    if (r[1] === "clear") {
                        this.$el.find(".chat-content").empty(), this.model.messages.reset().localStorage._clear();
                        return
                    }
                    if (r[1] === "help") {
                        i = ["<strong>/help</strong>:" + o("Show this menu") + "", "<strong>/me</strong>:" + o("Write in the third person") + "", "<strong>/clear</strong>:" + o("Remove messages") + ""], this.addHelpMessages(i);
                        return
                    }
                }
                var u = $msg({
                    from: s.connection.jid,
                    to: n,
                    type: "chat",
                    id: t
                }).c("body").t(e).up().c("active", {
                    xmlns: "http://jabber.org/protocol/chatstates"
                }),
                    a = $msg({
                        to: s.bare_jid,
                        type: "chat",
                        id: t
                    }).c("forwarded", {
                        xmlns: "urn:xmpp:forward:0"
                    }).c("delay", {
                        xmns: "urn:xmpp:delay",
                        stamp: t
                    }).up().cnode(u.tree());
                s.connection.send(u), s.connection.send(a), this.model.messages.create({
                    fullname: s.xmppstatus.get("fullname") || s.bare_jid,
                    sender: "me",
                    time: s.toISOString(new Date),
                    message: e
                })
            },
            keyPressed: function(t) {
                var n = e(t.target),
                    r, i, o;
                t.keyCode == 13 ? (t.preventDefault(), r = n.val(), n.val("").focus(), r !== "" && (this.model.get("chatroom") ? this.sendChatRoomMessage(r) : this.sendMessage(r)), this.$el.data("composing", !1)) : this.model.get("chatroom") || (o = this.$el.data("composing"), o || (t.keyCode != 47 && (i = $msg({
                    to: this.model.get("jid"),
                    type: "chat"
                }).c("composing", {
                    xmlns: "http://jabber.org/protocol/chatstates"
                }), s.connection.send(i)), this.$el.data("composing", !0)))
            },
            onChange: function(e, n) {
                if (t.has(e.changed, "chat_status")) {
                    var r = e.get("chat_status"),
                        i = e.get("fullname");
                    this.$el.is(":visible") && (r === "offline" ? this.insertStatusNotification(i + " " + "has gone offline") : r === "away" ? this.insertStatusNotification(i + " " + "has gone away") : r === "dnd" ? this.insertStatusNotification(i + " " + "is busy") : r === "online" && this.$el.find("div.chat-event").remove())
                }
                t.has(e.changed, "status") && this.showStatusMessage(e.get("status")), t.has(e.changed, "image") && this.renderAvatar()
            },
            showStatusMessage: function(e) {
                this.$el.find("p.user-custom-message").text(e).attr("title", e)
            },
            closeChat: function() {
                s.connection ? this.model.destroy() : this.model.trigger("hide")
            },
            updateVCard: function() {
                var t = this.model.get("jid"),
                    n = s.roster.get(t);
                n && !n.get("vcard_updated") && s.getVCard(t, e.proxy(function(e, t, n, r, i) {
                    this.model.save({
                        fullname: t || e,
                        url: i,
                        image_type: r,
                        image: n
                    })
                }, this), e.proxy(function(e) {
                    s.log("ChatBoxView.initialize: An error occured while fetching vcard")
                }, this))
            },
            initialize: function() {
                this.model.messages.on("add", this.showMessage, this), this.model.on("show", this.show, this), this.model.on("destroy", this.hide, this), this.model.on("change", this.onChange, this), this.updateVCard(), this.$el.appendTo(s.chatboxesview.$el), this.render().show().model.messages.fetch({
                    add: !0
                }), this.model.get("status") && this.showStatusMessage(this.model.get("status"))
            },
            template: t.template('<div class="chat-head chat-head-chatbox"><a class="close-chatbox-button icon-close"></a><a href="{{url}}" target="_blank" class="user"><div class="chat-title"> {{ fullname }} </div></a><p class="user-custom-message"><p/></div><div class="chat-content"></div><form class="sendXMPPMessage" action="" method="post"><textarea type="text" class="chat-textarea" placeholder="' + o("Personal message") + '"/>' + "</form>"),
            renderAvatar: function() {
                if (!this.model.get("image")) return;
                var t = "data:" + this.model.get("image_type") + ";base64," + this.model.get("image"),
                    n = e('<canvas height="33px" width="33px" class="avatar"></canvas>'),
                    r = n.get(0).getContext("2d"),
                    i = new Image;
                i.onload = function() {
                    var e = i.width / i.height;
                    r.drawImage(i, 0, 0, 35 * e, 35)
                }, i.src = t, this.$el.find(".chat-title").before(n)
            },
            render: function() {
                return this.$el.attr("id", this.model.get("box_id")).html(this.template(this.model.toJSON())), this.renderAvatar(), this
            },
            focus: function() {
                return this.$el.find(".chat-textarea").focus(), this
            },
            hide: function() {
                s.animate ? this.$el.hide("fast") : this.$el.hide()
            },
            show: function() {
                return this.$el.is(":visible") && this.$el.css("opacity") == "1" ? this.focus() : (s.animate ? this.$el.css({
                    opacity: 0,
                    display: "inline"
                }).animate({
                    opacity: "1"
                }, 200) : this.$el.css({
                    opacity: 1,
                    display: "inline"
                }), s.connection && this.model.save(), this)
            },
            scrollDown: function() {
                var e = this.$el.find(".chat-content");
                return e.scrollTop(e[0].scrollHeight), this
            }
        }), this.ContactsPanel = Backbone.View.extend({
            tagName: "div",
            className: "oc-chat-content",
            id: "users",
            events: {
                "click a.toggle-xmpp-contact-form": "toggleContactForm",
                "submit form.add-xmpp-contact": "addContactFromForm",
                "submit form.search-xmpp-contact": "searchContacts",
                "click a.subscribe-to-user": "addContactFromList"
            },
            tab_template: t.template('<li><a class="s current" href="#users">' + o("Contacts") + "</a></li>"),
            template: t.template('<form class="set-xmpp-status" action="" method="post"><span id="xmpp-status-holder"><select id="select-xmpp-status" style="display:none"><option value="online">' + o("Online") + "</option>" + '<option value="dnd">' + o("Busy") + "</option>" + '<option value="away">' + o("Away") + "</option>" + '<option value="offline">' + o("Offline") + "</option>" + "</select>" + "</span>" + "</form>"),
            add_contact_dropdown_template: t.template('<dl class="add-converse-contact dropdown"><dt id="xmpp-contact-search" class="fancy-dropdown"><a class="toggle-xmpp-contact-form" href="#"title="' + o("Click to add new chat contacts") + '">' + '<span class="icon-plus"></span>' + o("Add a contact") + "</a>" + "</dt>" + '<dd class="search-xmpp" style="display:none"><ul></ul></dd>' + "</dl>"),
            add_contact_form_template: t.template('<li><form class="add-xmpp-contact"><input type="text" name="identifier" class="username" placeholder="' + o("Contact username") + '"/>' + '<button type="submit">' + o("Add") + "</button>" + "</form>" + "<li>"),
            search_contact_template: t.template('<li><form class="search-xmpp-contact"><input type="text" name="identifier" class="username" placeholder="' + o("Contact name") + '"/>' + '<button type="submit">' + o("Search") + "</button>" + "</form>" + "<li>"),
            initialize: function(e) {
                e.$parent.append(this.$el), this.$tabs = e.$parent.parent().find("#controlbox-tabs")
            },
            render: function() {
                var e, t = this.template();
                return this.$tabs.append(this.tab_template()), s.xhr_user_search ? e = this.search_contact_template() : e = this.add_contact_form_template(), s.allow_contact_requests && (t += this.add_contact_dropdown_template()), this.$el.html(t), this.$el.find(".search-xmpp ul").append(e), this.$el.append(s.rosterview.$el), this
            },
            toggleContactForm: function(t) {
                t.preventDefault(), this.$el.find(".search-xmpp").toggle("fast", function() {
                    e(this).is(":visible") && e(this).find("input.username").focus()
                })
            },
            searchContacts: function(t) {
                t.preventDefault(), e.getJSON(portal_url + "/search-users?q=" + e(t.target).find("input.username").val(), function(t) {
                    var n = e(".search-xmpp ul");
                    n.find("li.found-user").remove(), n.find("li.chat-info").remove(), t.length || n.append('<li class="chat-info">' + o("No users found") + "</li>"), e(t).each(function(t, r) {
                        n.append(e('<li class="found-user"></li>').append(e('<a class="subscribe-to-user" href="#" title="' + o("Click to add as a chat contact") + '"></a>').attr("data-recipient", Strophe.escapeNode(r.id) + "@" + s.domain).text(r.fullname)))
                    })
                })
            },
            addContactFromForm: function(t) {
                t.preventDefault();
                var n = e(t.target).find("input"),
                    r = n.val();
                if (!r) {
                    n.addClass("error");
                    return
                }
                s.getVCard(r, e.proxy(function(e, t, n, r, i) {
                    this.addContact(e, t)
                }, this), e.proxy(function(t) {
                    s.log("An error occured while fetching vcard");
                    var n = e(t).attr("from");
                    this.addContact(n, n)
                }, this)), e(".search-xmpp").hide()
            },
            addContactFromList: function(t) {
                t.preventDefault();
                var n = e(t.target),
                    r = n.attr("data-recipient"),
                    i = n.text();
                this.addContact(r, i), n.parent().remove(), e(".search-xmpp").hide()
            },
            addContact: function(e, t) {
                s.connection.roster.add(e, t, [], function(t) {
                    s.connection.roster.subscribe(e, null, s.xmppstatus.get("fullname"))
                })
            }
        }), this.RoomsPanel = Backbone.View.extend({
            tagName: "div",
            id: "chatrooms",
            events: {
                "submit form.add-chatroom": "createChatRoom",
                "click input#show-rooms": "showRooms",
                "click a.open-room": "createChatRoom",
                "click a.room-info": "showRoomInfo"
            },
            room_template: t.template('<dd class="available-chatroom"><a class="open-room" data-room-jid="{{jid}}"title="' + o("Click to open this room") + '" href="#">{{name}}</a>' + '<a class="room-info icon-room-info" data-room-jid="{{jid}}"' + 'title="' + o("Show more information on this room") + '" href="#">&nbsp;</a>' + "</dd>"),
            room_description_template: t.template('<div class="room-info"><p class="room-info"><strong>' + o("Description:") + "</strong> {{desc}}</p>" + '<p class="room-info"><strong>' + o("Occupants:") + "</strong> {{occ}}</p>" + '<p class="room-info"><strong>' + o("Features:") + "</strong> <ul>" + "{[ if (passwordprotected) { ]}" + '<li class="room-info locked">' + o("Requires authentication") + "</li>" + "{[ } ]}" + "{[ if (hidden) { ]}" + '<li class="room-info">' + o("Hidden") + "</li>" + "{[ } ]}" + "{[ if (membersonly) { ]}" + '<li class="room-info">' + o("Requires an invitation") + "</li>" + "{[ } ]}" + "{[ if (moderated) { ]}" + '<li class="room-info">' + o("Moderated") + "</li>" + "{[ } ]}" + "{[ if (nonanonymous) { ]}" + '<li class="room-info">' + o("Non-anonymous") + "</li>" + "{[ } ]}" + "{[ if (open) { ]}" + '<li class="room-info">' + o("Open room") + "</li>" + "{[ } ]}" + "{[ if (persistent) { ]}" + '<li class="room-info">' + o("Permanent room") + "</li>" + "{[ } ]}" + "{[ if (publicroom) { ]}" + '<li class="room-info">' + o("Public") + "</li>" + "{[ } ]}" + "{[ if (semianonymous) { ]}" + '<li class="room-info">' + o("Semi-anonymous") + "</li>" + "{[ } ]}" + "{[ if (temporary) { ]}" + '<li class="room-info">' + o("Temporary room") + "</li>" + "{[ } ]}" + "{[ if (unmoderated) { ]}" + '<li class="room-info">' + o("Unmoderated") + "</li>" + "{[ } ]}" + "</p>" + "</div>"),
            tab_template: t.template('<li><a class="s" href="#chatrooms">' + o("Rooms") + "</a></li>"),
            template: t.template('<form class="add-chatroom" action="" method="post"><input type="text" name="chatroom" class="new-chatroom-name" placeholder="' + o("Room name") + '"/>' + '<input type="text" name="nick" class="new-chatroom-nick" placeholder="' + o("Nickname") + '"/>' + '<input type="{{ server_input_type }}" name="server" class="new-chatroom-server" placeholder="' + o("Server") + '"/>' + '<input type="submit" name="join" value="' + o("Join") + '"/>' + '<input type="button" name="show" id="show-rooms" value="' + o("Show rooms") + '"/>' + "</form>" + '<dl id="available-chatrooms"></dl>'),
            initialize: function(n) {
                n.$parent.append(this.$el.html(this.template({
                    server_input_type: s.hide_muc_server && "hidden" || "text"
                })).hide()), this.$tabs = n.$parent.parent().find("#controlbox-tabs"), this.on("update-rooms-list", function(e) {
                    this.updateRoomsList()
                }), s.xmppstatus.on("change", e.proxy(function(e) {
                    if (!t.has(e.changed, "fullname")) return;
                    var n = this.$el.find("input.new-chatroom-nick");
                    n.is(":focus") || n.val(e.get("fullname"))
                }, this))
            },
            render: function() {
                return this.$tabs.append(this.tab_template()), this
            },
            informNoRoomsFound: function() {
                var t = this.$el.find("#available-chatrooms");
                t.html("<dt>" + o("No rooms on %1$s", this.muc_domain) + "</dt>"), e("input#show-rooms").show().siblings("span.spinner").remove()
            },
            updateRoomsList: function(t) {
                s.connection.muc.listRooms(this.muc_domain, e.proxy(function(t) {
                    var n, r, i, s, u = this,
                        a = this.$el.find("#available-chatrooms");
                    this.rooms = e(t).find("query").find("item");
                    if (this.rooms.length) {
                    	// a.html("<dt>" + o("Rooms on %1$s", this.muc_domain) + "</dt>"),
                    	s = document.createDocumentFragment();
                        for (i = 0; i < this.rooms.length; i++) {
            				r = e(this.rooms[i]).attr("jid");
            				label = r.split("@")[0];
                        	// window.alert(label);
                        	if (label == room_label) {
                            	n = Strophe.unescapeNode(e(this.rooms[i]).attr("name") || e(this.rooms[i]).attr("jid"));
                				s.appendChild(e(this.room_template({
                        			name: n,
                        			jid: r
                        		}))[0]);
                        	}
                    		a.append(s);
                    		e("input#show-rooms").show().siblings("span.spinner").remove()
                        }
                    } else this.informNoRoomsFound();
                    return !0
                }, this), e.proxy(function(e) {
                    this.informNoRoomsFound()
                }, this))
            },
            showRooms: function(t) {
                var n = this.$el.find("#available-chatrooms"),
                    r = this.$el.find("input.new-chatroom-server"),
                    i = r.val();
                if (!i) {
                    r.addClass("error");
                    return
                }
                this.$el.find("input.new-chatroom-name").removeClass("error"), r.removeClass("error"), n.empty(), e("input#show-rooms").hide().after('<span class="spinner"/>'), this.muc_domain = i, this.updateRoomsList()
            },
            showRoomInfo: function(t) {
                var n = t.target,
                    r = e(n).parent("dd"),
                    i = r.find("div.room-info");
                i.length ? i.remove() : (r.find("span.spinner").remove(), r.append('<span class="spinner hor_centered"/>'), s.connection.disco.info(e(n).attr("data-room-jid"), null, e.proxy(function(t) {
                    var n = e(t);
                    r.find("span.spinner").replaceWith(this.room_description_template({
                        desc: n.find('field[var="muc#roominfo_description"] value').text(),
                        occ: n.find('field[var="muc#roominfo_occupants"] value').text(),
                        hidden: n.find('feature[var="muc_hidden"]').length,
                        membersonly: n.find('feature[var="muc_membersonly"]').length,
                        moderated: n.find('feature[var="muc_moderated"]').length,
                        nonanonymous: n.find('feature[var="muc_nonanonymous"]').length,
                        open: n.find('feature[var="muc_open"]').length,
                        passwordprotected: n.find('feature[var="muc_passwordprotected"]').length,
                        persistent: n.find('feature[var="muc_persistent"]').length,
                        publicroom: n.find('feature[var="muc_public"]').length,
                        semianonymous: n.find('feature[var="muc_semianonymous"]').length,
                        temporary: n.find('feature[var="muc_temporary"]').length,
                        unmoderated: n.find('feature[var="muc_unmoderated"]').length
                    }))
                }, this)))
            },
            createChatRoom: function(t) {
                t.preventDefault();
                var n, r, i, o, u, a = this.$el.find("input.new-chatroom-nick"),
                    f = a.val(),
                    l;
                f ? a.removeClass("error") : a.addClass("error");
                if (t.type === "click") u = e(t.target).attr("data-room-jid");
                else {
                    r = this.$el.find("input.new-chatroom-name"), o = this.$el.find("input.new-chatroom-server"), i = o.val(), n = r.val().trim().toLowerCase(), r.val("");
                    if (!n || !i) {
                        n || r.addClass("error"), i || o.addClass("error");
                        return
                    }
                    u = Strophe.escapeNode(n) + "@" + i, r.removeClass("error"), o.removeClass("error"), this.muc_domain = i
                } if (!f) return;
                l = s.chatboxesview.showChatBox({
                    id: u,
                    jid: u,
                    name: Strophe.unescapeNode(Strophe.getNodeFromJid(u)),
                    nick: f,
                    chatroom: !0,
                    box_id: hex_sha1(u)
                }), l.get("connected") || s.chatboxesview.views[u].connect(null)
            }
        }), this.ControlBoxView = s.ChatBoxView.extend({
            tagName: "div",
            className: "chatbox",
            id: "controlbox",
            events: {
                "click a.close-chatbox-button": "closeChat",
                "click ul#controlbox-tabs li a": "switchTab"
            },
            initialize: function() {
                this.$el.appendTo(s.chatboxesview.$el), this.model.on("change", e.proxy(function(n, r) {
                    var i;
                    if (t.has(n.changed, "connected")) {
                        this.render(), s.features.on("add", e.proxy(this.featureAdded, this));
                        var o = s.features.findWhere({
                            "var": "http://jabber.org/protocol/muc"
                        });
                        o && this.featureAdded(o)
                    }
                    t.has(n.changed, "visible") && n.changed.visible === !0 && this.show()
                }, this)), this.model.on("show", this.show, this), this.model.on("destroy", this.hide, this), this.model.on("hide", this.hide, this), this.model.get("visible") && this.show()
            },
            featureAdded: function(e) {
                if (e.get("var") == "http://jabber.org/protocol/muc" && s.allow_muc) {
                    this.roomspanel.muc_domain = e.get("from");
                    var t = this.$el.find("input.new-chatroom-server");
                    t.is(":focus") || t.val(this.roomspanel.muc_domain), s.auto_list_rooms && this.roomspanel.trigger("update-rooms-list")
                }
            },
            template: t.template('<div class="chat-head oc-chat-head"><ul id="controlbox-tabs"></ul><a class="close-chatbox-button icon-close"></a></div><div class="controlbox-panes"></div>'),
            switchTab: function(t) {
                t.preventDefault();
                var n = e(t.target),
                    r = n.parent().siblings("li").children("a"),
                    i = e(n.attr("href")),
                    s = e(r.attr("href"));
                s.fadeOut("fast", function() {
                    r.removeClass("current"), n.addClass("current"), i.fadeIn("fast", function() {})
                })
            },
            addHelpMessages: function(e) {
                return
            },
            render: function() {
                return !s.prebind && !s.connection ? (this.$el.html(this.template(this.model.toJSON())), this.loginpanel = new s.LoginPanel({
                    $parent: this.$el.find(".controlbox-panes"),
                    model: this
                }), this.loginpanel.render()) : this.contactspanel || (this.$el.html(this.template(this.model.toJSON())), this.contactspanel = new s.ContactsPanel({
                    $parent: this.$el.find(".controlbox-panes")
                }), this.contactspanel.render(), s.xmppstatusview = new s.XMPPStatusView({
                    model: s.xmppstatus
                }), s.xmppstatusview.render(), s.allow_muc && (this.roomspanel = new s.RoomsPanel({
                    $parent: this.$el.find(".controlbox-panes")
                }), this.roomspanel.render())), this
            }
        }), this.ChatRoomView = s.ChatBoxView.extend({
            length: 300,
            tagName: "div",
            className: "chatroom",
            events: {
                "click a.close-chatbox-button": "closeChat",
                "click a.configure-chatroom-button": "configureChatRoom",
                "keypress textarea.chat-textarea": "keyPressed"
            },
            info_template: t.template('<div class="chat-info">{{message}}</div>'),
            sendChatRoomMessage: function(e) {
                var t = e.replace(/^\s*/, "").match(/^\/(.*?)(?: (.*))?$/) || [!1],
                    n;
                switch (t[1]) {
                    case "msg":
                        break;
                    case "clear":
                        this.$el.find(".chat-content").empty();
                        break;
                    case "topic":
                        s.connection.muc.setTopic(this.model.get("jid"), t[2]);
                        break;
                    case "kick":
                        s.connection.muc.kick(this.model.get("jid"), t[2]);
                        break;
                    case "ban":
                        s.connection.muc.ban(this.model.get("jid"), t[2]);
                        break;
                    case "op":
                        s.connection.muc.op(this.model.get("jid"), t[2]);
                        break;
                    case "deop":
                        s.connection.muc.deop(this.model.get("jid"), t[2]);
                        break;
                    case "help":
                        n = this.$el.find(".chat-content"), msgs = ["<strong>/help</strong>:" + o("Show this menu") + "", "<strong>/me</strong>:" + o("Write in the third person") + "", "<strong>/topic</strong>:" + o("Set chatroom topic") + "", "<strong>/kick</strong>:" + o("Kick user from chatroom") + "", "<strong>/ban</strong>:" + o("Ban user from chatroom") + "", "<strong>/clear</strong>:" + o("Remove messages") + ""], this.addHelpMessages(msgs);
                        break;
                    default:
                        this.last_msgid = s.connection.muc.groupchat(this.model.get("jid"), e)
                }
            },
            template: t.template('<div class="chat-head chat-head-chatroom"><a class="close-chatbox-button icon-close"></a><a class="configure-chatroom-button icon-wrench" style="display:none"></a><div class="chat-title"> {{ name }} </div><p class="chatroom-topic"><p/></div><div class="chat-body"><span class="spinner centered"/></div>'),
            chatarea_template: t.template('<div class="chat-area"><div class="chat-content"></div><form class="sendXMPPMessage" action="" method="post"><textarea type="text" class="chat-textarea" placeholder="' + o("Message") + '"/>' + "</form>" + "</div>" + '<div class="participants">' + '<ul class="participant-list"></ul>' + "</div>"),
            render: function() {
                return this.$el.attr("id", this.model.get("box_id")).html(this.template(this.model.toJSON())), this
            },
            renderChatArea: function() {
                return this.$el.find(".chat-area").length || this.$el.find(".chat-body").empty().append(this.chatarea_template()), this
            },
            connect: function(n) {
                t.has(s.connection.muc.rooms, this.model.get("jid")) ? s.connection.muc.join(this.model.get("jid"), this.model.get("nick"), null, null, null, n) : s.connection.muc.join(this.model.get("jid"), this.model.get("nick"), e.proxy(this.onChatRoomMessage, this), e.proxy(this.onChatRoomPresence, this), e.proxy(this.onChatRoomRoster, this), n)
            },
            initialize: function() {
                this.connect(null), this.model.messages.on("add", this.showMessage, this), this.model.on("destroy", function(t, n, r) {
                    this.$el.hide("fast"), s.connection.muc.leave(this.model.get("jid"), this.model.get("nick"), e.proxy(this.onLeave, this), undefined)
                }, this), this.$el.appendTo(s.chatboxesview.$el), this.render().show().model.messages.fetch({
                    add: !0
                })
            },
            onLeave: function() {
                this.model.set("connected", !1)
            },
            form_input_template: t.template('<label>{{label}}<input name="{{name}}" type="{{type}}" value="{{value}}"></label>'),
            select_option_template: t.template('<option value="{{value}}">{{label}}</option>'),
            form_select_template: t.template('<label>{{label}}<select name="{{name}}">{{options}}</select></label>'),
            form_checkbox_template: t.template('<label>{{label}}<input name="{{name}}" type="{{type}}" {{checked}}"></label>'),
            renderConfigurationForm: function(t) {
                var n = this.$el.find("form.chatroom-form"),
                    r = e(t),
                    i = r.find("field"),
                    s = r.find("title").text(),
                    u = r.find("instructions").text(),
                    a, f, l = [],
                    c = {
                        "text-private": "password",
                        "text-single": "textline",
                        "boolean": "checkbox",
                        hidden: "hidden",
                        "list-single": "dropdown"
                    };
                n.find("span.spinner").remove(), n.append(e("<legend>").text(s)), u != s && n.append(e("<p>").text(u));
                for (a = 0; a < i.length; a++) {
                    $field = e(i[a]);
                    if ($field.attr("type") == "list-single") {
                        l = [], $options = $field.find("option");
                        for (f = 0; f < $options.length; f++) l.push(this.select_option_template({
                            value: e($options[f]).find("value").text(),
                            label: e($options[f]).attr("label")
                        }));
                        n.append(this.form_select_template({
                            name: $field.attr("var"),
                            label: $field.attr("label"),
                            options: l.join("")
                        }))
                    } else $field.attr("type") == "boolean" ? n.append(this.form_checkbox_template({
                        name: $field.attr("var"),
                        type: c[$field.attr("type")],
                        label: $field.attr("label") || "",
                        checked: $field.find("value").text() === "1" && 'checked="1"' || ""
                    })) : n.append(this.form_input_template({
                        name: $field.attr("var"),
                        type: c[$field.attr("type")],
                        label: $field.attr("label") || "",
                        value: $field.find("value").text()
                    }))
                }
                n.append('<input type="submit" value="' + o("Save") + '"/>'), n.append('<input type="button" value="' + o("Cancel") + '"/>'), n.on("submit", e.proxy(this.saveConfiguration, this)), n.find("input[type=button]").on("click", e.proxy(this.cancelConfiguration, this))
            },
            field_template: t.template('<field var="{{name}}"><value>{{value}}</value></field>'),
            saveConfiguration: function(t) {
                t.preventDefault();
                var n = this,
                    r = e(t.target).find(":input:not([type=button]):not([type=submit])"),
                    i = r.length,
                    o = [];
                r.each(function() {
                    var t = e(this),
                        r;
                    t.is("[type=checkbox]") ? r = t.is(":checked") && 1 || 0 : r = t.val();
                    var u = e(n.field_template({
                        name: t.attr("name"),
                        value: r
                    }))[0];
                    o.push(u), --i || s.connection.muc.saveConfiguration(n.model.get("jid"), o, e.proxy(n.onConfigSaved, n), e.proxy(n.onErrorConfigSaved, n))
                }), this.$el.find("div.chatroom-form-container").hide(function() {
                    e(this).remove(), n.$el.find(".chat-area").show(), n.$el.find(".participants").show()
                })
            },
            onConfigSaved: function(e) {},
            onErrorConfigSaved: function(e) {
                this.insertStatusNotification(o("An error occurred while trying to save the form."))
            },
            cancelConfiguration: function(t) {
                t.preventDefault();
                var n = this;
                this.$el.find("div.chatroom-form-container").hide(function() {
                    e(this).remove(), n.$el.find(".chat-area").show(), n.$el.find(".participants").show()
                })
            },
            configureChatRoom: function(t) {
                t.preventDefault();
                if (this.$el.find("div.chatroom-form-container").length) return;
                this.$el.find(".chat-area").hide(), this.$el.find(".participants").hide(), this.$el.find(".chat-body").append(e('<div class="chatroom-form-container"><form class="chatroom-form"><span class="spinner centered"/></form></div>')), s.connection.muc.configure(this.model.get("jid"), e.proxy(this.renderConfigurationForm, this))
            },
            submitPassword: function(e) {
                e.preventDefault();
                var t = this.$el.find(".chatroom-form").find("input[type=password]").val();
                this.$el.find(".chatroom-form-container").replaceWith('<span class="spinner centered"/>'), this.connect(t)
            },
            renderPasswordForm: function() {
                this.$el.find("span.centered.spinner").remove(), this.$el.find(".chat-body").append(e('<div class="chatroom-form-container"><form class="chatroom-form"><legend>' + o("This chatroom requires a password") + "</legend>" + "<label>" + o("Password: ") + '<input type="password" name="password"/></label>' + '<input type="submit" value="' + o("Submit") + "/>" + "</form>" + "</div>")), this.$el.find(".chatroom-form").on("submit", e.proxy(this.submitPassword, this))
            },
            showDisconnectMessage: function(t) {
                this.$el.find(".chat-area").remove(), this.$el.find(".participants").remove(), this.$el.find("span.centered.spinner").remove(), this.$el.find(".chat-body").append(e("<p>" + t + "</p>"))
            },
            infoMessages: {
                100: o("This room is not anonymous"),
                102: o("This room now shows unavailable members"),
                103: o("This room does not show unavailable members"),
                104: o("Non-privacy-related room configuration has changed"),
                170: o("Room logging is now enabled"),
                171: o("Room logging is now disabled"),
                172: o("This room is now non-anonymous"),
                173: o("This room is now semi-anonymous"),
                174: o("This room is now fully-anonymous"),
                201: o("A new room has been created"),
                210: o("Your nickname has been changed")
            },
            actionInfoMessages: {
                301: u("<strong>%1$s</strong> has been banned"),
                307: u("<strong>%1$s</strong> has been kicked out"),
                321: u("<strong>%1$s</strong> has been removed because of an affiliation change"),
                322: u("<strong>%1$s</strong> has been removed for not being a member")
            },
            disconnectMessages: {
                301: o("You have been banned from this room"),
                307: o("You have been kicked from this room"),
                321: o("You have been removed from this room because of an affiliation change"),
                322: o("You have been removed from this room because the room has changed to members-only and you're not a member"),
                332: o("You have been removed from this room because the MUC (Multi-user chat) service is being shut down.")
            },
            showStatusMessages: function(e, n) {
                var r = this.$el.find(".chat-content"),
                    i = e.find("status"),
                    s = [],
                    u = [],
                    a = [],
                    f, l;
                for (l = 0; l < i.length; l++) {
                    var c = i[l].getAttribute("code");
                    n ? t.contains(t.keys(this.disconnectMessages), c) && s.push(this.disconnectMessages[c]) : t.contains(t.keys(this.infoMessages), c) ? u.push(this.infoMessages[c]) : t.contains(t.keys(this.actionInfoMessages), c) && a.push(o(this.actionInfoMessages[c], Strophe.unescapeNode(Strophe.getResourceFromJid(e.attr("from")))))
                }
                if (s.length > 0) {
                    for (l = 0; l < s.length; l++) this.showDisconnectMessage(s[l]);
                    this.model.set("connected", !1);
                    return
                }
                this.renderChatArea();
                for (l = 0; l < u.length; l++) r.append(this.info_template({
                    message: u[l]
                }));
                for (l = 0; l < a.length; l++) r.append(this.info_template({
                    message: a[l]
                }));
                this.scrollDown()
            },
            showErrorMessage: function(e, t) {
                delete s.connection.muc[t.name], e.attr("type") == "auth" ? e.find("not-authorized").length ? this.renderPasswordForm() : e.find("registration-required").length ? this.showDisconnectMessage(o("You are not on the member list of this room")) : e.find("forbidden").length && this.showDisconnectMessage(o("You have been banned from this room")) : e.attr("type") == "modify" ? e.find("jid-malformed").length && this.showDisconnectMessage(o("No nickname was specified")) : e.attr("type") == "cancel" && (e.find("not-allowed").length ? this.showDisconnectMessage(o("You are not allowed to create new rooms")) : e.find("not-acceptable").length ? this.showDisconnectMessage(o("Your nickname doesn't conform to this room's policies")) : e.find("conflict").length ? this.showDisconnectMessage(o("Your nickname is already taken")) : e.find("item-not-found").length ? this.showDisconnectMessage(o("This room does not (yet) exist")) : e.find("service-unavailable").length && this.showDisconnectMessage(o("This room has reached it's maximum number of occupants")))
            },
            onChatRoomPresence: function(t, n) {
                var r = n.nick,
                    i = e(t),
                    o = i.attr("from"),
                    u = i.find("status[code='110']").length || o == n.name + "/" + Strophe.escapeNode(r),
                    a;
                if (i.attr("type") === "error") this.model.set("connected", !1), this.showErrorMessage(i.find("error"), n);
                else {
                    this.model.set("connected", !0), this.showStatusMessages(i, u);
                    if (!this.model.get("connected")) return !0;
                    i.find("status[code='201']").length && s.connection.muc.createInstantRoom(n.name), u && (a = i.find("item"), a.length && a.attr("affiliation") == "owner" && this.$el.find("a.configure-chatroom-button").show(), i.find("status[code='210']").length && this.model.set({
                        nick: Strophe.getResourceFromJid(o)
                    }))
                }
                return !0
            },
            onChatRoomMessage: function(n) {
                var r = e(n),
                    i = r.children("body").text(),
                    u = r.attr("from"),
                    a = this.$el.find(".chat-content"),
                    f = Strophe.getResourceFromJid(u),
                    l = f && Strophe.unescapeNode(f) || "",
                    c = r.find("delay").length > 0,
                    h = r.children("subject").text(),
                    p, d, v, m, g, y, b;
                return c ? (b = r.find("delay").attr("stamp"), v = s.parseISO8601(b)) : v = new Date, g = a.find("time").map(function() {
                    return e(this).attr("datetime")
                }).get(), m = new Date(v.getTime()), m.setUTCHours(0, 0, 0, 0), y = s.toISOString(m), t.indexOf(g, y) == -1 && a.append(this.new_day_template({
                    isodate: y,
                    datestring: m.toString().substring(0, 15)
                })), this.showStatusMessages(r), h && (this.$el.find(".chatroom-topic").text(h).attr("title", h), a.append(this.info_template({
                    message: o("Topic set by %1$s to: %2$s", l, h)
                }))), i ? (this.appendMessage(a, {
                    message: i,
                    sender: l === this.model.get("nick") && "me" || "room",
                    fullname: l,
                    time: s.toISOString(v)
                }), this.scrollDown(), !0) : !0
            },
            occupant_template: t.template('<li class="{{role}}" {[ if (role === "moderator") { ]}title="' + o("This user is a moderator") + '"' + "{[ } ]}" + '{[ if (role === "participant") { ]}' + 'title="' + o("This user can send messages in this room") + '"' + "{[ } ]}" + '{[ if (role === "visitor") { ]}' + 'title="' + o("This user can NOT send messages in this room") + '"' + "{[ } ]}" + ">{{nick}}</li>"),
            onChatRoomRoster: function(e, n) {
                this.renderChatArea();
                var r = s.chatboxesview.views.controlbox,
                    i = t.size(e),
                    o = this.$el.find(".participant-list"),
                    u = [],
                    a = t.keys(e),
                    f;
                this.$el.find(".participant-list").empty();
                for (f = 0; f < i; f++) u.push(this.occupant_template({
                    role: e[a[f]].role,
                    nick: Strophe.unescapeNode(a[f])
                }));
                return o.append(u.join("")), !0
            }
        }), this.ChatBoxes = Backbone.Collection.extend({
            model: s.ChatBox,
            onConnected: function() {
                this.localStorage = new Backbone.LocalStorage(hex_sha1("converse.chatboxes-" + s.bare_jid)), this.get("controlbox") ? this.get("controlbox").save() : this.add({
                    id: "controlbox",
                    box_id: "controlbox"
                }), this.get("controlbox").set({
                    connected: !0
                }), s.connection.addHandler(e.proxy(function(e) {
                    return this.messageReceived(e), !0
                }, this), null, "message", "chat"), this.fetch({
                    add: !0,
                    success: e.proxy(function(e, n) {
                        t.include(t.pluck(n, "id"), "controlbox") && this.get("controlbox").set({
                            visible: !0
                        }).save()
                    }, this)
                })
            },
            messageReceived: function(t) {
                var n, r = e(t),
                    i = r.attr("from");
                if (i == s.connection.jid) return !0;
                var o = r.children("forwarded");
                o.length && (r = o.children("message"));
                var u = Strophe.getBareJidFromJid(i),
                    a = Strophe.getBareJidFromJid(r.attr("to")),
                    f, l, c;
                return u == s.bare_jid ? (n = a, f = Strophe.getResourceFromJid(r.attr("to"))) : (n = u, f = Strophe.getResourceFromJid(i)), l = this.get(n), c = s.roster.get(n), c ? (l || (l = this.create({
                    id: n,
                    jid: n,
                    fullname: c.get("fullname") || jid,
                    image_type: c.get("image_type"),
                    image: c.get("image"),
                    url: c.get("url")
                })), l.messageReceived(t), s.roster.addResource(n, f), !0) : !0
            }
        }), this.ChatBoxesView = Backbone.View.extend({
            el: "#collective-xmpp-chat-data",
            initialize: function() {
                this.views = {}, this.model.on("add", function(e) {
                    var t = this.views[e.get("id")];
                    t ? (delete t.model, t.model = e, t.initialize(), e.get("id") !== "controlbox" && t.$el.appendTo(this.$el)) : (e.get("chatroom") ? t = new s.ChatRoomView({
                        model: e
                    }) : e.get("box_id") === "controlbox" ? (t = new s.ControlBoxView({
                        model: e
                    }), t.render()) : t = new s.ChatBoxView({
                        model: e
                    }), this.views[e.get("id")] = t)
                }, this)
            },
            showChatBox: function(e) {
                var t = this.model.get(e.jid);
/*
                return t ? t.trigger("show") : t = this.model.create(e, {
                    error: function(e, t) {
                        s.log(t.responseText)
                    }
                }), t
*/
                if (t) {
                	// alert(room_label);
                	// alert(e.jid);
                	if (e.jid.index(room_label) >= 0)
                		t.trigger('show');
                } else {
                    t = this.model.create(e, {
                        'error': function (e, t) {
                            s.log(t.responseText);
                        }
                    });
                }
                return t;

            }
        }), this.RosterItem = Backbone.Model.extend({
            initialize: function(e, n) {
                var r = e.jid;
                e.fullname || (e.fullname = r);
                var i = t.extend({
                    id: r,
                    user_id: Strophe.getNodeFromJid(r),
                    resources: [],
                    status: ""
                }, e);
                i.sorted = !1, i.chat_status = "offline", this.set(i)
            }
        }), this.RosterItemView = Backbone.View.extend({
            tagName: "dd",
            events: {
                "click .accept-xmpp-request": "acceptRequest",
                "click .decline-xmpp-request": "declineRequest",
                "click .open-chat": "openChat",
                "click .remove-xmpp-contact": "removeContact"
            },
            openChat: function(e) {
                e.preventDefault(), s.chatboxesview.showChatBox({
                    id: this.model.get("jid"),
                    jid: this.model.get("jid"),
                    fullname: this.model.get("fullname"),
                    image_type: this.model.get("image_type"),
                    image: this.model.get("image"),
                    url: this.model.get("url"),
                    status: this.model.get("status")
                })
            },
            removeContact: function(e) {
                e.preventDefault();
                var t = confirm("Are you sure you want to remove this contact?");
                if (t === !0) {
                    var n = this.model.get("jid");
                    s.connection.roster.remove(n, function(e) {
                        s.connection.roster.unauthorize(n), s.rosterview.model.remove(n)
                    })
                }
            },
            acceptRequest: function(e) {
                var t = this.model.get("jid");
                s.connection.roster.authorize(t), s.connection.roster.add(t, this.model.get("fullname"), [], function(e) {
                    s.connection.roster.subscribe(t, null, s.xmppstatus.get("fullname"))
                }), e.preventDefault()
            },
            declineRequest: function(e) {
                e.preventDefault(), s.connection.roster.unauthorize(this.model.get("jid")), this.model.destroy()
            },
            template: t.template('<a class="open-chat" title="' + o("Click to chat with this contact") + '" href="#">' + '<span class="icon-{{ chat_status }}" title="{{ status_desc }}"></span>{{ fullname }}' + "</a>" + '<a class="remove-xmpp-contact icon-remove" title="' + o("Click to remove this contact") + '" href="#"></a>'),
            pending_template: t.template('<span>{{ fullname }}</span><a class="remove-xmpp-contact icon-remove" title="' + o("Click to remove this contact") + '" href="#"></a>'),
            request_template: t.template('<div>{{ fullname }}</div><button type="button" class="accept-xmpp-request">Accept</button><button type="button" class="decline-xmpp-request">Decline</button>'),
            render: function() {
                var e = this.model,
                    n = e.get("ask"),
                    r = e.get("subscription"),
                    i = ["current-xmpp-contact", "pending-xmpp-contact", "requesting-xmpp-contact"].concat(t.keys(a));
                t.each(i, function(e) {
                    this.el.className.indexOf(e) !== -1 && this.$el.removeClass(e)
                }, this), this.$el.addClass(e.get("chat_status"));
                if (n === "subscribe") this.$el.addClass("pending-xmpp-contact"), this.$el.html(this.pending_template(e.toJSON()));
                else if (n === "request") this.$el.addClass("requesting-xmpp-contact"), this.$el.html(this.request_template(e.toJSON())), s.showControlBox();
                else if (r === "both" || r === "to") this.$el.addClass("current-xmpp-contact"), this.$el.html(this.template(t.extend(e.toJSON(), {
                    status_desc: a[e.get("chat_status") || "offline"]
                })));
                return this
            }
        }), this.RosterItems = Backbone.Collection.extend({
            model: s.RosterItem,
            comparator: function(e) {
                var t = e.get("chat_status"),
                    n = 4;
                switch (t) {
                    case "offline":
                        n = 0;
                        break;
                    case "unavailable":
                        n = 1;
                        break;
                    case "xa":
                        n = 2;
                        break;
                    case "away":
                        n = 3;
                        break;
                    case "dnd":
                        n = 4;
                        break;
                    case "online":
                        n = 5
                }
                return n
            },
            subscribeToSuggestedItems: function(t) {
                return e(t).find("item").each(function() {
                    var t = e(this),
                        n = t.attr("jid"),
                        r = t.attr("action"),
                        i = t.attr("name");
                    r === "add" && s.connection.roster.add(n, i, [], function(e) {
                        s.connection.roster.subscribe(n, null, s.xmppstatus.get("fullname"))
                    })
                }), !0
            },
            isSelf: function(e) {
                return Strophe.getBareJidFromJid(e) === Strophe.getBareJidFromJid(s.connection.jid)
            },
            addResource: function(e, n) {
                var r = this.get(e),
                    i;
                r && (i = r.get("resources"), i ? t.indexOf(i, n) == -1 && (i.push(n), r.set({
                    resources: i
                })) : r.set({
                    resources: [n]
                }))
            },
            removeResource: function(e, n) {
                var r = this.get(e),
                    i, s;
                if (r) {
                    i = r.get("resources"), s = t.indexOf(i, n);
                    if (s !== -1) return i.splice(s, 1), r.set({
                        resources: i
                    }), i.length
                }
                return 0
            },
            subscribeBack: function(e) {
                var t = Strophe.getBareJidFromJid(e);
                s.connection.roster.findItem(t) ? (s.connection.roster.authorize(t), s.connection.roster.subscribe(e, null, s.xmppstatus.get("fullname"))) : s.connection.roster.add(e, "", [], function(n) {
                    s.connection.roster.authorize(t), s.connection.roster.subscribe(e, null, s.xmppstatus.get("fullname"))
                })
            },
            unsubscribe: function(e) {
                s.xmppstatus.sendPresence("unsubscribe"), s.connection.roster.findItem(e) && s.connection.roster.remove(e, function(t) {
                    s.rosterview.model.remove(e)
                })
            },
            getNumOnlineContacts: function() {
                var e = 0,
                    n = this.models,
                    r = n.length,
                    i;
                for (i = 0; i < r; i++) t.indexOf(["offline", "unavailable"], n[i].get("chat_status")) === -1 && e++;
                return e
            },
            cleanCache: function(e) {
                var n, r, i = [];
                for (r = 0; r < e.length; ++r) i.push(e[r].jid);
                for (r = 0; r < this.models.length; ++r) n = this.models[r].get("id"), t.indexOf(i, n) === -1 && this.get(n).destroy()
            },
            rosterHandler: function(e) {
                this.cleanCache(e), t.each(e, function(e, t, n) {
                    if (this.isSelf(e.jid)) return;
                    var r = this.get(e.jid);
                    if (!r) is_last = !1, t === n.length - 1 && (is_last = !0), this.create({
                        jid: e.jid,
                        subscription: e.subscription,
                        ask: e.ask,
                        fullname: e.name || e.jid,
                        is_last: is_last
                    });
                    else if (e.subscription === "none" && e.ask === null) r.destroy();
                    else if (r.get("subscription") !== e.subscription || r.get("ask") !== e.ask) r.set({
                        subscription: e.subscription,
                        ask: e.ask
                    }), r.save()
                }, this), s.initial_presence_sent || (s.initial_presence_sent = 1, s.xmppstatus.sendPresence())
            },
            handleIncomingSubscription: function(t) {
                var n = Strophe.getBareJidFromJid(t),
                    r = this.get(n);
                if (!s.allow_contact_requests) return s.connection.roster.unauthorize(n), !0;
                if (s.auto_subscribe)!r || r.get("subscription") != "to" ? this.subscribeBack(t) : s.connection.roster.authorize(n);
                else if (r && r.get("subscription") != "none") s.connection.roster.authorize(n);
                else {
                    if ( !! this.get(n)) return !0;
                    s.getVCard(n, e.proxy(function(e, t, r, i, o) {
                        this.add({
                            jid: n,
                            subscription: "none",
                            ask: "request",
                            fullname: t,
                            image: r,
                            image_type: i,
                            url: o,
                            vcard_updated: s.toISOString(new Date),
                            is_last: !0
                        })
                    }, this), e.proxy(function(e, t, r, i, o) {
                        s.log("Error while retrieving vcard"), this.add({
                            jid: n,
                            subscription: "none",
                            ask: "request",
                            fullname: e,
                            is_last: !0
                        })
                    }, this))
                }
                return !0
            },
            presenceHandler: function(t) {
                var n = e(t),
                    r = n.attr("type");
                if (r === "error") return !0;
                var i = n.attr("from"),
                    o = Strophe.getBareJidFromJid(i),
                    u = Strophe.getResourceFromJid(i),
                    a = n.find("show"),
                    f = a.text() || "online",
                    l = n.find("status"),
                    c;
                return this.isSelf(o) ? (s.connection.jid !== i && r !== "unavailable" && s.xmppstatus.save({
                    status: f
                }), !0) : (n.find("x").attr("xmlns") || "").indexOf(Strophe.NS.MUC) === 0 ? !0 : (c = this.get(o), c && l.text() != c.get("status") && c.save({
                    status: l.text()
                }), r === "subscribed" || r === "unsubscribe" ? !0 : r === "subscribe" ? this.handleIncomingSubscription(i) : (r === "unsubscribed" ? this.unsubscribe(o) : r === "unavailable" ? this.removeResource(o, u) === 0 && c && c.set({
                    chat_status: "offline"
                }) : c && (this.addResource(o, u), c.set({
                    chat_status: f
                })), !0))
            }
        }), this.RosterView = Backbone.View.extend({
            tagName: "dl",
            id: "converse-roster",
            rosteritemviews: {},
            requesting_contacts_template: t.template('<dt id="xmpp-contact-requests">' + o("Contact requests") + "</dt>"),
            contacts_template: t.template('<dt id="xmpp-contacts">' + o("My contacts") + "</dt>"),
            pending_contacts_template: t.template('<dt id="pending-xmpp-contacts">' + o("Pending contacts") + "</dt>"),
            initialize: function() {
                this.model.on("add", function(e) {
                    this.addRosterItemView(e).render(e), e.get("vcard_updated") || s.getVCard(e.get("jid"))
                }, this), this.model.on("change", function(e) {
                    if (t.size(e.changed) === 1 && t.contains(t.keys(e.changed), "sorted")) return;
                    this.updateChatBox(e).render(e)
                }, this), this.model.on("remove", function(e) {
                    this.removeRosterItemView(e)
                }, this), this.model.on("destroy", function(e) {
                    this.removeRosterItemView(e)
                }, this);
                var e = this.contacts_template();
                s.allow_contact_requests && (e = this.requesting_contacts_template() + e + this.pending_contacts_template()), this.$el.hide().html(e), this.model.fetch({
                    add: !0
                })
            },
            updateChatBox: function(e, n) {
                var r = s.chatboxes.get(e.get("jid")),
                    i = {};
                return r ? (t.has(e.changed, "chat_status") && (i.chat_status = e.get("chat_status")), t.has(e.changed, "status") && (i.status = e.get("status")), r.save(i), this) : this
            },
            addRosterItemView: function(e) {
                var t = new s.RosterItemView({
                    model: e
                });
                return this.rosteritemviews[e.id] = t, this
            },
            removeRosterItemView: function(e) {
                var t = this.rosteritemviews[e.id];
                return t && (t.$el.remove(), delete this.rosteritemviews[e.id], this.render()), this
            },
            renderRosterItem: function(t, n) {
                if (s.show_only_online_users && t.get("chat_status") !== "online") return n.$el.remove(), n.delegateEvents(), this;
                e.contains(document.documentElement, n.el) ? n.render() : this.$el.find("#xmpp-contacts").after(n.render().el)
            },
            render: function(n) {
                var r = this.$el.find("#xmpp-contacts"),
                    i = this.$el.find("#xmpp-contact-requests"),
                    s = this.$el.find("#pending-xmpp-contacts"),
                    o = !1,
                    u, a;
                if (n) {
                    var f = n.id,
                        l = this.rosteritemviews[n.id],
                        c = n.get("ask"),
                        h = n.get("subscription"),
                        p = {
                            order: "asc"
                        };
                    c === "subscribe" ? (s.after(l.render().el), s.after(s.siblings("dd.pending-xmpp-contact").tsort(p))) : c === "request" ? (i.after(l.render().el), i.after(i.siblings("dd.requesting-xmpp-contact").tsort(p))) : (h === "both" || h === "to") && this.renderRosterItem(n, l), a = n.changed.chat_status, a && (this.sortRoster(a), o = !0), n.get("is_last") && (o || this.sortRoster(n.get("chat_status")), this.$el.is(":visible") || this.$el.show())
                }
                return t.each([r, i, s], function(e) {
                    e.nextUntil("dt").length ? e.is(":visible") || e.show() : e.is(":visible") && e.hide()
                }), u = e("#online-count"), u.text("(" + this.model.getNumOnlineContacts() + ")"), u.is(":visible") || u.show(), this
            },
            sortRoster: function(e) {
                var t = this.$el.find("#xmpp-contacts");
                t.siblings("dd.current-xmpp-contact." + e).tsort("a", {
                    order: "asc"
                }), t.after(t.siblings("dd.current-xmpp-contact.offline")), t.after(t.siblings("dd.current-xmpp-contact.unavailable")), t.after(t.siblings("dd.current-xmpp-contact.xa")), t.after(t.siblings("dd.current-xmpp-contact.away")), t.after(t.siblings("dd.current-xmpp-contact.dnd")), t.after(t.siblings("dd.current-xmpp-contact.online"))
            }
        }), this.XMPPStatus = Backbone.Model.extend({
            initialize: function() {
                this.set({
                    status: this.get("status") || "online"
                }), this.on("change", e.proxy(function() {
                    this.get("fullname") === undefined && s.getVCard(null, e.proxy(function(e, t, n, r, i) {
                        this.save({
                            fullname: t
                        })
                    }, this))
                }, this))
            },
            sendPresence: function(e) {
                e === undefined && (e = this.get("status") || "online");
                var t = this.get("status_message"),
                    n;
                e === "unavailable" || e === "probe" || e === "error" || e === "unsubscribe" || e === "unsubscribed" || e === "subscribe" || e === "subscribed" ? n = $pres({
                    type: e
                }) : (e === "online" ? n = $pres() : n = $pres().c("show").t(e).up(), t && n.c("status").t(t)), s.connection.send(n)
            },
            setStatus: function(e) {
                this.sendPresence(e), this.save({
                    status: e
                })
            },
            setStatusMessage: function(t) {
                s.connection.send($pres().c("show").t(this.get("status")).up().c("status").t(t)), this.save({
                    status_message: t
                }), this.xhr_custom_status && e.ajax({
                    url: "set-custom-status",
                    type: "POST",
                    data: {
                        msg: t
                    }
                })
            }
        }), this.XMPPStatusView = Backbone.View.extend({
            el: "span#xmpp-status-holder",
            events: {
                "click a.choose-xmpp-status": "toggleOptions",
                "click #fancy-xmpp-status-select a.change-xmpp-status-message": "renderStatusChangeForm",
                "submit #set-custom-xmpp-status": "setStatusMessage",
                "click .dropdown dd ul li a": "setStatus"
            },
            toggleOptions: function(t) {
                t.preventDefault(), e(t.target).parent().parent().siblings("dd").find("ul").toggle("fast")
            },
            change_status_message_template: t.template('<form id="set-custom-xmpp-status"><input type="text" class="custom-xmpp-status" {{ status_message }}"placeholder="' + o("Custom status") + '"/>' + '<button type="submit">' + o("Save") + "</button>" + "</form>"),
            status_template: t.template('<div class="xmpp-status"><a class="choose-xmpp-status {{ chat_status }}" data-value="{{status_message}}" href="#" title="' + o("Click to change your chat status") + '">' + '<span class="icon-{{ chat_status }}"></span>' + "{{ status_message }}" + "</a>" + '<a class="change-xmpp-status-message icon-pencil" href="#" title="' + o("Click here to write a custom status message") + '"></a>' + "</div>"),
            renderStatusChangeForm: function(e) {
                e.preventDefault();
                var t = this.model.get("status") || "offline",
                    n = this.change_status_message_template({
                        status_message: t
                    });
                this.$el.find(".xmpp-status").replaceWith(n), this.$el.find(".custom-xmpp-status").focus().focus()
            },
            setStatusMessage: function(t) {
                t.preventDefault();
                var n = e(t.target).find("input").val();
                n === "", this.model.setStatusMessage(n)
            },
            setStatus: function(t) {
                t.preventDefault();
                var n = e(t.target),
                    r = n.attr("data-value");
                this.model.setStatus(r), this.$el.find(".dropdown dd ul").hide()
            },
            getPrettyStatus: function(e) {
                return e === "chat" ? pretty_status = o("online") : e === "dnd" ? pretty_status = o("busy") : e === "xa" ? pretty_status = o("away for long") : e === "away" ? pretty_status = o("away") : pretty_status = o(e) || o("online"), pretty_status
            },
            updateStatusUI: function(e) {
                if (!t.has(e.changed, "status") && !t.has(e.changed, "status_message")) return;
                var n = e.get("status"),
                    r = e.get("status_message") || o("I am %1$s", this.getPrettyStatus(n));
                this.$el.find("#fancy-xmpp-status-select").html(this.status_template({
                    chat_status: n,
                    status_message: r
                }))
            },
            choose_template: t.template('<dl id="target" class="dropdown"><dt id="fancy-xmpp-status-select" class="fancy-dropdown"></dt><dd><ul class="xmpp-status-menu"></ul></dd></dl>'),
            option_template: t.template('<li><a href="#" class="{{ value }}" data-value="{{ value }}"><span class="icon-{{ value }}"></span>{{ text }}</a></li>'),
            initialize: function() {
                this.model.on("change", this.updateStatusUI, this)
            },
            render: function() {
                var t = this.$el.find("select#select-xmpp-status"),
                    n = this.model.get("status") || "offline",
                    r = e("option", t),
                    i, s = [],
                    u = this;
                return this.$el.html(this.choose_template()), this.$el.find("#fancy-xmpp-status-select").html(this.status_template({
                    status_message: this.model.get("status_message") || o("I am %1$s", this.getPrettyStatus(n)),
                    chat_status: n
                })), r.each(function() {
                    s.push(u.option_template({
                        value: e(this).val(),
                        text: this.text
                    }))
                }), i = this.$el.find("#target dd ul").hide(), i.append(s.join("")), t.remove(), this
            }
        }), this.Feature = Backbone.Model.extend(), this.Features = Backbone.Collection.extend({
            model: s.Feature,
            initialize: function() {
                this.localStorage = new Backbone.LocalStorage(hex_sha1("converse.features" + s.bare_jid)), this.localStorage.records.length === 0 ? (s.connection.disco.info(s.domain, null, e.proxy(this.onInfo, this)), s.connection.disco.items(s.domain, null, e.proxy(this.onItems, this))) : this.fetch({
                    add: !0
                })
            },
            onItems: function(t) {
                e(t).find("query item").each(e.proxy(function(t, n) {
                    s.connection.disco.info(e(n).attr("jid"), null, e.proxy(this.onInfo, this))
                }, this))
            },
            onInfo: function(t) {
                var n = e(t);
                if (n.find("identity[category=server][type=im]").length === 0 && n.find("identity[category=conference][type=text]").length === 0) return;
                n.find("feature").each(e.proxy(function(t, r) {
                    this.create({
                        "var": e(r).attr("var"),
                        from: n.attr("from")
                    })
                }, this))
            }
        }), this.LoginPanel = Backbone.View.extend({
            tagName: "div",
            id: "login-dialog",
            events: {
                "submit form#converse-login": "authenticate"
            },
            tab_template: t.template('<li><a class="current" href="#login">' + o("Sign in") + "</a></li>"),
            template: t.template('<form id="converse-login"><label>' + o("XMPP/Jabber Username:") + "</label>" + '<input type="username" name="jid">' + "<label>" + o("Password:") + "</label>" + '<input type="password" name="password">' + '<input class="login-submit" type="submit" value="' + o("Log In") + '">' + '</form">'),
            bosh_url_input: t.template("<label>" + o("BOSH Service URL:") + "</label>" + '<input type="text" id="bosh_service_url">'),
            connect: function(e, t, n) {
                e && e.find("input[type=submit]").hide().after('<span class="spinner login-submit"/>'), s.connection = new Strophe.Connection(s.bosh_service_url), s.connection.connect(t, n, s.onConnect)
            },
            showConnectButton: function() {
                var e = this.$el.find("#converse-login"),
                    t = e.find("input[type=submit]");
                t.length && t.show().siblings("span").remove()
            },
            initialize: function(e) {
                e.$parent.html(this.$el.html(this.template())), this.$tabs = e.$parent.parent().find("#controlbox-tabs"), this.model.on("connection-fail", function() {
                    this.showConnectButton()
                }, this), this.model.on("auth-fail", function() {
                    this.showConnectButton()
                }, this)
            },
            render: function() {
                return this.$tabs.append(this.tab_template()), this.$el.find("input#jid").focus(), this
            },
            authenticate: function(t) {
                var n = e(t.target),
                    r = n.find("input[name=jid]"),
                    i = r.val(),
                    o = n.find("input[name=password]"),
                    u = o.val(),
                    a = null,
                    f = !1;
                s.bosh_service_url || (a = n.find("input#bosh_service_url"), s.bosh_service_url = a.val(), s.bosh_service_url || (f = !0, a.addClass("error"))), i || (f = !0, r.addClass("error")), u || (f = !0, o.addClass("error"));
                if (f) return;
                return this.connect(n, i, u), !1
            },
            remove: function() {
                this.$tabs.empty(), this.$el.parent().empty()
            }
        });
        this.chatboxes = new this.ChatBoxes;
        // alert('chatboxes');
        this.chatboxesview = new this.ChatBoxesView({
            model: this.chatboxes
        });
        // alert('chatboxesview');
        e(".toggle-online-users").bind("click", e.proxy(function(e) {
            e.preventDefault(), this.toggleControlBox()
        }, this));
        // alert('toggleControlBox');
        if (this.prebind && !this.connection) {
            if (!this.jid || !this.sid || !this.rid || !this.bosh_service_url) {
                this.log("If you set prebind=true, you MUST supply JID, RID and SID values");
                return
            }
            this.connection = new Strophe.Connection(this.bosh_service_url);
            // alert('Connection');
            this.connection.attach(this.jid, this.sid, this.rid, this.onConnect);
            // alert('attach');
        } else {
        	this.connection && this.onConnected();
            // alert('onConnected');
        }
        // alert('before showControlBox');
        this.show_controlbox_by_default && this.showControlBox();
        // alert('after showControlBox');
    }, {
        initialize: function(e, t) {
            r.initialize(e, t)
        }
    }
}), require.config({
    paths: {
        jquery: "components/jquery/jquery",
        locales: "locale/locales",
        "jquery.tinysort": "components/tinysort/src/jquery.tinysort",
        underscore: "components/underscore/underscore",
        backbone: "components/backbone/backbone",
        "backbone.localStorage": "components/backbone.localStorage/backbone.localStorage",
        strophe: "components/strophe/strophe",
        "strophe.muc": "components/strophe.muc/index",
        "strophe.roster": "components/strophe.roster/index",
        "strophe.vcard": "components/strophe.vcard/index",
        "strophe.disco": "components/strophe.disco/index"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "jquery.tinysort": {
            deps: ["jquery"]
        },
        strophe: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        },
        "strophe.muc": {
            deps: ["strophe", "jquery"]
        },
        "strophe.roster": {
            deps: ["strophe"]
        },
        "strophe.vcard": {
            deps: ["strophe"]
        },
        "strophe.disco": {
            deps: ["strophe"]
        }
    }
}), require(["jquery", "converse"], function(e, t, n) {
    window.converse = n
}), define("main", function() {});
