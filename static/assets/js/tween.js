var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
                        delete t.cycle
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    c = a.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    d = [];
                r.version = "1.18.0", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0 || r) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - s), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, s, r, l, c, h, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        _ = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === o) && v !== t && (i = !0, v > o && (s = "onReverseComplete")), this._rawPrevTime = u = !e || t || v === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = u = !e || t || v === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (c = this._time / g, h = this._easeType, d = this._easePower, (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > this._time / g ? c / 2 : 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / g)), f === this._time && !i && _ === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = v, this._cycle = _, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === g && this._rawPrevTime === o && u !== o && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, o, a, h, u, p) {
                    a = a || 0;
                    var f, m, _, g, v = o.delay || 0,
                        y = [],
                        b = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), h.apply(p || o.callbackScope || this, u || d)
                        },
                        w = o.cycle,
                        T = o.startAt && o.startAt.cycle;
                    for (c(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, _ = 0; f >= _; _++) {
                        m = {};
                        for (g in o) m[g] = o[g];
                        if (w && s(m, t, _), T) {
                            T = m.startAt = {};
                            for (g in o.startAt) T[g] = o.startAt[g];
                            s(m.startAt, t, _)
                        }
                        m.delay = v, _ === f && h && (m.onComplete = b), y[_] = new r(t[_], e, m), v += a
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(u(r, e)), s = n.length), r = r._next;
                        return n
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, o, a, l = p(0 != s),
                        c = l.length,
                        h = i && n && s;
                    for (a = 0; c > a; a++) o = l[a], (h || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, o, h, d, u, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), c(t))
                            for (d = t.length; --d > -1;) r.killChildTweensOf(t[d], e);
                        else {
                            s = [];
                            for (h in p)
                                for (o = p[h].target.parentNode; o;) o === t && (s = s.concat(p[h].tweens)), o = o.parentNode;
                            for (u = s.length, d = 0; u > d; d++) e && s[d].totalTime(s[d].totalDuration()), s[d]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, s) {
                    i = i !== !1, n = n !== !1, s = s !== !1;
                    for (var r, o, a = p(s), l = i && n && s, c = a.length; --c > -1;) o = a[c], (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    r = i._internals,
                    o = n._internals = {},
                    a = r.isSelector,
                    l = r.isArray,
                    c = r.lazyTweens,
                    h = r.lazyRender,
                    d = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
                        delete t.cycle
                    },
                    f = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    _ = n.prototype = new e;
                return n.version = "1.18.0", _.constructor = n, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function(t, e, n, s) {
                    var r = n.repeat && d.TweenMax || i;
                    return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
                }, _.from = function(t, e, n, s) {
                    return this.add((n.repeat && d.TweenMax || i).from(t, e, n), s)
                }, _.fromTo = function(t, e, n, s, r) {
                    var o = s.repeat && d.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, _.staggerTo = function(t, e, s, r, o, l, c, h) {
                    var d, f, _ = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, 0 > r && (t = m(t), t.reverse(), r *= -1), f = 0; t.length > f; f++) d = u(s), d.startAt && (d.startAt = u(d.startAt), d.startAt.cycle && p(d.startAt, t, f)), g && p(d, t, f), _.to(t[f], e, d, f * r);
                    return this.add(_, o)
                }, _.staggerFrom = function(t, e, i, n, s, r, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, o, a)
                }, _.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, o, a, l)
                }, _.call = function(t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, _.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, s = a._first; s;) r = s._next, e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), s = r;
                    return a.add(o, 0), o
                }, _.add = function(s, r, o, a) {
                    var c, h, d, u, p, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                            for (o = o || "normal", a = a || 0, c = r, h = s.length, d = 0; h > d; d++) l(u = s[d]) && (u = new n({
                                tweens: u
                            })), this.add(u, c), "string" != typeof u && "function" != typeof u && ("sequence" === o ? c = u._startTime + u.totalDuration() / u._timeScale : "start" === o && (u._startTime -= u.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, _.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, _._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, _.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, _.insert = _.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, _.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, _.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, _.addPause = function(t, e, n, s) {
                    var r = i.delayedCall(0, f, n, s || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, _.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, _.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, _._parseTimeOrLabel = function(e, i, n, s) {
                    var r;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, _.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, _.stop = function() {
                    return this.paused(!0)
                }, _.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, _.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, a, l, d, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        _ = this._paused;
                    if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = u + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && t >= n._startTime && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                            d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= p)
                            for (n = this._first; n && (o = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || _);) {
                                if (n._active || p >= n._startTime && !n._paused && !n._gc) {
                                    if (d === n) {
                                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (c.length && h(), this._callback("onUpdate"))), a && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (c.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, _._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, _.getChildren = function(t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], o = this._first, a = 0; o;) s > o._startTime || (o instanceof i ? e !== !1 && (r[a++] = o) : (n !== !1 && (r[a++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, n)), a = r.length))), o = o._next;
                    return r
                }, _.getTweensOf = function(t, e) {
                    var n, s, r = this._gc,
                        o = [],
                        a = 0;
                    for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
                    return r && this._enabled(!1, !0), o
                }, _.recent = function() {
                    return this._recent
                }, _._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, _.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, _._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
                }, _.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, _.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, _._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, _.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, _.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, _.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, 0 > s._startTime && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, _.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, _.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, _.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    s = 1e-10,
                    r = e._internals,
                    o = r.lazyTweens,
                    a = r.lazyRender,
                    l = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.18.0", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, r, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new e(this, n, o), o.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && r._callback("onStart")
                    }, r
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, l, c, h, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        _ = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        b = this._paused,
                        w = this._cycle;
                    if (t >= p) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, c = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === s) && y !== t && this._first && (h = !0, y > s && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== s && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, c = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        } else if (0 === f && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (n = this._first; n && t >= n._startTime && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & w),
                            x = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            S = this._cycle,
                            P = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = w * f, w > this._cycle ? T = !T : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), x && (m = T ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = C, this._totalTime = k, this._cycle = S, this._rawPrevTime = P
                    }
                    if (!(this._time !== m && this._first || i || h || u)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                        for (n = this._first; n && (l = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || b);) {
                            if (n._active || m >= n._startTime && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this._callback(c)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) s = o[n], s.isActive() && (r[a++] = s);
                    return r
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    s = {},
                    r = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var s = {
                                a: t
                            },
                            r = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            c = (e + i) / 2,
                            h = (i + n) / 2,
                            d = (l + c) / 2,
                            u = (c + h) / 2,
                            p = (u - d) / 8;
                        return s.b = l + (t - l) / 4, r.b = d + p, s.c = r.a = (s.b + r.b) / 2, r.c = o.a = (d + u) / 2, o.b = u - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [s, r, o, a]
                    },
                    c = function(t, s, r, o, a) {
                        var c, h, d, u, p, f, m, _, g, v, y, b, w, T = t.length - 1,
                            x = 0,
                            k = t[0].a;
                        for (c = 0; T > c; c++) p = t[x], h = p.a, d = p.d, u = t[x + 1].d, a ? (y = e[c], b = i[c], w = .25 * (b + y) * s / (o ? .5 : n[c] || .5), f = d - (d - h) * (o ? .5 * s : 0 !== y ? w / y : 0), m = d + (u - d) * (o ? .5 * s : 0 !== b ? w / b : 0), _ = d - (f + ((m - f) * (3 * y / (y + b) + .5) / 4 || 0))) : (f = d - .5 * (d - h) * s, m = d + .5 * (u - d) * s, _ = d - (f + m) / 2), f += _, m += _, p.c = g = f, p.b = 0 !== c ? k : k = p.a + .6 * (p.c - p.a), p.da = d - h, p.ca = g - h, p.ba = k - h, r ? (v = l(h, k, g, d), t.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++, k = m;
                        p = t[x], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, r && (v = l(p.a, k, p.c, p.d), t.splice(x, 1, v[0], v[1], v[2], v[3]))
                    },
                    h = function(t, n, s, r) {
                        var a, l, c, h, d, u, p = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(u = t[l][n]) && "=" === u.charAt(1) && (t[l][n] = r[n] + Number(u.charAt(0) + u.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) c = t[l][n], h = t[l + 1][n], p[l] = new o(c, 0, 0, h), s && (d = t[l + 2][n], e[l] = (e[l] || 0) + (h - c) * (h - c), i[l] = (i[l] || 0) + (d - h) * (d - h));
                        return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    d = function(t, r, o, l, d, u) {
                        var p, f, m, _, g, v, y, b, w = {},
                            T = [],
                            x = u || t[0];
                        d = "string" == typeof d ? "," + d + "," : a, null == r && (r = 1);
                        for (f in t[0]) T.push(f);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], y = !0, p = T.length; --p > -1;)
                                if (f = T[p], Math.abs(x[f] - b[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = T.length; --p > -1;) f = T[p], s[f] = -1 !== d.indexOf("," + f + ","), w[f] = h(t, f, s[f], u);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = T.length; --p > -1;)
                                if (s[f])
                                    for (m = w[T[p]], v = m.length - 1, _ = 0; v > _; _++) g = m[_ + 1].da / i[_] + m[_].da / e[_], n[_] = (n[_] || 0) + g * g;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = T.length, _ = o ? 4 : 1; --p > -1;) f = T[p], m = w[f], c(m, r, o, l, s[f]), y && (m.splice(0, _), m.splice(m.length - _, _));
                        return w
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var n, s, r, a, l, c, h, d, u, p, f, m = {},
                            _ = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || _ + 1 > t.length) throw "invalid Bezier data";
                        for (u in t[0]) v.push(u);
                        for (c = v.length; --c > -1;) {
                            for (u = v[c], m[u] = l = [], p = 0, d = t.length, h = 0; d > h; h++) n = null == i ? t[h][u] : "string" == typeof(f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && h > 1 && d - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (d = p - _ + 1, p = 0, h = 0; d > h; h += _) n = l[h], s = l[h + 1], r = l[h + 2], a = 2 === _ ? 0 : l[h + 3], l[p++] = f = 3 === _ ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            l.length = p
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var n, s, r, o, a, l, c, h, d, u, p, f = 1 / i, m = t.length; --m > -1;)
                            for (u = t[m], r = u.a, o = u.d - r, a = u.c - r, l = u.b - r, n = s = 0, h = 1; i >= h; h++) c = f * h, d = 1 - c, n = s - (s = (c * c * o + 3 * d * (c * a + d * l)) * c), p = m * i + h - 1, e[p] = (e[p] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, r, o = [],
                            a = [],
                            l = 0,
                            c = 0,
                            h = e - 1,
                            d = [],
                            u = [];
                        for (i in t) p(t[i], o, e);
                        for (s = o.length, n = 0; s > n; n++) l += Math.sqrt(o[n]), r = n % e, u[r] = l, r === h && (c += l, r = n / e >> 0, d[r] = u, a[r] = c, l = 0, u = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: d
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, r, o, a, l = e.values || [],
                                c = {},
                                h = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in h) this._props.push(n);
                            for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], c[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                                    for (o = 0; 3 > o; o++) n = p[r][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = p[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, s, r, o, a, l, c, h, d, u = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, d = this._curSeg, e *= this._length, s = this._li, e > this._l2 && u - 1 > s) {
                                    for (c = u - 1; c > s && e >= (this._l2 = h[++s]););
                                    this._l1 = h[s - 1], this._li = s, this._curSeg = d = this._segments[s], this._s2 = d[this._s1 = this._si = 0]
                                } else if (this._l1 > e && s > 0) {
                                    for (; s > 0 && (this._l1 = h[--s]) >= e;);
                                    0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = h[s], this._li = s, this._curSeg = d = this._segments[s], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                                }
                                if (i = s, e -= this._l1, s = this._si, e > this._s2 && d.length - 1 > s) {
                                    for (c = d.length - 1; c > s && e >= (this._s2 = d[++s]););
                                    this._s1 = d[s - 1], this._si = s
                                } else if (this._s1 > e && s > 0) {
                                    for (; s > 0 && (this._s1 = d[--s]) >= e;);
                                    0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = d[s], this._si = s
                                }
                                a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? u - 1 : u * e >> 0, a = (e - i * (1 / u)) * u;
                            for (n = 1 - a, s = this._props.length; --s > -1;) r = this._props[s], o = this._beziers[r][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[r] && (l = Math.round(l)), p[r] ? f[r](l) : f[r] = l;
                            if (this._autoRotate) {
                                var _, g, v, y, b, w, T, x = this._autoRotate;
                                for (s = x.length; --s > -1;) r = x[s][2], w = x[s][3] || 0, T = x[s][4] === !0 ? 1 : t, o = this._beziers[x[s][0]], _ = this._beziers[x[s][1]], o && _ && (o = o[i], _ = _[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = _.a + (_.b - _.a) * a, b = _.b + (_.c - _.b) * a, v += (b - v) * a, b += (_.c + (_.d - _.c) * a - b) * a, l = m ? Math.atan2(b - v, y - g) * T + w : this._initialRotations[s], p[r] ? f[r](l) : f[r] = l)
                            }
                        }
                    }),
                    _ = m.prototype;
                m.bezierThrough = d, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            s = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var c, h, d, u = e.values,
                                    p = u.length - 1,
                                    f = [],
                                    _ = {};
                                if (0 > p) return a;
                                for (c = 0; p >= c; c++) d = i(t, u[c], o, a, l, p !== c), f[c] = d.end;
                                for (h in e) _[h] = e[h];
                                return _.values = f, a = new s(t, "bezier", 0, 0, d.pt, 2), a.data = d, a.plugin = l, a.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (c = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != d.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != d.end.x ? [
                                    ["x", "y", "rotation", c, !1]
                                ] : !1), _.autoRotate && (o._transform || o._enableTransforms(!1), d.autoRotate = o._target._gsTransform), l._onInitTween(d.proxy, _, o._tween), a
                            }
                        })
                    }
                }, _._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, _._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, r, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = o.prototype = new t("css");
                c.constructor = o, o.version = "1.18.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, c = "px", o.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var h, d, u, p, f, m, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    $ = /,(?=[^\)]*(?:\(|$))/gi,
                    I = Math.PI / 180,
                    M = 180 / Math.PI,
                    D = {},
                    L = document,
                    X = function(t) {
                        return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t)
                    },
                    Y = X("div"),
                    z = X("img"),
                    W = o._internals = {
                        _specialProps: l
                    },
                    H = navigator.userAgent,
                    j = function() {
                        var t = H.indexOf("Android"),
                            e = X("a");
                        return u = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), f = u && 6 > Number(H.substr(H.indexOf("Version/") + 8, 1)), p = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    F = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    N = function(t) {
                        window.console && console.log(t)
                    },
                    B = "",
                    q = "",
                    U = function(t, e) {
                        e = e || Y;
                        var i, n, s = e.style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (q = 3 === n ? "ms" : i[n], B = "-" + q.toLowerCase() + "-", q + t) : null
                    },
                    V = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                    Z = o.getStyle = function(t, e, i, n, s) {
                        var r;
                        return j || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || V(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : F(t)
                    },
                    G = W.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s) return n;
                        if ("auto" === s || !n) return 0;
                        var a, l, c, h = O.test(i),
                            d = t,
                            u = Y.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === s && -1 !== i.indexOf("border")) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== s && d.appendChild && "v" !== s.charAt(0) && "rem" !== s) u[h ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (d = t.parentNode || L.body, l = d._gsCache, c = e.ticker.frame, l && h && l.time === c) return l.width * n / 100;
                                u[h ? "width" : "height"] = n + s
                            }
                            d.appendChild(Y), a = parseFloat(Y[h ? "offsetWidth" : "offsetHeight"]), d.removeChild(Y), h && "%" === s && o.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {}, l.time = c, l.width = 100 * (a / n)), 0 !== a || r || (a = G(t, i, n, s, !0))
                        }
                        return p ? -a : a
                    },
                    Q = W.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Z(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = Z(t, "margin" + n, i);
                        return t["offset" + n] - (G(t, e, parseFloat(s), s.replace(b, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, n, s, r = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || St === s) && (r[s.replace(P, A)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || kt === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(P, A)] = e[i]);
                        return j || (r.opacity = F(t)), n = Xt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Ct && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    J = function(t, e, i, n, s) {
                        var r, o, a, l = {},
                            c = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(y, "") ? r : 0 : Q(t, o), void 0 !== c[o] && (a = new ft(c, o, c[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = tt[e],
                            r = s.length;
                        for (i = i || V(t, null); --r > -1;) n -= parseFloat(Z(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(Z(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t
                    },
                    st = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    rt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var s, r, o, a, l, c = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : M) - (l ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= s, o !== o % (s / 2) && (o = 0 > o ? o + s : o - s)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (0 | o / s) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (0 | o / s) * s)), a = e + o), c > a && a > -c && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ct = o.parseColor = function(t, e) {
                        var i, n, s, r, o, a, l, c, h, d, u;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = u = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, s = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - s, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, n, s), i[1] = lt(o, n, s), i[2] = lt(o - 1 / 3, n, s);
                                else i = t.match(_) || at.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = at.black;
                        return e && !u && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, c = Math.max(n, s, r), h = Math.min(n, s, r), l = (c + h) / 2, c === h ? o = a = 0 : (d = c - h, a = l > .5 ? d / (2 - c - h) : d / (c + h), o = c === n ? (s - r) / d + (r > s ? 6 : 0) : c === s ? (r - n) / d + 2 : (n - s) / d + 4, o *= 60), i[0] = 0 | o + .5, i[1] = 0 | 100 * a + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    ht = function(t, e) {
                        var i, n, s, r = t.match(dt) || [],
                            o = 0,
                            a = r.length ? "" : t;
                        for (i = 0; r.length > i; i++) n = r[i], s = t.substr(o, t.indexOf(n, o) - o), o += s.length + n.length, n = ct(n, e), 3 === n.length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a
                    },
                    dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (c in at) dt += "|" + c + "\\b";
                dt = RegExp(dt + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    dt.lastIndex = 0, dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ht(t[0], e), t[1] = ht(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var ut = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var s, r = e ? (t.match(dt) || [""])[0] : "",
                            o = t.split(r).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            h = o.length,
                            d = h > 0 ? o[0].replace(_, "") : "";
                        return h ? s = e ? function(t) {
                            var e, u, p, f;
                            if ("number" == typeof t) t += d;
                            else if (n && $.test(t)) {
                                for (f = t.replace($, "|").split("|"), p = 0; f.length > p; p++) f[p] = s(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(dt) || [r])[0], u = t.split(e).join("").match(v) || [], p = u.length, h > p--)
                                for (; h > ++p;) u[p] = i ? u[0 | (p - 1) / 2] : o[p];
                            return a + u.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, u;
                            if ("number" == typeof t) t += d;
                            else if (n && $.test(t)) {
                                for (r = t.replace($, "|").split("|"), u = 0; r.length > u; u++) r[u] = s(r[u]);
                                return r.join(",")
                            }
                            if (e = t.match(v) || [], u = e.length, h > u--)
                                for (; h > ++u;) e[u] = i ? e[0 | (u - 1) / 2] : o[u];
                            return a + e.join(c) + l
                        } : function(t) {
                            return t
                        }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, r, o, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return s.parse(e, a, r, o)
                            }
                    },
                    ft = (W._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r = this.data, o = r.proxy, a = r.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = r.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = s
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    mt = (W._parseToProxy = function(t, e, i, n, s, r) {
                        var o, a, l, c, h, d = n,
                            u = {},
                            p = {},
                            f = i._transform,
                            m = D;
                        for (i._transform = null, D = e, n = h = i.parse(t, e, n, s), D = m, r && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                            if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, u[a] = n.s, r || (c = new ft(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], u[a] = n[l], r || (c = new ft(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: u,
                            end: p,
                            firstMPT: c,
                            pt: h
                        }
                    }, W.CSSPropTween = function(t, e, n, s, o, a, l, c, h, d, u) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof mt || r.push(this.n), this.r = c, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === u ? n + s : u, o && (this._next = o, o._prev = this)
                    }),
                    _t = function(t, e, i, n, s, r) {
                        var o = new mt(t, e, i, n - i, s, -1, r);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    gt = o.parseComplex = function(t, e, i, n, s, r, o, a, l, c) {
                        i = i || r || "", o = new mt(t, e, 0, 0, o, c ? 2 : 1, null, !1, a, i, n), n += "";
                        var d, u, p, f, m, v, y, b, w, T, x, k, S, P = i.split(", ").join(",").split(" "),
                            C = n.split(", ").join(",").split(" "),
                            A = P.length,
                            O = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace($, ", ").split(" "), C = C.join(" ").replace($, ", ").split(" "), A = P.length), A !== C.length && (P = (r || "").split(" "), A = P.length), o.plugin = l, o.setRatio = c, dt.lastIndex = 0, d = 0; A > d; d++)
                            if (f = P[d], m = C[d], b = parseFloat(f), b || 0 === b) o.appendXtra("", b, st(m, b), m.replace(g, ""), O && -1 !== m.indexOf("px"), !0);
                            else if (s && dt.test(f)) k = "," === m.charAt(m.length - 1) ? ")," : ")", S = -1 !== m.indexOf("hsl") && j, f = ct(f, S), m = ct(m, S), w = f.length + m.length > 6, w && !j && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[d]).join("transparent")) : (j || (w = !1), S ? o.appendXtra(w ? "hsla(" : "hsl(", f[0], st(m[0], f[0]), ",", !1, !0).appendXtra("", f[1], st(m[1], f[1]), "%,", !1).appendXtra("", f[2], st(m[2], f[2]), w ? "%," : "%" + k, !1) : o.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : k, !0), w && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, k, !1))), dt.lastIndex = 0;
                        else if (v = f.match(_)) {
                            if (y = m.match(g), !y || y.length !== v.length) return o;
                            for (p = 0, u = 0; v.length > u; u++) x = v[u], T = f.indexOf(x, p), o.appendXtra(f.substr(p, T - p), Number(x), st(y[u], x), "", O && "px" === f.substr(T + x.length, 2), 0 === u), p = T + x.length;
                            o["xs" + o.l] += f.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (k = o.xs0 + o.data.s, d = 1; o.l > d; d++) k += o["xs" + d] + o.data["xn" + d];
                            o.e = k + o["xs" + d]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    vt = 9;
                for (c = mt.prototype, c.l = c.pr = 0; --vt > 0;) c["xn" + vt] = 0, c["xs" + vt] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, s, r) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += r && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new mt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    bt = W._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, s = new yt(r[n], e)
                    },
                    wt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            bt(t, {
                                parser: function(t, i, n, s, r, o, c) {
                                    var h = a.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), l[n].parse(t, i, n, s, r, o, c)) : (N("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                c = yt.prototype, c.parseComplex = function(t, e, i, n, s, r) {
                    var o, a, l, c, h, d, u = this.keyword;
                    if (this.multi && ($.test(i) || $.test(e) ? (a = e.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : u && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, o = 0; c > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, u && (h = e.indexOf(u), d = i.indexOf(u), h !== d && (-1 === d ? a[o] = a[o].split(u).join("") : -1 === h && (a[o] += " " + u)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, c.parse = function(t, e, i, n, r, o) {
                    return this.parseComplex(t.style, this.format(Z(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    bt(t, {
                        parser: function(t, n, s, r, o, a) {
                            var l = new mt(t, s, 0, 0, o, 2, s, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, r._tween, s), l
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = u || p;
                var Tt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = U("transform"),
                    St = B + "transform",
                    Pt = U("transformOrigin"),
                    Ct = null !== U("perspective"),
                    At = W.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Ct ? o.defaultForce3D || "auto" : !1
                    },
                    Ot = window.SVGElement,
                    Rt = function(t, e, i) {
                        var n, s = L.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Et = L.documentElement,
                    $t = function() {
                        var t, e, i, n = m || /Android/i.test(H) && !window.chrome;
                        return L.createElementNS && !n && (t = Rt("svg", Et), e = Rt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[kt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Ct), Et.removeChild(t)), n
                    }(),
                    It = function(t, e, i, n, s) {
                        var r, a, l, c, h, d, u, p, f, m, _, g, v, y, b = t._gsTransform,
                            w = Lt(t, !0);
                        b && (v = b.xOrigin, y = b.yOrigin), (!n || 2 > (r = n.split(" ")).length) && (u = t.getBBox(), e = nt(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * u.width : parseFloat(e[0])) + u.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * u.height : parseFloat(e[1])) + u.y]), i.xOrigin = c = parseFloat(r[0]), i.yOrigin = h = parseFloat(r[1]), n && w !== Dt && (d = w[0], u = w[1], p = w[2], f = w[3], m = w[4], _ = w[5], g = d * f - u * p, a = c * (f / g) + h * (-p / g) + (p * _ - f * m) / g, l = c * (-u / g) + h * (d / g) - (d * _ - u * m) / g, c = i.xOrigin = r[0] = a, h = i.yOrigin = r[1] = l), b && (s || s !== !1 && o.defaultSmoothOrigin !== !1 ? (a = c - v, l = h - y, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", r.join(" "))
                    },
                    Mt = function(t) {
                        return !!(Ot && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Dt = [1, 0, 0, 1, 0, 0],
                    Lt = function(t, e) {
                        var i, n, s, r, o, a = t._gsTransform || new At,
                            l = 1e5;
                        if (kt ? n = Z(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(R), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Mt(t)) && (i && -1 !== (t.style[kt] + "").indexOf("matrix") && (n = t.style[kt], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
                        for (s = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = s.length; --vt > -1;) r = Number(s[vt]), s[vt] = (o = r - (r |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Xt = W.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var a, l, c, h, d, u, p = n ? t._gsTransform || new At : new At,
                            f = 0 > p.scaleX,
                            m = 2e-5,
                            _ = 1e5,
                            g = Ct ? parseFloat(Z(t, Pt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            v = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Mt(t)), p.svg && (It(t, Z(t, Pt, s, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || $t), a = Lt(t), a !== Dt) {
                            if (16 === a.length) {
                                var y, b, w, T, x, k = a[0],
                                    S = a[1],
                                    P = a[2],
                                    C = a[3],
                                    A = a[4],
                                    O = a[5],
                                    R = a[6],
                                    E = a[7],
                                    $ = a[8],
                                    I = a[9],
                                    D = a[10],
                                    L = a[12],
                                    X = a[13],
                                    Y = a[14],
                                    z = a[11],
                                    W = Math.atan2(R, D);
                                p.zOrigin && (Y = -p.zOrigin, L = $ * Y - a[12], X = I * Y - a[13], Y = D * Y + p.zOrigin - a[14]), p.rotationX = W * M, W && (T = Math.cos(-W), x = Math.sin(-W), y = A * T + $ * x, b = O * T + I * x, w = R * T + D * x, $ = A * -x + $ * T, I = O * -x + I * T, D = R * -x + D * T, z = E * -x + z * T, A = y, O = b, R = w), W = Math.atan2($, D), p.rotationY = W * M, W && (T = Math.cos(-W), x = Math.sin(-W), y = k * T - $ * x, b = S * T - I * x, w = P * T - D * x, I = S * x + I * T, D = P * x + D * T, z = C * x + z * T, k = y, S = b, P = w), W = Math.atan2(S, k), p.rotation = W * M, W && (T = Math.cos(-W), x = Math.sin(-W), k = k * T + A * x, b = S * T + O * x, O = S * -x + O * T, R = P * -x + R * T, S = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(k * k + S * S) * _ + .5) / _, p.scaleY = (0 | Math.sqrt(O * O + I * I) * _ + .5) / _, p.scaleZ = (0 | Math.sqrt(R * R + D * D) * _ + .5) / _, p.skewX = 0, p.perspective = z ? 1 / (0 > z ? -z : z) : 0, p.x = L, p.y = X, p.z = Y, p.svg && (p.x -= p.xOrigin - (p.xOrigin * k - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * O))
                            } else if (!(Ct && !r && a.length && p.x === a[4] && p.y === a[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Z(t, "display", i))) {
                                var H = a.length >= 6,
                                    j = H ? a[0] : 1,
                                    F = a[1] || 0,
                                    N = a[2] || 0,
                                    B = H ? a[3] : 1;
                                p.x = a[4] || 0, p.y = a[5] || 0, c = Math.sqrt(j * j + F * F), h = Math.sqrt(B * B + N * N), d = j || F ? Math.atan2(F, j) * M : p.rotation || 0, u = N || B ? Math.atan2(N, B) * M + d : p.skewX || 0, Math.abs(u) > 90 && 270 > Math.abs(u) && (f ? (c *= -1, u += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)), p.scaleX = c, p.scaleY = h, p.rotation = d, p.skewX = u, Ct && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * j + p.yOrigin * N), p.y -= p.yOrigin - (p.xOrigin * F + p.yOrigin * B))
                            }
                            p.zOrigin = g;
                            for (l in p) m > p[l] && p[l] > -m && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (Tt && t.style[kt] ? e.delayedCall(.001, function() {
                            Ht(t.style, kt)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    Yt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * I,
                            r = s + n.skewX * I,
                            o = 1e5,
                            a = (0 | Math.cos(s) * n.scaleX * o) / o,
                            l = (0 | Math.sin(s) * n.scaleX * o) / o,
                            c = (0 | Math.sin(r) * -n.scaleY * o) / o,
                            h = (0 | Math.cos(r) * n.scaleY * o) / o,
                            d = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = l, l = -c, c = -i, e = u.filter, d.filter = "";
                            var p, f, _ = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== u.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h,
                                T = n.x + _ * n.xPercent / 100,
                                x = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * _ * n.ox : n.ox) - _ / 2, f = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, T += p - (p * a + f * l), x += f - (p * c + f * h)), v ? (p = _ / 2, f = g / 2, y += ", Dx=" + (p - (p * a + f * l) + T) + ", Dy=" + (f - (p * c + f * h) + x) + ")") : y += ", sizingMethod='auto expand')", d.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(E, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !v) {
                                var k, S, P, C = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((_ - ((0 > a ? -a : a) * _ + (0 > l ? -l : l) * g)) / 2 + T), n.ieOffsetY = Math.round((g - ((0 > h ? -h : h) * g + (0 > c ? -c : c) * _)) / 2 + x), vt = 0; 4 > vt; vt++) S = et[vt], k = u[S], i = -1 !== k.indexOf("px") ? parseFloat(k) : G(this.t, S, parseFloat(k), k.replace(b, "")) || 0, P = i !== n[S] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : f - n.ieOffsetY, d[S] = (n[S] = Math.round(i - P * (0 === vt || 2 === vt ? 1 : C))) + "px"
                            }
                        }
                    },
                    zt = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                        var e, i, n, s, r, o, a, l, c, h, d, u, f, m, _, g, v, y, b, w, T, x, k, S = this.data,
                            P = this.t.style,
                            C = S.rotation,
                            A = S.rotationX,
                            O = S.rotationY,
                            R = S.scaleX,
                            E = S.scaleY,
                            $ = S.scaleZ,
                            M = S.x,
                            D = S.y,
                            L = S.z,
                            X = S.svg,
                            Y = S.perspective,
                            z = S.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || L || Y || O || A) || Tt && X || !Ct) return void(C || S.skewX || X ? (C *= I, x = S.skewX * I, k = 1e5, e = Math.cos(C) * R, s = Math.sin(C) * R, i = Math.sin(C - x) * -E, r = Math.cos(C - x) * E, x && "simple" === S.skewType && (v = Math.tan(x), v = Math.sqrt(1 + v * v), i *= v, r *= v, S.skewY && (e *= v, s *= v)), X && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset, Tt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), M += .01 * S.xPercent * m.width, D += .01 * S.yPercent * m.height), m = 1e-6, m > M && M > -m && (M = 0), m > D && D > -m && (D = 0)), b = (0 | e * k) / k + "," + (0 | s * k) / k + "," + (0 | i * k) / k + "," + (0 | r * k) / k + "," + M + "," + D + ")", X && Tt ? this.t.setAttribute("transform", "matrix(" + b) : P[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : P[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + E + "," + M + "," + D + ")");
                        if (p && (m = 1e-4, m > R && R > -m && (R = $ = 2e-5), m > E && E > -m && (E = $ = 2e-5), !Y || S.z || S.rotationX || S.rotationY || (Y = 0)), C || S.skewX) C *= I, _ = e = Math.cos(C), g = s = Math.sin(C), S.skewX && (C -= S.skewX * I, _ = Math.cos(C), g = Math.sin(C), "simple" === S.skewType && (v = Math.tan(S.skewX * I), v = Math.sqrt(1 + v * v), _ *= v, g *= v, S.skewY && (e *= v, s *= v))), i = -g, r = _;
                        else {
                            if (!(O || A || 1 !== $ || Y || X)) return void(P[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + L + "px)" + (1 !== R || 1 !== E ? " scale(" + R + "," + E + ")" : ""));
                            e = r = 1, i = s = 0
                        }
                        c = 1, n = o = a = l = h = d = 0, u = Y ? -1 / Y : 0, f = S.zOrigin, m = 1e-6, w = ",", T = "0", C = O * I, C && (_ = Math.cos(C), g = Math.sin(C), a = -g, h = u * -g, n = e * g, o = s * g, c = _, u *= _, e *= _, s *= _), C = A * I, C && (_ = Math.cos(C), g = Math.sin(C), v = i * _ + n * g, y = r * _ + o * g, l = c * g, d = u * g, n = i * -g + n * _, o = r * -g + o * _, c *= _, u *= _, i = v, r = y), 1 !== $ && (n *= $, o *= $, c *= $, u *= $), 1 !== E && (i *= E, r *= E, l *= E, d *= E), 1 !== R && (e *= R, s *= R, a *= R, h *= R), (f || X) && (f && (M += n * -f, D += o * -f, L += c * -f + f), X && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset), m > M && M > -m && (M = T), m > D && D > -m && (D = T), m > L && L > -m && (L = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? T : e) + w + (m > s && s > -m ? T : s) + w + (m > a && a > -m ? T : a), b += w + (m > h && h > -m ? T : h) + w + (m > i && i > -m ? T : i) + w + (m > r && r > -m ? T : r), A || O ? (b += w + (m > l && l > -m ? T : l) + w + (m > d && d > -m ? T : d) + w + (m > n && n > -m ? T : n), b += w + (m > o && o > -m ? T : o) + w + (m > c && c > -m ? T : c) + w + (m > u && u > -m ? T : u) + w) : b += ",0,0,0,0,1,0,", b += M + w + D + w + L + w + (Y ? 1 + -L / Y : 1) + ")", P[kt] = b
                    };
                c = At.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, r, a, l) {
                        if (n._lastParsedTransform === l) return r;
                        n._lastParsedTransform = l;
                        var c, h, d, u, p, f, m, _, g, v, y = t._gsTransform,
                            b = t.style,
                            w = 1e-6,
                            T = xt.length,
                            x = l,
                            k = {},
                            S = "transformOrigin";
                        if (l.display ? (u = Z(t, "display"), b.display = "block", c = Xt(t, s, !0, l.parseTransform), b.display = u) : c = Xt(t, s, !0, l.parseTransform), n._transform = c, "string" == typeof x.transform && kt) u = Y.style, u[kt] = x.transform, u.display = "block", u.position = "absolute", L.body.appendChild(Y), h = Xt(Y, null, !1), L.body.removeChild(Y), h.perspective || (h.perspective = c.perspective), null != x.xPercent && (h.xPercent = rt(x.xPercent, c.xPercent)), null != x.yPercent && (h.yPercent = rt(x.yPercent, c.yPercent));
                        else if ("object" == typeof x) {
                            if (h = {
                                    scaleX: rt(null != x.scaleX ? x.scaleX : x.scale, c.scaleX),
                                    scaleY: rt(null != x.scaleY ? x.scaleY : x.scale, c.scaleY),
                                    scaleZ: rt(x.scaleZ, c.scaleZ),
                                    x: rt(x.x, c.x),
                                    y: rt(x.y, c.y),
                                    z: rt(x.z, c.z),
                                    xPercent: rt(x.xPercent, c.xPercent),
                                    yPercent: rt(x.yPercent, c.yPercent),
                                    perspective: rt(x.transformPerspective, c.perspective)
                                }, _ = x.directionalRotation, null != _)
                                if ("object" == typeof _)
                                    for (u in _) x[u] = _[u];
                                else x.rotation = _;
                                "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = rt(x.x, c.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = rt(x.y, c.yPercent)), h.rotation = ot("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : c.rotation, c.rotation, "rotation", k), Ct && (h.rotationX = ot("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : c.rotationX || 0, c.rotationX, "rotationX", k), h.rotationY = ot("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : c.rotationY || 0, c.rotationY, "rotationY", k)), h.skewX = null == x.skewX ? c.skewX : ot(x.skewX, c.skewX), h.skewY = null == x.skewY ? c.skewY : ot(x.skewY, c.skewY), (d = h.skewY - c.skewY) && (h.skewX += d, h.rotation += d)
                        }
                        for (Ct && null != x.force3D && (c.force3D = x.force3D, m = !0), c.skewType = x.skewType || c.skewType || o.defaultSkewType, f = c.force3D || c.z || c.rotationX || c.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == x.scale || (h.scaleZ = 1); --T > -1;) i = xt[T], p = h[i] - c[i], (p > w || -w > p || null != x[i] || null != D[i]) && (m = !0, r = new mt(c, i, c[i], p, r), i in k && (r.e = k[i]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                        return p = x.transformOrigin, c.svg && (p || x.svgOrigin) && (g = c.xOffset, v = c.yOffset, It(t, nt(p), h, x.svgOrigin, x.smoothOrigin), r = _t(c, "xOrigin", (y ? c : h).xOrigin, h.xOrigin, r, S), r = _t(c, "yOrigin", (y ? c : h).yOrigin, h.yOrigin, r, S), (g !== c.xOffset || v !== c.yOffset) && (r = _t(c, "xOffset", y ? g : c.xOffset, c.xOffset, r, S), r = _t(c, "yOffset", y ? v : c.yOffset, c.yOffset, r, S)), p = Tt ? null : "0px 0px"), (p || Ct && f && c.zOrigin) && (kt ? (m = !0, i = Pt, p = (p || Z(t, i, s, !1, "50% 50%")) + "", r = new mt(b, i, 0, 0, r, -1, S), r.b = b[i], r.plugin = a, Ct ? (u = c.zOrigin, p = p.split(" "), c.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, r.xs0 = r.e = p[0] + " " + (p[1] || "50%") + " 0px", r = new mt(c, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = c.zOrigin) : r.xs0 = r.e = p) : nt(p + "", c)), m && (n._transformType = c.svg && Tt || !f && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), bt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), bt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, o) {
                        e = this.format(e);
                        var a, l, c, h, d, u, p, f, m, _, g, v, y, b, w, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; x.length > l; l++) this.p.indexOf("border") && (x[l] = U(x[l])), d = h = Z(t, x[l], s, !1, "0px"), -1 !== d.indexOf(" ") && (h = d.split(" "), d = h[0], h = h[1]), u = c = a[l], p = parseFloat(d), v = d.substr((p + "").length), y = "=" === u.charAt(1), y ? (f = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), f *= parseFloat(u), g = u.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(u), g = u.substr((f + "").length)), "" === g && (g = n[i] || v), g !== v && (b = G(t, "borderLeft", p, v), w = G(t, "borderTop", p, v), "%" === g ? (d = 100 * (b / m) + "%", h = 100 * (w / _) + "%") : "em" === g ? (T = G(t, "borderLeft", 1, "em"), d = b / T + "em", h = w / T + "em") : (d = b + "px", h = w + "px"), y && (u = parseFloat(d) + f + g, c = parseFloat(h) + f + g)), o = gt(k, x[l], d + " " + h, u + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ut("0px 0px 0px 0px", !1, !0)
                }), bt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, o) {
                        var a, l, c, h, d, u, p = "background-position",
                            f = s || V(t, null),
                            _ = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (u = Z(t, "backgroundImage").replace(C, ""), u && "none" !== u)) {
                            for (a = _.split(" "), l = g.split(" "), z.setAttribute("src", u), c = 2; --c > -1;) _ = a[c], h = -1 !== _.indexOf("%"), h !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? t.offsetWidth - z.width : t.offsetHeight - z.height, a[c] = h ? parseFloat(_) / 100 * d + "px" : 100 * (parseFloat(_) / d) + "%");
                            _ = a.join(" ")
                        }
                        return this.parseComplex(t.style, _, g, r, o)
                    },
                    formatter: nt
                }), bt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), bt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), bt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), bt("transformStyle", {
                    prefix: !0
                }), bt("backfaceVisibility", {
                    prefix: !0
                }), bt("userSelect", {
                    prefix: !0
                }), bt("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), bt("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), bt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, o) {
                        var a, l, c;
                        return 9 > m ? (l = t.currentStyle, c = 8 > m ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(Z(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                    }
                }), bt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), bt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, s) {
                        return s
                    }
                }), bt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, o) {
                        return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", s, !1, "0px") + " " + Z(t, "borderTopStyle", s, !1, "solid") + " " + Z(t, "borderTopColor", s, !1, "#000")), this.format(e), r, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                    }
                }), bt("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), bt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s) {
                        var r = t.style,
                            o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new mt(r, o, 0, 0, s, -1, i, !1, 0, r[o], e)
                    }
                });
                var Wt = function(t) {
                    var e, i = this.t,
                        n = i.filter || Z(this.data, "filter") || "",
                        s = 0 | this.s + this.c * t;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(w, "opacity=" + s))
                };
                bt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, o) {
                        var a = parseFloat(Z(t, "opacity", s, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === Z(t, "visibility", s) && 0 !== e && (a = 0), j ? r = new mt(l, "opacity", a, e - a, r) : (r = new mt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = c ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Wt), c && (r = new mt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var Ht = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    jt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                bt("className", {
                    parser: function(t, e, n, r, o, a, l) {
                        var c, h, d, u, p, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = r._classNamePT = new mt(t, n, 0, 0, o, 2), o.setRatio = jt, o.pr = -11, i = !0, o.b = f, h = K(t, s), d = t._gsClassPT) {
                            for (u = {}, p = d.data; p;) u[p.p] = 1, p = p._next;
                            d.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), c = J(t, h, K(t), l, u), t.setAttribute("class", f), o.data = c.firstMPT, t.style.cssText = m, o = o.xfirst = r.parse(t, c.difs, o, a)
                    }
                });
                var Ft = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", s = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Pt : l[i].p), Ht(o, i);
                        s && (Ht(o, kt), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (bt("clearProps", {
                        parser: function(t, e, n, s, r) {
                            return r = new mt(t, n, 0, 0, r, 2), r.setRatio = Ft, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), vt = c.length; vt--;) wt(c[vt]);
                c = o.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = V(t, ""), r = this._overwriteProps;
                    var c, p, m, _, g, v, y, b, w, x = t.style;
                    if (d && "" === x.zIndex && (c = Z(t, "zIndex", s), ("auto" === c || "" === c) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (_ = x.cssText, c = K(t, s), x.cssText = _ + ";" + e, c = J(t, c, K(t)).difs, !j && T.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, x.cssText = _), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, kt ? u && (d = !0, "" === x.zIndex && (y = Z(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : x.zoom = 1, m = p; m && m._next;) m = m._next;
                        b = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = kt ? zt : Yt, b.data = this._transform || Xt(t, s, !0), b.tween = a, b.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, m = _; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : g) ? p._prev._next = p: _ = p, (p._next = m) ? m._prev = p : g = p, p = v
                        }
                        this._firstPT = _
                    }
                    return !0
                }, c.parse = function(t, e, i, r) {
                    var o, a, c, d, u, p, f, m, _, g, v = t.style;
                    for (o in e) p = e[o], a = l[o], a ? i = a.parse(t, p, o, this, i, r, e) : (u = Z(t, o, s) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && k.test(p) ? (_ || (p = ct(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(v, o, u, p, !0, "transparent", i, 0, r)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (c = parseFloat(u), f = c || 0 === c ? u.substr((c + "").length) : "", ("" === u || "auto" === u) && ("width" === o || "height" === o ? (c = it(t, o, s), f = "px") : "left" === o || "top" === o ? (c = Q(t, o, s), f = "px") : (c = "opacity" !== o ? 0 : 1, f = "")), g = _ && "=" === p.charAt(1), g ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), m = p.replace(b, "")) : (d = parseFloat(p), m = _ ? p.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : f), p = d || 0 === d ? (g ? d + c : d) + m : e[o], f !== m && "" !== m && (d || 0 === d) && c && (c = G(t, o, c, f), "%" === m ? (c /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (u = c + "%")) : "em" === m || "rem" === m ? c /= G(t, o, 1, m) : "px" !== m && (d = G(t, o, d, m), m = "px"), g && (d || 0 === d) && (p = d + c + m)), g && (d += c), !c && 0 !== c || !d && 0 !== d ? void 0 !== v[o] && (p || "NaN" != p + "" && null != p) ? (i = new mt(v, o, d || c || 0, 0, i, -1, o, !1, 0, u, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : u) : N("invalid " + o + " tween value: " + e[o]) : (i = new mt(v, o, c, d - c, i, 0, o, h !== !1 && ("px" === m || "zIndex" === o), 0, u, p), i.xs0 = m)) : i = gt(v, o, u, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, c.setRatio = function(t) {
                    var e, i, n, s = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : r > e && e > -r && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = Math.round(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, c._enableTransforms = function(t) {
                    this._transform = this._transform || Xt(this._target, s, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Nt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Nt, n.data = this
                }, c._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, c._kill = function(e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (n in e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var Bt = function(t, e, i) {
                    var n, s, r, o;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Bt(t[s], e, i);
                    else
                        for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], o = r.type, r.style && (e.push(K(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Bt(r, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var s, r, o, a, l = e.to(t, i, n),
                        c = [l],
                        h = [],
                        d = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Bt(t, h, u), l.render(i, !0, !0), Bt(t, d), l.render(0, !0, !0), l._enabled(!0), s = u.length; --s > -1;)
                        if (r = J(u[s], h[s], d[s]), r.firstMPT) {
                            r = r.difs;
                            for (o in n) p[o] && (r[o] = n[o]);
                            a = {};
                            for (o in r) a[o] = h[s][o];
                            c.push(e.fromTo(u[s], i, a, r))
                        }
                    return c
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), o = r.length, a = {}, l = s._propLookup.roundProps; --o > -1;) a[r[o]] = 1;
                    for (o = r.length; --o > -1;)
                        for (t = r[o], i = s._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e) {
                        var i;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, s, r, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = r - s, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > c || -c > o) && (this._addTween(t, i, s, s + o, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
                    r = s.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = r._class,
                    c = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    h = t.register || function() {},
                    d = function(t, e, i, n) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(s, t), s
                    },
                    u = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    f = d("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    _ = m.prototype = new t;
                return _.constructor = m, _.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), _.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, _.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, s, r, o, a, l = e.taper || "none", c = [], h = 0, d = 0 | (e.points || 20), p = d, f = e.randomize !== !1, m = e.clamp === !0, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / d * p, n = _ ? _.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (r = 1 - i, s = r * r * g) : "in" === l ? s = i * i * g : .5 > i ? (r = 2 * i, s = .5 * r * r * g) : (r = 2 * (1 - i), s = .5 * r * r * g), f ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[h++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new u(1, 1, null), p = d; --p > -1;) o = c[p], a = new u(o.x, o.y, a);
                    this._prev = new u(0, 0, 0 !== a.t ? a : a.next)
                }, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, _.config = function(t) {
                    return new i(t)
                }, i.ease = new i, d("Bounce", c("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", c("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var s = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                        return new s(t, e)
                    }, s
                }, d("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), d("Expo", c("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", c("SineOut", function(t) {
                    return Math.sin(t * a)
                }), c("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), c("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), h(s.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, s, r, o, a, l = function(t) {
                    var e, n = t.split("."),
                        s = i;
                    for (e = 0; n.length > e; e++) s[n[e]] = s = s[n[e]] || {};
                    return s
                },
                c = l("com.greensock"),
                h = 1e-10,
                d = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                u = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(n, s, r, o) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = r;
                    var a = [];
                    this.check = function(c) {
                        for (var h, d, u, p, _, g = s.length, v = g; --g > -1;)(h = f[s[g]] || new m(s[g], [])).gsClass ? (a[g] = h.gsClass, v--) : c && h.sc.push(this);
                        if (0 === v && r)
                            for (d = ("com.greensock." + n).split("."), u = d.pop(), p = l(d.join("."))[u] = this.gsClass = r.apply(r, a), o && (i[u] = p, _ = "undefined" != typeof module && module.exports, !_ && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && _ && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                g = c._class = function(t, e, i) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, i), e
                };
            _.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                b = g("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                w = b.map = {},
                T = b.register = function(t, e, i, n) {
                    for (var s, r, o, a, l = e.split(","), h = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], s = n ? g("easing." + r, null, !0) : c.easing[r] || {}, o = d.length; --o > -1;) a = d[o], w[r + "." + a] = w[a + r] = s[a] = t.getRatio ? t : t[a] || new t
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) r = n[s] + ",Power" + s, T(new b(null, null, 1, s), r, "easeOut", !0), T(new b(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), r, "easeInOut");
            w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
            var x = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = x.prototype, r.addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var r, l, c = this._listeners[t],
                    h = 0;
                for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1;) r = c[l], r.c === e && r.s === i ? c.splice(l, 1) : 0 === h && s > r.pr && (h = l + 1);
                c.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== o || a || o.wake()
            }, r.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                C = P();
            for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !k;) k = t[n[s] + "RequestAnimationFrame"], S = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, n, s, r, l, c = this,
                    d = P(),
                    p = e !== !1 && k,
                    f = 500,
                    m = 33,
                    _ = "tick",
                    g = function(t) {
                        var e, o, a = P() - C;
                        a > f && (d += a - m), C += a, c.time = (C - d) / 1e3, e = c.time - l, (!i || e > 0 || t === !0) && (c.frame++, l += e + (e >= r ? .004 : r - e), o = !0), t !== !0 && (s = n(g)), o && c.dispatchEvent(_)
                    };
                x.call(c), c.time = c.frame = 0, c.tick = function() {
                    g(!0)
                }, c.lagSmoothing = function(t, e) {
                    f = t || 1 / h, m = Math.min(e, f, 0)
                }, c.sleep = function() {
                    null != s && (p && S ? S(s) : clearTimeout(s), n = u, s = null, c === o && (a = !1))
                }, c.wake = function() {
                    null !== s ? c.sleep() : c.frame > 10 && (C = P() - f + 5), n = 0 === i ? u : p && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                    }, c === o && (a = !0), g(2)
                }, c.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
                }, c.fps(t), setTimeout(function() {
                    p && 5 > c.frame && c.useRAF(!1)
                }, 1500)
            }), r = c.Ticker.prototype = new c.events.EventDispatcher, r.constructor = c.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    a || o.wake();
                    var i = this.vars.useFrames ? q : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = A.ticker = new c.Ticker, r = A.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var O = function() {
                a && P() - C > 2e3 && o.wake(), setTimeout(O, 2e3)
            };
            O(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, r.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (M.length && Z(), this.render(t, e, !1), M.length && Z())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var R = g("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = R.prototype = new A, r.constructor = R, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, r.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var E = g("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                    var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? B[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], s = 0; o.length > s; s++) r = o[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(d(r))) : (this._siblings[s] = G(r, this, !1), 1 === l && this._siblings[s].length > 1 && K(r, this, null, 1, this._siblings[s])) : (r = o[s--] = E.selector(r), "string" == typeof r && o.splice(s + 1, 1)) : o.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
                }, !0),
                $ = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                I = function(t, e) {
                    var i, n = {};
                    for (i in t) N[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = E.prototype = new A, r.constructor = E, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, E.version = "1.18.0", E.defaultEase = r._ease = new b(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = 120, E.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, E.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [],
                D = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                X = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                Y = function(t, e, i, n) {
                    var s, r, o, a, l, c, h, d = [t, e],
                        u = 0,
                        p = "",
                        f = 0;
                    for (d.start = t, i && (i(d), t = d[0], e = d[1]), d.length = 0, s = t.match(L) || [], r = e.match(L) || [], n && (n._next = null, n.blob = 1, d._firstPT = n), l = r.length, a = 0; l > a; a++) h = r[a], c = e.substr(u, e.indexOf(h, u) - u), p += c || !a ? c : ",", u += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), h === s[a] || a >= s.length ? p += h : (p && (d.push(p), p = ""), o = parseFloat(s[a]), d.push(o), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: o,
                        c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                        f: 0,
                        r: f && 4 > f
                    }), u += h.length;
                    return p += e.substr(u), p && d.push(p), d.setRatio = X, d
                },
                z = function(t, e, i, n, s, r, o, a) {
                    var l, c, h = "get" === i ? t[e] : i,
                        d = typeof t[e],
                        u = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === d,
                            pg: 0,
                            n: s || e,
                            r: r,
                            pr: 0,
                            c: u ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    return "number" !== d && ("function" === d && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = o ? t[c](o) : t[c]()), "string" == typeof h && (o || isNaN(h)) ? (p.fp = o, l = Y(h, n, a || E.defaultStringFilter, p), p = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0
                    }) : u || (p.c = parseFloat(n) - parseFloat(h) || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                W = E._internals = {
                    isArray: p,
                    isSelector: $,
                    lazyTweens: M,
                    blobDif: Y
                },
                H = E._plugins = {},
                j = W.tweenLookup = {},
                F = 0,
                N = W.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                B = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = A._rootFramesTimeline = new R,
                U = A._rootTimeline = new R,
                V = 30,
                Z = W.lazyRender = function() {
                    var t, e = M.length;
                    for (D = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            U._startTime = o.time, q._startTime = o.frame, U._active = q._active = !0, setTimeout(Z, 1), A._updateRoot = E.render = function() {
                var t, e, i;
                if (M.length && Z(), U.render((o.time - U._startTime) * U._timeScale, !1, !1), q.render((o.frame - q._startTime) * q._timeScale, !1, !1), M.length && Z(), o.frame >= V) {
                    V = o.frame + (parseInt(E.autoSleep, 10) || 120);
                    for (i in j) {
                        for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete j[i]
                    }
                    if (i = U._first, (!i || i._paused) && E.autoSleep && !q._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", A._updateRoot);
            var G = function(t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (j[r || (t._gsTweenID = r = "t" + F++)] || (j[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = j[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return j[r].tweens
                },
                Q = function(t, e, i, n) {
                    var s, r, o = t.vars.onOverwrite;
                    return o && (s = o(t, e, i, n)), o = E.onOverwrite, o && (r = o(t, e, i, n)), s !== !1 && r !== !1
                },
                K = function(t, e, i, n, s) {
                    var r, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; l > r; r++)
                            if ((a = s[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var c, d = e._startTime + h,
                        u = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || J(e, 0, f), 0 === J(a, c, f) && (u[p++] = a)) : d >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > d && ((f || !a._initted) && 2e-10 >= d - a._startTime || (u[p++] = a)));
                    for (r = p; --r > -1;)
                        if (a = u[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Q(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                J = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * h > r - e ? h : (r += t.totalDuration() / t._timeScale / s) > e + h ? 0 : r - e - h
                };
            r._init = function() {
                var t, e, i, n, s, r = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!r.immediateRender,
                    c = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in r.startAt) s[n] = r.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = E.to(this.target, 0, s), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (r.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in r) N[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, r.easeParams) : w[c] || E.defaultEase : E.defaultEase, r.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, n, s) {
                var r, o, a, l, c, h;
                if (null == e) return !1;
                D[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && I(this.vars, e);
                for (r in this.vars)
                    if (h = this.vars[r], N[r]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                    else if (H[r] && (l = new H[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[r] = z.call(this, e, r, "get", h, r, 0, null, this.vars.stringFilter);
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), a)
            }, r.render = function(t, e, i) {
                var n, s, r, o, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > c || c === h && "isPause" !== this.data) && c !== t && (i = !0, c > h && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || c === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || c === t ? t : h)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var d = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && d >= .5) && (d = 1 - d), 3 === u && (d *= 2), 1 === p ? d *= d : 2 === p ? d *= d * d : 3 === p ? d *= d * d * d : 4 === p && (d *= d * d * d * d), this.ratio = 1 === u ? 1 - d : 2 === u ? d : .5 > t / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, M.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var n, s, r, o, a, l, c, h, d, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || $(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (r in c) a[r] && (d || (d = []), d.push(r));
                            if ((d || !t) && !Q(this, i, e, d)) return !1
                        }
                        for (r in c)(o = a[r]) && (u && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(c) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), h && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
            }, r._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = G(n[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, E.to = function(t, e, i) {
                return new E(t, e, i)
            }, E.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
            }, E.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
            }, E.delayedCall = function(t, e, i, n, s) {
                return new E(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, E.set = function(t, e) {
                return new E(t, 0, e)
            }, E.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : E.selector(t) || t;
                var i, n, s, r;
                if ((p(t) || $(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else
                    for (n = G(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = E.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var tt = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (r = tt.prototype, tt.version = "1.18.0", tt.API = 2, r._firstPT = null, r._addTween = z, r.setRatio = X, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, E._onPluginEvent = function(t, e) {
                    var i, n, s, r, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : r) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : r = a, a = o
                        }
                        a = e._firstPT = s
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = s || []
                        }, t.global === !0),
                        a = o.prototype = new tt(i);
                    a.constructor = o, o.API = t.API;
                    for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, n = t._gsQueue) {
                for (s = 0; n.length > s; s++) n[s]();
                for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t = document.documentElement,
            e = window,
            i = function(i, n) {
                var s = "x" === n ? "Width" : "Height",
                    r = "scroll" + s,
                    o = "client" + s,
                    a = document.body;
                return i === e || i === t || i === a ? Math.max(t[r], a[r]) - (e["inner" + s] || t[o] || a[o]) : i[r] - i["offset" + s]
            },
            n = function(t) {
                return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null
            },
            s = function(i, n) {
                var s = "scroll" + ("x" === n ? "Left" : "Top");
                return i === e && (null != i.pageXOffset ? s = "page" + n.toUpperCase() + "Offset" : i = null != t[s] ? t : document.body),
                    function() {
                        return i[s]
                    }
            },
            r = function(i, r) {
                var o = n(i).getBoundingClientRect(),
                    a = !r || r === e || r === document.body,
                    l = (a ? t : r).getBoundingClientRect(),
                    c = {
                        x: o.left - l.left,
                        y: o.top - l.top
                    };
                return !a && r && (c.x += s(r, "x")(), c.y += s(r, "y")()), c
            },
            o = function(t, e, n) {
                var s = typeof t;
                return "number" === s || "string" === s && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), r(t, e)[n])
            },
            a = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.8.0",
                init: function(t, i, n) {
                    return this._wdw = t === e, this._target = t, this._tween = n, "object" != typeof i ? (i = {
                        y: i
                    }, "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                        y: i,
                        x: i
                    }), this.vars = i, this._autoKill = i.autoKill !== !1, this.getX = s(t, "x"), this.getY = s(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        r = s - this.yPrev,
                        o = n - this.xPrev,
                        l = a.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > l || -l > o) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (r > l || -l > r) && s < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            l = a.prototype;
        a.max = i, a.getOffset = r, a.autoKillThreshold = 7, l._kill = function(t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("ScrollToPlugin"), ! function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var s = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "http://localhost:8080/dist", e(0)
        }([function(t, e, i) {
            "function" != typeof Promise && (window.Promise = i(1));
            var n = {
                version: "0.0.10",
                BaseTransition: i(4),
                BaseView: i(6),
                BaseCache: i(8),
                Dispatcher: i(7),
                HistoryManager: i(9),
                Pjax: i(10),
                Prefetch: i(13),
                Utils: i(5)
            };
            t.exports = n
        }, function(t, e, i) {
            (function(e) {
                ! function(i) {
                    function n() {}

                    function s(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }

                    function r(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
                    }

                    function o(t, e) {
                        for (; 3 === t._state;) t = t._value;
                        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void p(function() {
                            var t = 1 === n._state ? e.onFulfilled : e.onRejected;
                            if (null === t) return void(1 === n._state ? a : l)(e.promise, n._value);
                            var i;
                            try {
                                i = t(n._value)
                            } catch (n) {
                                return void l(e.promise, n)
                            }
                            a(e.promise, i)
                        }))
                    }

                    function a(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var i = e.then;
                                if (e instanceof r) return t._state = 3, t._value = e, void c(t);
                                if ("function" == typeof i) return void d(s(i, e), t)
                            }
                            t._state = 1, t._value = e, c(t)
                        } catch (e) {
                            l(t, e)
                        }
                    }

                    function l(t, e) {
                        t._state = 2, t._value = e, c(t)
                    }

                    function c(t) {
                        2 === t._state && 0 === t._deferreds.length && p(function() {
                            t._handled || f(t._value)
                        });
                        for (var e = 0, i = t._deferreds.length; i > e; e++) o(t, t._deferreds[e]);
                        t._deferreds = null
                    }

                    function h(t, e, i) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
                    }

                    function d(t, e) {
                        var i = !1;
                        try {
                            t(function(t) {
                                i || (i = !0, a(e, t))
                            }, function(t) {
                                i || (i = !0, l(e, t))
                            })
                        } catch (t) {
                            if (i) return;
                            i = !0, l(e, t)
                        }
                    }
                    var u = setTimeout,
                        p = "function" == typeof e && e || function(t) {
                            u(t, 0)
                        },
                        f = function(t) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                        };
                    r.prototype["catch"] = function(t) {
                        return this.then(null, t)
                    }, r.prototype.then = function(t, e) {
                        var i = new this.constructor(n);
                        return o(this, new h(t, e, i)), i
                    }, r.all = function(t) {
                        var e = Array.prototype.slice.call(t);
                        return new r(function(t, i) {
                            function n(t, r) {
                                try {
                                    if (r && ("object" == typeof r || "function" == typeof r)) {
                                        var o = r.then;
                                        if ("function" == typeof o) return void o.call(r, function(e) {
                                            n(t, e)
                                        }, i)
                                    }
                                    e[t] = r, 0 === --s && a(e)
                                } catch (a) {
                                    i(a)
                                }
                            }
                            if (0 === e.length) return t([]);
                            for (var s = e.length, r = 0; r < e.length; r++) n(r, e[r])
                        })
                    }, r.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
                            e(t)
                        })
                    }, r.reject = function(t) {
                        return new r(function(e, i) {
                            i(t)
                        })
                    }, r.race = function(t) {
                        return new r(function(e, i) {
                            for (var n = 0, s = t.length; s > n; n++) t[n].then(e, i)
                        })
                    }, r._setImmediateFn = function(t) {
                        p = t
                    }, r._setUnhandledRejectionFn = function(t) {
                        f = t
                    }, "undefined" != typeof t && t.exports ? t.exports = r : i.Promise || (i.Promise = r)
                }(this)
            }).call(e, i(2).setImmediate)
        }, function(t, e, i) {
            (function(t, n) {
                function s(t, e) {
                    this._id = t, this._clearFn = e
                }
                var r = i(3).nextTick,
                    o = Function.prototype.apply,
                    a = Array.prototype.slice,
                    l = {},
                    c = 0;
                e.setTimeout = function() {
                    return new s(o.call(setTimeout, window, arguments), clearTimeout)
                }, e.setInterval = function() {
                    return new s(o.call(setInterval, window, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function(t) {
                    t.close()
                }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }, e.enroll = function(t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function(t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function(t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, e.setImmediate = "function" == typeof t ? t : function(t) {
                    var i = c++,
                        n = arguments.length < 2 ? !1 : a.call(arguments, 1);
                    return l[i] = !0, r(function() {
                        l[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
                    }), i
                }, e.clearImmediate = "function" == typeof n ? n : function(t) {
                    delete l[t]
                }
            }).call(e, i(2).setImmediate, i(2).clearImmediate)
        }, function(t, e) {
            function i() {
                c && o && (c = !1, o.length ? l = o.concat(l) : h = -1, l.length && n())
            }

            function n() {
                if (!c) {
                    var t = setTimeout(i);
                    c = !0;
                    for (var e = l.length; e;) {
                        for (o = l, l = []; ++h < e;) o && o[h].run();
                        h = -1, e = l.length
                    }
                    o = null, c = !1, clearTimeout(t)
                }
            }

            function s(t, e) {
                this.fun = t, this.array = e
            }

            function r() {}
            var o, a = t.exports = {},
                l = [],
                c = !1,
                h = -1;
            a.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                l.push(new s(t, e)), 1 !== l.length || c || setTimeout(n, 0)
            }, s.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = r, a.addListener = r, a.once = r, a.off = r, a.removeListener = r, a.removeAllListeners = r, a.emit = r, a.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function() {
                return "/"
            }, a.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function() {
                return 0
            }
        }, function(t, e, i) {
            var n = i(5),
                s = {
                    oldContainer: void 0,
                    newContainer: void 0,
                    newContainerLoading: void 0,
                    extend: function(t) {
                        return n.extend(this, t)
                    },
                    init: function(t, e) {
                        var i = this;
                        return this.oldContainer = t, this._newContainerPromise = e, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(t) {
                            i.newContainer = t, i.newContainerReady.resolve()
                        }), this.deferred.promise
                    },
                    done: function() {
                        this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                    },
                    start: function() {}
                };
            t.exports = s
        }, function(t, e) {
            var i = {
                getCurrentUrl: function() {
                    return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
                },
                cleanLink: function(t) {
                    return t.replace(/#.*/, "")
                },
                xhrTimeout: 5e3,
                xhr: function(t) {
                    var e = this.deferred(),
                        i = new XMLHttpRequest;
                    return i.onreadystatechange = function() {
                        return 4 === i.readyState ? 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200")) : void 0
                    }, i.ontimeout = function() {
                        return e.reject(new Error("xhr: Timeout exceeded"))
                    }, i.open("GET", t), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), e.promise
                },
                extend: function(t, e) {
                    var i = Object.create(t);
                    for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                    return i
                },
                deferred: function() {
                    return new function() {
                        this.resolve = null, this.reject = null, this.promise = new Promise(function(t, e) {
                            this.resolve = t, this.reject = e
                        }.bind(this))
                    }
                },
                getPort: function(t) {
                    var e = "undefined" != typeof t ? t : window.location.port,
                        i = window.location.protocol;
                    return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(7),
                s = i(5),
                r = {
                    namespace: null,
                    extend: function(t) {
                        return s.extend(this, t)
                    },
                    init: function() {
                        var t = this;
                        n.on("initStateChange", function(e, i) {
                            i && i.namespace === t.namespace && t.onLeave()
                        }), n.on("newPageReady", function(e, i, n) {
                            t.container = n, e.namespace === t.namespace && t.onEnter()
                        }), n.on("transitionCompleted", function(e, i) {
                            e.namespace === t.namespace && t.onEnterCompleted(), i && i.namespace === t.namespace && t.onLeaveCompleted()
                        })
                    },
                    onEnter: function() {},
                    onEnterCompleted: function() {},
                    onLeave: function() {},
                    onLeaveCompleted: function() {}
                };
            t.exports = r
        }, function(t, e) {
            var i = {
                events: {},
                on: function(t, e) {
                    this.events[t] = this.events[t] || [], this.events[t].push(e)
                },
                off: function(t, e) {
                    t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1)
                },
                trigger: function(t) {
                    if (t in this.events != 0)
                        for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(5),
                s = {
                    data: {},
                    extend: function(t) {
                        return n.extend(this, t)
                    },
                    set: function(t, e) {
                        this.data[t] = e
                    },
                    get: function(t) {
                        return this.data[t]
                    },
                    reset: function() {
                        this.data = {}
                    }
                };
            t.exports = s
        }, function(t, e) {
            var i = {
                history: [],
                add: function(t, e) {
                    e || (e = void 0), this.history.push({
                        url: t,
                        namespace: e
                    })
                },
                currentStatus: function() {
                    return this.history[this.history.length - 1]
                },
                prevStatus: function() {
                    var t = this.history;
                    return t.length < 2 ? null : t[t.length - 2]
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(5),
                s = i(7),
                r = i(11),
                o = i(8),
                a = i(9),
                l = i(12),
                c = {
                    Dom: l,
                    History: a,
                    Cache: o,
                    cacheEnabled: !0,
                    transitionProgress: !1,
                    ignoreClassLink: "no-barba",
                    start: function() {
                        this.init()
                    },
                    init: function() {
                        var t = this.Dom.getContainer(),
                            e = this.Dom.getWrapper();
                        e.setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), s.trigger("initStateChange", this.History.currentStatus()), s.trigger("newPageReady", this.History.currentStatus(), {}, t), s.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                    },
                    bindEvents: function() {
                        document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                    },
                    getCurrentUrl: function() {
                        return n.cleanLink(n.getCurrentUrl())
                    },
                    goTo: function(t) {
                        window.history.pushState(null, null, t), this.onStateChange()
                    },
                    forceGoTo: function(t) {
                        window.location = t
                    },
                    load: function(t) {
                        var e, i = n.deferred(),
                            s = this;
                        return e = this.Cache.get(t), e || (e = n.xhr(t), this.Cache.set(t, e)), e.then(function(t) {
                            var e = s.Dom.parseResponse(t);
                            s.Dom.putContainer(e), s.cacheEnabled || s.Cache.reset(), i.resolve(e)
                        }, function() {
                            s.forceGoTo(t), i.reject()
                        }), i.promise
                    },
                    onLinkClick: function(t) {
                        for (var e = t.target; e && !e.href;) e = e.parentNode;
                        this.preventCheck(t, e) && (t.stopPropagation(), t.preventDefault(), s.trigger("linkClicked", e), this.goTo(e.href))
                    },
                    preventCheck: function(t, e) {
                        return window.history.pushState && e && e.href ? t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? !1 : e.target && "_blank" === e.target ? !1 : window.location.protocol !== e.protocol || window.location.hostname !== e.hostname ? !1 : n.getPort() !== n.getPort(e.port) ? !1 : e.href.indexOf("#") > -1 ? !1 : n.cleanLink(e.href) == n.cleanLink(location.href) ? !1 : !e.classList.contains(this.ignoreClassLink) : !1
                    },
                    getTransition: function() {
                        return r
                    },
                    onStateChange: function() {
                        var t = this.getCurrentUrl();
                        if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                        this.History.add(t);
                        var e = this.load(t),
                            i = Object.create(this.getTransition());
                        this.transitionProgress = !0, s.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                        var n = i.init(this.Dom.getContainer(), e);
                        e.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this))
                    },
                    onNewContainerLoaded: function(t) {
                        var e = this.History.currentStatus();
                        e.namespace = this.Dom.getNamespace(t), s.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t)
                    },
                    onTransitionEnd: function() {
                        this.transitionProgress = !1, s.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                    }
                };
            t.exports = c
        }, function(t, e, i) {
            var n = i(4),
                s = n.extend({
                    start: function() {
                        this.newContainerLoading.then(this.finish.bind(this))
                    },
                    finish: function() {
                        document.body.scrollTop = 0, this.done()
                    }
                });
            t.exports = s
        }, function(t, e) {
            var i = {
                dataNamespace: "namespace",
                wrapperId: "page-wrapper",
                containerClass: "page-container",
                parseResponse: function(t) {
                    var e = document.createElement("div");
                    e.innerHTML = t;
                    var i = e.querySelector("title");
                    return i && (document.title = i.textContent), this.getContainer(e)
                },
                getWrapper: function() {
                    var t = document.getElementById(this.wrapperId);
                    if (!t) throw new Error("Barba.js: wrapper not found!");
                    return t
                },
                getContainer: function(t) {
                    if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                    var e = this.parseContainer(t);
                    if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                    return e
                },
                getNamespace: function(t) {
                    return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
                },
                putContainer: function(t) {
                    t.style.visibility = "hidden";
                    var e = this.getWrapper();
                    e.appendChild(t)
                },
                parseContainer: function(t) {
                    return t.querySelector("." + this.containerClass)
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(5),
                s = i(10),
                r = {
                    ignoreClassLink: "no-barba-prefetch",
                    init: function() {
                        return window.history.pushState ? (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))) : !1
                    },
                    onLinkEnter: function(t) {
                        for (var e = t.target; e && !e.href;) e = e.parentNode;
                        if (e && !e.classList.contains(this.ignoreClassLink)) {
                            var i = e.href;
                            if (s.preventCheck(t, e) && !s.Cache.get(i)) {
                                var r = n.xhr(i);
                                s.Cache.set(i, r)
                            }
                        }
                    }
                };
            t.exports = r
        }])
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    s = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; s;) {
                    var o = r && r[s];
                    o && (this.off(t, s), delete r[s]), s.apply(this, e), n += o ? 0 : 1, s = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, r) {
            return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new s(t, e, r)
        }

        function r(t) {
            this.img = t
        }

        function o(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, s.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var s = i[n];
                    this.addImage(s)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var o = r[n];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return s.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var s = n && n[2];
                    s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
                }
        }, s.prototype.addImage = function(t) {
            var e = new r(t);
            this.images.push(e)
        }, s.prototype.addBackground = function(t, e) {
            var i = new o(t, e);
            this.images.push(i)
        }, s.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, s.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, o.prototype = Object.create(r.prototype), o.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, o.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, s.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var i = new s(this, t, e);
                return i.jqDeferred.promise(a(this))
            })
        }, s.makeJQueryPlugin(), s
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var o = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                u = 0,
                p = 0,
                f = 0,
                m = 0;
            if (e = t.event.fix(o), e.type = "mousewheel", "detail" in o && (u = -1 * o.detail), "wheelDelta" in o && (u = o.wheelDelta), "wheelDeltaY" in o && (u = o.wheelDeltaY), "wheelDeltaX" in o && (d = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (d = -1 * u, u = 0), c = 0 === u ? d : u, "deltaY" in o && (u = -1 * o.deltaY, c = u), "deltaX" in o && (d = o.deltaX, 0 === u && (c = -1 * d)), 0 !== u || 0 !== d) {
                if (1 === o.deltaMode) {
                    var _ = t.data(this, "mousewheel-line-height");
                    c *= _, u *= _, d *= _
                } else if (2 === o.deltaMode) {
                    var g = t.data(this, "mousewheel-page-height");
                    c *= g, u *= g, d *= g
                }
                if (p = Math.max(Math.abs(u), Math.abs(d)), (!r || r > p) && (r = p, n(o, p) && (r /= 40)), n(o, p) && (c /= 40, d /= 40, u /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), h.settings.normalizeOffset && this.getBoundingClientRect) {
                    var v = this.getBoundingClientRect();
                    f = e.clientX - v.left, m = e.clientY - v.top
                }
                return e.deltaX = d, e.deltaY = u, e.deltaFactor = r, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, d, u), s && clearTimeout(s), s = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            r = null
        }

        function n(t, e) {
            return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var s, r, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = o.length; c;) t.event.fixHooks[o[--c]] = t.event.mouseHooks;
        var h = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }), ! function t(e, i, n) {
        function s(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (r) return r(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var h = i[o] = {
                    exports: {}
                };
                e[o][0].call(h.exports, function(t) {
                    var i = e[o][1][t];
                    return s(i ? i : t)
                }, h, h.exports, t, e, i, n)
            }
            return i[o].exports
        }
        for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
        return s
    }({
        1: [function(t, e, i) {
            "use strict";

            function n(t) {
                t.fn.perfectScrollbar = function(t) {
                    return this.each(function() {
                        if ("object" == typeof t || "undefined" == typeof t) {
                            var e = t;
                            r.get(this) || s.initialize(this, e)
                        } else {
                            var i = t;
                            "update" === i ? s.update(this) : "destroy" === i && s.destroy(this)
                        }
                    })
                }
            }
            var s = t("../main"),
                r = t("../plugin/instances");
            if ("function" == typeof define && define.amd) define(["jquery"], n);
            else {
                var o = window.jQuery ? window.jQuery : window.$;
                "undefined" != typeof o && n(o)
            }
            e.exports = n
        }, {
            "../main": 7,
            "../plugin/instances": 18
        }],
        2: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                var i = t.className.split(" ");
                i.indexOf(e) < 0 && i.push(e), t.className = i.join(" ")
            }

            function s(t, e) {
                var i = t.className.split(" "),
                    n = i.indexOf(e);
                n >= 0 && i.splice(n, 1), t.className = i.join(" ")
            }
            i.add = function(t, e) {
                t.classList ? t.classList.add(e) : n(t, e)
            }, i.remove = function(t, e) {
                t.classList ? t.classList.remove(e) : s(t, e)
            }, i.list = function(t) {
                return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
            }
        }, {}],
        3: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                return window.getComputedStyle(t)[e]
            }

            function s(t, e, i) {
                return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t
            }

            function r(t, e) {
                for (var i in e) {
                    var n = e[i];
                    "number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
                }
                return t
            }
            var o = {};
            o.e = function(t, e) {
                var i = document.createElement(t);
                return i.className = e, i
            }, o.appendTo = function(t, e) {
                return e.appendChild(t), t
            }, o.css = function(t, e, i) {
                return "object" == typeof e ? r(t, e) : "undefined" == typeof i ? n(t, e) : s(t, e, i)
            }, o.matches = function(t, e) {
                return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
            }, o.remove = function(t) {
                "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
            }, o.queryChildren = function(t, e) {
                return Array.prototype.filter.call(t.childNodes, function(t) {
                    return o.matches(t, e)
                })
            }, e.exports = o
        }, {}],
        4: [function(t, e, i) {
            "use strict";
            var n = function(t) {
                this.element = t, this.events = {}
            };
            n.prototype.bind = function(t, e) {
                "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
            }, n.prototype.unbind = function(t, e) {
                var i = "undefined" != typeof e;
                this.events[t] = this.events[t].filter(function(n) {
                    return !(!i || n === e) || (this.element.removeEventListener(t, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var t in this.events) this.unbind(t)
            };
            var s = function() {
                this.eventElements = []
            };
            s.prototype.eventElement = function(t) {
                var e = this.eventElements.filter(function(e) {
                    return e.element === t
                })[0];
                return "undefined" == typeof e && (e = new n(t), this.eventElements.push(e)), e
            }, s.prototype.bind = function(t, e, i) {
                this.eventElement(t).bind(e, i)
            }, s.prototype.unbind = function(t, e, i) {
                this.eventElement(t).unbind(e, i)
            }, s.prototype.unbindAll = function() {
                for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
            }, s.prototype.once = function(t, e, i) {
                var n = this.eventElement(t),
                    s = function(t) {
                        n.unbind(e, s), i(t)
                    };
                n.bind(e, s)
            }, e.exports = s
        }, {}],
        5: [function(t, e, i) {
            "use strict";
            e.exports = function() {
                function t() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }
            }()
        }, {}],
        6: [function(t, e, i) {
            "use strict";
            var n = t("./class"),
                s = t("./dom"),
                r = i.toInt = function(t) {
                    return parseInt(t, 10) || 0
                },
                o = i.clone = function(t) {
                    if (null === t) return null;
                    if (t.constructor === Array) return t.map(o);
                    if ("object" == typeof t) {
                        var e = {};
                        for (var i in t) e[i] = o(t[i]);
                        return e
                    }
                    return t
                };
            i.extend = function(t, e) {
                var i = o(t);
                for (var n in e) i[n] = o(e[n]);
                return i
            }, i.isEditable = function(t) {
                return s.matches(t, "input,[contenteditable]") || s.matches(t, "select,[contenteditable]") || s.matches(t, "textarea,[contenteditable]") || s.matches(t, "button,[contenteditable]")
            }, i.removePsClasses = function(t) {
                for (var e = n.list(t), i = 0; i < e.length; i++) {
                    var s = e[i];
                    0 === s.indexOf("ps-") && n.remove(t, s)
                }
            }, i.outerWidth = function(t) {
                return r(s.css(t, "width")) + r(s.css(t, "paddingLeft")) + r(s.css(t, "paddingRight")) + r(s.css(t, "borderLeftWidth")) + r(s.css(t, "borderRightWidth"))
            }, i.startScrolling = function(t, e) {
                n.add(t, "ps-in-scrolling"), "undefined" != typeof e ? n.add(t, "ps-" + e) : (n.add(t, "ps-x"), n.add(t, "ps-y"))
            }, i.stopScrolling = function(t, e) {
                n.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? n.remove(t, "ps-" + e) : (n.remove(t, "ps-x"), n.remove(t, "ps-y"))
            }, i.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(t, e, i) {
            "use strict";
            var n = t("./plugin/destroy"),
                s = t("./plugin/initialize"),
                r = t("./plugin/update");
            e.exports = {
                initialize: s,
                update: r,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                stopPropagationOnClick: !0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                s = t("../lib/dom"),
                r = t("./instances");
            e.exports = function(t) {
                var e = r.get(t);
                e && (e.event.unbindAll(), s.remove(e.scrollbarX), s.remove(e.scrollbarY), s.remove(e.scrollbarXRail), s.remove(e.scrollbarYRail), n.removePsClasses(t), r.remove(t))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                function i(t) {
                    return t.getBoundingClientRect()
                }
                var n = function(t) {
                    t.stopPropagation()
                };
                e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", n), e.event.bind(e.scrollbarYRail, "click", function(n) {
                    var r = s.toInt(e.scrollbarYHeight / 2),
                        l = e.railYRatio * (n.pageY - window.pageYOffset - i(e.scrollbarYRail).top - r),
                        c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                        h = l / c;
                    0 > h ? h = 0 : h > 1 && (h = 1), a(t, "top", (e.contentHeight - e.containerHeight) * h), o(t), n.stopPropagation()
                }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", n), e.event.bind(e.scrollbarXRail, "click", function(n) {
                    var r = s.toInt(e.scrollbarXWidth / 2),
                        l = e.railXRatio * (n.pageX - window.pageXOffset - i(e.scrollbarXRail).left - r),
                        c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                        h = l / c;
                    0 > h ? h = 0 : h > 1 && (h = 1), a(t, "left", (e.contentWidth - e.containerWidth) * h - e.negativeScrollAdjustment), o(t), n.stopPropagation()
                })
            }
            var s = t("../../lib/helper"),
                r = t("../instances"),
                o = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) {
                var e = r.get(t);
                n(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                function i(i) {
                    var s = n + i * e.railXRatio,
                        o = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                    0 > s ? e.scrollbarXLeft = 0 : s > o ? e.scrollbarXLeft = o : e.scrollbarXLeft = s;
                    var a = r.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                    c(t, "left", a)
                }
                var n = null,
                    s = null,
                    a = function(e) {
                        i(e.pageX - s), l(t), e.stopPropagation(), e.preventDefault()
                    },
                    h = function() {
                        r.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a)
                    };
                e.event.bind(e.scrollbarX, "mousedown", function(i) {
                    s = i.pageX, n = r.toInt(o.css(e.scrollbarX, "left")) * e.railXRatio, r.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", h), i.stopPropagation(), i.preventDefault()
                })
            }

            function s(t, e) {
                function i(i) {
                    var s = n + i * e.railYRatio,
                        o = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                    0 > s ? e.scrollbarYTop = 0 : s > o ? e.scrollbarYTop = o : e.scrollbarYTop = s;
                    var a = r.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                    c(t, "top", a)
                }
                var n = null,
                    s = null,
                    a = function(e) {
                        i(e.pageY - s), l(t), e.stopPropagation(), e.preventDefault()
                    },
                    h = function() {
                        r.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a)
                    };
                e.event.bind(e.scrollbarY, "mousedown", function(i) {
                    s = i.pageY, n = r.toInt(o.css(e.scrollbarY, "top")) * e.railYRatio, r.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", h), i.stopPropagation(), i.preventDefault()
                })
            }
            var r = t("../../lib/helper"),
                o = t("../../lib/dom"),
                a = t("../instances"),
                l = t("../update-geometry"),
                c = t("../update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                n(t, e), s(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                function i(i, n) {
                    var s = t.scrollTop;
                    if (0 === i) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === s && n > 0 || s >= e.contentHeight - e.containerHeight && 0 > n) return !e.settings.wheelPropagation
                    }
                    var r = t.scrollLeft;
                    if (0 === n) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === r && 0 > i || r >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }
                var n = !1;
                e.event.bind(t, "mouseenter", function() {
                    n = !0
                }), e.event.bind(t, "mouseleave", function() {
                    n = !1
                });
                var o = !1;
                e.event.bind(e.ownerDocument, "keydown", function(c) {
                    if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                        var h = r.matches(e.scrollbarX, ":focus") || r.matches(e.scrollbarY, ":focus");
                        if (n || h) {
                            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (d) {
                                if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                                else
                                    for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                                if (s.isEditable(d)) return
                            }
                            var u = 0,
                                p = 0;
                            switch (c.which) {
                                case 37:
                                    u = -30;
                                    break;
                                case 38:
                                    p = 30;
                                    break;
                                case 39:
                                    u = 30;
                                    break;
                                case 40:
                                    p = -30;
                                    break;
                                case 33:
                                    p = 90;
                                    break;
                                case 32:
                                    p = c.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    p = -90;
                                    break;
                                case 35:
                                    p = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                    break;
                                case 36:
                                    p = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(t, "top", t.scrollTop - p), l(t, "left", t.scrollLeft + u), a(t), o = i(u, p), o && c.preventDefault()
                        }
                    }
                })
            }
            var s = t("../../lib/helper"),
                r = t("../../lib/dom"),
                o = t("../instances"),
                a = t("../update-geometry"),
                l = t("../update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                n(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                function i(i, n) {
                    var s = t.scrollTop;
                    if (0 === i) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === s && n > 0 || s >= e.contentHeight - e.containerHeight && 0 > n) return !e.settings.wheelPropagation
                    }
                    var r = t.scrollLeft;
                    if (0 === n) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === r && 0 > i || r >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }

                function n(t) {
                    var e = t.deltaX,
                        i = -1 * t.deltaY;
                    return "undefined" != typeof e && "undefined" != typeof i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), [e, i]
                }

                function s(e, i) {
                    var n = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (n) {
                        if ("TEXTAREA" !== n.tagName && !window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;
                        var s = n.scrollHeight - n.clientHeight;
                        if (s > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === s && 0 > i)) return !0;
                        var r = n.scrollLeft - n.clientWidth;
                        if (r > 0 && !(0 === n.scrollLeft && 0 > e || n.scrollLeft === r && e > 0)) return !0
                    }
                    return !1
                }

                function a(a) {
                    var c = n(a),
                        h = c[0],
                        d = c[1];
                    s(h, d) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? o(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : o(t, "top", t.scrollTop + h * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (h ? o(t, "left", t.scrollLeft + h * e.settings.wheelSpeed) : o(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), l = !0) : (o(t, "top", t.scrollTop - d * e.settings.wheelSpeed), o(t, "left", t.scrollLeft + h * e.settings.wheelSpeed)), r(t), l = l || i(h, d), l && (a.stopPropagation(), a.preventDefault()))
                }
                var l = !1;
                "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", a) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", a)
            }
            var s = t("../instances"),
                r = t("../update-geometry"),
                o = t("../update-scroll");
            e.exports = function(t) {
                var e = s.get(t);
                n(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                e.event.bind(t, "scroll", function() {
                    r(t)
                })
            }
            var s = t("../instances"),
                r = t("../update-geometry");
            e.exports = function(t) {
                var e = s.get(t);
                n(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                function i() {
                    var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
                }

                function n() {
                    c || (c = setInterval(function() {
                        return r.get(t) ? (a(t, "top", t.scrollTop + h.top), a(t, "left", t.scrollLeft + h.left), void o(t)) : void clearInterval(c)
                    }, 50))
                }

                function l() {
                    c && (clearInterval(c), c = null), s.stopScrolling(t)
                }
                var c = null,
                    h = {
                        top: 0,
                        left: 0
                    },
                    d = !1;
                e.event.bind(e.ownerDocument, "selectionchange", function() {
                    t.contains(i()) ? d = !0 : (d = !1, l())
                }), e.event.bind(window, "mouseup", function() {
                    d && (d = !1, l())
                }), e.event.bind(window, "mousemove", function(e) {
                    if (d) {
                        var i = {
                                x: e.pageX,
                                y: e.pageY
                            },
                            r = {
                                left: t.offsetLeft,
                                right: t.offsetLeft + t.offsetWidth,
                                top: t.offsetTop,
                                bottom: t.offsetTop + t.offsetHeight
                            };
                        i.x < r.left + 3 ? (h.left = -5, s.startScrolling(t, "x")) : i.x > r.right - 3 ? (h.left = 5, s.startScrolling(t, "x")) : h.left = 0, i.y < r.top + 3 ? (r.top + 3 - i.y < 5 ? h.top = -5 : h.top = -20, s.startScrolling(t, "y")) : i.y > r.bottom - 3 ? (i.y - r.bottom + 3 < 5 ? h.top = 5 : h.top = 20, s.startScrolling(t, "y")) : h.top = 0, 0 === h.top && 0 === h.left ? l() : n()
                    }
                })
            }
            var s = t("../../lib/helper"),
                r = t("../instances"),
                o = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) {
                var e = r.get(t);
                n(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(t, e, i) {
            "use strict";

            function n(t, e, i, n) {
                function s(i, n) {
                    var s = t.scrollTop,
                        r = t.scrollLeft,
                        o = Math.abs(i),
                        a = Math.abs(n);
                    if (a > o) {
                        if (0 > n && s === e.contentHeight - e.containerHeight || n > 0 && 0 === s) return !e.settings.swipePropagation
                    } else if (o > a && (0 > i && r === e.contentWidth - e.containerWidth || i > 0 && 0 === r)) return !e.settings.swipePropagation;
                    return !0
                }

                function l(e, i) {
                    a(t, "top", t.scrollTop - i), a(t, "left", t.scrollLeft - e), o(t)
                }

                function c() {
                    b = !0
                }

                function h() {
                    b = !1
                }

                function d(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function u(t) {
                    return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
                }

                function p(t) {
                    if (u(t)) {
                        w = !0;
                        var e = d(t);
                        _.pageX = e.pageX, _.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
                    }
                }

                function f(t) {
                    if (!w && e.settings.swipePropagation && p(t), !b && w && u(t)) {
                        var i = d(t),
                            n = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            r = n.pageX - _.pageX,
                            o = n.pageY - _.pageY;
                        l(r, o), _ = n;
                        var a = (new Date).getTime(),
                            c = a - g;
                        c > 0 && (v.x = r / c, v.y = o / c, g = a), s(r, o) && (t.stopPropagation(), t.preventDefault())
                    }
                }

                function m() {
                    !b && w && (w = !1, clearInterval(y), y = setInterval(function() {
                        return r.get(t) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(y) : (l(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(y)
                    }, 10))
                }
                var _ = {},
                    g = 0,
                    v = {},
                    y = null,
                    b = !1,
                    w = !1;
                i && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", h), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", f), e.event.bind(t, "touchend", m)), n && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", h), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", f), e.event.bind(t, "pointerup", m)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", h), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", f), e.event.bind(t, "MSPointerUp", m)))
            }
            var s = t("../../lib/helper"),
                r = t("../instances"),
                o = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) {
                if (s.env.supportsTouch || s.env.supportsIePointer) {
                    var e = r.get(t);
                    n(t, e, s.env.supportsTouch, s.env.supportsIePointer)
                }
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                s = t("../lib/class"),
                r = t("./instances"),
                o = t("./update-geometry"),
                a = {
                    "click-rail": t("./handler/click-rail"),
                    "drag-scrollbar": t("./handler/drag-scrollbar"),
                    keyboard: t("./handler/keyboard"),
                    wheel: t("./handler/mouse-wheel"),
                    touch: t("./handler/touch"),
                    selection: t("./handler/selection")
                },
                l = t("./handler/native-scroll");
            e.exports = function(t, e) {
                e = "object" == typeof e ? e : {}, s.add(t, "ps-container");
                var i = r.add(t);
                i.settings = n.extend(i.settings, e), s.add(t, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function(e) {
                    a[e](t)
                }), l(t), o(t)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(t, e, i) {
            "use strict";

            function n(t) {
                function e() {
                    l.add(t, "ps-focus")
                }

                function i() {
                    l.remove(t, "ps-focus")
                }
                var n = this;
                n.settings = a.clone(c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === h.css(t, "direction"), n.isNegativeScroll = function() {
                    var e = t.scrollLeft,
                        i = null;
                    return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i
                }(), n.negativeScrollAdjustment = n.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.event = new d, n.ownerDocument = t.ownerDocument || document, n.scrollbarXRail = h.appendTo(h.e("div", "ps-scrollbar-x-rail"), t), n.scrollbarX = h.appendTo(h.e("div", "ps-scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", e), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = a.toInt(h.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : a.toInt(h.css(n.scrollbarXRail, "top")), n.railBorderXWidth = a.toInt(h.css(n.scrollbarXRail, "borderLeftWidth")) + a.toInt(h.css(n.scrollbarXRail, "borderRightWidth")), h.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = a.toInt(h.css(n.scrollbarXRail, "marginLeft")) + a.toInt(h.css(n.scrollbarXRail, "marginRight")), h.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = h.appendTo(h.e("div", "ps-scrollbar-y-rail"), t), n.scrollbarY = h.appendTo(h.e("div", "ps-scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", e), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = a.toInt(h.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : a.toInt(h.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? a.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = a.toInt(h.css(n.scrollbarYRail, "borderTopWidth")) + a.toInt(h.css(n.scrollbarYRail, "borderBottomWidth")), h.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = a.toInt(h.css(n.scrollbarYRail, "marginTop")) + a.toInt(h.css(n.scrollbarYRail, "marginBottom")), h.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
            }

            function s(t) {
                return t.getAttribute("data-ps-id")
            }

            function r(t, e) {
                t.setAttribute("data-ps-id", e)
            }

            function o(t) {
                t.removeAttribute("data-ps-id")
            }
            var a = t("../lib/helper"),
                l = t("../lib/class"),
                c = t("./default-setting"),
                h = t("../lib/dom"),
                d = t("../lib/event-manager"),
                u = t("../lib/guid"),
                p = {};
            i.add = function(t) {
                var e = u();
                return r(t, e), p[e] = new n(t), p[e]
            }, i.remove = function(t) {
                delete p[s(t)], o(t)
            }, i.get = function(t) {
                return p[s(t)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
            }

            function s(t, e) {
                var i = {
                    width: e.railXWidth
                };
                e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, i);
                var n = {
                    top: t.scrollTop,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, n), a.css(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }), a.css(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }
            var r = t("../lib/helper"),
                o = t("../lib/class"),
                a = t("../lib/dom"),
                l = t("./instances"),
                c = t("./update-scroll");
            e.exports = function(t) {
                var e = l.get(t);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
                var i;
                t.contains(e.scrollbarXRail) || (i = a.queryChildren(t, ".ps-scrollbar-x-rail"), i.length > 0 && i.forEach(function(t) {
                    a.remove(t)
                }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (i = a.queryChildren(t, ".ps-scrollbar-y-rail"), i.length > 0 && i.forEach(function(t) {
                    a.remove(t)
                }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = n(e, r.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = r.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = n(e, r.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = r.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), s(t, e), e.scrollbarXActive ? o.add(t, "ps-active-x") : (o.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? o.add(t, "ps-active-y") : (o.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(t, e, i) {
            "use strict";
            var n, s, r = t("./instances"),
                o = document.createEvent("Event"),
                a = document.createEvent("Event"),
                l = document.createEvent("Event"),
                c = document.createEvent("Event"),
                h = document.createEvent("Event"),
                d = document.createEvent("Event"),
                u = document.createEvent("Event"),
                p = document.createEvent("Event"),
                f = document.createEvent("Event"),
                m = document.createEvent("Event");
            o.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), l.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), h.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), u.initEvent("ps-x-reach-start", !0, !0), p.initEvent("ps-x-reach-end", !0, !0), f.initEvent("ps-y-reach-start", !0, !0), m.initEvent("ps-y-reach-end", !0, !0), e.exports = function(t, e, i) {
                if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
                if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
                if ("undefined" == typeof i) throw "You must provide a value to the update-scroll function";
                "top" === e && 0 >= i && (t.scrollTop = i = 0, t.dispatchEvent(f)), "left" === e && 0 >= i && (t.scrollLeft = i = 0, t.dispatchEvent(u));
                var _ = r.get(t);
                "top" === e && i >= _.contentHeight - _.containerHeight && (i = _.contentHeight - _.containerHeight, i - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(m)), "left" === e && i >= _.contentWidth - _.containerWidth && (i = _.contentWidth - _.containerWidth, i - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(p)), n || (n = t.scrollTop), s || (s = t.scrollLeft), "top" === e && n > i && t.dispatchEvent(o), "top" === e && i > n && t.dispatchEvent(a), "left" === e && s > i && t.dispatchEvent(l), "left" === e && i > s && t.dispatchEvent(c), "top" === e && (t.scrollTop = n = i, t.dispatchEvent(h)), "left" === e && (t.scrollLeft = s = i, t.dispatchEvent(d))
            }
        }, {
            "./instances": 18
        }],
        21: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                s = t("../lib/dom"),
                r = t("./instances"),
                o = t("./update-geometry"),
                a = t("./update-scroll");
            e.exports = function(t) {
                var e = r.get(t);
                e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, s.css(e.scrollbarXRail, "display", "block"), s.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(s.css(e.scrollbarXRail, "marginLeft")) + n.toInt(s.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(s.css(e.scrollbarYRail, "marginTop")) + n.toInt(s.css(e.scrollbarYRail, "marginBottom")), s.css(e.scrollbarXRail, "display", "none"), s.css(e.scrollbarYRail, "display", "none"), o(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), s.css(e.scrollbarXRail, "display", ""), s.css(e.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]), ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var s, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, s = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, s), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : n === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack),
                s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
                    t(i).attr("data-slick-index", e)
                }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                s = this;
            s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), t({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(t) {
                    t = Math.ceil(t), s.options.vertical === !1 ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, s, r, o, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (o = a.options.slidesPerRow * a.options.rows, s = Math.ceil(r.length / o), t = 0; s > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var h = t * o + (e * a.options.slidesPerRow + i);
                            r.get(h) && c.appendChild(r.get(h))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, s, r, o = this,
                a = !1,
                l = o.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === o.respondTo ? r = c : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(c, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                s = null;
                for (n in o.breakpoints) o.breakpoints.hasOwnProperty(n) && (o.originalSettings.mobileFirst === !1 ? r < o.breakpoints[n] && (s = o.breakpoints[n]) : r > o.breakpoints[n] && (s = o.breakpoints[n]));
                null !== s ? null !== o.activeBreakpoint ? (s !== o.activeBreakpoint || i) && (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[s]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = s) : (o.activeBreakpoint = s, "unslick" === o.breakpointSettings[s] ? o.unslick(s) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[s]), e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = s) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, e === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = s), e || a === !1 || o.$slider.trigger("breakpoint", [o, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, s, r, o = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = o.slideCount % o.options.slidesToScroll !== 0, n = r ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) {
                        t = i;
                        break
                    }
                    i = e[s]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, r = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, s.options.variableWidth === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = s.options.rtl === !0 ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, s.options.centerMode === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n, s = this;
            return n = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, r) {
                return r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * s.swipeLeft ? (i = r, !1) : void 0
            }), e = Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), o.$slider.trigger("lazyLoaded", [o, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i])
                    }, n.src = i
                })
            }
            var i, n, s, r, o = this;
            o.options.centerMode === !0 ? o.options.infinite === !0 ? (s = o.currentSlide + (o.options.slidesToShow / 2 + 1), r = s + o.options.slidesToShow + 2) : (s = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, r = Math.ceil(s + o.options.slidesToShow), o.options.fade === !0 && (s > 0 && s--, r <= o.slideCount && r++)), i = o.$slider.find(".slick-slide").slice(s, r), e(i), o.slideCount <= o.options.slidesToShow ? (n = o.$slider.find(".slick-slide"), e(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, s, r = this,
                o = t("img[data-lazy]", r.$slider);
            o.length ? (i = o.first(), n = i.attr("data-lazy"), s = document.createElement("img"), s.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
            }, s.onerror = function() {
                3 > e ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
            }, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
        }, e.prototype.refresh = function(e) {
            var i, n, s = this;
            n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, s = this,
                r = s.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in r)
                    if (n = s.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                        for (; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = r[e].settings
                    }
                s.breakpoints.sort(function(t, e) {
                    return s.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(s) : (s = {}, n.cssTransitions === !1 ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, s) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, s, r, o = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) o.options[n] = s;
            else if ("multiple" === r) t.each(n, function(t, e) {
                o.options[t] = e
            });
            else if ("responsive" === r)
                for (i in s)
                    if ("array" !== t.type(o.options.responsive)) o.options.responsive = [s[i]];
                    else {
                        for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === s[i].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(s[i])
                    }
            a && (o.unload(), o.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, s, r = this;
            i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, s = this;
            if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; n > e; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(n.attr("data-slick-index"));
            return s || (s = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s), void i.asNavFor(s)) : void i.slideHandler(s)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, s, r, o, a, l = null,
                c = this;
            return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), o = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(o, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(o, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), s = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), r = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(s, function() {
                c.postSlide(s)
            })) : c.postSlide(s), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
                c.postSlide(s)
            }) : c.postSlide(s))))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, s = this;
            return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? s.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, s, r, o = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !o.dragging || r && 1 !== r.length ? !1 : (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, o.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), i = o.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), s = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (s = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.options.vertical === !1 ? o.swipeLeft = e + n * s : o.swipeLeft = e + n * (o.$list.height() / o.listWidth) * s, o.options.verticalSwiping === !0 && (o.swipeLeft = e + n * s), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                s = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = n.length;
            for (t = 0; o > t; t++)
                if ("object" == typeof s || "undefined" == typeof s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, r), "undefined" != typeof i) return i;
            return n
        }
    }), ! function(t) {
        t.fn.extend({
            BlackAndWhite: function(e) {
                "use strict";
                var i = this,
                    n = t.extend({
                        hoverEffect: !0,
                        webworkerPath: !1,
                        invertHoverEffect: !1,
                        speed: 500,
                        onImageReady: null,
                        intensity: 1
                    }, e),
                    s = n.hoverEffect,
                    r = n.webworkerPath,
                    o = n.invertHoverEffect,
                    a = "number" == typeof n.intensity && n.intensity < 1 && n.intensity > 0 ? n.intensity : 1,
                    l = t.isPlainObject(n.speed) ? n.speed.fadeIn : n.speed,
                    c = t.isPlainObject(n.speed) ? n.speed.fadeOut : n.speed,
                    h = t(window),
                    d = ".BlackAndWhite",
                    u = (!(!document.all || window.opera || !window.XMLHttpRequest), " -webkit- -moz- -o- -ms- ".split(" ")),
                    p = {},
                    f = function(t) {
                        if (p[t] || "" === p[t]) return p[t] + t;
                        var e = document.createElement("div"),
                            i = ["", "Moz", "Webkit", "O", "ms", "Khtml"];
                        for (var n in i)
                            if ("undefined" != typeof e.style[i[n] + t]) return p[t] = i[n], i[n] + t;
                        return t.toLowerCase()
                    },
                    m = function() {
                        var t = document.createElement("div");
                        return t.style.cssText = u.join("filter:blur(2px); "), !!t.style.length && (void 0 === document.documentMode || document.documentMode > 9)
                    }(),
                    _ = !!document.createElement("canvas").getContext,
                    g = function() {
                        return "undefined" != typeof Worker
                    }(),
                    v = f("Filter"),
                    y = [],
                    b = g && r ? new Worker(r + "BnWWorker.js") : !1,
                    w = function(e) {
                        t(e.currentTarget).find(".BWfade").stop(!0, !0).animate({
                            opacity: o ? 0 : 1
                        }, c)
                    },
                    T = function(e) {
                        t(e.currentTarget).find(".BWfade").stop(!0, !0).animate({
                            opacity: o ? 1 : 0
                        }, l)
                    },
                    x = function(t) {
                        "function" == typeof n.onImageReady && n.onImageReady(t)
                    },
                    k = function(t) {
                        b && _ && !m && !t && S()
                    },
                    S = function() {
                        return y.length ? (b.postMessage({
                            imgData: y[0].imageData,
                            intensity: a
                        }), void(b.onmessage = function(t) {
                            y[0].ctx.putImageData(t.data, 0, 0), x(y[0].img), y.splice(0, 1), S()
                        })) : (b.terminate && b.terminate(), void(b.close && b.close()))
                    },
                    P = function(t) {
                        return t.complete || "undefined" != typeof t.naturalWidth && t.naturalWidth
                    },
                    C = function(t, e, i, n) {
                        var s = e.getContext("2d"),
                            r = 0;
                        s.drawImage(t, 0, 0, i, n);
                        var o = s.getImageData(0, 0, i, n),
                            l = o.data,
                            c = l.length;
                        if (b) y.push({
                            imageData: o,
                            ctx: s,
                            img: t
                        });
                        else {
                            for (; c > r; r += 4) {
                                var h = .3 * l[r] + .59 * l[r + 1] + .11 * l[r + 2];
                                l[r] = ~~(h * a + l[r] * (1 - a)), l[r + 1] = ~~(h * a + l[r + 1] * (1 - a)), l[r + 2] = ~~(h * a + l[r + 2] * (1 - a))
                            }
                            s.putImageData(o, 0, 0), x(t)
                        }
                    },
                    A = function(e, i) {
                        var n, s = e[0],
                            r = (s.src, e.position()),
                            l = {
                                top: r.top,
                                left: r.left,
                                position: "absolute",
                                "-webkit-transform": "translate3d(0,0,0)",
                                opacity: o ? 0 : 1
                            };
                        s.crossOrigin = "anonymous", _ && !m ? (n = t('<canvas width="' + s.naturalWidth + '" height="' + s.naturalHeight + '" class="BWfade"></canvas>'), l.width = e.width(), l.height = e.height(), C(s, n.get(0), s.naturalWidth, s.naturalHeight)) : (_ ? l[v] = "grayscale(" + 100 * a + "%)" : l.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)", n = e.clone().addClass("BWFilter BWfade"), x(s)), n.css(l).prependTo(i), !t.support.opacity && o && n.animate({
                            opacity: 0
                        }, 0)
                    },
                    O = function() {
                        i.each(function(e, i) {
                            var n = t(i).find("img"),
                                s = t(n).width(),
                                r = t(n).height();
                            t(this).find("canvas").css({
                                width: s,
                                height: r
                            })
                        })
                    },
                    R = function() {
                        var e = i.find("img").filter(function() {
                            return !t(this).data("_b&w")
                        }).length;
                        i.each(function(i, n) {
                            var s = t(n),
                                r = s.find("img");
                            r.data("_b&w") || (P(r[0]) ? (e--, A(r, s)) : r.on("load", function() {
                                return r.data("_b&w_loaded") || !r[0].complete ? void setTimeout(function() {
                                    r.load()
                                }, 20) : (A(r, s), r.data("_b&w_loaded", !0), e--, void k(e))
                            }).load(), r.data("_b&w", !0))
                        }), k(e), s && i.unbind(d).on("mouseleave" + d, w).on("mouseenter" + d, T), _ && !m && h.unbind(d).on("resize" + d + " orientationchange" + d, O)
                    },
                    E = function() {
                        i.off(d), h.off(d)
                    };
                return R(), {
                    destroy: E
                }
            }
        })
    }(jQuery), ! function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("plugin.backgroundBlur"),
                    s = t.extend({}, r.DEFAULTS, i.data(), "object" == typeof e && e);
                n || i.data("plugin.backgroundBlur", n = new r(this, s)), "fadeIn" === e ? n.fadeIn() : "fadeOut" === e ? n.fadeOut() : "string" == typeof e && n.generateBlurredImage(e)
            })
        }
        var i = function() {
                for (var t, e = 3, i = document.createElement("div"), n = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", n[0];);
                return e > 4 ? e : t
            }(),
            n = function() {
                return "_" + Math.random().toString(36).substr(2, 9)
            },
            s = {
                svgns: "http://www.w3.org/2000/svg",
                xlink: "http://www.w3.org/1999/xlink",
                createElement: function(t, e) {
                    var i = document.createElementNS(s.svgns, t);
                    return e && s.setAttr(i, e), i
                },
                setAttr: function(t, e) {
                    for (var i in e) "href" === i ? t.setAttributeNS(s.xlink, i, e[i]) : t.setAttribute(i, e[i]);
                    return t
                }
            },
            r = function(e, i) {
                this.internalID = n(), this.$element = t(e), this.$width = this.$element.width(), this.$height = this.$element.height(), this.element = e, this.options = t.extend({}, r.DEFAULTS, i), this.$overlayEl = this.createOverlay(), this.$blurredImage = {}, this.useVelocity = this.detectVelocity(), this.attachListeners(), this.generateBlurredImage(this.options.imageURL)
            };
        r.VERSION = "0.1.1", r.DEFAULTS = {
            imageURL: "",
            blurAmount: 10,
            imageClass: "",
            overlayClass: "",
            duration: !1,
            opacity: 1
        }, r.prototype.detectVelocity = function() {
            return !!window.jQuery.Velocity
        }, r.prototype.attachListeners = function() {
            this.$element.on("ui.blur.loaded", t.proxy(this.fadeIn, this)), this.$element.on("ui.blur.unload", t.proxy(this.fadeOut, this))
        }, r.prototype.fadeIn = function() {
            this.options.duration && this.options.duration > 0 && (this.useVelocity ? this.$blurredImage.velocity({
                opacity: this.options.opacity
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.animate({
                opacity: this.options.opacity
            }, {
                duration: this.options.duration
            }))
        }, r.prototype.fadeOut = function() {
            this.options.duration && this.options.duration > 0 ? this.useVelocity ? this.$blurredImage.velocity({
                opacity: 0
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.animate({
                opacity: 0
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.css({
                opacity: 0
            })
        }, r.prototype.generateBlurredImage = function(t) {
            var e = this.$blurredImage;
            this.internalID = n(), e.length > 0 && (this.options.duration && this.options.duration > 0 ? this.useVelocity ? e.first().velocity({
                opacity: 0
            }, {
                duration: this.options.duration,
                complete: function() {
                    e.remove()
                }
            }) : e.first().animate({
                opacity: 0
            }, {
                duration: this.options.duration,
                complete: function() {
                    e.remove()
                }
            }) : e.remove()), i ? this.$blurredImage = this.createIMG(t, this.$width, this.$height) : this.$blurredImage = this.createSVG(t, this.$width, this.$height)
        }, r.prototype.createOverlay = function() {
            return this.options.overlayClass && "" !== this.options.overlayClass ? t("<div></div>").prependTo(this.$element).addClass(this.options.overlayClass) : !1
        }, r.prototype.createSVG = function(e, i, n) {
            var r = this,
                o = s.createElement("svg", {
                    xmlns: s.svgns,
                    version: "1.1",
                    width: i,
                    height: n,
                    id: "blurred" + this.internalID,
                    "class": this.options.imageClass,
                    viewBox: "0 0 " + i + " " + n,
                    preserveAspectRatio: "none"
                }),
                a = "blur" + this.internalID,
                l = s.createElement("filter", {
                    id: a
                }),
                c = s.createElement("feGaussianBlur", {
                    "in": "SourceGraphic",
                    stdDeviation: this.options.blurAmount
                }),
                h = s.createElement("image", {
                    x: 0,
                    y: 0,
                    width: i,
                    height: n,
                    externalResourcesRequired: "true",
                    href: e,
                    style: "filter:url(#" + a + ")",
                    preserveAspectRatio: "none"
                });
            h.addEventListener("load", function() {
                r.$element.trigger("ui.blur.loaded")
            }, !0), h.addEventListener("SVGLoad", function() {
                r.$element.trigger("ui.blur.loaded")
            }, !0), l.appendChild(c), o.appendChild(l), o.appendChild(h);
            var d = t(o);
            return r.options.duration && r.options.duration > 0 && (d.css({
                opacity: 0
            }), window.setTimeout(function() {
                "0" === d.css("opacity") && d.css({
                    opacity: 1
                })
            }, this.options.duration + 100)), this.element.insertBefore(o, this.element.firstChild), d
        }, r.prototype.createIMG = function(t, e, i) {
            var n = this,
                s = this.prependImage(t),
                r = 2 * this.options.blurAmount > 100 ? 100 : 2 * this.options.blurAmount;
            return s.css({
                filter: "progid:DXImageTransform.Microsoft.Blur(pixelradius=" + r + ") ",
                top: 2.5 * -this.options.blurAmount,
                left: 2.5 * -this.options.blurAmount,
                width: e + 2.5 * this.options.blurAmount,
                height: i + 2.5 * this.options.blurAmount
            }).attr("id", "blurred" + this.internalID), s.load(function() {
                n.$element.trigger("ui.blur.loaded")
            }), this.options.duration && this.options.duration > 0 && window.setTimeout(function() {
                "0" === s.css("opacity") && s.css({
                    opacity: 1
                })
            }, this.options.duration + 100), s
        }, r.prototype.prependImage = function(e) {
            var i, n = t('<img src="' + e + '" />');
            return i = this.$overlayEl ? n.insertBefore(this.$overlayEl).attr("id", this.internalID).addClass(this.options.imageClass) : n.prependTo(this.$element).attr("id", this.internalID).addClass(this.options.imageClass)
        };
        var o = t.fn.backgroundBlur;
        t.fn.backgroundBlur = e, t.fn.backgroundBlur.Constructor = r, t.fn.backgroundBlur.noConflict = function() {
            return t.fn.backgroundBlur = o, this
        }
    }(jQuery), window.innerWidth > 900 && (+ function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var s = function() {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(s, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), + function(t) {
        "use strict";

        function e() {
            this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this)
        }

        function i(e) {
            this._fullHeight = this._fullWidth = this._targetImageWrap = null, this._targetImage = e, this._$body = t(document.body)
        }
        e.prototype.listen = function() {
            this._$body.on("click", '[data-action="zoom"]', t.proxy(this._zoom, this))
        }, e.prototype._zoom = function(e) {
            var n = e.target;
            return n && "IMG" == n.tagName && !this._$body.hasClass("zoom-overlay-open") ? e.metaKey || e.ctrlKey ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank") : void(n.width >= t(window).width() - i.OFFSET || (this._activeZoomClose(!0), this._activeZoom = new i(n), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", t.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", t.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0)) : void 0
        }, e.prototype._activeZoomClose = function(t) {
            this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
        }, e.prototype._scrollHandler = function(e) {
            null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop());
            var i = this._initialScrollPosition - t(window).scrollTop();
            Math.abs(i) >= 40 && this._activeZoomClose()
        }, e.prototype._keyHandler = function(t) {
            27 == t.keyCode && this._activeZoomClose()
        }, e.prototype._clickHandler = function(t) {
            t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose()
        }, e.prototype._touchStart = function(e) {
            this._initialTouchPosition = e.touches[0].pageY, t(e.target).on("touchmove.zoom", t.proxy(this._touchMove, this))
        }, e.prototype._touchMove = function(e) {
            Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(e.target).off("touchmove.zoom"))
        }, i.OFFSET = 80, i._MAX_WIDTH = 2560, i._MAX_HEIGHT = 4096, i.prototype.zoomImage = function() {
            var e = document.createElement("img");
            e.onload = t.proxy(function() {
                this._fullHeight = Number(e.height), this._fullWidth = Number(e.width), this._zoomOriginal()
            }, this), e.src = this._targetImage.src
        }, i.prototype._zoomOriginal = function() {
            this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._calculateZoom(), this._triggerAnimation()
        }, i.prototype._calculateZoom = function() {
            this._targetImage.offsetWidth;
            var e = this._fullWidth,
                n = this._fullHeight,
                s = (t(window).scrollTop(), e / this._targetImage.width),
                r = t(window).height() - i.OFFSET,
                o = t(window).width() - i.OFFSET,
                a = e / n,
                l = o / r;
            this._imgScaleFactor = o > e && r > n ? s : l > a ? r / n * s : o / e * s
        }, i.prototype._triggerAnimation = function() {
            this._targetImage.offsetWidth;
            var e = t(this._targetImage).offset(),
                i = t(window).scrollTop(),
                n = i + t(window).height() / 2,
                s = t(window).width() / 2,
                r = e.top + this._targetImage.height / 2,
                o = e.left + this._targetImage.width / 2;
            this._translateY = n - r, this._translateX = s - o;
            var a = "scale(" + this._imgScaleFactor + ")",
                l = "translate(" + this._translateX + "px, " + this._translateY + "px)";
            t.support.transition && (l += " translateZ(0)"), t(this._targetImage).css({
                "-webkit-transform": a,
                "-ms-transform": a,
                transform: a
            }), t(this._targetImageWrap).css({
                "-webkit-transform": l,
                "-ms-transform": l,
                transform: l
            }), this._$body.addClass("zoom-overlay-open")
        }, i.prototype.close = function() {
            return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), t(this._targetImage).css({
                "-webkit-transform": "",
                "-ms-transform": "",
                transform: ""
            }), t(this._targetImageWrap).css({
                "-webkit-transform": "",
                "-ms-transform": "",
                transform: ""
            }), t.support.transition ? void t(this._targetImage).one(t.support.transition.end, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose()
        }, i.prototype.dispose = function() {
            this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._$body.removeClass("zoom-overlay-transitioning"))
        }, t(function() {
            (new e).listen()
        })
    }(jQuery));
var WheelIndicator = function(t, e) {
    function i(t) {
        this._options = c(d, t), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
        var e = this;
        this._wheelHandler = function(t) {
            e._isWorking && (r.call(e, t), e._options.preventMouse && s(t))
        }, a(this._options.elem, h, this._wheelHandler)
    }

    function n(t) {
        t.direction = this._direction, this._options.callback.call(this, t)
    }

    function s(e) {
        e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function r(t) {
        var e = this,
            i = u(t);
        if (0 !== i) {
            var s, r, a = i > 0 ? "down" : "up",
                l = e._deltaArray.length,
                c = !1,
                h = 0;
            for (clearTimeout(e._timer), e._timer = setTimeout(function() {
                    e._deltaArray = [0, 0, 0], e._isStopped = !0, e._direction = a
                }, 150), r = 0; l > r; r++) 0 !== e._deltaArray[r] && (e._deltaArray[r] > 0 ? ++h : --h);
            Math.abs(h) === l && (s = h > 0 ? "down" : "up", s !== e._direction && (c = !0, e._direction = a)), e._isStopped || (c ? (e._isAcceleration = !0, n.call(this, t)) : Math.abs(h) === l && o.call(this, t)), e._isStopped && (e._isStopped = !1, e._isAcceleration = !0, e._direction = a, n.call(this, t)), e._deltaArray.shift(), e._deltaArray.push(i)
        }
    }

    function o(t) {
        var e = Math.abs(this._deltaArray[0]),
            i = Math.abs(this._deltaArray[1]),
            s = Math.abs(this._deltaArray[2]),
            r = Math.abs(u(t));
        r > s && s > i && i > e && (this._isAcceleration || (n.call(this, t), this._isAcceleration = !0)), s > r && i >= s && (this._isAcceleration = !1)
    }

    function a(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
    }

    function l(t, e, i) {
        t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
    }

    function c(t, e) {
        var i, n = {};
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        return n
    }
    var h = "onwheel" in e ? "wheel" : "mousewheel",
        d = {
            callback: function() {},
            elem: e,
            preventMouse: !0
        };
    i.prototype = {
        constructor: i,
        turnOn: function() {
            return this._isWorking = !0, this
        },
        turnOff: function() {
            return this._isWorking = !1, this
        },
        setOptions: function(t) {
            return this._options = c(this._options, t), this
        },
        getOption: function(t) {
            var e = this._options[t];
            if (void 0 !== e) return e;
            throw new Error("Unknown option")
        },
        destroy: function() {
            return l(this._options.elem, h, this._wheelHandler), this
        }
    };
    var u = function(t) {
        return (u = t.wheelDelta && !t.deltaY ? function(t) {
            return -1 * t.wheelDelta
        } : function(t) {
            return t.deltaY
        })(t)
    };
    return i
}(window, document);
"object" == typeof exports && (module.exports = WheelIndicator), ! function(t) {
    function e() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.(^)![]{}*&^%$#",
            e = t.split("");
        return e[Math.floor(Math.random() * e.length)]
    }
    t.fn.shuffleLetters = function(i) {
        var n = t.extend({
            step: 2,
            fps: 30,
            callback: function() {}
        }, i);
        return this.each(function() {
            var i = t(this),
                s = "";
            if (i.data("animated")) return !0;
            i.data("animated", !0), s = i.text().split("");
            for (var r = [], o = 0; o < s.length; o++) r.push(o);
            i.html(""),
                function a(t) {
                    var o, l = r.length,
                        c = s.slice(0);
                    if (t > l) return i.data("animated", !1), void n.callback(i);
                    for (o = Math.max(t, 0); l > o; o++) o < t + n.step ? c[r[o]] = e() : c[r[o]] = "";
                    i.text(c.join("")), setTimeout(function() {
                        a(t + 1)
                    }, 1e3 / n.fps)
                }(-n.step)
        })
    }
}(jQuery);