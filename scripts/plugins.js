+ function(t) {
  "use strict";
  var e = function(i, o) {
    this.options = t.extend({}, e.DEFAULTS, o), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
  };
  e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
    offset: 0
  }, e.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(e.RESET).addClass("affix");
    var t = this.$window.scrollTop(),
      i = this.$element.offset();
    return this.pinnedOffset = i.top - t
  }, e.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, e.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var i = t(document).height(),
        o = this.$window.scrollTop(),
        s = this.$element.offset(),
        n = this.options.offset,
        a = n.top,
        r = n.bottom;
      "object" != typeof n && (r = a = n), "function" == typeof a && (a = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
      var h = null != this.unpin && o + this.unpin <= s.top ? !1 : null != r && s.top + this.$element.height() >= i - r ? "bottom" : null != a && a >= o ? "top" : !1;
      if (this.affixed !== h) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (h ? "-" + h : ""),
          d = t.Event(l + ".bs.affix");
        this.$element.trigger(d), d.isDefaultPrevented() || (this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(t.Event(l.replace("affix", "affixed"))), "bottom" == h && this.$element.offset({
          top: s.top
        }))
      }
    }
  };
  var i = t.fn.affix;
  t.fn.affix = function(i) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.affix"),
        n = "object" == typeof i && i;
      s || o.data("bs.affix", s = new e(this, n)), "string" == typeof i && s[i]()
    })
  }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
    return t.fn.affix = i, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var e = t(this),
        i = e.data();
      i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
    })
  })
}(jQuery), + function(t) {
  "use strict";
  var e = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  e.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, e.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
  }, e.prototype.show = function(e) {
    var i = this,
      o = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
      var o = t.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
      var s = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      o ? i.$element.find(".modal-dialog").one(t.support.transition.end, function() {
        i.$element.trigger("focus").trigger(s)
      }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(s)
    }))
  }, e.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, e.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, e.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, e.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
      t.$element.trigger("hidden.bs.modal")
    })
  }, e.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, e.prototype.backdrop = function(e) {
    var i = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var s = t.support.transition && o;
      if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
          t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      s ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var n = function() {
        i.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, n).emulateTransitionEnd(150) : n()
    } else e && e()
  }, e.prototype.checkScrollbar = function() {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
  }, e.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0);
    this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, e.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", "")
  }, e.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var i = t.fn.modal;
  t.fn.modal = function(i, o) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.modal"),
        a = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
      n || s.data("bs.modal", n = new e(this, a)), "string" == typeof i ? n[i](o) : a.show && n.show(o)
    })
  }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
    return t.fn.modal = i, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
    var i = t(this),
      o = i.attr("href"),
      s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
      n = s.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(o) && o
      }, s.data(), i.data());
    i.is("a") && e.preventDefault(), s.modal(n, this).one("hide", function() {
      i.is(":visible") && i.trigger("focus")
    })
  })
}(jQuery), + function(t) {
  "use strict";
  var e = function(i, o) {
    this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, o), this.isLoading = !1
  };
  e.DEFAULTS = {
    loadingText: "loading..."
  }, e.prototype.setState = function(e) {
    var i = "disabled",
      o = this.$element,
      s = o.is("input") ? "val" : "html",
      n = o.data();
    e += "Text", n.resetText || o.data("resetText", o[s]()), o[s](n[e] || this.options[e]), setTimeout(t.proxy(function() {
      "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
    }, this), 0)
  }, e.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    t && this.$element.toggleClass("active")
  };
  var i = t.fn.button;
  t.fn.button = function(i) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.button"),
        n = "object" == typeof i && i;
      s || o.data("bs.button", s = new e(this, n)), "toggle" == i ? s.toggle() : i && s.setState(i)
    })
  }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
    return t.fn.button = i, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    var i = t(e.target);
    i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), e.preventDefault()
  })
}(jQuery);
