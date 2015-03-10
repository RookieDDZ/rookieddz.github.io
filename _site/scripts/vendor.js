! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length,
      n = it.type(e);
    return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function r(e, t, n) {
    if (it.isFunction(t)) return it.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return it.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (dt.test(t)) return it.filter(t, e, n);
      t = it.filter(t, e)
    }
    return it.grep(e, function(e) {
      return it.inArray(e, t) >= 0 !== n
    })
  }

  function i(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function o(e) {
    var t = xt[e] = {};
    return it.each(e.match(bt) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function a() {
    pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
  }

  function s() {
    (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (a(), it.ready())
  }

  function u(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(kt, "-$1").toLowerCase();
      if (n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? it.parseJSON(n) : n
        } catch (i) {}
        it.data(e, t, n)
      } else n = void 0
    }
    return n
  }

  function l(e) {
    var t;
    for (t in e)
      if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function c(e, t, n, r) {
    if (it.acceptData(e)) {
      var i, o, a = it.expando,
        s = e.nodeType,
        u = s ? it.cache : e,
        l = s ? e[a] : e[a] && a;
      if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = V.pop() || it.guid++ : a), u[l] || (u[l] = s ? {} : {
        toJSON: it.noop
      }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = it.extend(u[l], t) : u[l].data = it.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
    }
  }

  function f(e, t, n) {
    if (it.acceptData(e)) {
      var r, i, o = e.nodeType,
        a = o ? it.cache : e,
        s = o ? e[it.expando] : it.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
          for (; i--;) delete r[t[i]];
          if (n ? !l(r) : !it.isEmptyObject(r)) return
        }(n || (delete a[s].data, l(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }

  function d() {
    return !0
  }

  function h() {
    return !1
  }

  function p() {
    try {
      return pt.activeElement
    } catch (e) {}
  }

  function g(e) {
    var t = Mt.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }

  function m(e, t) {
    var n, r, i = 0,
      o = typeof e.getElementsByTagName !== Et ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Et ? e.querySelectorAll(t || "*") : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, m(r, t));
    return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
  }

  function v(e) {
    jt.test(e.type) && (e.defaultChecked = e.checked)
  }

  function y(e, t) {
    return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function b(e) {
    return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
  }

  function x(e) {
    var t = Jt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function w(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
  }

  function T(e, t) {
    if (1 === t.nodeType && it.hasData(e)) {
      var n, r, i, o = it._data(e),
        a = it._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
      }
      a.data && (a.data = it.extend({}, a.data))
    }
  }

  function E(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
        i = it._data(t);
        for (r in i.events) it.removeEvent(t, r, i.handle);
        t.removeAttribute(it.expando)
      }
      "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }

  function C(t, n) {
    var r, i = it(n.createElement(t)).appendTo(n.body),
      o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
    return i.detach(), o
  }

  function k(e) {
    var t = pt,
      n = Zt[e];
    return n || (n = C(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Kt.detach()), Zt[e] = n), n
  }

  function N(e, t) {
    return {
      get: function() {
        var n = e();
        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function _(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--;)
      if (t = hn[i] + n, t in e) return t;
    return r
  }

  function S(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && St(r) && (o[a] = it._data(r, "olddisplay", k(r.nodeName)))) : (i = St(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    return e
  }

  function A(e, t, n) {
    var r = ln.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function j(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += it.css(e, n + _t[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + _t[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + _t[o] + "Width", !0, i))) : (a += it.css(e, "padding" + _t[o], !0, i), "padding" !== n && (a += it.css(e, "border" + _t[o] + "Width", !0, i)));
    return a
  }

  function D(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = en(e),
      a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
      r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function H(e, t, n, r, i) {
    return new H.prototype.init(e, t, n, r, i)
  }

  function L() {
    return setTimeout(function() {
      pn = void 0
    }), pn = it.now()
  }

  function O(e, t) {
    var n, r = {
        height: e
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _t[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function q(e, t, n) {
    for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function M(e, t, n) {
    var r, i, o, a, s, u, l, c, f = this,
      d = {},
      h = e.style,
      p = e.nodeType && St(e),
      g = it._data(e, "fxshow");
    n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
      s.unqueued || u()
    }), s.unqueued++, f.always(function() {
      f.always(function() {
        s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = it.css(e, "display"), c = "none" === l ? it._data(e, "olddisplay") || k(e.nodeName) : l, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function() {
      h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (i = t[r], mn.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          p = !0
        }
        d[r] = g && g[r] || it.style(e, r)
      } else l = void 0;
    if (it.isEmptyObject(d)) "inline" === ("none" === l ? k(e.nodeName) : l) && (h.display = l);
    else {
      g ? "hidden" in g && (p = g.hidden) : g = it._data(e, "fxshow", {}), o && (g.hidden = !p), p ? it(e).show() : f.done(function() {
        it(e).hide()
      }), f.done(function() {
        var t;
        it._removeData(e, "fxshow");
        for (t in d) it.style(e, t, d[t])
      });
      for (r in d) a = q(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function F(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function R(e, t, n) {
    var r, i, o = 0,
      a = bn.length,
      s = it.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = pn || L(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
      },
      l = s.promise({
        elem: e,
        props: it.extend({}, t),
        opts: it.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: pn || L(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (F(c, l.opts.specialEasing); a > o; o++)
      if (r = bn[o].call(l, e, c, l.opts)) return r;
    return it.map(c, q, l), it.isFunction(l.opts.start) && l.opts.start.call(e, l), it.fx.timer(it.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function $(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(bt) || [];
      if (it.isFunction(n))
        for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function B(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, it.each(e[s] || [], function(e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      a = e === zn;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function P(e, t) {
    var n, r, i = it.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && it.extend(!0, e, n), e
  }

  function I(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
      "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          u.unshift(a);
          break
        }
    if (u[0] in n) o = u[0];
    else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break
        }
        r || (r = a)
      }
      o = o || r
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function W(e, t, n, r) {
    var i, o, a, s, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (a = l[u + " " + o] || l["* " + o], !a)
        for (i in l)
          if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break
          }
      if (a !== !0)
        if (a && e["throws"]) t = a(t);
        else try {
          t = a(t)
        } catch (f) {
          return {
            state: "parsererror",
            error: a ? f : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function z(e, t, n, r) {
    var i;
    if (it.isArray(t)) it.each(t, function(t, i) {
      n || Vn.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== it.type(t)) r(e, t);
    else
      for (i in t) z(e + "[" + i + "]", t[i], n, r)
  }

  function X() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function U() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function J(e) {
    return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var V = [],
    G = V.slice,
    Y = V.concat,
    Q = V.push,
    K = V.indexOf,
    Z = {},
    et = Z.toString,
    tt = Z.hasOwnProperty,
    nt = {},
    rt = "1.11.1",
    it = function(e, t) {
      return new it.fn.init(e, t)
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    st = /-([\da-z])/gi,
    ut = function(e, t) {
      return t.toUpperCase()
    };
  it.fn = it.prototype = {
    jquery: rt,
    constructor: it,
    selector: "",
    length: 0,
    toArray: function() {
      return G.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
    },
    pushStack: function(e) {
      var t = it.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return it.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(it.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(G.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Q,
    sort: V.sort,
    splice: V.splice
  }, it.extend = it.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
      if (null != (i = arguments[s]))
        for (r in i) e = a[r], n = i[r], a !== n && (l && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(l, o, n)) : void 0 !== n && (a[r] = n));
    return a
  }, it.extend({
    expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === it.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === it.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !it.isArray(e) && e - parseFloat(e) >= 0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
      try {
        if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      if (nt.ownLast)
        for (t in e) return tt.call(e, t);
      for (t in e);
      return void 0 === t || tt.call(e, t)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
    },
    globalEval: function(t) {
      t && it.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(at, "ms-").replace(st, ut)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, r) {
      var i, o = 0,
        a = e.length,
        s = n(e);
      if (r) {
        if (s)
          for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
        else
          for (o in e)
            if (i = t.apply(e[o], r), i === !1) break
      } else if (s)
        for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
      else
        for (o in e)
          if (i = t.call(e[o], o, e[o]), i === !1) break; return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(ot, "")
    },
    makeArray: function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (K) return K.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
          if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
      if (n !== n)
        for (; void 0 !== t[r];) e[i++] = t[r++];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
      return i
    },
    map: function(e, t, r) {
      var i, o = 0,
        a = e.length,
        s = n(e),
        u = [];
      if (s)
        for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
      else
        for (o in e) i = t(e[o], o, r), null != i && u.push(i);
      return Y.apply([], u)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = G.call(arguments, 2), r = function() {
        return e.apply(t || this, n.concat(G.call(arguments)))
      }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
    },
    now: function() {
      return +new Date
    },
    support: nt
  }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    Z["[object " + t + "]"] = t.toLowerCase()
  });
  var lt = function(e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, l, f, h, p, g;
      if ((t ? t.ownerDocument || t : B) !== H && D(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (O && !r) {
        if (i = yt.exec(e))
          if (a = i[1]) {
            if (9 === s) {
              if (o = t.getElementById(a), !o || !o.parentNode) return n;
              if (o.id === a) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
          } else {
            if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
            if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
          }
        if (w.qsa && (!q || !q.test(e))) {
          if (h = f = $, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (l = k(e), (f = t.getAttribute("id")) ? h = f.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
            p = bt.test(e) && c(t.parentNode) || t, g = l.join(",")
          }
          if (g) try {
            return Z.apply(n, p.querySelectorAll(g)), n
          } catch (m) {} finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return _(e.replace(ut, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[$] = !0, e
    }

    function i(e) {
      var t = H.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
    }

    function a(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && typeof e.getElementsByTagName !== J && e
    }

    function f() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function h(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = I++;
      return t.first ? function(t, n, o) {
        for (; t = t[r];)
          if (1 === t.nodeType || i) return e(t, n, o)
      } : function(t, n, a) {
        var s, u, l = [P, o];
        if (a) {
          for (; t = t[r];)
            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || i) {
              if (u = t[$] || (t[$] = {}), (s = u[r]) && s[0] === P && s[1] === o) return l[2] = s[2];
              if (u[r] = l, l[2] = e(t, n, a)) return !0
            }
      }
    }

    function p(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r
    }

    function m(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a
    }

    function v(e, t, n, i, o, a) {
      return i && !i[$] && (i = v(i)), o && !o[$] && (o = v(o, a)), r(function(r, a, s, u) {
        var l, c, f, d = [],
          h = [],
          p = a.length,
          v = r || g(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !r && t ? v : m(v, d, e, s, u),
          b = n ? o || (r ? e : p || i) ? [] : a : y;
        if (n && n(y, b, s, u), i)
          for (l = m(b, h), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[h[c]] = !(y[h[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
              o(null, b = [], l, u)
            }
            for (c = b.length; c--;)(f = b[c]) && (l = o ? tt.call(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
          }
        } else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : Z.apply(a, b)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = h(function(e) {
          return e === t
        }, a, !0), l = h(function(e) {
          return tt.call(t, e) > -1
        }, a, !0), c = [function(e, n, r) {
          return !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
        }]; i > s; s++)
        if (n = T.relative[e[s].type]) c = [h(p(c), n)];
        else {
          if (n = T.filter[e[s].type].apply(null, e[s].matches), n[$]) {
            for (r = ++s; i > r && !T.relative[e[r].type]; r++);
            return v(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
          }
          c.push(n)
        }
      return p(c)
    }

    function b(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function(r, a, s, u, l) {
          var c, f, d, h = 0,
            p = "0",
            g = r && [],
            v = [],
            y = S,
            b = r || o && T.find.TAG("*", l),
            x = P += null == y ? 1 : Math.random() || .1,
            w = b.length;
          for (l && (S = a !== H && a); p !== w && null != (c = b[p]); p++) {
            if (o && c) {
              for (f = 0; d = e[f++];)
                if (d(c, a, s)) {
                  u.push(c);
                  break
                }
              l && (P = x)
            }
            i && ((c = !d && c) && h--, r && g.push(c))
          }
          if (h += p, i && p !== h) {
            for (f = 0; d = n[f++];) d(g, v, a, s);
            if (r) {
              if (h > 0)
                for (; p--;) g[p] || v[p] || (v[p] = Q.call(u));
              v = m(v)
            }
            Z.apply(u, v), l && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
          }
          return l && (P = x, S = y), g
        };
      return i ? r(a) : a
    }
    var x, w, T, E, C, k, N, _, S, A, j, D, H, L, O, q, M, F, R, $ = "sizzle" + -new Date,
      B = e.document,
      P = 0,
      I = 0,
      W = n(),
      z = n(),
      X = n(),
      U = function(e, t) {
        return e === t && (j = !0), 0
      },
      J = "undefined",
      V = 1 << 31,
      G = {}.hasOwnProperty,
      Y = [],
      Q = Y.pop,
      K = Y.push,
      Z = Y.push,
      et = Y.slice,
      tt = Y.indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
          if (this[t] === e) return t;
        return -1
      },
      nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      rt = "[\\x20\\t\\r\\n\\f]",
      it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ot = it.replace("w", "w#"),
      at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
      st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
      ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
      lt = new RegExp("^" + rt + "*," + rt + "*"),
      ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
      ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
      dt = new RegExp(st),
      ht = new RegExp("^" + ot + "$"),
      pt = {
        ID: new RegExp("^#(" + it + ")"),
        CLASS: new RegExp("^\\.(" + it + ")"),
        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + at),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + nt + ")$", "i"),
        needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
      },
      gt = /^(?:input|select|textarea|button)$/i,
      mt = /^h\d$/i,
      vt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      bt = /[+~]/,
      xt = /'|\\/g,
      wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
      Tt = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      };
    try {
      Z.apply(Y = et.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
    } catch (Et) {
      Z = {
        apply: Y.length ? function(e, t) {
          K.apply(e, et.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, C = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, D = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e : B,
        r = n.defaultView;
      return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, L = n.documentElement, O = !C(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
        D()
      }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
        D()
      })), w.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), w.getById = i(function(e) {
        return L.appendChild(e).id = $, !n.getElementsByName || !n.getElementsByName($).length
      }), w.getById ? (T.find.ID = function(e, t) {
        if (typeof t.getElementById !== J && O) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, T.filter.ID = function(e) {
        var t = e.replace(wt, Tt);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete T.find.ID, T.filter.ID = function(e) {
        var t = e.replace(wt, Tt);
        return function(e) {
          var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
        return typeof t.getElementsByTagName !== J ? t.getElementsByTagName(e) : void 0
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
        return typeof t.getElementsByClassName !== J && O ? t.getElementsByClassName(e) : void 0
      }, M = [], q = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || q.push(":checked")
      }), i(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
      })), (w.matchesSelector = vt.test(F = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
        w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", st)
      }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(L.compareDocumentPosition), R = t || vt.test(L.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, U = t ? function(e, t) {
        if (e === t) return j = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === B && R(B, e) ? -1 : t === n || t.ownerDocument === B && R(B, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & r ? -1 : 1)
      } : function(e, t) {
        if (e === t) return j = !0, 0;
        var r, i = 0,
          o = e.parentNode,
          s = t.parentNode,
          u = [e],
          l = [t];
        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
        if (o === s) return a(e, t);
        for (r = e; r = r.parentNode;) u.unshift(r);
        for (r = t; r = r.parentNode;) l.unshift(r);
        for (; u[i] === l[i];) i++;
        return i ? a(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
      }, n) : H
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== H && D(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !O || M && M.test(n) || q && q.test(n))) try {
        var r = F.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (i) {}
      return t(n, H, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== H && D(e), R(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== H && D(e);
      var n = T.attrHandle[t.toLowerCase()],
        r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        r = 0,
        i = 0;
      if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return A = null, e
    }, E = t.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else
        for (; t = e[r++];) n += E(t);
      return n
    }, T = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: pt,
      attrHandle: {},
      find: {},
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
          return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(wt, Tt).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && W(e, function(e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              y = !u && !s;
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = t; f = f[g];)
                    if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  p = g = "only" === e && !p && "nextSibling"
                }
                return !0
              }
              if (p = [a ? m.firstChild : m.lastChild], a && y) {
                for (c = m[$] || (m[$] = {}), l = c[e] || [], h = l[0] === P && l[1], d = l[0] === P && l[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
                  if (1 === f.nodeType && ++d && f === t) {
                    c[e] = [P, h, d];
                    break
                  }
              } else if (y && (l = (t[$] || (t[$] = {}))[e]) && l[0] === P) d = l[1];
              else
                for (;
                  (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[$] || (f[$] = {}))[e] = [P, d]), f !== t)););
              return d -= i, d === r || d % r === 0 && d / r >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[$] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
          }) : function(e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = N(e.replace(ut, "$1"));
          return i[$] ? r(function(e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), !n.pop()
          }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
          }
        }),
        lang: r(function(e) {
          return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
              while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === L
        },
        focus: function(e) {
          return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !T.pseudos.empty(e)
        },
        header: function(e) {
          return mt.test(e.nodeName)
        },
        input: function(e) {
          return gt.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: l(function() {
          return [0]
        }),
        last: l(function(e, t) {
          return [t - 1]
        }),
        eq: l(function(e, t, n) {
          return [0 > n ? n + t : n]
        }),
        even: l(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: l(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, T.pseudos.nth = T.pseudos.eq;
    for (x in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) T.pseudos[x] = s(x);
    for (x in {
        submit: !0,
        reset: !0
      }) T.pseudos[x] = u(x);
    return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
      var r, i, o, a, s, u, l, c = z[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, u = [], l = T.preFilter; s;) {
        (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(ut, " ")
        }), s = s.slice(r.length));
        for (a in T.filter) !(i = pt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
          value: r,
          type: a,
          matches: i
        }), s = s.slice(r.length));
        if (!r) break
      }
      return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
    }, N = t.compile = function(e, t) {
      var n, r = [],
        i = [],
        o = X[e + " "];
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[$] ? r.push(o) : i.push(o);
        o = X(e, b(i, r)), o.selector = e
      }
      return o
    }, _ = t.select = function(e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        f = !r && k(e = l.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
          if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
          if ((u = T.find[s]) && (r = u(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
            break
          }
      }
      return (l || N(e, f))(r, t, !O, n, bt.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = $.split("").sort(U).join("") === $, w.detectDuplicates = !!j, D(), w.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(H.createElement("div"))
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), i(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(nt, function(e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
  var ct = it.expr.match.needsContext,
    ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^.[^:#\[\.,]*$/;
  it.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, it.fn.extend({
    find: function(e) {
      var t, n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
        for (t = 0; i > t; t++)
          if (it.contains(r[t], this)) return !0
      }));
      for (t = 0; i > t; t++) it.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function(e) {
      return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
    }
  });
  var ht, pt = e.document,
    gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    mt = it.fn.init = function(e, t) {
      var n, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)), ft.test(n[1]) && it.isPlainObject(t))
            for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        if (r = pt.getElementById(n[2]), r && r.parentNode) {
          if (r.id !== n[2]) return ht.find(e);
          this.length = 1, this[0] = r
        }
        return this.context = pt, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
    };
  mt.prototype = it.fn, ht = it(pt);
  var vt = /^(?:parents|prev(?:Until|All))/,
    yt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  it.extend({
    dir: function(e, t, n) {
      for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
      return r
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), it.fn.extend({
    has: function(e) {
      var t, n = it(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++)
          if (it.contains(this, n[t])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
            o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? it.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), it.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return it.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return it.dir(e, "parentNode", n)
    },
    next: function(e) {
      return i(e, "nextSibling")
    },
    prev: function(e) {
      return i(e, "previousSibling")
    },
    nextAll: function(e) {
      return it.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return it.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return it.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return it.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return it.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return it.sibling(e.firstChild)
    },
    contents: function(e) {
      return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
    }
  }, function(e, t) {
    it.fn[e] = function(n, r) {
      var i = it.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
    }
  });
  var bt = /\S+/g,
    xt = {};
  it.Callbacks = function(e) {
    e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
    var t, n, r, i, a, s, u = [],
      l = !e.once && [],
      c = function(o) {
        for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
          if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break
          }
        t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : f.disable())
      },
      f = {
        add: function() {
          if (u) {
            var r = u.length;
            ! function o(t) {
              it.each(t, function(t, n) {
                var r = it.type(n);
                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
              })
            }(arguments), t ? i = u.length : n && (s = r, c(n))
          }
          return this
        },
        remove: function() {
          return u && it.each(arguments, function(e, n) {
            for (var r;
              (r = it.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
          }), this
        },
        has: function(e) {
          return e ? it.inArray(e, u) > -1 : !(!u || !u.length)
        },
        empty: function() {
          return u = [], i = 0, this
        },
        disable: function() {
          return u = l = n = void 0, this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          return l = void 0, n || f.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, n) {
          return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
        },
        fire: function() {
          return f.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return f
  }, it.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", it.Callbacks("once memory"), "resolved"],
          ["reject", "fail", it.Callbacks("once memory"), "rejected"],
          ["notify", "progress", it.Callbacks("memory")]
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
            return it.Deferred(function(n) {
              it.each(t, function(t, o) {
                var a = it.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = a && a.apply(this, arguments);
                  e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? it.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, it.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = G.call(arguments),
        a = o.length,
        s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
        u = 1 === s ? e : it.Deferred(),
        l = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? G.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
          }
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
      return s || u.resolveWith(r, o), u.promise()
    }
  });
  var wt;
  it.fn.ready = function(e) {
    return it.ready.promise().done(e), this
  }, it.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? it.readyWait++ : it.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--it.readyWait : !it.isReady) {
        if (!pt.body) return setTimeout(it.ready);
        it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(pt, [it]), it.fn.triggerHandler && (it(pt).triggerHandler("ready"), it(pt).off("ready")))
      }
    }
  }), it.ready.promise = function(t) {
    if (!wt)
      if (wt = it.Deferred(), "complete" === pt.readyState) setTimeout(it.ready);
      else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
    else {
      pt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
      var n = !1;
      try {
        n = null == e.frameElement && pt.documentElement
      } catch (r) {}
      n && n.doScroll && ! function i() {
        if (!it.isReady) {
          try {
            n.doScroll("left")
          } catch (e) {
            return setTimeout(i, 50)
          }
          a(), it.ready()
        }
      }()
    }
    return wt.promise(t)
  };
  var Tt, Et = "undefined";
  for (Tt in it(nt)) break;
  nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function() {
      var e, t, n, r;
      n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function() {
      var e = pt.createElement("div");
      if (null == nt.deleteExpando) {
        nt.deleteExpando = !0;
        try {
          delete e.test
        } catch (t) {
          nt.deleteExpando = !1
        }
      }
      e = null
    }(), it.acceptData = function(e) {
      var t = it.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
  var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    kt = /([A-Z])/g;
  it.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !l(e)
    },
    data: function(e, t, n) {
      return c(e, t, n)
    },
    removeData: function(e, t) {
      return f(e, t)
    },
    _data: function(e, t, n) {
      return c(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return f(e, t, !0)
    }
  }), it.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), u(o, r, i[r])));
          it._data(o, "parsedAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        it.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        it.data(this, e, t)
      }) : o ? u(o, e, it.data(o, e)) : void 0
    },
    removeData: function(e) {
      return this.each(function() {
        it.removeData(this, e)
      })
    }
  }), it.extend({
    queue: function(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = it.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = it._queueHooks(e, t),
        a = function() {
          it.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return it._data(e, n) || it._data(e, n, {
        empty: it.Callbacks("once memory").add(function() {
          it._removeData(e, t + "queue"), it._removeData(e, n)
        })
      })
    }
  }), it.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = it.queue(this, e, t);
        it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        it.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = it.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _t = ["Top", "Right", "Bottom", "Left"],
    St = function(e, t) {
      return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
    },
    At = it.access = function(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === it.type(n)) {
        i = !0;
        for (s in n) it.access(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
          return l.call(it(e), n)
        })), t))
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    jt = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = pt.createElement("input"),
      t = pt.createElement("div"),
      n = pt.createDocumentFragment();
    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
        nt.noCloneEvent = !1
      }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
      nt.deleteExpando = !0;
      try {
        delete t.test
      } catch (r) {
        nt.deleteExpando = !1
      }
    }
  }(),
  function() {
    var t, n, r = pt.createElement("div");
    for (t in {
        submit: !0,
        change: !0,
        focusin: !0
      }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
    r = null
  }();
  var Dt = /^(?:input|select|textarea)$/i,
    Ht = /^key/,
    Lt = /^(?:mouse|pointer|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    qt = /^([^.]*)(?:\.(.+)|)$/;
  it.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, h, p, g, m = it._data(e);
      if (m) {
        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = it.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
            return typeof it === Et || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
          }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = qt.exec(t[s]) || [], h = g = o[1], p = (o[2] || "").split(".").sort(), h && (l = it.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = it.event.special[h] || {}, f = it.extend({
          type: h,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && it.expr.match.needsContext.test(i),
          namespace: p.join(".")
        }, u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), it.event.global[h] = !0);
        e = null
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, d, h, p, g, m = it.hasData(e) && it._data(e);
      if (m && (c = m.events)) {
        for (t = (t || "").match(bt) || [""], l = t.length; l--;)
          if (s = qt.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
            for (f = it.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
            u && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || it.removeEvent(e, h, m.handle), delete c[h])
          } else
            for (h in c) it.event.remove(e, h + t[l], n, r, !0);
        it.isEmptyObject(c) && (delete m.handle, it._removeData(e, "events"))
      }
    },
    trigger: function(t, n, r, i) {
      var o, a, s, u, l, c, f, d = [r || pt],
        h = tt.call(t, "type") ? t.type : t,
        p = tt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = c = r = r || pt, 3 !== r.nodeType && 8 !== r.nodeType && !Ot.test(h + it.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[it.expando] ? t : new it.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), l = it.event.special[h] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
        if (!i && !l.noBubble && !it.isWindow(r)) {
          for (u = l.delegateType || h, Ot.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
          c === (r.ownerDocument || pt) && d.push(c.defaultView || c.parentWindow || e)
        }
        for (f = 0;
          (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || h, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && it.acceptData(r) && a && r[h] && !it.isWindow(r)) {
          c = r[a], c && (r[a] = null), it.event.triggered = h;
          try {
            r[h]()
          } catch (g) {}
          it.event.triggered = void 0, c && (r[a] = c)
        }
        return t.result
      }
    },
    dispatch: function(e) {
      e = it.event.fix(e);
      var t, n, r, i, o, a = [],
        s = G.call(arguments),
        u = (it._data(this, "events") || {})[e.type] || [],
        l = it.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (a = it.event.handlers.call(this, e, u), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, o = 0;
            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(u) >= 0 : it.find(n, this, null, [u]).length), i[n] && i.push(r);
            i.length && a.push({
              elem: u,
              handlers: i
            })
          }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a
    },
    fix: function(e) {
      if (e[it.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Lt.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || pt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, o = t.button,
          a = t.fromElement;
        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || pt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== p() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === p() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return it.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = it.extend(new it.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, it.removeEvent = pt.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === Et && (e[r] = null), e.detachEvent(r, n))
  }, it.Event = function(e, t) {
    return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
  }, it.Event.prototype = {
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, it.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    it.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), nt.submitBubbles || (it.event.special.submit = {
    setup: function() {
      return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target,
          n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
        n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), it._data(n, "submitBubbles", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
    }
  }), nt.changeBubbles || (it.event.special.change = {
    setup: function() {
      return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), it.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
      })), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Dt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
        }), it._data(t, "changeBubbles", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return it.event.remove(this, "._change"), !Dt.test(this.nodeName)
    }
  }), nt.focusinBubbles || it.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      it.event.simulate(t, e.target, it.event.fix(e), !0)
    };
    it.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = it._data(r, t);
        i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = it._data(r, t) - 1;
        i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
      }
    }
  }), it.fn.extend({
    on: function(e, t, n, r, i) {
      var o, a;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (o in e) this.on(o, t, n, e[o], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = h;
      else if (!r) return this;
      return 1 === i && (a = r, r = function(e) {
        return it().off(e), a.apply(this, arguments)
      }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
        it.event.add(this, e, r, n, t)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
        it.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        it.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? it.event.trigger(e, t, n, !0) : void 0
    }
  });
  var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ft = / jQuery\d+="(?:null|\d+)"/g,
    Rt = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
    $t = /^\s+/,
    Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Pt = /<([\w:]+)/,
    It = /<tbody/i,
    Wt = /<|&#?\w+;/,
    zt = /<(?:script|style|link)/i,
    Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ut = /^$|\/(?:java|ecma)script/i,
    Jt = /^true\/(.*)/,
    Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Gt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Yt = g(pt),
    Qt = Yt.appendChild(pt.createElement("div"));
  Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, it.extend({
    clone: function(e, t, n) {
      var r, i, o, a, s, u = it.contains(e.ownerDocument, e);
      if (nt.html5Clone || it.isXMLDoc(e) || !Rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
        for (r = m(o), s = m(e), a = 0; null != (i = s[a]); ++a) r[a] && E(i, r[a]);
      if (t)
        if (n)
          for (s = s || m(e), r = r || m(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
        else T(e, o);
      return r = m(o, "script"), r.length > 0 && w(r, !u && m(e, "script")), r = s = i = null, o
    },
    buildFragment: function(e, t, n, r) {
      for (var i, o, a, s, u, l, c, f = e.length, d = g(t), h = [], p = 0; f > p; p++)
        if (o = e[p], o || 0 === o)
          if ("object" === it.type(o)) it.merge(h, o.nodeType ? [o] : o);
          else if (Wt.test(o)) {
        for (s = s || d.appendChild(t.createElement("div")), u = (Pt.exec(o) || ["", ""])[1].toLowerCase(), c = Gt[u] || Gt._default, s.innerHTML = c[1] + o.replace(Bt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
        if (!nt.leadingWhitespace && $t.test(o) && h.push(t.createTextNode($t.exec(o)[0])), !nt.tbody)
          for (o = "table" !== u || It.test(o) ? "<table>" !== c[1] || It.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
        for (it.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
        s = d.lastChild
      } else h.push(t.createTextNode(o));
      for (s && d.removeChild(s), nt.appendChecked || it.grep(m(h, "input"), v), p = 0; o = h[p++];)
        if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = m(d.appendChild(o), "script"), a && w(s), n))
          for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
      return s = null, d
    },
    cleanData: function(e, t) {
      for (var n, r, i, o, a = 0, s = it.expando, u = it.cache, l = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
        if ((t || it.acceptData(n)) && (i = n[s], o = i && u[i])) {
          if (o.events)
            for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
          u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Et ? n.removeAttribute(s) : n[s] = null, V.push(i))
        }
    }
  }), it.fn.extend({
    text: function(e) {
      return At(this, function(e) {
        return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(m(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && it.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && it.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
        return it.clone(this, e, t)
      })
    },
    html: function(e) {
      return At(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
        if (!("string" != typeof e || zt.test(e) || !nt.htmlSerialize && Rt.test(e) || !nt.leadingWhitespace && $t.test(e) || Gt[(Pt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Bt, "<$1></$2>");
          try {
            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(m(t, !1)), t.innerHTML = e);
            t = 0
          } catch (i) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, it.cleanData(m(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = Y.apply([], e);
      var n, r, i, o, a, s, u = 0,
        l = this.length,
        c = this,
        f = l - 1,
        d = e[0],
        h = it.isFunction(d);
      if (h || l > 1 && "string" == typeof d && !nt.checkClone && Xt.test(d)) return this.each(function(n) {
        var r = c.eq(n);
        h && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
      });
      if (l && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (o = it.map(m(s, "script"), b), i = o.length; l > u; u++) r = s, u !== f && (r = it.clone(r, !0, !0), i && it.merge(o, m(r, "script"))), t.call(this[u], r, u);
        if (i)
          for (a = o[o.length - 1].ownerDocument, it.map(o, x), u = 0; i > u; u++) r = o[u], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Vt, "")));
        s = n = null
      }
      return this
    }
  }), it.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    it.fn[e] = function(e) {
      for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), Q.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var Kt, Zt = {};
  ! function() {
    var e;
    nt.shrinkWrapBlocks = function() {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return n = pt.getElementsByTagName("body")[0], n && n.style ? (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Et && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
    }
  }();
  var en, tn, nn = /^margin/,
    rn = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
    on = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (en = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tn = function(e, t, n) {
      var r, i, o, a, s = e.style;
      return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : pt.documentElement.currentStyle && (en = function(e) {
      return e.currentStyle
    }, tn = function(e, t, n) {
      var r, i, o, a, s = e.style;
      return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    }),
    function() {
      function t() {
        var t, n, r, i;
        n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), r = pt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
          width: "4px"
        }).width, i = t.appendChild(pt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
      }
      var n, r, i, o, a, s, u;
      n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
        reliableHiddenOffsets: function() {
          return null == s && t(), s
        },
        boxSizingReliable: function() {
          return null == a && t(), a
        },
        pixelPosition: function() {
          return null == o && t(), o
        },
        reliableMarginRight: function() {
          return null == u && t(), u
        }
      }))
    }(), it.swap = function(e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i
    };
  var an = /alpha\([^)]*\)/i,
    sn = /opacity\s*=\s*([^)]*)/,
    un = /^(none|table(?!-c[ea]).+)/,
    ln = new RegExp("^(" + Nt + ")(.*)$", "i"),
    cn = new RegExp("^([+-])=(" + Nt + ")", "i"),
    fn = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    dn = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    hn = ["Webkit", "O", "Moz", "ms"];
  it.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = tn(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": nt.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = it.camelCase(t),
          u = e.style;
        if (t = it.cssProps[s] || (it.cssProps[s] = _(u, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
          u[t] = n
        } catch (l) {}
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = it.camelCase(t);
      return t = it.cssProps[s] || (it.cssProps[s] = _(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in dn && (o = dn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
    }
  }), it.each(["height", "width"], function(e, t) {
    it.cssHooks[t] = {
      get: function(e, n, r) {
        return n ? un.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, fn, function() {
          return D(e, t, r)
        }) : D(e, t, r) : void 0
      },
      set: function(e, n, r) {
        var i = r && en(e);
        return A(e, n, r ? j(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), nt.opacity || (it.cssHooks.opacity = {
    get: function(e, t) {
      return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        r = e.currentStyle,
        i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
    }
  }), it.cssHooks.marginRight = N(nt.reliableMarginRight, function(e, t) {
    return t ? it.swap(e, {
      display: "inline-block"
    }, tn, [e, "marginRight"]) : void 0
  }), it.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    it.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + _t[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, nn.test(e) || (it.cssHooks[e + t].set = A)
  }), it.fn.extend({
    css: function(e, t) {
      return At(this, function(e, t, n) {
        var r, i, o = {},
          a = 0;
        if (it.isArray(t)) {
          for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return S(this, !0)
    },
    hide: function() {
      return S(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        St(this) ? it(this).show() : it(this).hide()
      })
    }
  }), it.Tween = H, H.prototype = {
    constructor: H,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = H.propHooks[this.prop];
      return e && e.get ? e.get(this) : H.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = H.propHooks[this.prop];
      return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
    }
  }, H.prototype.init.prototype = H.prototype, H.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, it.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, it.fx = H.prototype.init, it.fx.step = {};
  var pn, gn, mn = /^(?:toggle|show|hide)$/,
    vn = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
    yn = /queueHooks$/,
    bn = [M],
    xn = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = vn.exec(t),
          o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
          a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)),
          s = 1,
          u = 20;
        if (a && a[3] !== o) {
          o = o || a[3], i = i || [], a = +r || 1;
          do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };
  it.Animation = it.extend(R, {
      tweener: function(e, t) {
        it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
      },
      prefilter: function(e, t) {
        t ? bn.unshift(e) : bn.push(e)
      }
    }), it.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? it.extend({}, e) : {
        complete: n || !n && t || it.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !it.isFunction(t) && t
      };
      return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
      }, r
    }, it.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(St).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = it.isEmptyObject(e),
          o = it.speed(t, n, r),
          a = function() {
            var t = R(this, it.extend({}, e), o);
            (i || it._data(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = it.timers,
            a = it._data(this);
          if (i) a[i] && a[i].stop && r(a[i]);
          else
            for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          (t || !n) && it.dequeue(this, e)
        })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = it._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = it.timers,
            a = r ? r.length : 0;
          for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), it.each(["toggle", "show", "hide"], function(e, t) {
      var n = it.fn[t];
      it.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
      }
    }), it.each({
      slideDown: O("show"),
      slideUp: O("hide"),
      slideToggle: O("toggle"),
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
      it.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), it.timers = [], it.fx.tick = function() {
      var e, t = it.timers,
        n = 0;
      for (pn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
      t.length || it.fx.stop(), pn = void 0
    }, it.fx.timer = function(e) {
      it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
    }, it.fx.interval = 13, it.fx.start = function() {
      gn || (gn = setInterval(it.fx.tick, it.fx.interval))
    }, it.fx.stop = function() {
      clearInterval(gn), gn = null
    }, it.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, it.fn.delay = function(e, t) {
      return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    function() {
      var e, t, n, r, i;
      t = pt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = pt.createElement("select"), i = n.appendChild(pt.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = pt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
    }();
  var wn = /\r/g;
  it.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0]; {
        if (arguments.length) return r = it.isFunction(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
            return null == e ? "" : e + ""
          })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        });
        if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
      }
    }
  }), it.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = it.find.attr(e, "value");
          return null != t ? t : it.trim(it.text(e))
        }
      },
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
              if (t = it(n).val(), o) return t;
              a.push(t)
            }
          return a
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)
            if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
              r.selected = n = !0
            } catch (s) {
              r.scrollHeight
            } else r.selected = !1;
          return n || (e.selectedIndex = -1), i
        }
      }
    }
  }), it.each(["radio", "checkbox"], function() {
    it.valHooks[this] = {
      set: function(e, t) {
        return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
      }
    }, nt.checkOn || (it.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Tn, En, Cn = it.expr.attrHandle,
    kn = /^(?:checked|selected)$/i,
    Nn = nt.getSetAttribute,
    _n = nt.input;
  it.fn.extend({
    attr: function(e, t) {
      return At(this, it.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        it.removeAttr(this, e)
      })
    }
  }), it.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Et ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? En : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(bt);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? _n && Nn || !kn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(Nn ? n : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), En = {
    set: function(e, t, n) {
      return t === !1 ? it.removeAttr(e, n) : _n && Nn || !kn.test(n) ? e.setAttribute(!Nn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Cn[t] || it.find.attr;
    Cn[t] = _n && Nn || !kn.test(t) ? function(e, t, r) {
      var i, o;
      return r || (o = Cn[t], Cn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Cn[t] = o), i
    } : function(e, t, n) {
      return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
    }
  }), _n && Nn || (it.attrHooks.value = {
    set: function(e, t, n) {
      return it.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
    }
  }), Nn || (Tn = {
    set: function(e, t, n) {
      var r = e.getAttributeNode(n);
      return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
    }
  }, Cn.id = Cn.name = Cn.coords = function(e, t, n) {
    var r;
    return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
  }, it.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      return n && n.specified ? n.value : void 0
    },
    set: Tn.set
  }, it.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Tn.set(e, "" === t ? !1 : t, n)
    }
  }, it.each(["width", "height"], function(e, t) {
    it.attrHooks[t] = {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
      }
    }
  })), nt.style || (it.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  });
  var Sn = /^(?:input|select|textarea|button|object)$/i,
    An = /^(?:a|area)$/i;
  it.fn.extend({
    prop: function(e, t) {
      return At(this, it.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = it.propFix[e] || e, this.each(function() {
        try {
          this[e] = void 0, delete this[e]
        } catch (t) {}
      })
    }
  }), it.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, t, n) {
      var r, i, o, a = e.nodeType;
      if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = it.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Sn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
    it.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }), nt.optSelected || (it.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    it.propFix[this.toLowerCase()] = this
  }), nt.enctype || (it.propFix.enctype = "encoding");
  var jn = /[\t\r\n\f]/g;
  it.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, a, s = 0,
        u = this.length,
        l = "string" == typeof e && e;
      if (it.isFunction(e)) return this.each(function(t) {
        it(this).addClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(bt) || []; u > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            a = it.trim(r), n.className !== a && (n.className = a)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, a, s = 0,
        u = this.length,
        l = 0 === arguments.length || "string" == typeof e && e;
      if (it.isFunction(e)) return this.each(function(t) {
        it(this).removeClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(bt) || []; u > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
            for (o = 0; i = t[o++];)
              for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
            a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function(n) {
        it(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function() {
        if ("string" === n)
          for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else(n === Et || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    it.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), it.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var Dn = it.now(),
    Hn = /\?/,
    Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  it.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, r = null,
      i = it.trim(t + "");
    return i && !it.trim(i.replace(Ln, function(e, t, i, o) {
      return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
    })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
  }, it.parseXML = function(t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
    } catch (i) {
      n = void 0
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
  };
  var On, qn, Mn = /#.*$/,
    Fn = /([?&])_=[^&]*/,
    Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    $n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Bn = /^(?:GET|HEAD)$/,
    Pn = /^\/\//,
    In = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Wn = {},
    zn = {},
    Xn = "*/".concat("*");
  try {
    qn = location.href
  } catch (Un) {
    qn = pt.createElement("a"), qn.href = "", qn = qn.href
  }
  On = In.exec(qn.toLowerCase()) || [], it.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: qn,
      type: "GET",
      isLocal: $n.test(On[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": it.parseJSON,
        "text xml": it.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? P(P(e, it.ajaxSettings), t) : P(it.ajaxSettings, e)
    },
    ajaxPrefilter: $(Wn),
    ajaxTransport: $(zn),
    ajax: function(e, t) {
      function n(e, t, n, r) {
        var i, c, v, y, x, T = t;
        2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = I(f, w, n)), y = W(f, y, w, i), i ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? p.resolveWith(d, [c, T, w]) : p.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : v]), g.fireWith(d, [w, T]), u && (h.trigger("ajaxComplete", [w, f]), --it.active || it.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var r, i, o, a, s, u, l, c, f = it.ajaxSetup({}, t),
        d = f.context || f,
        h = f.context && (d.nodeType || d.jquery) ? it(d) : it.event,
        p = it.Deferred(),
        g = it.Callbacks("once memory"),
        m = f.statusCode || {},
        v = {},
        y = {},
        b = 0,
        x = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!c)
                for (c = {}; t = Rn.exec(a);) c[t[1].toLowerCase()] = t[2];
              t = c[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = y[n] = y[n] || e, v[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (f.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e) m[t] = [m[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || x;
            return l && l.abort(t), n(0, t), this
          }
        };
      if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || qn) + "").replace(Mn, "").replace(Pn, On[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = it.trim(f.dataType || "*").toLowerCase().match(bt) || [""], null == f.crossDomain && (r = In.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === On[1] && r[2] === On[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = it.param(f.data, f.traditional)), B(Wn, f, t, w), 2 === b) return w;
      u = f.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Bn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Hn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Fn.test(o) ? o.replace(Fn, "$1_=" + Dn++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Dn++)), f.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : f.accepts["*"]);
      for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
      if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
      x = "abort";
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        }) w[i](f[i]);
      if (l = B(zn, f, t, w)) {
        w.readyState = 1, u && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
          w.abort("timeout")
        }, f.timeout));
        try {
          b = 1, l.send(v, n)
        } catch (T) {
          if (!(2 > b)) throw T;
          n(-1, T)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function(e, t, n) {
      return it.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return it.get(e, void 0, t, "script")
    }
  }), it.each(["get", "post"], function(e, t) {
    it[t] = function(e, n, r, i) {
      return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    it.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), it._evalUrl = function(e) {
    return it.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, it.fn.extend({
    wrapAll: function(e) {
      if (it.isFunction(e)) return this.each(function(t) {
        it(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return this.each(it.isFunction(e) ? function(t) {
        it(this).wrapInner(e.call(this, t))
      } : function() {
        var t = it(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = it.isFunction(e);
      return this.each(function(n) {
        it(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
      }).end()
    }
  }), it.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
  }, it.expr.filters.visible = function(e) {
    return !it.expr.filters.hidden(e)
  };
  var Jn = /%20/g,
    Vn = /\[\]$/,
    Gn = /\r?\n/g,
    Yn = /^(?:submit|button|image|reset|file)$/i,
    Qn = /^(?:input|select|textarea|keygen)/i;
  it.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) z(n, e[n], t, i);
    return r.join("&").replace(Jn, "+")
  }, it.fn.extend({
    serialize: function() {
      return it.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = it.prop(this, "elements");
        return e ? it.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !it(this).is(":disabled") && Qn.test(this.nodeName) && !Yn.test(e) && (this.checked || !jt.test(e))
      }).map(function(e, t) {
        var n = it(this).val();
        return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Gn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Gn, "\r\n")
        }
      }).get()
    }
  }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
  } : X;
  var Kn = 0,
    Zn = {},
    er = it.ajaxSettings.xhr();
  e.ActiveXObject && it(e).on("unload", function() {
    for (var e in Zn) Zn[e](void 0, !0)
  }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
    if (!e.crossDomain || nt.cors) {
      var t;
      return {
        send: function(n, r) {
          var i, o = e.xhr(),
            a = ++Kn;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (i in e.xhrFields) o[i] = e.xhrFields[i];
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
          o.send(e.hasContent && e.data || null), t = function(n, i) {
            var s, u, l;
            if (t && (i || 4 === o.readyState))
              if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
              else {
                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                try {
                  u = o.statusText
                } catch (c) {
                  u = ""
                }
                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
              }
            l && r(s, u, l, o.getAllResponseHeaders())
          }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }
  }), it.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return it.globalEval(e), e
      }
    }
  }), it.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), it.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = pt.head || it("head")[0] || pt.documentElement;
      return {
        send: function(r, i) {
          t = pt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
          }, n.insertBefore(t, n.firstChild)
        },
        abort: function() {
          t && t.onload(void 0, !0)
        }
      }
    }
  });
  var tr = [],
    nr = /(=)\?(?=&|$)|\?\?/;
  it.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = tr.pop() || it.expando + "_" + Dn++;
      return this[e] = !0, e
    }
  }), it.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
    return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return a || it.error(i + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      a = arguments
    }, r.always(function() {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
    }), "script") : void 0
  }), it.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || pt;
    var r = ft.exec(e),
      i = !n && [];
    return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
  };
  var rr = it.fn.load;
  it.fn.load = function(e, t, n) {
    if ("string" != typeof e && rr) return rr.apply(this, arguments);
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: t
    }).done(function(e) {
      i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
    }).complete(n && function(e, t) {
      a.each(n, i || [e.responseText, t, e])
    }), this
  }, it.expr.filters.animated = function(e) {
    return it.grep(it.timers, function(t) {
      return e === t.elem
    }).length
  };
  var ir = e.document.documentElement;
  it.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, l, c = it.css(e, "position"),
        f = it(e),
        d = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = it.css(e, "top"), u = it.css(e, "left"), l = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
    }
  }, it.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        it.offset.setOffset(this, e, t)
      });
      var t, n, r = {
          top: 0,
          left: 0
        },
        i = this[0],
        o = i && i.ownerDocument;
      if (o) return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Et && (r = i.getBoundingClientRect()), n = J(o), {
        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : r
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          },
          r = this[0];
        return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - it.css(r, "marginTop", !0),
          left: t.left - n.left - it.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
        return e || ir
      })
    }
  }), it.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    it.fn[e] = function(r) {
      return At(this, function(e, r, i) {
        var o = J(e);
        return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
      }, e, r, arguments.length, null)
    }
  }), it.each(["top", "left"], function(e, t) {
    it.cssHooks[t] = N(nt.pixelPosition, function(e, n) {
      return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
    })
  }), it.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    it.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      it.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
          a = n || (r === !0 || i === !0 ? "margin" : "border");
        return At(this, function(t, n, r) {
          var i;
          return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), it.fn.size = function() {
    return this.length
  }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return it
  });
  var or = e.jQuery,
    ar = e.$;
  return it.noConflict = function(t) {
    return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
  }, typeof t === Et && (e.jQuery = e.$ = it), it
}),
function() {
  var e = this,
    t = e._,
    n = Array.prototype,
    r = Object.prototype,
    i = Function.prototype,
    o = n.push,
    a = n.slice,
    s = n.concat,
    u = r.toString,
    l = r.hasOwnProperty,
    c = Array.isArray,
    f = Object.keys,
    d = i.bind,
    h = function(e) {
      return e instanceof h ? e : this instanceof h ? void(this._wrapped = e) : new h(e)
    };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : e._ = h, h.VERSION = "1.7.0";
  var p = function(e, t, n) {
    if (void 0 === t) return e;
    switch (null == n ? 3 : n) {
      case 1:
        return function(n) {
          return e.call(t, n)
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r)
        };
      case 3:
        return function(n, r, i) {
          return e.call(t, n, r, i)
        };
      case 4:
        return function(n, r, i, o) {
          return e.call(t, n, r, i, o)
        }
    }
    return function() {
      return e.apply(t, arguments)
    }
  };
  h.iteratee = function(e, t, n) {
    return null == e ? h.identity : h.isFunction(e) ? p(e, t, n) : h.isObject(e) ? h.matches(e) : h.property(e)
  }, h.each = h.forEach = function(e, t, n) {
    if (null == e) return e;
    t = p(t, n);
    var r, i = e.length;
    if (i === +i)
      for (r = 0; i > r; r++) t(e[r], r, e);
    else {
      var o = h.keys(e);
      for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
    }
    return e
  }, h.map = h.collect = function(e, t, n) {
    if (null == e) return [];
    t = h.iteratee(t, n);
    for (var r, i = e.length !== +e.length && h.keys(e), o = (i || e).length, a = Array(o), s = 0; o > s; s++) r = i ? i[s] : s, a[s] = t(e[r], r, e);
    return a
  };
  var g = "Reduce of empty array with no initial value";
  h.reduce = h.foldl = h.inject = function(e, t, n, r) {
    null == e && (e = []), t = p(t, r, 4);
    var i, o = e.length !== +e.length && h.keys(e),
      a = (o || e).length,
      s = 0;
    if (arguments.length < 3) {
      if (!a) throw new TypeError(g);
      n = e[o ? o[s++] : s++]
    }
    for (; a > s; s++) i = o ? o[s] : s, n = t(n, e[i], i, e);
    return n
  }, h.reduceRight = h.foldr = function(e, t, n, r) {
    null == e && (e = []), t = p(t, r, 4);
    var i, o = e.length !== +e.length && h.keys(e),
      a = (o || e).length;
    if (arguments.length < 3) {
      if (!a) throw new TypeError(g);
      n = e[o ? o[--a] : --a]
    }
    for (; a--;) i = o ? o[a] : a, n = t(n, e[i], i, e);
    return n
  }, h.find = h.detect = function(e, t, n) {
    var r;
    return t = h.iteratee(t, n), h.some(e, function(e, n, i) {
      return t(e, n, i) ? (r = e, !0) : void 0
    }), r
  }, h.filter = h.select = function(e, t, n) {
    var r = [];
    return null == e ? r : (t = h.iteratee(t, n), h.each(e, function(e, n, i) {
      t(e, n, i) && r.push(e)
    }), r)
  }, h.reject = function(e, t, n) {
    return h.filter(e, h.negate(h.iteratee(t)), n)
  }, h.every = h.all = function(e, t, n) {
    if (null == e) return !0;
    t = h.iteratee(t, n);
    var r, i, o = e.length !== +e.length && h.keys(e),
      a = (o || e).length;
    for (r = 0; a > r; r++)
      if (i = o ? o[r] : r, !t(e[i], i, e)) return !1;
    return !0
  }, h.some = h.any = function(e, t, n) {
    if (null == e) return !1;
    t = h.iteratee(t, n);
    var r, i, o = e.length !== +e.length && h.keys(e),
      a = (o || e).length;
    for (r = 0; a > r; r++)
      if (i = o ? o[r] : r, t(e[i], i, e)) return !0;
    return !1
  }, h.contains = h.include = function(e, t) {
    return null == e ? !1 : (e.length !== +e.length && (e = h.values(e)), h.indexOf(e, t) >= 0)
  }, h.invoke = function(e, t) {
    var n = a.call(arguments, 2),
      r = h.isFunction(t);
    return h.map(e, function(e) {
      return (r ? t : e[t]).apply(e, n)
    })
  }, h.pluck = function(e, t) {
    return h.map(e, h.property(t))
  }, h.where = function(e, t) {
    return h.filter(e, h.matches(t))
  }, h.findWhere = function(e, t) {
    return h.find(e, h.matches(t))
  }, h.max = function(e, t, n) {
    var r, i, o = -1 / 0,
      a = -1 / 0;
    if (null == t && null != e) {
      e = e.length === +e.length ? e : h.values(e);
      for (var s = 0, u = e.length; u > s; s++) r = e[s], r > o && (o = r)
    } else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
      i = t(e, n, r), (i > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
    });
    return o
  }, h.min = function(e, t, n) {
    var r, i, o = 1 / 0,
      a = 1 / 0;
    if (null == t && null != e) {
      e = e.length === +e.length ? e : h.values(e);
      for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
    } else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
      i = t(e, n, r), (a > i || 1 / 0 === i && 1 / 0 === o) && (o = e, a = i)
    });
    return o
  }, h.shuffle = function(e) {
    for (var t, n = e && e.length === +e.length ? e : h.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = h.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
    return i
  }, h.sample = function(e, t, n) {
    return null == t || n ? (e.length !== +e.length && (e = h.values(e)), e[h.random(e.length - 1)]) : h.shuffle(e).slice(0, Math.max(0, t))
  }, h.sortBy = function(e, t, n) {
    return t = h.iteratee(t, n), h.pluck(h.map(e, function(e, n, r) {
      return {
        value: e,
        index: n,
        criteria: t(e, n, r)
      }
    }).sort(function(e, t) {
      var n = e.criteria,
        r = t.criteria;
      if (n !== r) {
        if (n > r || void 0 === n) return 1;
        if (r > n || void 0 === r) return -1
      }
      return e.index - t.index
    }), "value")
  };
  var m = function(e) {
    return function(t, n, r) {
      var i = {};
      return n = h.iteratee(n, r), h.each(t, function(r, o) {
        var a = n(r, o, t);
        e(i, r, a)
      }), i
    }
  };
  h.groupBy = m(function(e, t, n) {
    h.has(e, n) ? e[n].push(t) : e[n] = [t]
  }), h.indexBy = m(function(e, t, n) {
    e[n] = t
  }), h.countBy = m(function(e, t, n) {
    h.has(e, n) ? e[n] ++ : e[n] = 1
  }), h.sortedIndex = function(e, t, n, r) {
    n = h.iteratee(n, r, 1);
    for (var i = n(t), o = 0, a = e.length; a > o;) {
      var s = o + a >>> 1;
      n(e[s]) < i ? o = s + 1 : a = s
    }
    return o
  }, h.toArray = function(e) {
    return e ? h.isArray(e) ? a.call(e) : e.length === +e.length ? h.map(e, h.identity) : h.values(e) : []
  }, h.size = function(e) {
    return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
  }, h.partition = function(e, t, n) {
    t = h.iteratee(t, n);
    var r = [],
      i = [];
    return h.each(e, function(e, n, o) {
      (t(e, n, o) ? r : i).push(e)
    }), [r, i]
  }, h.first = h.head = h.take = function(e, t, n) {
    return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : a.call(e, 0, t)
  }, h.initial = function(e, t, n) {
    return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
  }, h.last = function(e, t, n) {
    return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
  }, h.rest = h.tail = h.drop = function(e, t, n) {
    return a.call(e, null == t || n ? 1 : t)
  }, h.compact = function(e) {
    return h.filter(e, h.identity)
  };
  var v = function(e, t, n, r) {
    if (t && h.every(e, h.isArray)) return s.apply(r, e);
    for (var i = 0, a = e.length; a > i; i++) {
      var u = e[i];
      h.isArray(u) || h.isArguments(u) ? t ? o.apply(r, u) : v(u, t, n, r) : n || r.push(u)
    }
    return r
  };
  h.flatten = function(e, t) {
    return v(e, t, !1, [])
  }, h.without = function(e) {
    return h.difference(e, a.call(arguments, 1))
  }, h.uniq = h.unique = function(e, t, n, r) {
    if (null == e) return [];
    h.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = h.iteratee(n, r));
    for (var i = [], o = [], a = 0, s = e.length; s > a; a++) {
      var u = e[a];
      if (t) a && o === u || i.push(u), o = u;
      else if (n) {
        var l = n(u, a, e);
        h.indexOf(o, l) < 0 && (o.push(l), i.push(u))
      } else h.indexOf(i, u) < 0 && i.push(u)
    }
    return i
  }, h.union = function() {
    return h.uniq(v(arguments, !0, !0, []))
  }, h.intersection = function(e) {
    if (null == e) return [];
    for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
      var o = e[r];
      if (!h.contains(t, o)) {
        for (var a = 1; n > a && h.contains(arguments[a], o); a++);
        a === n && t.push(o)
      }
    }
    return t
  }, h.difference = function(e) {
    var t = v(a.call(arguments, 1), !0, !0, []);
    return h.filter(e, function(e) {
      return !h.contains(t, e)
    })
  }, h.zip = function(e) {
    if (null == e) return [];
    for (var t = h.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) n[r] = h.pluck(arguments, r);
    return n
  }, h.object = function(e, t) {
    if (null == e) return {};
    for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
    return n
  }, h.indexOf = function(e, t, n) {
    if (null == e) return -1;
    var r = 0,
      i = e.length;
    if (n) {
      if ("number" != typeof n) return r = h.sortedIndex(e, t), e[r] === t ? r : -1;
      r = 0 > n ? Math.max(0, i + n) : n
    }
    for (; i > r; r++)
      if (e[r] === t) return r;
    return -1
  }, h.lastIndexOf = function(e, t, n) {
    if (null == e) return -1;
    var r = e.length;
    for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;)
      if (e[r] === t) return r;
    return -1
  }, h.range = function(e, t, n) {
    arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
    return i
  };
  var y = function() {};
  h.bind = function(e, t) {
    var n, r;
    if (d && e.bind === d) return d.apply(e, a.call(arguments, 1));
    if (!h.isFunction(e)) throw new TypeError("Bind must be called on a function");
    return n = a.call(arguments, 2), r = function() {
      if (!(this instanceof r)) return e.apply(t, n.concat(a.call(arguments)));
      y.prototype = e.prototype;
      var i = new y;
      y.prototype = null;
      var o = e.apply(i, n.concat(a.call(arguments)));
      return h.isObject(o) ? o : i
    }
  }, h.partial = function(e) {
    var t = a.call(arguments, 1);
    return function() {
      for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++) r[i] === h && (r[i] = arguments[n++]);
      for (; n < arguments.length;) r.push(arguments[n++]);
      return e.apply(this, r)
    }
  }, h.bindAll = function(e) {
    var t, n, r = arguments.length;
    if (1 >= r) throw new Error("bindAll must be passed function names");
    for (t = 1; r > t; t++) n = arguments[t], e[n] = h.bind(e[n], e);
    return e
  }, h.memoize = function(e, t) {
    var n = function(r) {
      var i = n.cache,
        o = t ? t.apply(this, arguments) : r;
      return h.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
    };
    return n.cache = {}, n
  }, h.delay = function(e, t) {
    var n = a.call(arguments, 2);
    return setTimeout(function() {
      return e.apply(null, n)
    }, t)
  }, h.defer = function(e) {
    return h.delay.apply(h, [e, 1].concat(a.call(arguments, 1)))
  }, h.throttle = function(e, t, n) {
    var r, i, o, a = null,
      s = 0;
    n || (n = {});
    var u = function() {
      s = n.leading === !1 ? 0 : h.now(), a = null, o = e.apply(r, i), a || (r = i = null)
    };
    return function() {
      var l = h.now();
      s || n.leading !== !1 || (s = l);
      var c = t - (l - s);
      return r = this, i = arguments, 0 >= c || c > t ? (clearTimeout(a), a = null, s = l, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
    }
  }, h.debounce = function(e, t, n) {
    var r, i, o, a, s, u = function() {
      var l = h.now() - a;
      t > l && l > 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
    };
    return function() {
      o = this, i = arguments, a = h.now();
      var l = n && !r;
      return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s
    }
  }, h.wrap = function(e, t) {
    return h.partial(t, e)
  }, h.negate = function(e) {
    return function() {
      return !e.apply(this, arguments)
    }
  }, h.compose = function() {
    var e = arguments,
      t = e.length - 1;
    return function() {
      for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
      return r
    }
  }, h.after = function(e, t) {
    return function() {
      return --e < 1 ? t.apply(this, arguments) : void 0
    }
  }, h.before = function(e, t) {
    var n;
    return function() {
      return --e > 0 ? n = t.apply(this, arguments) : t = null, n
    }
  }, h.once = h.partial(h.before, 2), h.keys = function(e) {
    if (!h.isObject(e)) return [];
    if (f) return f(e);
    var t = [];
    for (var n in e) h.has(e, n) && t.push(n);
    return t
  }, h.values = function(e) {
    for (var t = h.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
    return r
  }, h.pairs = function(e) {
    for (var t = h.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
    return r
  }, h.invert = function(e) {
    for (var t = {}, n = h.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
    return t
  }, h.functions = h.methods = function(e) {
    var t = [];
    for (var n in e) h.isFunction(e[n]) && t.push(n);
    return t.sort()
  }, h.extend = function(e) {
    if (!h.isObject(e)) return e;
    for (var t, n, r = 1, i = arguments.length; i > r; r++) {
      t = arguments[r];
      for (n in t) l.call(t, n) && (e[n] = t[n])
    }
    return e
  }, h.pick = function(e, t, n) {
    var r, i = {};
    if (null == e) return i;
    if (h.isFunction(t)) {
      t = p(t, n);
      for (r in e) {
        var o = e[r];
        t(o, r, e) && (i[r] = o)
      }
    } else {
      var u = s.apply([], a.call(arguments, 1));
      e = new Object(e);
      for (var l = 0, c = u.length; c > l; l++) r = u[l], r in e && (i[r] = e[r])
    }
    return i
  }, h.omit = function(e, t, n) {
    if (h.isFunction(t)) t = h.negate(t);
    else {
      var r = h.map(s.apply([], a.call(arguments, 1)), String);
      t = function(e, t) {
        return !h.contains(r, t)
      }
    }
    return h.pick(e, t, n)
  }, h.defaults = function(e) {
    if (!h.isObject(e)) return e;
    for (var t = 1, n = arguments.length; n > t; t++) {
      var r = arguments[t];
      for (var i in r) void 0 === e[i] && (e[i] = r[i])
    }
    return e
  }, h.clone = function(e) {
    return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
  }, h.tap = function(e, t) {
    return t(e), e
  };
  var b = function(e, t, n, r) {
    if (e === t) return 0 !== e || 1 / e === 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof h && (e = e._wrapped), t instanceof h && (t = t._wrapped);
    var i = u.call(e);
    if (i !== u.call(t)) return !1;
    switch (i) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e === +t
    }
    if ("object" != typeof e || "object" != typeof t) return !1;
    for (var o = n.length; o--;)
      if (n[o] === e) return r[o] === t;
    var a = e.constructor,
      s = t.constructor;
    if (a !== s && "constructor" in e && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(s) && s instanceof s)) return !1;
    n.push(e), r.push(t);
    var l, c;
    if ("[object Array]" === i) {
      if (l = e.length, c = l === t.length)
        for (; l-- && (c = b(e[l], t[l], n, r)););
    } else {
      var f, d = h.keys(e);
      if (l = d.length, c = h.keys(t).length === l)
        for (; l-- && (f = d[l], c = h.has(t, f) && b(e[f], t[f], n, r)););
    }
    return n.pop(), r.pop(), c
  };
  h.isEqual = function(e, t) {
    return b(e, t, [], [])
  }, h.isEmpty = function(e) {
    if (null == e) return !0;
    if (h.isArray(e) || h.isString(e) || h.isArguments(e)) return 0 === e.length;
    for (var t in e)
      if (h.has(e, t)) return !1;
    return !0
  }, h.isElement = function(e) {
    return !(!e || 1 !== e.nodeType)
  }, h.isArray = c || function(e) {
    return "[object Array]" === u.call(e)
  }, h.isObject = function(e) {
    var t = typeof e;
    return "function" === t || "object" === t && !!e
  }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
    h["is" + e] = function(t) {
      return u.call(t) === "[object " + e + "]"
    }
  }), h.isArguments(arguments) || (h.isArguments = function(e) {
    return h.has(e, "callee")
  }), "function" != typeof /./ && (h.isFunction = function(e) {
    return "function" == typeof e || !1
  }), h.isFinite = function(e) {
    return isFinite(e) && !isNaN(parseFloat(e))
  }, h.isNaN = function(e) {
    return h.isNumber(e) && e !== +e
  }, h.isBoolean = function(e) {
    return e === !0 || e === !1 || "[object Boolean]" === u.call(e)
  }, h.isNull = function(e) {
    return null === e
  }, h.isUndefined = function(e) {
    return void 0 === e
  }, h.has = function(e, t) {
    return null != e && l.call(e, t)
  }, h.noConflict = function() {
    return e._ = t, this
  }, h.identity = function(e) {
    return e
  }, h.constant = function(e) {
    return function() {
      return e
    }
  }, h.noop = function() {}, h.property = function(e) {
    return function(t) {
      return t[e]
    }
  }, h.matches = function(e) {
    var t = h.pairs(e),
      n = t.length;
    return function(e) {
      if (null == e) return !n;
      e = new Object(e);
      for (var r = 0; n > r; r++) {
        var i = t[r],
          o = i[0];
        if (i[1] !== e[o] || !(o in e)) return !1
      }
      return !0
    }
  }, h.times = function(e, t, n) {
    var r = Array(Math.max(0, e));
    t = p(t, n, 1);
    for (var i = 0; e > i; i++) r[i] = t(i);
    return r
  }, h.random = function(e, t) {
    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
  }, h.now = Date.now || function() {
    return (new Date).getTime()
  };
  var x = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
    w = h.invert(x),
    T = function(e) {
      var t = function(t) {
          return e[t]
        },
        n = "(?:" + h.keys(e).join("|") + ")",
        r = RegExp(n),
        i = RegExp(n, "g");
      return function(e) {
        return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
      }
    };
  h.escape = T(x), h.unescape = T(w), h.result = function(e, t) {
    if (null == e) return void 0;
    var n = e[t];
    return h.isFunction(n) ? e[t]() : n
  };
  var E = 0;
  h.uniqueId = function(e) {
    var t = ++E + "";
    return e ? e + t : t
  }, h.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var C = /(.)^/,
    k = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    N = /\\|'|\r|\n|\u2028|\u2029/g,
    _ = function(e) {
      return "\\" + k[e]
    };
  h.template = function(e, t, n) {
    !t && n && (t = n), t = h.defaults({}, t, h.templateSettings);
    var r = RegExp([(t.escape || C).source, (t.interpolate || C).source, (t.evaluate || C).source].join("|") + "|$", "g"),
      i = 0,
      o = "__p+='";
    e.replace(r, function(t, n, r, a, s) {
      return o += e.slice(i, s).replace(N, _), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
    }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
    try {
      var a = new Function(t.variable || "obj", "_", o)
    } catch (s) {
      throw s.source = o, s
    }
    var u = function(e) {
        return a.call(this, e, h)
      },
      l = t.variable || "obj";
    return u.source = "function(" + l + "){\n" + o + "}", u
  }, h.chain = function(e) {
    var t = h(e);
    return t._chain = !0, t
  };
  var S = function(e) {
    return this._chain ? h(e).chain() : e
  };
  h.mixin = function(e) {
    h.each(h.functions(e), function(t) {
      var n = h[t] = e[t];
      h.prototype[t] = function() {
        var e = [this._wrapped];
        return o.apply(e, arguments), S.call(this, n.apply(h, e))
      }
    })
  }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
    var t = n[e];
    h.prototype[e] = function() {
      var n = this._wrapped;
      return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], S.call(this, n)
    }
  }), h.each(["concat", "join", "slice"], function(e) {
    var t = n[e];
    h.prototype[e] = function() {
      return S.call(this, t.apply(this._wrapped, arguments))
    }
  }), h.prototype.value = function() {
    return this._wrapped
  }, "function" == typeof define && define.amd && define("underscore", [], function() {
    return h
  })
}.call(this),
  function(e, t) {
    if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, r, i) {
      e.Backbone = t(e, i, n, r)
    });
    else if ("undefined" != typeof exports) {
      var n = require("underscore");
      t(e, exports, n)
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
  }(this, function(e, t, n, r) {
    {
      var i = e.Backbone,
        o = [],
        a = (o.push, o.slice);
      o.splice
    }
    t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
      return e.Backbone = i, this
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var s = t.Events = {
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
        once: function(e, t, r) {
          if (!l(this, "once", e, [t, r]) || !t) return this;
          var i = this,
            o = n.once(function() {
              i.off(e, o), t.apply(this, arguments)
            });
          return o._callback = t, this.on(e, o, r)
        },
        off: function(e, t, r) {
          var i, o, a, s, u, c, f, d;
          if (!this._events || !l(this, "off", e, [t, r])) return this;
          if (!e && !t && !r) return this._events = void 0, this;
          for (s = e ? [e] : n.keys(this._events), u = 0, c = s.length; c > u; u++)
            if (e = s[u], a = this._events[e]) {
              if (this._events[e] = i = [], t || r)
                for (f = 0, d = a.length; d > f; f++) o = a[f], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && i.push(o);
              i.length || delete this._events[e]
            }
          return this
        },
        trigger: function(e) {
          if (!this._events) return this;
          var t = a.call(arguments, 1);
          if (!l(this, "trigger", e, t)) return this;
          var n = this._events[e],
            r = this._events.all;
          return n && c(n, t), r && c(r, arguments), this
        },
        stopListening: function(e, t, r) {
          var i = this._listeningTo;
          if (!i) return this;
          var o = !t && !r;
          r || "object" != typeof t || (r = this), e && ((i = {})[e._listenId] = e);
          for (var a in i) e = i[a], e.off(t, r, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
          return this
        }
      },
      u = /\s+/,
      l = function(e, t, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
          for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
          return !1
        }
        if (u.test(n)) {
          for (var o = n.split(u), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(r));
          return !1
        }
        return !0
      },
      c = function(e, t) {
        var n, r = -1,
          i = e.length,
          o = t[0],
          a = t[1],
          s = t[2];
        switch (t.length) {
          case 0:
            for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
            return;
          case 1:
            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
            return;
          case 2:
            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
            return;
          case 3:
            for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
            return;
          default:
            for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
            return
        }
      },
      f = {
        listenTo: "on",
        listenToOnce: "once"
      };
    n.each(f, function(e, t) {
      s[t] = function(t, r, i) {
        var o = this._listeningTo || (this._listeningTo = {}),
          a = t._listenId || (t._listenId = n.uniqueId("l"));
        return o[a] = t, i || "object" != typeof r || (i = this), t[e](r, i, this), this
      }
    }), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
    var d = t.Model = function(e, t) {
      var r = e || {};
      t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(d.prototype, s, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      initialize: function() {},
      toJSON: function() {
        return n.clone(this.attributes)
      },
      sync: function() {
        return t.sync.apply(this, arguments)
      },
      get: function(e) {
        return this.attributes[e]
      },
      escape: function(e) {
        return n.escape(this.get(e))
      },
      has: function(e) {
        return null != this.get(e)
      },
      set: function(e, t, r) {
        var i, o, a, s, u, l, c, f;
        if (null == e) return this;
        if ("object" == typeof e ? (o = e, r = t) : (o = {})[e] = t, r || (r = {}), !this._validate(o, r)) return !1;
        a = r.unset, u = r.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), f = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
        for (i in o) t = o[i], n.isEqual(f[i], t) || s.push(i), n.isEqual(c[i], t) ? delete this.changed[i] : this.changed[i] = t, a ? delete f[i] : f[i] = t;
        if (!u) {
          s.length && (this._pending = r);
          for (var d = 0, h = s.length; h > d; d++) this.trigger("change:" + s[d], this, f[s[d]], r)
        }
        if (l) return this;
        if (!u)
          for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
        return this._pending = !1, this._changing = !1, this
      },
      unset: function(e, t) {
        return this.set(e, void 0, n.extend({}, t, {
          unset: !0
        }))
      },
      clear: function(e) {
        var t = {};
        for (var r in this.attributes) t[r] = void 0;
        return this.set(t, n.extend({}, e, {
          unset: !0
        }))
      },
      hasChanged: function(e) {
        return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
      },
      changedAttributes: function(e) {
        if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
        var t, r = !1,
          i = this._changing ? this._previousAttributes : this.attributes;
        for (var o in e) n.isEqual(i[o], t = e[o]) || ((r || (r = {}))[o] = t);
        return r
      },
      previous: function(e) {
        return null != e && this._previousAttributes ? this._previousAttributes[e] : null
      },
      previousAttributes: function() {
        return n.clone(this._previousAttributes)
      },
      fetch: function(e) {
        e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = this,
          r = e.success;
        return e.success = function(n) {
          return t.set(t.parse(n, e), e) ? (r && r(t, n, e), void t.trigger("sync", t, n, e)) : !1
        }, F(this, e), this.sync("read", this, e)
      },
      save: function(e, t, r) {
        var i, o, a, s = this.attributes;
        if (null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
            validate: !0
          }, r), i && !r.wait) {
          if (!this.set(i, r)) return !1
        } else if (!this._validate(i, r)) return !1;
        i && r.wait && (this.attributes = n.extend({}, s, i)), void 0 === r.parse && (r.parse = !0);
        var u = this,
          l = r.success;
        return r.success = function(e) {
          u.attributes = s;
          var t = u.parse(e, r);
          return r.wait && (t = n.extend(i || {}, t)), n.isObject(t) && !u.set(t, r) ? !1 : (l && l(u, e, r), void u.trigger("sync", u, e, r))
        }, F(this, r), o = this.isNew() ? "create" : r.patch ? "patch" : "update", "patch" === o && (r.attrs = i), a = this.sync(o, this, r), i && r.wait && (this.attributes = s), a
      },
      destroy: function(e) {
        e = e ? n.clone(e) : {};
        var t = this,
          r = e.success,
          i = function() {
            t.trigger("destroy", t, t.collection, e)
          };
        if (e.success = function(n) {
            (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
          }, this.isNew()) return e.success(), !1;
        F(this, e);
        var o = this.sync("delete", this, e);
        return e.wait || i(), o
      },
      url: function() {
        var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
        return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
      },
      parse: function(e) {
        return e
      },
      clone: function() {
        return new this.constructor(this.attributes)
      },
      isNew: function() {
        return !this.has(this.idAttribute)
      },
      isValid: function(e) {
        return this._validate({}, n.extend(e || {}, {
          validate: !0
        }))
      },
      _validate: function(e, t) {
        if (!t.validate || !this.validate) return !0;
        e = n.extend({}, this.attributes, e);
        var r = this.validationError = this.validate(e, t) || null;
        return r ? (this.trigger("invalid", this, r, n.extend(t, {
          validationError: r
        })), !1) : !0
      }
    });
    var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(h, function(e) {
      d.prototype[e] = function() {
        var t = a.call(arguments);
        return t.unshift(this.attributes), n[e].apply(n, t)
      }
    });
    var p = t.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
          silent: !0
        }, t))
      },
      g = {
        add: !0,
        remove: !0,
        merge: !0
      },
      m = {
        add: !0,
        remove: !1
      };
    n.extend(p.prototype, s, {
      model: d,
      initialize: function() {},
      toJSON: function(e) {
        return this.map(function(t) {
          return t.toJSON(e)
        })
      },
      sync: function() {
        return t.sync.apply(this, arguments)
      },
      add: function(e, t) {
        return this.set(e, n.extend({
          merge: !1
        }, t, m))
      },
      remove: function(e, t) {
        var r = !n.isArray(e);
        e = r ? [e] : n.clone(e), t || (t = {});
        var i, o, a, s;
        for (i = 0, o = e.length; o > i; i++) s = e[i] = this.get(e[i]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
        return r ? e[0] : e
      },
      set: function(e, t) {
        t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
        var r = !n.isArray(e);
        e = r ? e ? [e] : [] : n.clone(e);
        var i, o, a, s, u, l, c, f = t.at,
          h = this.model,
          p = this.comparator && null == f && t.sort !== !1,
          m = n.isString(this.comparator) ? this.comparator : null,
          v = [],
          y = [],
          b = {},
          x = t.add,
          w = t.merge,
          T = t.remove,
          E = !p && x && T ? [] : !1;
        for (i = 0, o = e.length; o > i; i++) {
          if (u = e[i] || {}, a = u instanceof d ? s = u : u[h.prototype.idAttribute || "id"], l = this.get(a)) T && (b[l.cid] = !0), w && (u = u === s ? s.attributes : u, t.parse && (u = l.parse(u, t)), l.set(u, t), p && !c && l.hasChanged(m) && (c = !0)), e[i] = l;
          else if (x) {
            if (s = e[i] = this._prepareModel(u, t), !s) continue;
            v.push(s), this._addReference(s, t)
          }
          s = l || s, !E || !s.isNew() && b[s.id] || E.push(s), b[s.id] = !0
        }
        if (T) {
          for (i = 0, o = this.length; o > i; ++i) b[(s = this.models[i]).cid] || y.push(s);
          y.length && this.remove(y, t)
        }
        if (v.length || E && E.length)
          if (p && (c = !0), this.length += v.length, null != f)
            for (i = 0, o = v.length; o > i; i++) this.models.splice(f + i, 0, v[i]);
          else {
            E && (this.models.length = 0);
            var C = E || v;
            for (i = 0, o = C.length; o > i; i++) this.models.push(C[i])
          }
        if (c && this.sort({
            silent: !0
          }), !t.silent) {
          for (i = 0, o = v.length; o > i; i++)(s = v[i]).trigger("add", s, this, t);
          (c || E && E.length) && this.trigger("sort", this, t)
        }
        return r ? e[0] : e
      },
      reset: function(e, t) {
        t || (t = {});
        for (var r = 0, i = this.models.length; i > r; r++) this._removeReference(this.models[r], t);
        return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
          silent: !0
        }, t)), t.silent || this.trigger("reset", this, t), e
      },
      push: function(e, t) {
        return this.add(e, n.extend({
          at: this.length
        }, t))
      },
      pop: function(e) {
        var t = this.at(this.length - 1);
        return this.remove(t, e), t
      },
      unshift: function(e, t) {
        return this.add(e, n.extend({
          at: 0
        }, t))
      },
      shift: function(e) {
        var t = this.at(0);
        return this.remove(t, e), t
      },
      slice: function() {
        return a.apply(this.models, arguments)
      },
      get: function(e) {
        return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
      },
      at: function(e) {
        return this.models[e]
      },
      where: function(e, t) {
        return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
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
        return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
      },
      pluck: function(e) {
        return n.invoke(this.models, "get", e)
      },
      fetch: function(e) {
        e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = e.success,
          r = this;
        return e.success = function(n) {
          var i = e.reset ? "reset" : "set";
          r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
        }, F(this, e), this.sync("read", this, e)
      },
      create: function(e, t) {
        if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
        t.wait || this.add(e, t);
        var r = this,
          i = t.success;
        return t.success = function(e, n) {
          t.wait && r.add(e, t), i && i(e, n, t)
        }, e.save(null, t), e
      },
      parse: function(e) {
        return e
      },
      clone: function() {
        return new this.constructor(this.models)
      },
      _reset: function() {
        this.length = 0, this.models = [], this._byId = {}
      },
      _prepareModel: function(e, t) {
        if (e instanceof d) return e;
        t = t ? n.clone(t) : {}, t.collection = this;
        var r = new this.model(e, t);
        return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
      },
      _addReference: function(e) {
        this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
      },
      _removeReference: function(e) {
        this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
      },
      _onModelEvent: function(e, t, n, r) {
        ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
      }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(v, function(e) {
      p.prototype[e] = function() {
        var t = a.call(arguments);
        return t.unshift(this.models), n[e].apply(n, t)
      }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y, function(e) {
      p.prototype[e] = function(t, r) {
        var i = n.isFunction(t) ? t : function(e) {
          return e.get(t)
        };
        return n[e](this.models, i, r)
      }
    });
    var b = t.View = function(e) {
        this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
      },
      x = /^(\S+)\s*(.*)$/,
      w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(b.prototype, s, {
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
      setElement: function(e, n) {
        return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
      },
      delegateEvents: function(e) {
        if (!e && !(e = n.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var t in e) {
          var r = e[t];
          if (n.isFunction(r) || (r = this[e[t]]), r) {
            var i = t.match(x),
              o = i[1],
              a = i[2];
            r = n.bind(r, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, r) : this.$el.on(o, a, r)
          }
        }
        return this
      },
      undelegateEvents: function() {
        return this.$el.off(".delegateEvents" + this.cid), this
      },
      _ensureElement: function() {
        if (this.el) this.setElement(n.result(this, "el"), !1);
        else {
          var e = n.extend({}, n.result(this, "attributes"));
          this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
          var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
          this.setElement(r, !1)
        }
      }
    }), t.sync = function(e, r, i) {
      var o = E[e];
      n.defaults(i || (i = {}), {
        emulateHTTP: t.emulateHTTP,
        emulateJSON: t.emulateJSON
      });
      var a = {
        type: o,
        dataType: "json"
      };
      if (i.url || (a.url = n.result(r, "url") || M()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
          model: a.data
        } : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
        a.type = "POST", i.emulateJSON && (a.data._method = o);
        var s = i.beforeSend;
        i.beforeSend = function(e) {
          return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
        }
      }
      "GET" === a.type || i.emulateJSON || (a.processData = !1), "PATCH" === a.type && T && (a.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
      });
      var u = i.xhr = t.ajax(n.extend(a, i));
      return r.trigger("request", r, u, i), u
    };
    var T = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
      E = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
      };
    t.ajax = function() {
      return t.$.ajax.apply(t.$, arguments)
    };
    var C = t.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
      },
      k = /\((.*?)\)/g,
      N = /(\(\?)?:\w+/g,
      _ = /\*\w+/g,
      S = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(C.prototype, s, {
      initialize: function() {},
      route: function(e, r, i) {
        n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
        var o = this;
        return t.history.route(e, function(n) {
          var a = o._extractParameters(e, n);
          o.execute(i, a), o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a)
        }), this
      },
      execute: function(e, t) {
        e && e.apply(this, t)
      },
      navigate: function(e, n) {
        return t.history.navigate(e, n), this
      },
      _bindRoutes: function() {
        if (this.routes) {
          this.routes = n.result(this, "routes");
          for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
        }
      },
      _routeToRegExp: function(e) {
        return e = e.replace(S, "\\$&").replace(k, "(?:$1)?").replace(N, function(e, t) {
          return t ? e : "([^/?]+)"
        }).replace(_, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
      },
      _extractParameters: function(e, t) {
        var r = e.exec(t).slice(1);
        return n.map(r, function(e, t) {
          return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
        })
      }
    });
    var A = t.History = function() {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
      },
      j = /^[#\/]|\s+$/g,
      D = /^\/+|\/+$/g,
      H = /msie [\w.]+/,
      L = /\/$/,
      O = /#.*$/;
    A.started = !1, n.extend(A.prototype, s, {
      interval: 50,
      atRoot: function() {
        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
      },
      getHash: function(e) {
        var t = (e || this).location.href.match(/#(.*)$/);
        return t ? t[1] : ""
      },
      getFragment: function(e, t) {
        if (null == e)
          if (this._hasPushState || !this._wantsHashChange || t) {
            e = decodeURI(this.location.pathname + this.location.search);
            var n = this.root.replace(L, "");
            e.indexOf(n) || (e = e.slice(n.length))
          } else e = this.getHash();
        return e.replace(j, "")
      },
      start: function(e) {
        if (A.started) throw new Error("Backbone.history has already been started");
        A.started = !0, this.options = n.extend({
          root: "/"
        }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
        var r = this.getFragment(),
          i = document.documentMode,
          o = H.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
        if (this.root = ("/" + this.root + "/").replace(D, "/"), o && this._wantsHashChange) {
          var a = t.$('<iframe src="javascript:0" tabindex="-1">');
          this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(r)
        }
        this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
        var s = this.location;
        if (this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
          this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(j, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
        }
        return this.options.silent ? void 0 : this.loadUrl()
      },
      stop: function() {
        t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), A.started = !1
      },
      route: function(e, t) {
        this.handlers.unshift({
          route: e,
          callback: t
        })
      },
      checkUrl: function() {
        var e = this.getFragment();
        return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
      },
      loadUrl: function(e) {
        return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
          return t.route.test(e) ? (t.callback(e), !0) : void 0
        })
      },
      navigate: function(e, t) {
        if (!A.started) return !1;
        t && t !== !0 || (t = {
          trigger: !!t
        });
        var n = this.root + (e = this.getFragment(e || ""));
        if (e = e.replace(O, ""), this.fragment !== e) {
          if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
          }
          return t.trigger ? this.loadUrl(e) : void 0
        }
      },
      _updateHash: function(e, t, n) {
        if (n) {
          var r = e.href.replace(/(javascript:|#).*$/, "");
          e.replace(r + "#" + t)
        } else e.hash = "#" + t
      }
    }), t.history = new A;
    var q = function(e, t) {
      var r, i = this;
      r = e && n.has(e, "constructor") ? e.constructor : function() {
        return i.apply(this, arguments)
      }, n.extend(r, i, t);
      var o = function() {
        this.constructor = r
      };
      return o.prototype = i.prototype, r.prototype = new o, e && n.extend(r.prototype, e), r.__super__ = i.prototype, r
    };
    d.extend = p.extend = C.extend = b.extend = A.extend = q;
    var M = function() {
        throw new Error('A "url" property or function must be specified')
      },
      F = function(e, t) {
        var n = t.error;
        t.error = function(r) {
          n && n(e, r, t), e.trigger("error", e, r, t)
        }
      };
    return t
  });
