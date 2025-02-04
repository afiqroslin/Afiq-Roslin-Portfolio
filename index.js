
$("#introduction").slideDown(1000);

// Fade In automatically
$("#experience").fadeIn(2000);

// Fade In when scroll down
// $(document).ready(function () {
//     $(window).on("scroll", function () {
//         $("#experience").each(function () {
//             let elementTop = $(this).offset().top;
//             let windowBottom = $(window).scrollTop() + $(window).height();

//             if (windowBottom > elementTop) {
//                 $(this).addClass("fade-in");
//             }
//         });
//     });
// });

// show job description when click on job title
$("#text-click-1").click(function(){
    $(".exp-description-1").fadeToggle(1000);
    });

$("#text-click-2").click(function(){
    $(".exp-description-2").fadeToggle(1000);
    });

$("#text-click-3").click(function(){
    $(".exp-description-3").fadeToggle(1000);
    });



    