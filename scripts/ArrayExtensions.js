Array.prototype.shiftN = function(value_n = 1){
  if(value_n < 1) return;
  for(let i = value_n; i; i--) this.shift();
}

Array.prototype.popN = function(value_n = 1){
  if(value_n < 1) return;
  for(let i = value_n; i; i--) this.pop();
}

