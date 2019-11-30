let indicator = $('.movable-indicator');
$('.nav-i').each(
    function(){
        $(this).click(function(){
            var left_distance = $(this).position().left; 
            var element_width = $(this).outerWidth();    
            
            $(this).siblings().removeClass('is-active');
            $(this).addClass('is-active');

            indicator.css('background-color', $(this).data('color'));
            indicator.css('width', element_width);
            indicator.css('left', left_distance);
        })
    }
);
