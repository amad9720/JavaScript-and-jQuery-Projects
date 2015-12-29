//Accordion
var action = "click";
var speed = "500";

$(document).ready(function(){
    $('li.q').on(action,function(){
        $(this).next()
            .slideToggle(speed)
                .siblings('li.a')
                    .slideUp();

        //Get active image
        var img = $(this).children('img');
        //Remove class 'rotate' for all other images except active
        $('img').not(img).removeClass('rotate');
        //Toggle 'rotate' class
        img.toggleClass('rotate');

    });
});
