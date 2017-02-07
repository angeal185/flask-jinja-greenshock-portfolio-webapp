function homeFunc() {
    fullpageF = !1, panelclass = ".panel", $panel = $(".panel"), homeScrollDelay = 1400, panelTransSpeed = 1
}
var fullpage = {
        init: function() {
            var e = this;
            e.dir = "down", e.p_before = 0, e.p_new = 0, e.max = $panel.length - 1, $newPanel = $panel.eq(e.p_new), $oldPanel = $panel.eq(e.p_before), $panel.eq(e.p_new).addClass("in"), msH = $(".dots_line .cl").outerHeight(), msW = $(".dots_line .cl").outerWidth(), TweenLite.set($(".dots_line:nth-child(2n) .cl"), {
                clip: "rect(0px 0px " + msH + "px 0px)"
            }), TweenLite.set($(".dots_line:nth-child(2n-1) .cl"), {
                clip: "rect(0px " + msW + "px " + msH + "px " + msW + "px)"
            }), TweenLite.set($("[data-pop], .btn, .btn .text", $panel.nextAll(panelclass)), {
                y: 40,
                alpha: 0
            });
            for (var n = e.max; n >= 0; n--) $(".panel_back").eq(e.max - n).css({
                "z-index": n
            });
            TweenLite.set($(".panel_front, .panel_back", $panel.eq(e.p_new).nextAll(panelclass)), {
                alpha: 0
            })
        },
        loaded: function() {
            this.navi()
        },
        start: function(e) {
            fullpageF || (fullpageF = !0, this.dir = e, fullpage.count())
        },
        count: function() {
            var e = this;
            if ("down" === e.dir) {
                if (e.p_new++, e.p_new > e.max) return e.p_new = e.max, fullpageF = !1, !1
            } else if (e.p_new--, e.p_new < 0) return e.p_new = 0, fullpageF = !1, !1;
            fullpage.changeClass()
        },
        jump: function(e) {
            if (!fullpageF) {
                fullpageF = !0;
                var n = this;
                return e === n.p_new ? (fullpageF = !1, !1) : (n.dir = e > n.p_new ? "down" : "up", n.p_new = e, fullpage.changeClass(), void 0)
            }
        },
        changeClass: function() {
            var e = this;
            fullpage.navi(), e.p_new = Number(e.p_new), $newPanel = $panel.eq(e.p_new), $oldPanel = $panel.eq(e.p_before), $newBackP = $(".panel_back", $newPanel), $oldBackP = $(".panel_back", $oldPanel), $newFrontP = $(".panel_front", $newPanel), $oldFrontP = $(".panel_front", $oldPanel), TweenLite.set($(".panel_front, .panel_back", $panel.eq(e.p_new)), {
                alpha: 1
            }), e.p_before != e.p_new && (e.p_before = e.p_new, "down" === e.dir ? (TweenLite.fromTo($oldBackP, panelTransSpeed, {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
            }, {
                clip: "rect(0px " + windowW + "px 0px 0px)",
                ease: Power4.easeInOut
            }), scroll.btnDiveHide(.4), 6 != e.p_new && setTimeout(function() {
                scroll.btnDiveShow(.4)
            }, 1100)) : (TweenLite.fromTo($newBackP, panelTransSpeed, {
                clip: "rect(0px " + windowW + "px 0px 0px)"
            }, {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)",
                ease: Power4.easeInOut
            }), scroll.footerHide(), scroll.btnDiveHide(.4), setTimeout(function() {
                scroll.btnDiveShow(.4)
            }, 1100)), 0 === e.p_new && pTrans.p0_up(), 1 === e.p_new && (action = "down" === e.dir ? pTrans.p1_down() : pTrans.p1_up()), 2 === e.p_new && (action = "down" === e.dir ? pTrans.p2_down() : pTrans.p2_up()), 3 === e.p_new && (action = "down" === e.dir ? pTrans.p3_down() : pTrans.p3_up()), 4 === e.p_new && (action = "down" === e.dir ? pTrans.p4_down() : pTrans.p4_up()), 5 === e.p_new && (action = "down" === e.dir ? pTrans.p5_down() : pTrans.p5_up()), 6 === e.p_new && (action = pTrans.p6_down(), scroll.footerShow()), $newPanel.addClass("in").siblings(panelclass).removeClass("in").find("*").removeClass("in"), $oldPanel.addClass("out")), fullpage.end()
        },
        end: function() {
            setTimeout(fullpage.reset, homeScrollDelay)
        },
        reset: function() {
            $(panelclass + ".out").removeClass("out"), TweenLite.set($(".panel_front, .panel_back", $panel.not(".in")), {
                alpha: 0
            }), fullpageF = !1
        },
        navi: function() {
            $(".sec", $pagenavi).removeClass("active").eq(this.p_new).addClass("active"), $(".sec.active", $pagenavi).parents("li").length ? $(".sec.active", $pagenavi).parents("li").addClass("active") : $(".parent.active", $pagenavi).removeClass("active"), $(".active.sec .text", $pagenavi).css({
                opacity: 0
            }), setTimeout(function() {
                $(".active.sec .text", $pagenavi).css({
                    opacity: ""
                }).shuffleLetters({
                    step: 3
                })
            }, 100)
        }
    },
    popEase = Power4.easeOut,
    pTrans = {
        p0_up: function() {
            TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .8, {
                y: "0%",
                alpha: 1
            }, {
                y: "100%",
                alpha: 0,
                ease: Power3.easeInOut
            }, .2), pTrans.msgIn();
            var e = function() {
                pTrans.hideBtns(-1), pTrans.showBtns(1)
            };
            pTrans.clipDown_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipDown_show($newFrontP, panelTransSpeed, windowW, windowH, e)
        },
        p1_down: function() {
            TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .8, {
                y: "0%",
                alpha: 1
            }, {
                y: "-50%",
                alpha: 0,
                ease: Power3.easeInOut
            }, .2), pTrans.msgIn();
            var e = function() {
                pTrans.hideSmallBtns(-1), pTrans.showBtns(1)
            };
            pTrans.clipUp_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipUp_show($newFrontP, panelTransSpeed, windowW, windowH, e)
        },
        p1_up: function() {
            TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .8, {
                y: "0%",
                alpha: 1
            }, {
                y: "100%",
                alpha: 0,
                ease: Power3.easeInOut
            }, .2), pTrans.msgIn();
            var e = function() {
                pTrans.hideBtns(-1), pTrans.showBtns(1)
            };
            pTrans.clipDown_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipDown_show($newFrontP, panelTransSpeed, windowW, windowH, e)
        },
        p2_down: function() {
            pTrans.hideBtns(-1), pTrans.msgOut(), pTrans.worksDown(), pTrans.showBtns(1)
        },
        p2_up: function() {
            TweenLite.set($(".btn.basic, .btn.basic .text", $newPanel), {
                y: 0,
                alpha: 1
            }), pTrans.worksUp()
        },
        p3_down: function() {
            TweenLite.set($(".btn.basic, .btn.basic .text", $newPanel), {
                y: 0,
                alpha: 1
            }), pTrans.worksDown()
        },
        p3_up: function() {
            TweenLite.set($(".btn.basic, .btn.basic .text", $newPanel), {
                y: 0,
                alpha: 1
            }), pTrans.worksUp(), pTrans.worksUp()
        },
        p4_down: function() {
            TweenLite.set($(".btn.basic, .btn.basic .text", $newPanel), {
                y: 0,
                alpha: 1
            }), pTrans.worksDown()
        },
        p4_up: function() {
            pTrans.worksUp(), pTrans.hideBtns(1), pTrans.showBtns(-1)
        },
        p5_down: function() {
            pTrans.showNew();
            var e = function() {};
            pTrans.clipUp_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipUp_show($newFrontP, panelTransSpeed, windowW, windowH, e), TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .6, {
                y: "0%",
                alpha: 1
            }, {
                y: "-100%",
                alpha: 0,
                ease: popEase
            }, .1), TweenMax.staggerFromTo($("[data-pop]", $newPanel), .6, {
                y: "100%",
                alpha: 0
            }, {
                y: "0%",
                alpha: 1,
                ease: popEase,
                delay: .4
            }, .1), pTrans.hideSmallBtns(-1), pTrans.hideBtns(-1), pTrans.showBtns(1)
        },
        p5_up: function() {
            pTrans.showNew();
            var e = function() {};
            pTrans.clipDown_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipDown_show($newFrontP, panelTransSpeed, windowW, windowH, e), TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .6, {
                y: "0%",
                alpha: 1
            }, {
                y: "100%",
                alpha: 0,
                ease: popEase
            }, .1), TweenMax.staggerFromTo($("[data-pop]", $newPanel), .6, {
                y: "-100%",
                alpha: 0
            }, {
                y: "0%",
                alpha: 1,
                ease: popEase,
                delay: .4
            }, .1), pTrans.hideBtns(1), pTrans.showBtns(-1)
        },
        p6_down: function() {
            var e = function() {};
            pTrans.clipUp_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipUp_show($newFrontP, panelTransSpeed, windowW, windowH, e), TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .6, {
                y: "0%",
                alpha: 1
            }, {
                y: "-100%",
                alpha: 0,
                ease: popEase
            }, .1), TweenMax.staggerFromTo($("[data-pop]", $newPanel), .6, {
                y: "100%",
                alpha: 0
            }, {
                y: "0%",
                alpha: 1,
                ease: popEase,
                delay: .4
            }, .1), pTrans.hideBtns(-1), pTrans.showBtns(1)
        },
        hideOld: function() {
            $(".panel_front", $oldPanel).css({
                opacity: 0
            })
        },
        showNew: function() {
            $(".panel_front", $newPanel).css({
                opacity: 1
            })
        },
        msgIn: function() {
            TweenLite.set($(".dots_line.dark"), {
                alpha: 0
            }), pTrans.showNew(), TweenMax.staggerTo($(".dots_line:nth-child(2n) .cl"), 1.2, {
                clip: "rect(0px " + msW + "px " + msH + "px 0px)",
                ease: Power4.easeIn
            }, .04), TweenMax.staggerTo($(".dots_line:nth-child(2n-1) .cl"), 1.2, {
                clip: "rect(0px " + msW + "px " + msH + "px 0px)",
                ease: Power4.easeIn
            }, .06), TweenLite.to($(".dots_line.dark"), 3, {
                alpha: 1,
                ease: Power4.easeInOut
            }), pTrans.hideSmallBtns(1)
        },
        msgOut: function() {
            TweenLite.to($(".dots_line.dark"), .6, {
                alpha: 0,
                ease: Power4.easeInOut
            }), TweenLite.to($(".dots_line:nth-child(2n) .cl"), .6, {
                clip: "rect(0px 0px " + msH + "px 0px)",
                ease: Power2.easeOut
            }), TweenLite.to($(".dots_line:nth-child(2n-1) .cl"), .6, {
                clip: "rect(0px " + msW + "px " + msH + "px " + msW + "px)",
                ease: Power2.easeOut
            })
        },
        worksDown: function() {
            TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .6, {
                y: "0%",
                alpha: 1
            }, {
                y: "-100%",
                alpha: 0,
                ease: popEase
            }, .1);
            var e = function() {
                pTrans.showSmallBtns(1), TweenMax.staggerFromTo($("[data-pop]", $newPanel), .8, {
                    y: "100%",
                    alpha: 0
                }, {
                    y: "0%",
                    alpha: 1,
                    ease: popEase
                }, .1)
            };
            pTrans.hideSmallBtns(-1), pTrans.clipUp_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipUp_show($newFrontP, panelTransSpeed, windowW, windowH, e)
        },
        worksUp: function() {
            TweenMax.staggerFromTo($("[data-pop]", $oldPanel), .6, {
                y: "0%",
                alpha: 1
            }, {
                y: "100%",
                alpha: 0,
                ease: popEase
            }, .1);
            var e = function() {
                pTrans.showSmallBtns(-1), TweenMax.staggerFromTo($("[data-pop]", $newPanel), .8, {
                    y: "-100%",
                    alpha: 0
                }, {
                    y: "0%",
                    alpha: 1,
                    ease: popEase
                }, .1)
            };
            pTrans.hideSmallBtns(1), pTrans.clipDown_hide($oldFrontP, panelTransSpeed, windowW, windowH), pTrans.clipDown_show($newFrontP, panelTransSpeed, windowW, windowH, e)
        },
        clipDown_hide: function(e, n, a, p, o) {
            TweenLite.fromTo(e, n, {
                clip: "rect(0px " + a + "px " + a + "px 0px)"
            }, {
                clip: "rect(" + p + "px " + a + "px " + p + "px 0px)",
                ease: Expo.easeInOut,
                onComplete: o
            })
        },
        clipDown_show: function(e, n, a, p, o) {
            TweenLite.fromTo(e, n, {
                clip: "rect(0px " + a + "px 0px 0px)"
            }, {
                clip: "rect(0px " + a + "px " + p + "px 0px)",
                ease: Expo.easeInOut,
                onComplete: o
            })
        },
        clipUp_hide: function(e, n, a, p, o) {
            TweenLite.fromTo(e, n, {
                clip: "rect(0px " + a + "px " + p + "px 0px)"
            }, {
                clip: "rect(0px " + a + "px 0px 0px)",
                ease: Expo.easeInOut,
                onComplete: o
            })
        },
        clipUp_show: function(e, n, a, p, o) {
            TweenLite.fromTo(e, n, {
                clip: "rect(" + p + "px " + a + "px " + p + "px 0px)"
            }, {
                clip: "rect(0px " + a + "px " + p + "px 0px)",
                ease: Expo.easeInOut,
                onComplete: o
            })
        },
        hideBtns: function(e) {
            TweenMax.staggerFromTo($(".btn.basic, .btn.basic .text", $oldPanel), .3, {
                y: "0%",
                alpha: 1
            }, {
                y: 50 * e + "%",
                alpha: 0,
                ease: popEase
            }, .1)
        },
        hideSmallBtns: function(e) {
            TweenMax.staggerFromTo($(".btn.small, .btn.small .text", $oldPanel), .3, {
                y: "0%",
                alpha: 1
            }, {
                y: 50 * e + "%",
                alpha: 0,
                ease: popEase
            }, .1)
        },
        showBtns: function(e) {
            TweenMax.staggerFromTo($(".btn.basic, .btn.basic .text", $newPanel), .3, {
                y: 50 * e + "%",
                alpha: 0
            }, {
                y: "0%",
                alpha: 1,
                ease: popEase,
                delay: .4
            }, .1)
        },
        showSmallBtns: function(e) {
            TweenMax.staggerFromTo($(".btn.small, .btn.small .text", $newPanel), .3, {
                y: 50 * e + "%",
                alpha: 0
            }, {
                y: "0%",
                alpha: 1,
                ease: popEase
            }, .1)
        }
    };