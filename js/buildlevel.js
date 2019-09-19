export function buildLevel(game, level)
{
	let bricks = [];
	
	level.forEach((row, rowIndex) => 
	{
		row.forEach((brick, brickIndex) => 
		{
			if(brick === 1)
			{
				let position = 
				{
					x: 80 * brickIndex,
					y: 75 + 24 * rowIndex
					
				};
				bricks.push(new Brick(game, position, '#'+(Math.random()*0xFFFFFF<<0).toString(16)));
			}
		});
	});
	
	return bricks;
}
 const level1 = 
[
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,2,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1]
];