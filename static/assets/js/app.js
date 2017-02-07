function getPosition() {
    scrollT = $(scrollWindow).scrollTop(), scrollB = scrollT + windowH, scrollM = scrollT + windowH / 3
}

var windowW = window.innerWidth,
    windowH = window.innerHeight,
    scrollWindow = window,
    scrollT, scrollB, scrollM, ie = !1,
    indicator = new WheelIndicator,
    pagetype, activePagenavi, ua = {
        browser: function() {
            var e = window.navigator.userAgent.toLowerCase(),
                n = window.navigator.appVersion.toLowerCase();
            return -1 != e.indexOf("msie") || e.indexOf("trident") >= 0 ? (ie = !0, -1 != n.indexOf("msie 8.") ? "ie ie-old ie8" : -1 != n.indexOf("msie 9.") ? "ie ie-old ie9" : -1 != n.indexOf("msie 10.") ? "ie ie-old ie10" : e.indexOf("trident") >= 0 ? "ie ie11" : void 0) : -1 != e.indexOf("edge") ? "edge" : "no-ie"
        },
        device: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("iphone") > 0 || e.indexOf("ipod") > 0 || e.indexOf("android") > 0 && e.indexOf("mobile") > 0 ? "sp" : e.indexOf("ipad") > 0 || e.indexOf("android") > 0 ? "tab" : "pc"
        }
    },
    device = ua.device(),
    gMenu = {
        init: function() {
            menuFlg = !1, $(document).on({
                mouseenter: function(e) {},
                mouseleave: function(e) {},
                click: function(e) {
                    e.preventDefault(), menuFlg || gMenu.open()
                }
            }, ".btn_menu"), $(document).on({
                mouseenter: function(e) {},
                mouseleave: function(e) {},
                click: function(e) {
                    e.preventDefault(), gMenu.close()
                }
            }, ".btn_menu_close")
        },
        open: function() {
            menuFlg = !0, $html.addClass("on_menu"), TweenLite.to($(".center_l", $menuBG), .2, {
                alpha: .1
            }), TweenLite.fromTo($menuBG, .8, {
                y: 0
            }, {
                height: "100%",
                ease: Power2.easeInOut,
                onComplete: function() {}
            })
        },
        close: function() {
            $html.removeClass("on_menu"), TweenLite.to($menuBG, .8, {
                y: windowH,
                ease: Power2.easeInOut,
                onComplete: function() {
                    TweenLite.set($menuBG, {
                        height: 0,
                        y: 0
                    }), menuFlg = !1
                }
            })
        }
    };
gMenu.init(), $(document).on({
    mouseenter: function(e) {
        var n = $(this);
        n.not("out") && n.addClass("hov").removeClass("out")
    },
    mouseleave: function(e) {
        var n = $(this);
        n.addClass("out").removeClass("hov");
        setTimeout(function() {
            n.removeClass("out")
        }, 600)
    },
    click: function(e) {
        $(this).removeClass("out")
    }
}, ".e_out a"), $(document).on({
    mouseenter: function(e) {
        var n = $(this);
        n.addClass("hov").removeClass("out");
        setTimeout(function() {
            n.removeClass("hov")
        }, 1e3)
    },
    click: function(e) {
        $(this).removeClass("hov")
    }
}, ".btn");
var effect = {
        rand: function(e, n) {
            return Math.random() * (n - e) + e
        },
        shuffle: function(e, n) {
            e.shuffleLetters({
                step: 3,
                fps: 30,
                callback: n
            })
        },
        cover: function() {
            $("[data-cover]").each(function(e, n) {
                var i = $(n).data("cover");
                $(n).css({
                    "background-image": "url(" + i + ")"
                })
            })
        },
        bw: function() {
            $(".b-w").BlackAndWhite({
                hoverEffect: !1,
                onImageReady: function(e) {}
            })
        },
        glass: function() {
            $(".glass").each(function(e, n) {
                var i = $(n).data("blur");
                $(n).backgroundBlur({
                    imageURL: i,
                    blurAmount: 26,
                    imageClass: "bg_blur",
                    duration: 200
                })
            })
        },

        titleIn: function() {
            $(".textblow").addClass("show")
        },
        typewriterSet: function() {
            $(".typewriter").each(function(e, n) {
                var i = $(n);
                i.children().andSelf().contents().each(function() {
                    3 == this.nodeType && $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="lt">$1</span>'))
                }), $("span", i).each(function(e) {
                    $(this).css("animation-delay", .1 + .022 * e + "s")
                })
            })
        },
        typewriterFire: function() {
            $(".typewriter").addClass("show")
        }
    },
    btn_Dive, scroll = {
        plx: function() {
            pcsize && !ie && ($("[data-plx]").each(function(e, n) {
                var i = $(n),
                    t = i.offset().top;
                if (scrollB + 100 > t && t > scrollT - windowH) {
                    var s = i.data("plx"),
                        o = 1.3 * (t - scrollM) / s;
                    TweenLite.set(i, {
                        y: o
                    })
                }
            }), TweenLite.set(".confetti div", {
                rotationY: scrollT / 8 + "deg"
            }))
        },
        dive: function() {
            if (pcsize && (0 >= scrollT ? scroll.btnDiveShow(.8) : scroll.btnDiveHide(.8), !ie)) {
                var e = scrollT / windowH * 2,
                    n = scrollT - windowH / 3,
                    i = n / windowH;
                1 >= e ? TweenLite.set($(".intro.type2 .bgimg"), {
                    alpha: 1 - e
                }) : TweenLite.to($(".intro.type2 .bgimg"), .4, {
                    alpha: 0,
                    ease: Power1.easeOut
                }), n > .5 && 1 >= i ? (scroll.btnDiveHide(.8), TweenLite.set($(".intro.type2 .leadbox"), {
                    alpha: 1 - i,
                    y: -n / 2 - 5
                })) : .5 >= n ? TweenLite.to($(".intro.type2 .leadbox"), .4, {
                    alpha: 1,
                    y: 0,
                    ease: Power1.easeOut
                }) : TweenLite.to($(".intro.type2 .leadbox"), .4, {
                    alpha: 0,
                    ease: Power1.easeOut
                })
            }
        },
        btnDiveShow: function(e) {
            btn_Dive = TweenLite.to($(".btn_dive"), e, {
                y: 0,
                alpha: 1
            })
        },
        btnDiveHide: function(e) {
            btn_Dive && btn_Dive.pause(), TweenLite.to($(".btn_dive"), e, {
                y: scrollT,
                alpha: 0
            })
        },
        header: function(e) {
            "down" === e ? $html.addClass("is_menu_hide") : $html.removeClass("is_menu_hide")
        },
        footer: function() {
            pcsize && (scrollB >= pageH - 100 && scroll.footerShow(), scrollB < pageH - 100 && scroll.footerHide())
        },
        footerShow: function() {
            $html.addClass("show_ft")
        },
        footerHide: function() {
            $html.removeClass("show_ft")
        }
    };
$(document).on("click", ".btn_dive", function() {
    "home" === pagetype ? fullpage.start("down") : (fistviewH = pcsize && !ie ? 1.25 * windowH : windowH, TweenLite.to(scrollWindow, 1, {
        scrollTo: fistviewH,
        ease: Circ.easeInOut
    }), scroll.header("down"))
}), $(document).on("click", ".btn_goup", function(e) {
    if (e.preventDefault(), "home" === pagetype) fullpage.jump(0);
    else {
        var n = 5e-4 * scrollT;
        scroll.header("up"), TweenLite.to(scrollWindow, n, {
            scrollTo: {
                y: 0,
                x: 0
            },
            ease: Power4.easeOut,
            onComplete: function() {
                scroll.btnDiveShow()
            }
        })
    }
});

$(function() {
   $("a[href^='http']").each(function() {
       $(this).click(function(event) {
             event.preventDefault();
             event.stopPropagation();
             window.open(this.href, '_blank');
        });
   });
});