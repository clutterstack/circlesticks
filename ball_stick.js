"use strict";

function wholeApp(){
    // ------Start with some variables
    var circlerad = 5;
    var circleStickArray = []; //new array to put the circlestick objects into
    var stickStarted = false;
    var stickStart;
    
    
    // ---- Now function definitions
    
    // function to reset whole app
    function reset(ev) {
        //reset the model
        circleStickArray = [];
        stickStarted = false;
        //clear the model drawing from the canvas
        var context = btmCanvas.getContext('2d');
        context.clearRect(0, 0, btmCanvas.width, btmCanvas.height);
        
        //remove all event listeners
        //topCanvas.removeEventListener('mousemove', onMouseMove);
        topCanvas.removeEventListener('mousedown', onMouseDown);
        topCanvas.removeEventListener('mouseup', onMouseUp);
        //add one to let a click set the anchor circle for the stick model.
        topCanvas.addEventListener('click', setAnchor, false);
    }
    
    function setAnchor(ev) {
        //define the object
        var anchor = {
            parent: null,
            anchorPt : getMouseCoords(topCanvas, ev),
        } 
        drawCircle(btmCanvas, anchor.anchorPt);
        //push it onto the array
        circleStickArray.push(anchor);
        // Once the anchor point is set, put the listeners in for drawing sticks again
        // Listener for mousemove (circle follows cursor posn)
        topCanvas.addEventListener('mousemove', onMouseMove, false);
        // Listener for mousedown
        topCanvas.addEventListener('mousedown', onMouseDown, false);
        // Listener for mouseup
        topCanvas.addEventListener('mouseup', onMouseUp, false);
        
    }
        
    
    // event handler for mousemove event listener
    function onMouseMove(ev) {
            var mousePos = getMouseCoords(topCanvas, ev);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            writeMessage(topCanvas, message);
            //writeMessage(btmCanvas, message);
            drawCircle(topCanvas, mousePos);
    }
        
    function onMouseDown(ev) {
        stickStart = getMouseCoords(topCanvas, ev);
        stickStarted = true;
        circlerad = 15;
        writeMessage(btmCanvas, stickStart.x + ',' + stickStart.y);
    }
        
    function onMouseUp(ev){
        if (stickStarted === true) {
            circlerad = 5;
            
            //define the object
            var newCircleStick = {
                originPt : stickStart,
                endPt : getMouseCoords(topCanvas, ev),
            } 
            drawCircleStick(btmCanvas, newCircleStick);
            //push it onto the array
            circleStickArray.push(newCircleStick);
            
            // set stickStarted flag false
            stickStarted = false;
        }
    }
    
    //function to write message on canvas - adapted from hml5canvastutorials.com
    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '12pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
    }
    
    // function to get the canvas coordinates of the mouse location 
    //Use method on http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
    // including refinements from commenters jerryj and Jason Goldberger
    function getMouseCoords(canvas, ev) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((ev.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
        y: Math.round((ev.clientY - rect.top)/(rect.bottom - rect.top)*canvas.width)
        };
    }
    
    function drawCircle(canvas, coords) {
        //Draw the circle
        var context = canvas.getContext('2d');
        //context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(coords.x, coords.y, circlerad, 0, 2*Math.PI);
        context.stroke();
    }
    
    //function newCircleStick(
    
    function drawCircleStick(canvas, circlestick) {
        var context = canvas.getContext('2d');
        //Draw the circle
        context.beginPath();
        context.arc(circlestick.originPt.x, circlestick.originPt.y, circlerad, 0, 2*Math.PI);
        context.stroke();

        // Draw the stick
        context.beginPath();
        context.moveTo(circlestick.originPt.x, circlestick.originPt.y);
        context.lineTo(circlestick.endPt.x, circlestick.endPt.y);
        context.stroke();
    }
        
        
    // ---------- End function definitions, now start the action ------------
    
    // ----- Define the canvas elements
    var btmCanvas = document.getElementById('btmCanvas');
    var topCanvas = document.getElementById('topCanvas');

    
    // ----- Event listeners
    
    // Event listener for reset button
    document.getElementById('resetButton').addEventListener('click', reset, false);

    // Event listener for mouse move
    //btmCanvas.addEventListener('mouseover', function(ev) {
    topCanvas.addEventListener('mousemove', onMouseMove, false);
    //}, false);
    
    //topCanvas.addEventListener('mouseout', function(ev) {
    //    topCanvas.removeEventListener('mousemove', onMouseMove);
    //});
    
    // Listener for mousedown
    topCanvas.addEventListener('mousedown', onMouseDown, false);
    // Listener for mouseup
    topCanvas.addEventListener('mouseup', onMouseUp, false);
        
    
    

    
        
    
}
    
  