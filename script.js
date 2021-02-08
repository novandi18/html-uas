$(document).ready(function() {
    let container = $(".container");
    let modal = $(".modal");
    let btnlogin = $("#login");
    let btnloginM = $("#loginM");
    let close = $("#close");
    let hamburger = $("#btn");
    let toggle = $(".navbar .toggle");
    let menu = $(".navbar .menu");
    let logo = $(".navbar .logo");
    let menubefore = $(".navbar .menu ul li a");
    let menubeforeactive = $(".navbar .menu ul li a.active");
    let scroll = 0;

    document.getElementById("show").addEventListener("click", function() {
        showPW();
    });
    
    btnlogin.click(function() {
        showModal();
    });

    btnloginM.click(function() {
        showModal();
    });

    close.click(function() {
        closeModal();
    });

    hamburger.click(function() {
        menu.toggleClass("show");
        logo.toggleClass("bg");
        toggle.toggleClass("bgs");
        menubefore.toggleClass("show");
        menubeforeactive.toggleClass("shows");
    });

    if(window.matchMedia('(min-width: 840px)').matches) {
        $("#btnReg").click(function() {
            $(window).scrollTop(970);
        });
    }
    
    $(document).scroll(function() {
        scroll = $(this).scrollTop();
        Responsive();
    });

    function showPW() {
        let pw = document.getElementById("pw");
        if(pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    }

    function showModal() {
        container.css({"filter":"blur(3px)","transition":"all ease .2s"});
        modal.css({"display":"flex"});
    }

    function closeModal() {
        container.css({"filter":"none","transition":"all ease .2s"});
        modal.css({"display":"none"});
    }

    function Responsive() {
        if(window.matchMedia('(max-width: 930px)').matches) {
            if(scroll > 1) {
                if($("#btn").is(':checked')) {
                    $("#nav").css({"background-color":"rgb(15,15,15)","box-shadow":"0px 0px 15px 0px rgba(0,0,0,.2)"});
                    $("#nav .logo").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .toggle").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .menu").css({"background-color":"rgb(15,15,15)","display":"flex"});
                } else {
                    $("#nav").css({"background-color":"rgb(15,15,15)","box-shadow":"0px 0px 15px 0px rgba(0,0,0,.2)"});
                    $("#nav .logo").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .toggle").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .menu").css({"background-color":"rgb(15,15,15)","display":"flex"});
                }
            } else {
                if($("#btn").is(':checked')) {
                    $("#nav").css({"background-color":"rgb(15,15,15)","box-shadow":"none"});
                    $("#nav .logo").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .toggle").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .menu").css({"background-color":"rgb(15,15,15)","display":"flex"});
                } else {
                    $("#nav").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .menu").css({"background-color":"rgb(15,15,15)","display":"flex"});
                    $("#nav .logo").css({"background-color":"rgb(15,15,15)"});
                    $("#nav .toggle").css({"background-color":"rgb(15,15,15)"});
                }
            }
        } else {
            if(scroll > 100) {
                $("#nav .logo").css({"background-color":"rgb(15,15,15)"});
                $("#nav .toggle").css({"background-color":"rgb(15,15,15)"});
                $("#nav .menu").css({"background-color":"rgb(15,15,15)","display":"flex"});
            } else {
                $("#nav").css({"background-color":"transparent","box-shadow":"none"});
                $("#nav .logo").css({"background-color":"transparent"});
                $("#nav .toggle").css({"background-color":"transparent"});
                $("#nav .menu").css({"background-color":"transparent","display":"flex"});
            }
        }
    }

    $(".moon").click(function() {
        $("#us").addClass("dark");
        $("#us-title").addClass("darktext");
    });
});