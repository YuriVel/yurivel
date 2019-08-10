$(document).ready(function(){
	$("#scroll-paging").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
            if(top < 200) top = 0;
		//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        //$("#scroll-paging").find("li").removeClass("current"); 
        //$(this).parent("li").addClass("current");
    });
    
    
    $(window).scroll(function() {
        let scroll = $("#scroll-paging");
        var count = $("#scroll-paging li").length;
       
        var vh = Math.round($(document).height() / count);

        if (scroll.offset().top < 300)
            scroll.find(".go-top").addClass("hidden");
        else
            scroll.find(".go-top").removeClass("hidden");

        if (scroll.offset().top > ($(document).height() - 1000))
            scroll.find(".go-down").addClass("hidden");
        else
            scroll.find(".go-down").removeClass("hidden");

        for (i = 1; i <= count; i++) {
            scroll.find("li").removeClass("current");
            scroll.find("li:eq("+ (i - 1) +")").addClass("current");
            if(scroll.offset().top <= (vh*i - 350)) return;
        }

    });

});

