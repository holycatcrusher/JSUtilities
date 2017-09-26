/*
    This file was made by Bradley Honeyman
    September 25th, 2017

This file requires
Jquery
Custom Jquery functions by Bradley Honeyman
*/

function Utilities() {

    //This function is used to center absolute text horizontally
    this.centerAbsoluteTextHorizontally = function (absoluteCenterText) {
        absoluteCenterText.each(function () {
            $(this).css("margin-left", $(this).parent().width() / 2 - $(this).textWidth() / 2 + "px");

        });

    }

    //This function is used to center absolute text vertically
    this.centerAbsoluteTextVertically = function (absoluteCenterText) {
        absoluteCenterText.each(function () {
            $(this).css("margin-top", $(this).parent().height() / 2 - $(this).textHeight() / 2 + "px");

        });

    }

    //This function is used to center absolute text vertically, and horizontally
    this.centerAbsoluteText = function (absoluteCenterText) {
        this.centerAbsoluteTextVertically(absoluteCenterText);
        this.centerAbsoluteTextHorizontally(absoluteCenterText);

    }

    //This function is used to fade elements to a desired opacity
    this.fadeElements = function (elements, speedInMilliSeconds, opacity) {
        elements.each(function () {
            $(this).fadeTo(speedInMilliSeconds, opacity);
        });

    }

    //This function is used to bounce an element by a set value of pixels
    this.bounce = function (bounceHeight) {


    }

    //This function is used to allow a class to be aplied to an element when 
    //another element is hovered over, while also applying a class to the hovered element
    this.applyClassToAnotherElementOnHover = function (element1, class1, element2, class2) {
        element1.hover(function () {
            $(this).addClass(class1);
            element2.addClass(class2);

        }, function () {
            $(this).removeClass(class1);
            element2.removeClass(class2);

        });

    }

    //This function is used to allow a class to be aplied to an element when 
    //another element is focused over, while also applying a class to the focused element
    this.applyClassToAnotherElementOnHover = function (element1, class1, element2, class2) {
        element1.focus(function () {
            $(this).addClass(class1);
            element2.addClass(class2);

        });

        element1.focusout(function () {
            $(this).removeClass(class1);
            element2.removeClass(class2);

        });

    }

}