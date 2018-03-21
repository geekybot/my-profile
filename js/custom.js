// $(document).ready(function () {
//     // var dist = $(document).scrollTop();
var a = $(document).scrollTop();
console.log(a);

// $(window).scroll(function () {
//     var dist = $(document).scrollTop();
//     console.log(dist);
//     if ($(document).scrollTop() > 50) {
//         console.log($(document).scrollTop());
//         $('nav').addClass('hiding-nav');
//     }
//     else {
//         $('nav').removeClass('hiding-nav');
//     }
// });

// )};

// $(document).ready(function () {
//     $(window).scroll(function () {
//         var dist = $(document).scrollTop();
//         console.log(dist);
//         if ($(document).scrollTop() > 50) {
//             console.log($(document).scrollTop());
//             $('nav').addClass('hiding-nav');
//         }
//         else {
//             $('nav').removeClass('hiding-nav');
//         }
//     });
// });

// (function(self) {
//     self.onscroll = function (e) {
//         var dist = $(document).scrollTop();
//         console.log(dist, e);
//         if ($(document).scrollTop() > 50) {
//             console.log($(document).scrollTop());
//             $('nav').addClass('hiding-nav');
//         }
//         else {
//             $('nav').removeClass('hiding-nav');
//         }
//     }
// })(window)


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