$(document).ready(function(){
    //Set options
    var speed = 500;
    var autoSwitch = true;
    var autoSwitchSpeed = 5000;
    var id;

    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();

    //Arrow functionality
    $('#next').on('click',nextSlide);

    $('#prev').on('click',prevSlide);

    //Auto slide
    if(autoSwitch){
        id = setInterval(nextSlide,autoSwitchSpeed);
    }

    //Function for switching to next slide
    function nextSlide(){
        //Let the user see the image for 5 sec
        clearInterval(id);
        
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

        //Auto slide until the user press next arrow
        if(autoSwitch){
            id = setInterval(nextSlide,autoSwitchSpeed);
        }
    }

    //Function for switching to previous slide
    function prevSlide(){
        //Let the user see the image for 5 sec
        clearInterval(id);

        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

        //Auto slide until the user press prev arrow
        if(autoSwitch){
            id = setInterval(nextSlide,autoSwitchSpeed);
        }
    }
});
