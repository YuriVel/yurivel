$(document).ready(function () {
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'><span class='left'>влiво</span></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='" + $(this).index() + "'></span>"); // добавляем блок навигации
            $(this).addClass("slider" + $(this).index());
        });
        $(obj).find(".nav").append("<span class='right'>вправо</span></div>");
        $(obj).find(".nav span[rel]").first().addClass("on"); // делаем активным первый элемент меню
    });
});


function sliderJS(obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider" + obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-" + step * obj}, 500); // 500 это скорость перемотки
}


$(document).on("click", ".slider .nav span[rel]", function () { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});

$(document).on("click", ".slider .nav .right", function () { // slider click navigate

    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    var count = ($(sl).find(".nav span").length) - 2;

    var next = Math.round($(sl).find(".nav .on").attr("rel")) + 1;
    if(next >= count) next = 0;

    $(sl).find(".nav .on").removeClass("on");
    $(sl).find("[rel='"+next+"']").addClass("on");

    sliderJS(next, sl); // слайдим
    return false;
});

$(document).on("click", ".slider .nav .left", function () { // slider click navigate

    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    var count = ($(sl).find(".nav span").length) - 2;

    var prev = Math.round($(sl).find(".nav .on").attr("rel")) - 1;
    if(prev < 0) prev = count - 1;
    console.log(prev);
    $(sl).find(".nav .on").removeClass("on");
    $(sl).find("[rel='"+prev+"']").addClass("on");

    sliderJS(prev, sl); // слайдим
    return false;
});