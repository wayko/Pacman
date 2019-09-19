
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);


const level1 = 
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0],
	[2, 3, 0, 0, 1, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 1, 0, 0, 3, 3,2],
	[2, 1, 0, 0, 1, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 2, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 1, 0, 5, 6, 7, 2, 0, 1, 1, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 0, 1, 1, 1, 0, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
	[0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	[2, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 2],
	[2, 1, 1, 1, 1, 0, 1, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2],
	[0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level2 =
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
function draw(e)
{
	return e;
}

draw(ctx)
{
	ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	ctx.rect(0,0, GAME_WIDTH,GAME_HEIGHT);
	ctx.fill();
	createGame(level1);
}
function createGhost(ctx, x, y, fill, stroke, stroke2)
{
	this.x = x;
	this.y = y;
	this.fill = fill;
	this.stroke = stroke;
	this.stroke2 = stroke2;
	ctx.beginPath(); //upper part
	ctx.moveTo(this.x, this.y);
	ctx.quadraticCurveTo(this.x + 19, this.y - 60, this.x + 40, this.y);
	ctx.moveTo(this.x, this.y);// now the bottom part
	ctx.quadraticCurveTo(this.x + 3, this.y + 4, this.x + 10, this.y);
	ctx.moveTo(this.x + 10, this.y);
	ctx.quadraticCurveTo(this.x + 12, this.y - 2, this.x + 20, this.y);
	ctx.moveTo(this.x + 20, this.y);
	ctx.quadraticCurveTo(this.x + 22,this.y + 4, this.x + 30, this.y);
	ctx.moveTo(this.x + 30, this.y);
	ctx.quadraticCurveTo(this.x + 35, this.y - 2, this.x + 40, this.y);
	ctx.strokeStyle = this.stroke;
	ctx.fillStyle = this.fill;
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(this.x + 14, this.y - 15, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = this.stroke2;
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(this.x + 25, this.y - 15, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = this.stroke2;
	ctx.stroke();
	ctx.fill();	
	ctx.beginPath();
}
function createBorders(level)
{
	this.level = level;
	level.forEach((row, rowIndex) => 
	{
		row.forEach((border, borderIndex) => 
		{
			if(border === 0)
			{
				x = 40 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.fillRect(x,y,40,13);
			}	
			if(border === 1)
			{
				x = 47 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x,y,2.5, 0, 3 * Math.PI);
				ctx.fill();
			}
				if(border === 3)
			{
				x = 47 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x,y,6, 0, 3 * Math.PI);
				ctx.fill();
			}
			if(border === 4)
			{
				x = 47 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x, y, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
				ctx.fillStyle = "rgb(255, 255, 0)";
				ctx.fill();
				ctx.beginPath();
				ctx.arc(x, y, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();	
			}
			if(border === 5)
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x, y, "red", "red", "black");	
			}
			if(border === 6)
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x,y, "skyblue", "skyblue", "black");	
			}
			if(border === 7)
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x, y, "pink", "pink", "black");
			}
		})
			
	})

}

function createGame(level)
{
	this.level = level;
	for(i=0; i<this.level.length; i++)
{
	for(j=0; j<this.level[i].length; j++)
	{
		
		
		createBorders(this.level);
	}
	
}


		
}

