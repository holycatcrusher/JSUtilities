/*
    This file was made by Bradley Honeyman
    October 2nd, 2017

This file requires
Jquery
CustomJqueryAddons.js by Bradley Honeyman
utilities.js by Bradley Honeyman
*/

$(window).ready(function () {

    //create vars
    var util = new Utilities();

    //create and display random coord 1
    var randomCoord1 = util.generaterandomCoords(
        0, window.innerWidth,
        0, window.innerHeight);
    $("#randomCoord1").text(randomCoord1);

    //create and display random coord 2
    var randomCoord2 = util.generaterandomCoords(
        0, window.innerWidth,
        0, window.innerHeight);
    $("#randomCoord2").text(randomCoord2);

    //generate linear coords between 2 random points
    var points = util.getnerateSetOfCoordsAlongLinearPathDDA(
        randomCoord1[0][0], randomCoord1[0][1],
        randomCoord2[0][0], randomCoord2[0][1]
    );


    //genterate linear coords output html
    var output = "";
    for (var i = 0; i < points.length; i++) {
        output += "(";
        output += points[i][0];
        output += ", ";
        output += points[i][1];
        output += ")<br />"

    }

    //output the linear coords
    $("#linearCoords").html(output);

});