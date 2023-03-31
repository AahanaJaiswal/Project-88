
var canvas = new fabric.Canvas('myCanvas');
 

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function (Img))
	new_image();
	
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
		});	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
		console.log(keyPressed);
	document.getElementById("hd3")[removed]="You have Hit the Goal!!!";
document.getElementById("myCanvas").style.borderColor="red";
if((ball_x==hole_x)&&(ball_y==hole_y)) canvas.remove(ball_obj);
	
	else  {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
		if(ball_y <=38)
        ball_y + block_image_height;
		console.log("block image height = " + block_image_height);
		new_image();
		
	}

	function down()
	{
		if(ball_y <=40)
        ball_y + block_image_height;
		console.log("block image height = " + block_image_height);
		new_image();
	}

	function left()
	{
		
		{
			if(ball_x >37)
        ball_y + block_image_height;
		console.log("block image width = " + block_image_height);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=39)
		{
	    ball_y + block_image_height;
		console.log("block image width = " + block_image_height);
		new_image();
		}
	}
	
}

