var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromURL('BirthdayImage.jpg', function(img))
block_image_object = img;
block_image_object.scaleTowidth("700");
block_image_object.scaleToheight(510);
block_image_objectset({
    top:0
    left:0
});
	canvas.add(block_image_object);


}
function new_image()
{
fabric.image.fromURL('BirthdayImage.jpg', function(img))
block_image_object = img;
block_image_object.scaleTowidth("700");
block_image_object.scaleToheight(510);
block_image_objectset({
    top:0
    left:0
});
	canvas.add(block_image_object);
}
function playSound(){
x.play();
}
