var animating = !1,
    saveScrollTop = 0,
    lastElementClicked, elTop, elHeight, elName, pTimer, timeout = 3e3,
    prevUrl;
"pc" === device && (Barba.Pjax.init(), Barba.Prefetch.init());
var pageTransition = Barba.BaseTransition.extend({
        start: function() {
            $html.addClass("is_basic transition"), TweenLite.set(".prgoress", {
                width: 0
            }), TweenLite.set(".transitionPanel, .movett", {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
            }), TweenLite.set(".blind", {
                width: "100%",
                alpha: 0,
                backgroundColor: "#090909"
            }), TweenLite.to(".blind", .5, {
                alpha: 1,
                ease: Circ.easeInOut
            }), Promise.all([this.newContainerLoading, this.enterNewPage()]).then(this.showNewPage.bind(this)).then(this.finish.bind(this))
        },
        enterNewPage: function() {
            var e = this,
                t = Barba.Utils.deferred(),
                i = $(this.newContainer);
            return pTimer || (pTimer = setTimeout(t.resolve, timeout)), setTimeout(function() {
                var n = imagesLoaded(i, {
                        background: !0
                    }),
                    a = 0;
                n.on("progress", function(t) {
                    a++;
                    var i = a / t.images.length;
                    e.newPageProgress(i)
                }), n.on("always", t.resolve)
            }, 300), t.promise
        },
        showNewPage: function() {
            pTimer && (clearTimeout(pTimer), pTimer = null), this.newPageProgress(1), $html.addClass("ready"), TweenLite.set(scrollWindow, {
                scrollTo: 0
            })
        },
        finish: function() {
            reset(), this.done(), TweenLite.set(".movett", {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
            }), loading.complete(1.2)
        },
        newPageProgress: function(e) {
            clearTimeout(pTimer), TweenLite.to(".prgoress", 1, {
                width: 100 * e + "%",
                ease: Sine.easeInOut
            })
        },
        newPageProgress: function(e) {
            clearTimeout(pTimer), TweenLite.to(".prgoress", 1, {
                width: 100 * e + "%",
                ease: Sine.easeInOut
            })
        }
    }),
    worksTransition = Barba.BaseTransition.extend({
        start: function() {
            var e = this;
            TweenLite.set(".blind", {
                width: 0,
                alpha: 1,
                backgroundColor: "#fff"
            }), TweenLite.set(".transitionPanel", {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
            });
            var t = $(lastElementClicked).offset().top,
                i = $(lastElementClicked).height(),
                n = t + i / 2 - windowH / 2;
            TweenLite.to(scrollWindow, .6, {
                scrollTo: n,
                ease: Power1.easeOut,
                onComplete: function() {
                    saveScrollTop = $(scrollWindow).scrollTop(), $html.addClass("is_godetail transition"), Promise.all([e.newContainerLoading, e.enterNewPage()]).then(e.showNewPage.bind(e)).then(e.finish.bind(e))
                }
            })
        },
        enterNewPage: function() {
            var e = this,
                t = Barba.Utils.deferred(),
                i = $(this.newContainer);
            pTimer || (pTimer = setTimeout(function() {
                slider.work(), t.resolve()
            }, timeout));
            var n = imagesLoaded(i, {
                    background: !0
                }),
                a = 0;
            return n.on("progress", function(t) {
                a++;
                var i = a / t.images.length;
                e.newPageProgress(i)
            }), n.on("always", function() {
                $(".work_slider ul").on("init", t.resolve), slider.work()
            }), t.promise
        },
        showNewPage: function() {
            this.newPageProgress(1)
        },
        finish: function() {
            pTimer && (clearTimeout(pTimer), pTimer = null);
            var e = this;
            $(".work_slider ul").trigger("resize"), prevUrl && $(".btn_close").attr("href", prevUrl), TweenLite.to(".focusedThumb .cat", .5, {
                height: 0,
                ease: Circ.easeInOut,
                onComplete: function() {
                    TweenLite.to(".focusedThumb .title", .6, {
                        height: 0,
                        ease: Power4.easeInOut
                    }), reset(), e.done(), loading.complete(0)
                }
            })
        },
        newPageProgress: function(e) {
            TweenLite.to(".workProgress", .8, {
                width: 100 * e + "%",
                ease: Circ.easeInOut
            }), TweenLite.to(".blind", .8, {
                width: 100 * e + "%",
                ease: Circ.easeInOut
            })
        }
    }),
    careerTransition = Barba.BaseTransition.extend({
        start: function() {
            TweenLite.set(".blind", {
                width: 0,
                alpha: 1,
                backgroundColor: "#090909"
            }), TweenLite.set(".transitionPanel", {
                clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
            }), $(lastElementClicked).is(".b_dark") ? TweenLite.set(".blind", {
                backgroundColor: "#090909"
            }) : TweenLite.set(".blind", {
                backgroundColor: "#ffffff"
            }), saveScrollTop = $(scrollWindow).scrollTop(), $html.addClass("is_goint transition"), TweenLite.to(".blind", 1, {
                width: "100%",
                ease: Circ.easeInOut
            }), Promise.all([this.newContainerLoading, this.enterNewPage()]).then(this.finish.bind(this))
        },
        enterNewPage: function() {
            var e = Barba.Utils.deferred();
            $(this.newContainer);
            return setTimeout(function() {
                e.resolve()
            }, 600), e.promise
        },
        finish: function() {
            TweenLite.set(scrollWindow, {
                scrollTo: 0
            }), reset(), this.done(), loading.complete(0)
        }
    }),
    loadmoreTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading, this.enterNewPage.bind(this)]).then(this.finish.bind(this))
        },
        enterNewPage: function() {
            var e = Barba.Utils.deferred();
            return TweenLite.to(".works_list", .6, {
                autoAlpha: 0,
                y: -40,
                ease: Circ.easeOut,
                onComplete: function() {
                    effect.titleIn(), effect.typewriterFire(), pTimer || (pTimer = setTimeout(e.resolve, timeout));
                    var t = imagesLoaded({
                            background: !0
                        }),
                        i = 0;
                    t.on("progress", function(e) {
                        i++;
                        i / e.images.length
                    }), t.on("always", e.resolve)
                }
            }), e.promise
        },
        finish: function() {
            TweenLite.set(scrollWindow, {
                scrollTo: 0
            }), this.done(), loading.complete(0), TweenMax.fromTo(".works_list", 2, {
                y: windowH
            }, {
                y: 0,
                delay: 0,
                ease: Quint.easeInOut
            })
        }
    }),
    goback = Barba.BaseTransition.extend({
        start: function() {
            var e = $(scrollWindow).scrollTop(),
                t = this.oldContainer,
                i = $(t).height();
            $html.addClass("is_goback"), TweenLite.set(t, {
                height: i,
                y: -e,
                clip: "rect(0px " + windowW + "px " + i + "px 0px)"
            }), Promise.all([this.newContainerLoading, this.enterNewPage()]).then(this.finish.bind(this))
        },
        enterNewPage: function() {
            var e = Barba.Utils.deferred();
            return BaseSplash = setTimeout(function() {
                e.resolve()
            }, 100), e.promise
        },
        finish: function() {
            var e = this,
                t = this.oldContainer,
                i = (this.newContainer, $(t).height());
            this.newContainer.style.visibility = "visible", TweenLite.set(scrollWindow, {
                scrollTo: saveScrollTop
            }), reset(), pageH = $(".page_wrapper").height(), TweenLite.to(t, 1, {
                clip: "rect(0px " + windowW + "px " + i + "px " + windowW + "px)",
                ease: Power4.easeInOut,
                onComplete: function() {
                    e.done(), saveScrollTop = 0, effect.titleIn(), loading.pageStart()
                }
            })
        }
    });
Barba.Dispatcher.on("linkClicked", function(e) {
    lastElementClicked = e, elTop = $(e).offset().top, elHeight = $(e).height(), elName = e.getAttribute("data-namespace")
}), Barba.HistoryManager.storeNamespace = function(e) {
    this._namespace = e
}, Barba.PjaxpreventCheck = function(e, t) {
    return window.history.pushState && t && t.href ? e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ? !1 : t.target && "_blank" === t.target ? !1 : window.location.protocol !== t.protocol || window.location.hostname !== t.hostname ? !1 : Utils.getPort() !== Utils.getPort(t.port) ? !1 : t.href.indexOf("#") > -1 ? !1 : Utils.cleanLink(t.href) == Utils.cleanLink(location.href) ? !1 : t.classList.contains(this.ignoreClassLink) ? !1 : animating ? (animating = !0, !1) : !0 : !1
}, Barba.Pjax.getTransition = function() {
    var e = Barba.Pjax.History.prevStatus(),
        t = Barba.Pjax.History.currentStatus(),
        i = (Barba.HistoryManager.history, e.namespace),
        n = t.namespace || elName || setCurrentNamespace();
    return prevUrl = e.url, "pc" != device ? pageTransition : "detailpage" === i ? goback : "listpage" === i && "detailpage" === n ? worksTransition : "listpage" === i && "listpage" === n ? loadmoreTransition : "subpage" === i && "detailpage" === n ? careerTransition : pageTransition
}, Barba.Dispatcher.on("initStateChange", function() {
    ga("send", "pageview", location.pathname)
}), Barba.Dispatcher.on("newPageReady", function(e) {
    size(), init(e.namespace)
}), Barba.Dispatcher.on("transitionCompleted", function() {
    elName = null, animating = !1
});
var setCurrentNamespace = function(e) {
    var t = Barba.Pjax.History.currentStatus().url,
        e = Barba.HistoryManager.history;
    for (i = 0; i < e.length; i++) return e[i].url === t ? e[i].namespace : !1
};