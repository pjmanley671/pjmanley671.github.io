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

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
By default, all event-handling function templates are COMMENTED OUT (using block-comment syntax), and are therefore INACTIVE.
Uncomment and add code to the event handlers required by your project.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these lines.
*/

/* jshint browser : true, devel : true, esversion : 5, freeze : true */
/* globals PS : true */

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.init() event handler:

/* Original Author: Paul Manley
 * Objective: Make a game using perlenspiel.
 * Notes: 
 *		Project was originally a school project.
 *		In order for the game to run images need to be ran through a hosting server. This is a perlenspiel issue not my mistake.
 *		Original version used position data to check for collision.
 *
 * Going forward: 
 *		Add in image-based collision.
 *		Add in cover image for detailing player mechanics
 *		
 * Version: 5.0
 * Perlenspiel Package: 3.3
*/
var G = function(){
	var winState = false;
	var w = 32, h = 32;
	var sTimer, uTimer, dTimer, gTimer;
	var shotReady = false, ufoReady = false;
	var shots = [], ufos = [];
	var src = "https://pjmanley671.github.io/Perlin-Projects/SpaceInvaders/images/";

	var makeShot = function(){
		if(shotReady === false)return;

		var myShot = {
				x : 0, y : 0,
				setSpawn : function(sx, sy){
                    this.x = sx;
                    this.y = sy - 2;
                },
				move : function(cx, cy) {
					this.x = this.x + cx;
					this.y = this.y + cy;
				}
			};
		myShot.setSpawn(defender.x, defender.y);
		shots.unshift(myShot);
		shotReady = false;
		PS.audioPlay("fx_bang");
	};

	var makeUfo = function(){
		if(ufoReady === false) return;
		if(exports.inSpawn()) return;

		var myUfo = {
				x : 0, y : 0,
				setSpawn : function(){
					this.x = Math.floor(w / 2);
					this.y = 2;
				},

				move : function(cx, cy){
					if(exports.inBounds(this.x + cx, this.y + cy)){
						if(exports.ufoCollision(this.x + cx, this.y + cy)) return;
                        this.x = this.x + cx;
                        this.y = this.y + cy;
                        if(this.y >= h-4)winState = true;
                    }
				}
			};
		myUfo.setSpawn();
		ufos.unshift(myUfo);
		ufoReady = false;
	};

	var defender={
			x : 0, y : 0,
			setSpawn : function(){
				this.x = Math.floor(w / 2);
				this.y = (h - 3);
			},
			move : function(cx, cy){
				if(exports.inBounds(this.x + cx, this.y + cy)){
                    this.x = this.x + cx;
                    this.y = this.y + cy;
                }
			}
		};

	var myLoader = function(image)
	{
		var i;
		if(image.source === src + "BackGround.bmp")
			PS.imageBlit(image, 0, 0);

		if(image.source === src + "defenderBase.bmp")
			PS.imageBlit(image, defender.x - 2, defender.y+1);
		if(image.source === src + "defenderBotMid.bmp")
			PS.imageBlit(image, defender.x - 2, defender.y);
		if(image.source === src + "defenderTopMid.bmp")
			PS.imageBlit(image, defender.x - 1, defender.y - 1);
		if(image.source === src + "defenderTop.bmp")
			PS.imageBlit(image, defender.x  - 0, defender.y - 2);

		if(image.source === src + "Shot.bmp")
			for(i = 0; i < shots.length; i++)
				PS.imageBlit(image, shots[i].x, shots[i].y);

		if(image.source === src + "UfoBase.bmp")
			for(i = 0; i < ufos.length; i++)
				PS.imageBlit(image, ufos[i].x-2, ufos[i].y+1);

        if(image.source === src + "UfoMid.bmp")
            for(i = 0; i < ufos.length; i++)
                PS.imageBlit(image, ufos[i].x-1, ufos[i].y);

        if(image.source === src + "UfoTop.bmp")
        	for(i = 0; i < ufos.length; i++)
        		PS.imageBlit(image, ufos[i].x, ufos[i].y-1);
	};
	var exports={
		init : function(){
			PS.gridSize(w, h);
			PS.border(PS.ALL, PS.ALL, 0);
			PS.statusText("UFO: Arrows + /, DEFCOM: WASD spacebar.");
			winState = false;
            ufoReady = true;
            shotReady = true;
			defender.setSpawn();
			makeUfo();
			sTimer = PS.timerStart(2, exports.shiftShots);
			uTimer = PS.timerStart(160, exports.uAbility);
			dTimer = PS.timerStart(4, exports.dAbility);
			gTimer = PS.timerStart(1, exports.gameState);
			exports.drawMap();
		},
		drawMap : function(){
			PS.imageLoad(src + "BackGround.bmp", myLoader, 1);
			PS.imageLoad(src + "defenderBase.bmp", myLoader, 2);
			PS.imageLoad(src + "defenderBotMid.bmp", myLoader, 2);
			PS.imageLoad(src + "defenderTopMid.bmp", myLoader, 2);
			PS.imageLoad(src + "defenderTop.bmp", myLoader, 2);
			PS.imageLoad(src + "Shot.bmp", myLoader, 2);
			PS.imageLoad(src + "UfoBase.bmp", myLoader, 2);
			PS.imageLoad(src + "UfoMid.bmp", myLoader, 2);
			PS.imageLoad(src + "UfoTop.bmp", myLoader, 2);
		},

		pInput : function(key){
			if(winState === false){
                switch (key) {
                    case 119: defender.move(0, 0); break;
                    case 100: defender.move(1, 0); break;
                    case 97: defender.move(-1, 0); break;
                    case 115: defender.move(0, 0); break;
                    case 32: makeShot(); break;
                    default: break;
                }

                switch (key) {
                    case PS.KEY_ARROW_UP: exports.shiftUfos(0, -1); break;
                    case PS.KEY_ARROW_DOWN: exports.shiftUfos(0, 1); break;
                    case PS.KEY_ARROW_RIGHT: exports.shiftUfos(1, 0); break;
                    case PS.KEY_ARROW_LEFT: exports.shiftUfos(-1, 0); break;
                    case 47: makeUfo(); break;
                    default: break;
                }
            }else
				switch (key){
					case 114: exports.restart(); break; 
				}
                exports.drawMap();
			},

		shiftUfos:function(cx, cy){
			var cLoc;
			for(let i=0;i<ufos.length;i++){
				ufos[i].move(cx, cy);
				cLoc=exports.checkCollision(ufos[i],shots);
				if(cLoc !== -1){
					exports.destroy(shots, cLoc);
					exports.destroy(ufos, i);
				}
			}
		},
		shiftShots:function(){
			var i, cLoc;
			for(i = 0; i < shots.length; i++){
				shots[i].move(0, -1);
				if(exports.inBounds(shots[i].x, shots[i].y)){
                    cLoc = exports.checkCollision(shots[i], ufos);
                    if (cLoc !== -1){
                     	exports.destroy(ufos, cLoc);
                      	exports.destroy(shots, i);
                      	PS.audioPlay("fx_coin7");
                    }
                }else exports.destroy(shots, i);
			}
			exports.drawMap();
        },

        inSpawn:function(){
			var i;
			for(i = 0; i < ufos.length; i++){
				if(ufos[i].x === Math.floor(w / 2) && ufos[i].y === 2)
					return true;
			}
			return false;
		},
		inBounds : function(x, y){
			if(x < 0 || y < 0) return false;
			if(x > w - 1 || y > h - 1) return false;

			return true;
		},
		checkCollision : function(obj, iList){
				var i;
			for(i = 0; i < iList.length; i++)
				if(iList[i].x === obj.x && iList[i].y === obj.y) return i;
			return -1;
		},

		ufoCollision : function(x, y){
			var i;
			for(i = 0; i < ufos.length; i++)
				if(ufos[i].x === x && ufos[i].y === y)
					return true;	
		},

		destroy : function(iList, i){
			if(i !== iList.length - 1){
				var tmp = iList[i];
				iList[i] = iList[iList.length-1];
				iList[iList.length-1] = tmp;
			}
			iList.pop();
			if(ufos.length === 0) winState = true;
		},
        uAbility:function(){ ufoReady = true; },
		dAbility:function(){ shotReady = true; },

		gameState : function(){
			if(winState === true){
                PS.timerStop(uTimer);
                PS.timerStop(sTimer);
                PS.timerStop(dTimer);
                PS.timerStop(gTimer);

				if(ufos.length < 1) PS.statusText("Defenders Win!");
				else PS.statusText("Invaders Win!");
			}
		},
		clearList : function(iList){
            var i, length;
			length = iList.length;
			if(length > 0)
				for (i = 0; length > i;){
                    iList[i] = null;
                    iList.shift();
                    length = iList.length;
                }
			},
			close : function(){
                PS.timerStop(uTimer);
                PS.timerStop(sTimer);
                PS.timerStop(dTimer);
                PS.timerStop(gTimer);
			},
			restart : function(){
				exports.clearList(shots);
				exports.clearList(ufos);
				exports.init();
			}
		};

	return exports;
}();

PS.init = G.init;
PS.keyDown = G.pInput(key);
PS.shutdown = G.close;
