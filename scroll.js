$(".home").addClass("active");
let scroll = 0;

$(document).scroll(function() {
    scroll = $(this).scrollTop();
    if(window.matchMedia('(min-width: 930px)').matches) {
        if(scroll > 800 && scroll <= 1500) {
            $(".home").removeClass("active");
            $(".regist").addClass("active");
            $(".alumn").removeClass("active");
            $(".abt").removeClass("active");
        } else if(scroll > 1500 && scroll <= 3200) {
            $(".home").removeClass("active");
            $(".regist").removeClass("active");
            $(".alumn").addClass("active");
            $(".abt").removeClass("active");
        } else if(scroll > 3200) {
            $(".home").removeClass("active");
            $(".regist").removeClass("active");
            $(".alumn").removeClass("active");
            $(".abt").addClass("active");
        } else {
            $(".home").addClass("active");
            $(".regist").removeClass("active");
            $(".alumn").removeClass("active");
            $(".abt").removeClass("active");
        }
    } else {
        if(scroll > 400 && scroll <= 800) {
            $(".home").removeClass("active");
            $(".regist").addClass("active");
            $(".alumn").removeClass("active");
            $(".abt").removeClass("active");
        } else if(scroll > 800 && scroll <= 2000) {
            $(".home").removeClass("active");
            $(".regist").removeClass("active");
            $(".alumn").addClass("active");
            $(".abt").removeClass("active");
        } else if(scroll > 2000) {
            $(".home").removeClass("active");
            $(".regist").removeClass("active");
            $(".alumn").removeClass("active");
            $(".abt").addClass("active");
        } else {
            $(".home").addClass("active");
            $(".regist").removeClass("active");
            $(".alumn").removeClass("active");
            $(".abt").removeClass("active");
        }
    }
});

// window.addEventListener("scroll", function() {
//     var p = document.getElementById("pendaftaran");
//     let a = document.getElementById("alumni");

//     if (window.scrollY <= (p.offsetTop + p.offsetHeight)) {
//         $(".home").removeClass("active");
//         $(".regist").addClass("active");
//         $(".alumn").removeClass("active");
//         $(".abt").removeClass("active");
//     } else if(window.scrollY < (a.offsetTop + a.offsetHeight)) {
//         $(".home").removeClass("active");
//         $(".regist").removeClass("active");
//         $(".alumn").addClass("active");
//         $(".abt").removeClass("active");
//     } else {
//         $(".home").addClass("active");
//         $(".regist").removeClass("active");
//         $(".alumn").removeClass("active");
//         $(".abt").removeClass("active");
//     }
// });