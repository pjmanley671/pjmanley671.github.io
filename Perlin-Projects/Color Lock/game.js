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
var G=function(){
	var Maps=new Uint8Array(49);
    var timeFunction=function(){
        var nx,ny,clickStatus;
        if(G.checkTable()===0){
            do {
                nx=PS.random(7)-1;
                ny=PS.random(7)-1;
                clickStatus=G.checkClick(nx,ny);
            }while(clickStatus===1);
            PS.color(nx,ny,PS.random(256)-1,PS.random(256)-1,(PS.random(156)-1)+100);
        }
    };
	var exports={
        init:function(){
            PS.gridSize(7,7);PS.gridColor(0,0,0);
            PS.statusText("Color Lock");PS.statusColor(201,126,0);
            for(let i=0;i<Maps.length;i++)Maps[i]=0;
            var myFunction=PS.timerStart(10,timeFunction);
        },
        checkClick:function(nx,ny){return Maps[(ny*7)+nx];},
		changeBeadStatus:function(x,y,v){Maps[(y*7)+x]=v;},
        checkTable:function(){
            for(let i=0;i<Maps.length;i++)if(Maps[i]===0)return 0;
            return 1;
        }
    }; return exports;
}();
PS.init = G.init;
PS.touch=function(x,y,data,options){
	if(G.checkClick(x,y)===0){
        G.changeBeadStatus(x,y,1);
        PS.audioPlay("fx_bloop");
        PS.border(x,y,2);
        PS.borderColor(x,y,256,256,0);
    }else {
        G.changeBeadStatus(x,y,0);
        PS.audioPlay("fx_pop");
        PS.border(x,y,1);
        PS.borderColor(x,y,156,156,156);
    }
};
PS.shutdown=function(options){PS.timerStop(myFunction);};