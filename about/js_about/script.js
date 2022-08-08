$(document).ready(function(){
    $(".slider").slick({
        autoplay: false,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 2,//スライドを画面に3枚見せる
        slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        dots: true,//下部ドットナビゲーションの表示
        responsive: [
			{
                breakpoint: 769,//モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2,//スライドを画面に2枚見せる
                    slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
                }
		    },
		    {
                breakpoint: 426,//モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1,//スライドを画面に1枚見せる
                    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
                }
		    }
	    ]

    });

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

    $(".flipLeftTrigger").each(function(){
        var elemPos = $(this).offset().top-40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        console.log(scroll, elemPos, windowHeight);
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('flipLeft');
        } else {
            $(this).removeClass('flipLeft');
        }
    })
    
}