/*
game.js for Perlenspiel 3.3.x
Last revision: 2020-03-24 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-20 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

var G=function(){
	var mapData=[];
	var colorOptions=[PS.COLOR_ORANGE,PS.COLOR_GREEN,PS.COLOR_INDIGO];
	var shuffle=false;
	var emptyTile={x:3,y:3,color:PS.COLOR_WHITE};
	var SetupGrid=function(){
		PS.gridSize(9, 4);
		PS.color(4, PS.ALL, PS.COLOR_BLACK);
		PS.color(4, 0, PS.COLOR_GRAY);
		PS.glyph(4, 0, "R");
		PS.border(PS.ALL, PS.ALL, 0);
	};
	var FillMapData=function(){
		var x,y,pos;
		for(y=0; y<4;y++)
			for(x=0;x<4;x++){
				pos=(y*4)+x;
				mapData[pos]=colorOptions[PS.random(3)-1];
			}
		mapData[pos]=emptyTile.color;
	};
	var DrawMap=function(){
		var x,y,data;
		for(y=0;y<4;y++)
			for(x=0;x<4;x++){
				data=mapData[(y*4)+x];
				PS.color(x,y,data);
				PS.color((x+5),y,data);
			}
	};
	var ValidateSwap=function(nx,ny){
		if(nx<0||nx>3)return false;
		if(ny<0||ny>3)return false;
		if(Math.abs(nx-emptyTile.x)+Math.abs(ny-emptyTile.y)>1)return false;
		return true;
	};
	var CheckWin=function(){
		var win=true;
		for(let x=0;x<4;x++)
			for(let y=0;y<4;y++)
				if(mapData[(y*4)+x]!==PS.color(x, y))win=false;
		return win;
	};
	var SwapTiles=function(nx,ny){
		PS.color(emptyTile.x,emptyTile.y,PS.color(nx, ny));
		PS.color(nx,ny,emptyTile.color);
		emptyTile.x=nx;
		emptyTile.y=ny;
		if(!shuffle){
			PS.audioPlay("fx_swoosh");
			if(emptyTile.x===3&&emptyTile.y===3)
				if(CheckWin()){
					PS.statusText("Win! Press r to reset.");
					PS.audioPlay("fx_coin"+PS.random(8));
				}
		}
	};
	var ShuffleBoard=function(){
		shuffle=true;
		var minNumMoves=1000;
		for(let i=0,x=0,y=0;i<minNumMoves;){
			do{
				x=(x===0)?PS.random(3)-2:0;
				y=(y===0)?PS.random(3)-2:0;
			}while(Math.abs(x)===Math.abs(y));

			if(ValidateSwap(emptyTile.x+x,emptyTile.y+y)){
				SwapTiles(emptyTile.x+x, emptyTile.y+y);
				i++;
			}
			if(i+1>=minNumMoves)
				if(emptyTile.x+emptyTile.y<6)i=minNumMoves-1;
		}
		shuffle=false;
	};
	var exports={
		Init:function(){
			PS.statusText("Sliding Puzzle");
			SetupGrid();
			emptyTile.x=3;
			emptyTile.y=3;
			FillMapData();
			DrawMap();
			ShuffleBoard();
			PS.scale(PS.ALL, PS.ALL, 85);
		},
		OnPress:function(key, shift, ctrl, options){
			var x=0, y=0;
			switch (key){
				case PS.KEY_ARROW_UP: case 119: y -= 1;	break;
				case PS.KEY_ARROW_DOWN: case 115: y += 1; break;
				case PS.KEY_ARROW_LEFT: case 97: x -= 1; break;
				case PS.KEY_ARROW_RIGHT: case 100: x += 1; break;
				case 114: exports.Init(); break;
				default: break;
			}
			if(ValidateSwap(emptyTile.x,emptyTile.y))
				SwapTiles(emptyTile.x+x,emptyTile.y+y);
		},
		OnTouch:function(x,y,data,options){
			if(ValidateSwap(x,y))SwapTiles(x,y);
			if(x===4&&y===0)exports.Init();
		}
	};
	return exports;
}();
PS.init = G.Init;
PS.keyDown = G.OnPress;
PS.touch = G.OnTouch;

PS.shutdown = function( options ) {};