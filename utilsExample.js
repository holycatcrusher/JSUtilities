/*
    This file was made by Bradley Honeyman
    October 2nd, 2017

This file requires
Jquery
CustomJqueryAddons.js by Bradley Honeyman
utilities.js by Bradley Honeyman
worker var created named worker which runs utilsExampleWebWorker.js
*/

$(window).ready(function () {

    //create vars
    var util = new Utilities();

    //create and display random coord 1
    var randomCoord1 = util.generaterandomCoords(
        0, window.innerWidth,
        0, window.innerHeight);
    $("#randomCoord1").text("(" + randomCoord1[0][0] + ", " + randomCoord1[0][1] + ")");

    //create and display random coord 2
    var randomCoord2 = util.generaterandomCoords(
        0, window.innerWidth,
        0, window.innerHeight);
    $("#randomCoord2").text("(" + randomCoord2[0][0] + ", " + randomCoord2[0][1] + ")");

    if (util.checkWebWorkerSupport()) {
        worker.postMessage(randomCoord1);
        worker.postMessage(randomCoord2);

        worker.onmessage = function (event) {
            //generate linear coords between 2 random points
            var output = event.data;

            //output the linear coords
            $("#linearCoords").html(output);

        }

    } else {
        $("#linearCoords").text("web workers not supported by this browser");

    }

});