function size() {
    windowW = window.innerWidth, windowH = window.innerHeight, pageH = $(".page_wrapper").height(), pcsize = windowW > 900, getPosition()
}
function init(e) {
    function t(e) {
        o = n(e)
    }

    function a(e) {
        i = o > n(e) ? "down" : "up", fullpage.start(i)
    }

    function n(e) {
        return e.originalEvent.touches[0].pageY
    }
    if ($menu = $(".btn_menu"), $menuBG = $(".menu_bg"), $footer = $(".footer"), $pagenavi = $(".pagenavi"), pagetype = e ? e : $("[data-pagetype]").data("pagetype"), effect.cover(), effect.bw(), effect.typewriterSet(), "home" === pagetype) {
        homeFunc(), fullpage.init(), indicator.setOptions({
            callback: function(e) {
                fullpage.start(e.direction)
            },
            preventMouse: !0
        }), $(document).on("touchstart", t), $(document).on("touchmove", a);
        var i, o
    } else indicator.setOptions({
        callback: function(e) {
            scroll.header(e.direction)
        },
        preventMouse: !1
    });

}

function reset() {
    scroll.footerHide(), gMenu.close()
}
$(function() {
    $html = $("html"), $html.addClass("ready").addClass(ua.browser), size(), init()
}), $(window).on({
    resize: function() {
        size(), TweenLite.set(".panel_front, .panel_back", {
            clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
        })
    }
}), TweenLite.set(".transitionPanel", {
    clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
});
var imageload = imagesLoaded($("body"), {
        background: !0
    }),
    count = 0,
    timer = null;
timer = setTimeout(function() {
    loading.progress(1), loading.complete(1.2)
}, 3e3), imageload.on("progress", function(e) {
    count++;
    var t = count / e.images.length;
    loading.progress(t)
}), imageload.on("always", function() {
    clearTimeout(timer), loading.progress(1), loading.complete(1.2)
});
var loading = {
    progress: function(e) {
        TweenLite.to(".prgoress", 1, {
            width: 100 * e + "%",
            ease: Sine.easeInOut
        })
    },
    complete: function(e) {
        TweenLite.set(".first_movett", {
            clip: "rect(0px " + windowW + "px " + windowH + "px 0px)"
        }), pageH = $(".page_wrapper").height(), "home" === pagetype && fullpage.loaded(), TweenLite.to(".transitionPanel, .first_movett, .movett", 1, {
            clip: "rect(0px 0px " + windowH + "px 0px)",
            ease: Power3.easeInOut,
            delay: e,
            onComplete: loading.pageStart
        }), setTimeout(function() {
            effect.titleIn()
        }, 900 + 1e3 * e)
    },
    pageStart: function() {
        if (effect.typewriterFire(), scroll.header("up"), $html.addClass("loaded").removeClass("is_basic is_godetail is_goint is_goback loading ready transition c_dark is_closebtn"), $(".focusedThumb").remove(), "listpage" === pagetype) {
            var e = $("[data-current]").data("current");
            $('.categorynavi a[data-tgt="' + e + '"]').parents("li").addClass("active")
        }
    }
};
$(document).on({
    mouseenter: function() {
        effect.shuffle($(".text", $(this)))
    },
    "click touchend": function(e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            a = t.split("#");
        return "home" === pagetype ? fullpage.jump(a[1]) : ($("[data-anc]").each(function(e, t) {
            if ($(t).data("anc") === a[1]) {
                var n = $(t).offset().top,
                    i = Math.abs(scrollT - n),
                    o = 75e-5 * i;
                TweenLite.to(scrollWindow, o, {
                    scrollTo: n,
                    ease: Power4.easeOut
                }), scroll.header("up")
            }
        }), !pcsize && $(this).parents(".categorynavi")[0] && (location.href = $(this).attr("href"))), !1
    }
}, ".pagenavi li a, .categorynavi li:not(.active) a");

new WOW().init();
$(document).ready(function(){
$("#cnv").delay( 1500 ).fadeOut( 1500 );
$(".page_wrapper").delay( 1500 ).css("opacity","1");
    var elements = document.querySelectorAll('[data-chaffle]');
    var elm = document.querySelectorAll('[data-chaffle-onLoad]');

    Array.prototype.forEach.call(elements, function (el) {
      var chaffle = new Chaffle(el)
      el.addEventListener('mouseover', function () {
        chaffle.init();
      });
    });

    Array.prototype.forEach.call(elm, function (el) {
      var chaffle = new Chaffle(el, {
        delay: 200
      })
      setInterval(function(){
        chaffle.init();
      }, 8000)
    });
});