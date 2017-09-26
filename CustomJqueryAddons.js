$.fn.textWidth = function () {
    var html_org = $(this).html();
    var html_calc = '<span>' + html_org + '</span>';
    $(this).html(html_calc);
    var width = $(this).find('span:first').width();
    $(this).html(html_org);
    return width;
};

$.fn.textHeight = function () {
    var html_org = $(this).html();
    var html_calc = '<span>' + html_org + '</span>';
    $(this).html(html_calc);
    var height = $(this).find('span:first').height();
    $(this).html(html_org);
    return height;
};

$.fn.fitText = function (defaultFontSize, maxWidth, padding) {
    //set text to max size
    var fontSize = defaultFontSize;
    $(this).css("font-size", fontSize + "px");

    //reduce text size of text
    while (($(this).textWidth() + padding) >= maxWidth) {
        fontSize -= 2;
        $(this).css("font-size", fontSize + "px");

    }

    return fontSize;
};


$.fn.isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}