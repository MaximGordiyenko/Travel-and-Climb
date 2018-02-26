//TODO: The jQuery function a parameter that targets an element, like '#menu-button', and turns it into a jQuery object.
//TODO: Then, you can call any jQuery method on a jQuery object.??
//TODO: The second argument to .on() is a callback function. When a 'click' occurs on an example-class element, this function executes.
$(document).ready(function () { //TODO:The $ symbol is an alias for the jQuery function. 'ready' it's callback function
    $('.menu-button').on('mouseenter', function () {
        $('.nav-menu').show();
        $('.menu-button').css({
            color: '#C3FF00',
            backgroundColor: '#535353'
        });
    });
    $('.nav-menu').on('mouseleave', function () { //TODO:'mouseleave' - it's event listener, it wait for event
        $('.nav-menu').hide();
        $('.menu-button').css({
           color: '#efefef',
           backgroundColor: '#444444'
        });
    });
//TODO: Login form drop down when
    $('.login-button').on('click', function () { //TODO: The on('click') method is the event listener. It checks if the user has clicked on given class of HTML element.
        $('.login-form').show();
        $('.login-button').css({
            color: '#C3FF00',
            backgroundColor: '#535353'
        });
    });
    $('.login-form').on('mouseleave', function () {  //TODO: The second argument to .on() is a callback function. When a 'click' occurs on an 'login-form class' element, this function executes.
        $('.login-form').hide();
        $('.login-button').css({
            color: '#efefef',
            backgroundColor: '#444444'
        });
    });
//TODO: Albaraccin
    $('.alba-arrow').on('click', function () {
        $('.alba-details').slideToggle(500);
        $('.shoe-details').on({
            mouseleave: function () {
                $(this).hide();
            }
        });
    });
//TODO: Gaeta
    $('.gaeta-arrow').on('click', function () {
        $('.gaeta-details').slideToggle(500);
        $('.shoe-details').on({
            mouseleave: function () {
                $(this).hide();
            }
        });
    });
//TODO: Chamonix
        $('.chamonix-arrow').on('click', function () {    //Function or event handler open or close details about travel
            $('.chamonix-details').slideToggle(500);     //delay before the menu with details appear
            $('.shoe-details').on({                     //block of travel details which event handler hide when cursor in the zone of details. Block doesn't work in mobile version.
                mouseleave: function () {              //function that hide menu when mouse leave active area
                    $(this).hide();
                }
            });
        });
}); //TODO: finish 'ready' callback function
$(document).ready(function () {
    $('.nav-menu a').on('mouseenter', function () {   //TODO: '.nav-menu a' has acsess to the HTML hyperlink 'a href' and change color of <li> tags
        $(this).css('color', '#c3ff00')              //TODO: .css JQuery method uses for acsess to the stylesheet that changes color
    }).on('mouseleave', function () {
        $(this).css('color', '#efefef')
    });
});