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

var G = function(){
	const src = "https://pjmanley671.github.io/Perlin-Projects/SpaceInvaders/images/";
	var shotT, ufoT, defenderT, gameT;
	var ufoReady, winState;
	const WIDTH=32, HEIGHT=32;
	var shots = [], ufos = [];

	var myLoader = function(image){
		switch(image.source.slice(src.length,image.source.length-4)){
			case "BackGround":PS.imageBlit(image,0,0); break;
			case "defenderBase":PS.imageBlit(image,defender.x-2,defender.y+1); break;
			case "defenderBotMid":PS.imageBlit(image,defender.x-2,defender.y); break;
			case "defenderTopMid":PS.imageBlit(image,defender.x-1,defender.y-1); break;
			case "defenderTop":PS.imageBlit(image,defender.x-0,defender.y-2); break;
			case "Shot":for(let i=0;i<shots.length;i++)PS.imageBlit(image,shots[i].x,shots[i].y); break;
			case "UfoBase":for(let i=0;i<ufos.length;i++)PS.imageBlit(image,ufos[i].x-2,ufos[i].y+1); break;
			case "UfoMid":for(let i=0;i<ufos.length;i++)PS.imageBlit(image,ufos[i].x-1,ufos[i].y); break;
			case "UfoTop":for(let i=0;i<ufos.length;i++)PS.imageBlit(image,ufos[i].x,ufos[i].y-1); break;
			default: break;
		}
	};
	function DrawMap(){
		PS.imageLoad(src+"BackGround.bmp",myLoader,1);
		PS.imageLoad(src+"defenderBase.bmp",myLoader,2);
		PS.imageLoad(src+"defenderBotMid.bmp",myLoader,2);
		PS.imageLoad(src+"defenderTopMid.bmp",myLoader,2);
		PS.imageLoad(src+"defenderTop.bmp",myLoader,2);
		PS.imageLoad(src+"Shot.bmp",myLoader,2);
		PS.imageLoad(src+"UfoBase.bmp",myLoader,2);
		PS.imageLoad(src+"UfoMid.bmp",myLoader,2);
		PS.imageLoad(src+"UfoTop.bmp",myLoader,2);
	};
	function UFOSpawnIsClear(){
		for(let i=0; i<ufos.length; i++)if(ufos[i].CheckCollisionPoint(Math.floor(WIDTH/2),2))return false;
		return true;
	}
	//#region Utility
	function Destroy(pList, i){
		if(i!==pList.length-1){let tmp=pList[i]; pList[i]=pList[pList.length-1]; pList[pList.length-1]=tmp;}
		pList.pop();
	};
	function ClearList(pList){for(let i=pList.length;i>0;i--)pList.shift();};
	//#endregion

	//#region Entities
	MakeShot=function(){
		var shot={
			x:0, y:0,
			SetSpawn:function(cx,cy){this.x=cx;this.y=cy;},
			Move:function(){this.y--;},
			InBounds:function(){(this.y<0)?false:true;}
		};
		shot.SetSpawn(defender.x, defender.y);
		shots.unshift(shot);
		defender.ability=false;
		PS.audioPlay("fx_bang");
	};
	var defender={
		x:0,y:0,ability:false,
		SetSpawn:function(){
			this.x=Math.floor(WIDTH/2);
			this.y=HEIGHT-3;
		},
		InBounds:function(cx){return(cx-2<0||cx+2>WIDTH)?false:true;},
		Move:function(x){if(this.InBounds(this.x+x))this.x+=x;}
	};
	MakeUFO = function(){
		var ufo = {
			x:0, y:0,
			SetSpawn:function(){
				this.x = Math.floor(WIDTH / 2);
				this.y = 2;
			},
			InBounds:function(cx, cy){
				if(cx-2<0 || cx+2>WIDTH)return false;
				if(cy-1<0 || cy+1>HEIGHT)return false;
				return true;
			},
			Move:function(x, y){
				if(this.InBounds(this.x+x, this.y+y)){this.x+=x; this.y+=y;}
			},
			CheckCollisionPoint(cx, cy){
				if(cy<this.y-1 || cy>this.y+1)return false;
				if(cx<this.x-2 || cx>this.x+2)return false;
				for(let y = -1; y < 2; y++)
					for(let x = y - 1; x <= (-y + 1); x++){
						if(cx == this.x + x && cy == this.y + y) return true;
					}

				//for(let y=-1;y<2;y++)for(let x=y*2+2;x>-3;x--)if(cx==this.x+x && cy==this.y+y)return true;
				return false;
			}
		};
		ufo.SetSpawn();
		ufos.unshift(ufo);
		ufoReady = false;
		PS.audioPlay("fx_powerup4");
	};
	//#endregion

	//#region Timers
	function Update(){
		for(let i=0; i<ufos.length; i++){
			for(let j=0; j<shots.length; j++)
				if(ufos[i].CheckCollisionPoint(shots[j].x, shots[j].y))
					{Destroy(shots,j);Destroy(ufos,i); PS.audioPlay("fx_coin7"); i--; break;}
		}

		if(ufos.length == 0)winState = true;
		else{
			for(let i = 0; i < ufos.length; i++) if(ufos[i].y > HEIGHT - 5) winState = true;
		}
	}
	function UFOTimer(){ufoReady=true;};
	function DefenderTimer(){defender.ability=true;};
	function ShotTimer(){
		for(let i=0;i<shots.length;i++){
			shots[i].Move();
			if(shots[i].InBounds())Destroy(shots, i);
		}
		DrawMap();
	};
	//#endregion
	
	function Restart(){exports.Close(); exports.Init();};

	var exports={
		Init:function(){
			PS.gridSize(WIDTH,HEIGHT);
			PS.border(PS.ALL,PS.ALL,0);
			PS.statusText("UFO: Arrows + /, DEFCOM: WASD spacebar.");
			defender.ability=true; ufoReady=true; winState=false;
			defender.SetSpawn(); MakeUFO();
			gameT=PS.timerStart(1,Update);
			shotT=PS.timerStart(2,ShotTimer);
			defenderT=PS.timerStart(4,DefenderTimer);
			ufoT=PS.timerStart(160,UFOTimer);
			DrawMap();
		},
		Close:function(){
			ClearList(shots);ClearList(ufos);
			PS.timerStop(gameT); PS.timerStop(shotT); PS.timerStop(defenderT); PS.timerStop(ufoT);
		},
		Input:function(key){
			if(winState===false){
                switch(key){
                    case 100:defender.Move(1);break;
                    case 97:defender.Move(-1);break;
                    case 32:if(defender.ability)MakeShot();break;
                    case PS.KEY_ARROW_UP:ufos.forEach(ufo=>{ufo.Move(0,-1)}); break;
                    case PS.KEY_ARROW_DOWN:ufos.forEach(ufo=>{ufo.Move(0,1)});break;
                    case PS.KEY_ARROW_RIGHT:ufos.forEach(ufo=>{ufo.Move(1,0)});break;
                    case PS.KEY_ARROW_LEFT:ufos.forEach(ufo=>{ufo.Move(-1,0)});break;
                    case 47:if(ufoReady && UFOSpawnIsClear()){MakeUFO(); PS.audioPlay("fx_powerup6")}break;
                    default:break;
				}DrawMap();
			}else
				switch(key){case 114:Restart();break; default:break;}
		}
	};
	return exports;
}();
PS.init=G.Init; PS.keyDown=function(key){G.Input(key);}; PS.shutdown=G.Close;
