$(document).ready(function() {
    $(window).scroll(function(){
        fadeUp();
        $("#hero_home").css("background-position-y", $(this).scrollTop()*0.5);
    })
})

let fadeUp = () => {
    $(".fadeUpTrigger").each(function(){
        var elemPos = $(this).offset().top-40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(scroll, windowHeight, elemPos);
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    })
}