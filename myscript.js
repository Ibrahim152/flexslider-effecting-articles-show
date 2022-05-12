$('.column').css('display','none');
$(window).on('load', function () {
    $('.flexslider').flexslider();
    counter=1
    $(`.column:nth-child(${counter})`).fadeIn(2000);
    $("#page > div > ul.flex-direction-nav > li.flex-nav-next > a").on('click touchstart', function (event) {
        $(`.column:nth-child(${counter})`).fadeOut(300, function () {
            counter=(counter%$('.column').length)+1
            $(`.column:nth-child(${counter})`).fadeIn(300);
        });
    })
        $("#page > div > ul.flex-direction-nav > li.flex-nav-prev > a").on('click touchstart', function (event) {
        $(`.column:nth-child(${counter})`).fadeOut(300, function () {
            counter--
            if (counter<1) {
                counter=$('.column').length
            }
            console.log(counter)
            $(`.column:nth-child(${counter})`).fadeIn(300);
        });
    })
});