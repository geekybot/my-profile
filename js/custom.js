$(document).ready(function () {

    const $body = document.getElementsByTagName('body')[0];

    const func = function (e) {
        var dist = $body.scrollTop;
        // console.log(dist);
        if (dist > 50) {
            // console.log($(document).scrollTop());
            $('nav').addClass('hiding-nav');
            $('nav').removeClass('bg-transparent');
        }
        else {
            $('nav').removeClass('hiding-nav');
            $('nav').addClass('bg-transparent');
        }
    }

    $body.addEventListener('scroll', func);


    $(".nav-link").click(function(e){
        var linkhref = $(this).attr('href');
        // console.log($(linkhref).offset().top);
        $($body,'body').animate({
            scrollTop: $(linkhref).offset().top - 60
        },1000);

        e.preventDefault();

    });



    // $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
    //     highlightSelector: "#navigation-menu a"
    // });

    // /* demo functions */
    // $("a[rel='next']").click(function (e) {
    //     e.preventDefault();
    //     var to = $(this).parent().parent("section").next().attr("id");
    //     $.mPageScroll2id("scrollTo", to);
    // });

    //online demo only
    // setTimeout(function () {
    //     if (document.location.hostname === "manos.malihu.gr") {
    //         $("#section-1").append('<div class="_bnr"><a href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=36986_1_1_14" target="_blank" rel="nofollow"></a></div>')
    //         $("<style>._bnr{ display: none; } @media only screen and (min-width: 1140px){._bnr{ display: block; position: absolute; top: 3em; right: 3em; } #content section{ position: relative; } section > .content{ margin-right: calc(160px + 3em); } ._bnr > a{ display: block !important; height: 600px; width: 160px; background: url(etb160600.gif) no-repeat; border: 0px; }}</style>").appendTo("head");
    //     }
    // }, 500);





});
