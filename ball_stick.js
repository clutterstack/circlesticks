"use strict";

function wholeApp(){
    // ------Start with some variables
    var circlerad = 5;
    
    
    // ---- Now function definitions
    
    //function to write message on canvas - adapted from hml5canvastutorials.com
    function writeMessage(canvas, message) {
    //var context = canvas.getContext('2d');
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
        context.beginPath();
        context.arc(coords.x, coords.y, circlerad, 0, 2*Math.PI);
        context.stroke();
    }
        
        
        
    // ---------- End function definitions, now start the action ------------
    
    // define the canvas element
    var canvas = document.getElementById('mainCanvas');
    
    // generate the condext variable for the canvas
    if (canvas.getContext){
        var context = canvas.getContext('2d');
    }
    else {//In this case canvas isn't supported and we should fail gracefully somehow.
        // See mozilla developer's network basic canvas tut
    }

    // Event listener for mouse move
    canvas.addEventListener('mousemove', function(ev) {
        var mousePos = getMouseCoords(canvas, ev);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
        drawCircle(canvas, mousePos);
    }, false);
    
    // Listener for mousedown

    // Listener for mouseup
        
    


    // define circleStick object to hold properties and methods for each jointed section
    function circleStick() {
        //origin and endpoints stored in circleSticks array; do we get them from there every time?
        
        //draw method (what about overwriting whole canvas?)
        this.draw = function() {
        }
        
        //update method (for later)
        this.update = function() {
        }
        
        //fixed or floppy flag for origin point (future)
        //future methods to apply gravity or set posn for keyframe
        //stretchy or fixed-length flag for keyframes (future)
        //code to add image to segment?
        
        
    }
    

    
        
    
}
    
  