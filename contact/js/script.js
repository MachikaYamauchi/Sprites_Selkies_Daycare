$(document).ready(function() {
    $(window).scroll(function() {
        fadeUp();
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