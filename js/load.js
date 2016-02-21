// Load an image into the canvas and resizing the canvas
var canvas = document.getElementById('viewport'), context_canvas = canvas.getContext('2d');
var result = document.getElementById('result'), context_result = result.getContext('2d');
var base_image = new Image();

load_image();

function load_image()
{
    base_image.src = 'img/base.jpg';
    base_image.onload = function(){
        // On load resize the canvas to the image size and draw image
        canvas.width = base_image.width;
        canvas.height = base_image.height;
        result.width = base_image.width;
        result.height = base_image.height;
        context_canvas.drawImage(base_image, 0, 0);
    }
}