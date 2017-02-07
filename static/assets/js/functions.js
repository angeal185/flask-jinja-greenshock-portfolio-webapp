function subpageFunc() {
    subscrollSet(), $(scrollWindow).on({
        scroll: function() {
            getPosition(), subscrollSet()
        }
    })
}

function subscrollSet() {
    pagenavi(), scroll.dive(), scroll.footer(), scroll.plx()
}

function pagenavi() {
    $("[data-anc]").each(function(e, t) {
        var o = $(t);
        scrollM > o.offset().top && scrollM < o.offset().top + o.height() && activePagenavi != o.data("anc") && "" != activePagenavi && ($(".sec", $pagenavi).eq(e).addClass("active").siblings(".sec").removeClass("active"), effect.shuffle($(".active .text", $pagenavi)), activePagenavi = o.data("anc"))
    })
}

function listpageFunc() {
    listscrollSet(), effect.glass(), newsCollaspse(), $(scrollWindow).on({
        scroll: function() {
            getPosition(), listscrollSet()
        }
    })
}

function listscrollSet() {
    scroll.footer(), scroll.plx()
}

function loadExImages(e) {
    $("[data-src]", e).each(function(e, t) {
        $(t).attr("src", $(t).data("src")).removeAttr("data-src")
    })
}

function detailscrollFunc() {
    $(scrollWindow).on({
        scroll: function() {
            scrollT = $(scrollWindow).scrollTop(), scrollB = scrollT + windowH, scrollM = scrollT + windowH / 3, pagenavi(), scroll.plx()
        }
    })
}
$(document).on({
    click: function(e) {
        e.preventDefault();
        var t = $(this).is(".title") ? $(this) : $(this).parents(".title");
        t.is(".opened") ? (setTimeout(function() {
            t.removeClass("opened")
        }, 400), t.next(".requirement").slideUp(400)) : (t.addClass("opened").parents("li").siblings().find(".opened").removeClass("opened"), t.next(".requirement").slideToggle(400), $(".requirement", t.closest("li").siblings()).slideUp(400))
    }
});

$(document).on({
    click: function() {
        if (pcsize) {
            $(this);
            $(this).parents(".thumb_blur").clone(!0).appendTo(".transitionPanel").wrap('<div class="block focusedThumb">').append('<span class="work_progress">')
        }
    }
}, ".link_w"), $(document).on({
    mouseenter: function() {
        var e = $(this);
        effect.shuffle(e), $html.addClass("is_closebtn")
    },
    mouseleave: function() {
        $html.removeClass("is_closebtn")
    }
}, ".btn_close");