import {level1, level2, level3, draw, createGhost,createBorders,createGame} from '../js/board.js';
export default class Game
{
	
	
constructor(gameWidth, gameHeight, bricksPerRow)
	{
		this.gameWidth = gameWidth;
		this.gameHeight= gameHeight;
		this.gameObjects = [];
		this.bricks = [];
		this.lives = 3;
		this.levels = [level1, level2];
		this.currentLevel = 0;
		this.score = 0;
	}

 draw(e)
{
	
	return e;
}



createGhost(ctx, x, y, fill, stroke, stroke2)
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
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(this.x + 14, this.y - 15, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = this.stroke2;
	ctx.stroke();
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(this.x + 25, this.y - 15, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = this.stroke2;
	ctx.stroke();
	ctx.closePath();
	ctx.fill();	
}

 createBorders(level, borderFill)
{
	this.level = level;
	this.borderFill = borderFill;
	
	level.forEach((row, rowIndex) => 
	{
		row.forEach((border, borderIndex) => 
		{
			if(border === 0) //horizontal border
			{
				x = 38.7 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+15,y-25,38.7,13);
				ctx.fillStyle = this.borderFill;
				
				ctx.fill();
			}
				
			if(border === 8) //vertical  border
			{
				x = 40 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+15,y-32,16,40);
				ctx.fillStyle = this.borderFill;
				ctx.fill();
			}
			if(border === .8) //starter vertical  border
			{
				x = 40 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+35,y-32,30,40);
				ctx.fillStyle = this.borderFill;
				ctx.fill();
			}
			if(border === .1) //starter horizontal bar
			{
				x = 38.7 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+35,y-25,38.7,13);
				ctx.fillStyle = this.borderFill;
				
				ctx.fill();
			}
			if(border === .5) //inner horizontal bars left
			{
				x = 30 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x,y-25,46,13);
				ctx.fillStyle = this.borderFill;
				
				ctx.fill();
				
			}	
			if(border === .6) //inner horizontal bars right
			{
				x = 30 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+165,y-25,46,13);
				ctx.fillStyle = this.borderFill;
				
				ctx.fill();
				
			}
			if(border === 9) //inner vertical bars left
			{
				x = 30 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x,y-32,16,40);
				ctx.fillStyle = this.borderFill;
				;
				ctx.fill();
			}
				
			if(border === .9) //inner vertical bars right
			{
				x = 30 * borderIndex;
				y = 55 + 20 * rowIndex;
				ctx.beginPath();
				ctx.rect(x+165,y-32,16,40);
				ctx.fillStyle = this.borderFill;
				
				ctx.fill();
				
			}
			if(border === 1) //dots
			{
				x = 42 * borderIndex;
				y = 58 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x,y-25,2.5, 0, 3 * Math.PI);
				ctx.fillStyle = this.borderFill;
				ctx.closePath();
				ctx.fill();
			}
				if(border === 3) //power pellets
			{
				x = 42 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x,y-25,6, 0, 3 * Math.PI);
				ctx.fillStyle = "rgb(255, 255, 255)";
				ctx.closePath();
				ctx.fill();
			}
			if(border === 4) //pacman
			{
				x = 47 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x, y-20, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
				ctx.fillStyle = "rgb(255, 255, 0)";
				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.arc(x, y-20, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
				ctx.closePath();
				ctx.fill();
					
			}
			if(border === 5) //blinky red ghost
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x-38, y-25, "red", "red", "black");
							
			}
			if(border === 6) //inky skyblue ghost
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x-38,y-25, "skyblue", "skyblue", "black");	
				
			}
			if(border === 7) //pinky pink ghost
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x-38, y-25, "pink", "pink", "black");
				
			}
			if(border === .7) //clyde orange ghost
			{
				x = 45 * borderIndex;
				y = 70 + 20 * rowIndex;	
				createGhost(ctx, x-38, y-25, "orange", "orange", "black");
				
			}
			if(border === .2) //lives
			{
				x = 47 * borderIndex;
				y = 57 + 20 * rowIndex;
				ctx.beginPath();
				ctx.arc(x-45, y-20, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
				ctx.fillStyle = "rgb(255, 255, 0)";
				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.arc(x-45, y-20, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
				ctx.closePath();
				ctx.fill();
					
			}
			
		})	
			
	})

}

 createGame(level, rgb)
{
	this.level = level;
	this.rgb = rgb;
	for(i=0; i<this.level.length; i++)
	{
		for(j=0; j<this.level[i].length; j++)
		{	
			createBorders(this.level, this.rgb);
		}	
	}		
}
}