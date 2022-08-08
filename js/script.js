$(document).ready(function(){
    $(window).scroll(function(){
        fadeUp();
        // $(".hero_homeBg").css({
        //     transform: 'scale(' + (100 + scroll/10)/100+ ')',
        //     top:-(scroll/50)+ "%",
        // });
        $(".hero_home").css("background-position-y", $(this).scrollTop()*0.5);
        console.log($(this).scrollTop());
        
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

    $(".flipLeftTopTrigger").each(function(){
        var elemPos = $(this).offset().top-40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        console.log(scroll, elemPos, windowHeight);
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('flipLeftTop');
        } else {
            $(this).removeClass('flipLeftTop');
        }
    })

    $(".zoomInTrigger").each(function(){
        var elemPos = $(this).offset().top-40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        console.log(scroll, elemPos, windowHeight);
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('zoomIn');
        } else {
            $(this).removeClass('zoomIn');
        }
    })
    
}

