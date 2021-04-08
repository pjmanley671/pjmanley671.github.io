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
	var Maps=new Uint8Array(49);
    var myFunction;
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
            myFunction=PS.timerStart(10,timeFunction);
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
PS.touch=function(x,y){
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
PS.shutdown=function(){PS.timerStop(myFunction);};