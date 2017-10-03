/*
    This file was made by Bradley Honeyman
    October 2nd, 2017

This file requires
utilsExample.js
*/

var x0y0;
var x1y1;
var count = 0;

//note no functions that use JQuery can be used
importScripts("http://rawgit.com/holycatcrusher/JSUtilities/master/utilities.js");

//gather points then calc and send back linear coords 
onmessage = function (event) {
    if (count == 0) {
        x0y0 = event.data;
        count++;

    } else if (count == 1) {

        //get end point
        x1y1 = event.data;

        //generate linear coords
        var utils = new Utilities();
        var linearCoords = utils.getnerateSetOfCoordsAlongLinearPathDDA(
            x0y0[0][0], x0y0[0][1],
            x1y1[0][0], x1y1[0][1]);

        //genterate linear coords output html
        var output = "";
        for (var i = 0; i < linearCoords.length; i++) {
            output += "(";
            output += linearCoords[i][0];
            output += ", ";
            output += linearCoords[i][1];
            output += ")<br />"

        }

        //send data
        postMessage(output);

    }

}
