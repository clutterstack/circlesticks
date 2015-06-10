"use strict";

function initImage(){
    // This function is to deal with generating positions for the circle-stick entity
    // (element) with id elemId
    // Start with hard-coded values; expect them to come from pointer input later
    var circlex = 30, 
    circley = 30,
    circlerad = 5,
    stickstartx = circlex,
    stickstarty = circley + 1.5*circlerad,
    stickendx = stickstartx,
    stickendy = stickstarty + 10*circlerad;

   /* function genPosns(){
        this.circlex = circlex;
        this.circley = circley;
        this.circlerad = circlerad;
        this.stickstartx = stickstartx;
        this.stickstarty = stickstarty;
        this.stickendx = stickendx;
        this.stickendy = stickendy;
    }*/

    //function draw(){
    var canvas = document.getElementById('main_canvas');

    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        //Draw a circle to make sure everything's not broken
        ctx.beginPath();
        ctx.arc(100, 100, 12, 0, 2*Math.PI);
        ctx.stroke();

        //Draw the circle
        ctx.beginPath();
        ctx.arc(circlex, circley, circlerad, 0, 2*Math.PI);
        ctx.stroke();

        // Draw the stick
        ctx.beginPath();
        ctx.moveTo(stickstartx, stickstarty);
        ctx.lineTo(stickendx, stickendy);
        ctx.stroke();
    }
    else {
        //canvas not supported so do some kind of fallback
    }

}
