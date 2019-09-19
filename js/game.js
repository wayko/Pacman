export default class Game
{
	constructor(gameWidth, gameHeight)
	{
		this.gameWidth = gameWidth;
		this.gameHeight= gameHeight;
	}
	
	
	draw(ctx)
	{
		ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
		ctx.rect(0,0, GAME_WIDTH,GAME_HEIGHT);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(GAME_WIDTH/2, GAME_HEIGHT/2, 10, 0.25 * Math.PI, 1.25 * Math.PI, false);
		ctx.fillStyle = "rgb(255, 255, 0)";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(GAME_WIDTH/2, GAME_HEIGHT/2, 10, 0.75 * Math.PI, 1.75 * Math.PI, false);
		ctx.fill();
		ctx.beginPath();
	}
}