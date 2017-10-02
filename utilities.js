/*
    This file was made by Bradley Honeyman
    September 25th, 2017
    Mod October 2nd, 2017 Bradley Honeyman

This file requires
Jquery
CustomJqueryAddons.js by Bradley Honeyman
*/

function Utilities() {
    /*
        This function is used to center absolute text horizontally
    */
    this.centerAbsoluteTextHorizontally = function (absoluteCenterText) {
        absoluteCenterText.each(function () {
            $(this).css("margin-left", $(this).parent().width() / 2 - $(this).textWidth() / 2 + "px");

        });

    }

    /*
        This function is used to center absolute text vertically
    */
    this.centerAbsoluteTextVertically = function (absoluteCenterText) {
        absoluteCenterText.each(function () {
            $(this).css("margin-top", $(this).parent().height() / 2 - $(this).textHeight() / 2 + "px");

        });

    }

    /*
        This function is used to center absolute text vertically, and horizontally
    */
    this.centerAbsoluteText = function (absoluteCenterText) {
        this.centerAbsoluteTextVertically(absoluteCenterText);
        this.centerAbsoluteTextHorizontally(absoluteCenterText);

    }

    /*
        This function is used to fade elements to a desired opacity
    */
    this.fadeElements = function (elements, speedInMilliSeconds, opacity) {
        elements.each(function () {
            $(this).fadeTo(speedInMilliSeconds, opacity);
        });

    }

    /*
        This function is used to allow a class to be aplied to an element when 
        another element is hovered over, while also applying a class to the hovered element
    */
    this.applyClassToAnotherElementOnHover = function (element1, class1, element2, class2) {
        //when hovered
        element1.hover(function () {
            $(this).addClass(class1);
            element2.addClass(class2);

            //when not hovered
        }, function () {
            $(this).removeClass(class1);
            element2.removeClass(class2);

        });

    }

    /*
        This function is used to allow a class to be aplied to an element when 
        another element is focused over, while also applying a class to the focused element
    */
    this.applyClassToAnotherElementOnFocus = function (element1, class1, element2, class2) {
        //when focused
        element1.focus(function () {
            $(this).addClass(class1);
            element2.addClass(class2);

        });

        //when not focused
        element1.focusout(function () {
            $(this).removeClass(class1);
            element2.removeClass(class2);

        });

    }

    /*
        This function is used to allow a class to be aplied to an element when 
        another element is active over, while also applying a class to the active element
        the possible active elements have the specified active classses removed
    */
    this.applyClassToAnotherElementOnActive = function (element1, class1, element2, class2, possibleActiveElements) {
        element1.on("click", function () {
            otherPossibleActiveElements.removeClass(class1);
            otherPossibleActiveElements.removeClass(class2);
            $(this).addClass(class1);
            element2.addClass(class2);

        });

    }

    /*
        This function is used to apply a class to a element when another element is 
        hovered, focused, or active
    */
    this.applyClassToAnotherElementOnHoverFocusAndActive = function (element1, class1, element2, class2, possibleActiveElements) {
        this.applyClassToAnotherElementOnHover(element1, class1, element2, class2);
        this.applyClassToAnotherElementOnFocus(element1, class1, element2, class2);
        this.applyClassToAnotherElementOnActive(element1, class1, element2, class2, possibleActiveElements);


    }

    /*
        This function is used to generate a 2D array of coodinates that go from
        x0, y0 to x1, y1 in a linear fasion. x0, y0 = start coordinate, and
        x1, y1 = end coordinate. A 2D array is returned containing the coordinates
        x = coords[i][0], and y = coords[i][1]
    */
    this.getnerateSetOfCoordsAlongLinearPathDDA = function (x0, y0, x1, y1) {

        //calc deltas
        var deltaX = x1 - x0;
        var deltaY = y1 - y0;
        var steps;

        //choose steps var
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            steps = Math.abs(deltaX);

        } else {
            steps = Math.abs(deltaY);

        }

        //calc incerment vaues
        var xIncrement = deltaX / steps;
        var yIncrement = deltaY / steps;

        //create point calc vars
        var coords = [[]];
        var x = x0;
        var y = y0;

        //genterate points
        coords[0][0] = x0;
        coords[0][1] = y0;
        for (var i = 1; i <= steps; i++) {
            x += xIncrement;
            y += yIncrement;
            coords[i] = [];
            coords[i][0] = Math.floor(x);
            coords[i][1] = Math.floor(y);

        }

        return coords;
    }

    /*
        This function returns a random set of coords between min and max values
        x = coords[i][0], and y = coords[i][1]
    */
    this.generaterandomCoords = function (minX, maxX, minY, maxY) {
        var coords = [[]];
        coords[0][0] = Math.floor((Math.random() * maxX) + minX);
        coords[0][1] = Math.floor((Math.random() * maxY) + minY);

        return coords;
    }

    /*
        Checks web worker support. returns true if is supported, and false if not
    */
    this.checkWebWorkerSupport = function () {
        if (typeof (Worker) !== "undefined") {
            return true;

        } else {
            return false;

        }

    }

}