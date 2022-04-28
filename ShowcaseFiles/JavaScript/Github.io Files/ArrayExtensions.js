
/* Simple but useful array exteinsions. */

Array.prototype.shiftN = function(value_n = 1){
  if(value_n < 1) return;
  for(let i = value_n; i; i--) this.shift();
}

Array.prototype.popN = function(value_n = 1){
  if(value_n < 1) return;
  for(let i = value_n; i; i--) this.pop();
}

Array.prototype.lastElement = () =>{
  return (this.length > 0)? this[this.length-1] : null;
}

Array.prototype.firstElement = function(){
  let value_first, value_rest;
  try{
    [value_first, ...value_rest] = this;
    if(typeof value_first == "undefined")
      throw Error("Error retrieving first element in array ", this.Enumerator.caller);
  }catch (pError){
    console.error(pError.message);
  }
  return value_first;
}

Array.prototype.validate = function(index = 0){
  return (this.length) ? (index >= 0 && index < this.length) : false;
}

Array.prototype.swap_safe = function(index_first, index_second){
  try{
    if(this.validate(index_first) && index_second < this.length){
      const temp = this[index_first];
      this[index_first] = this[index_second];
      this[index_second] = temp;
    }else{
      throw new Error("Could not validate index positions in array:\n",
      this.Enumerator.caller, "\n",
      "Position: ", index_first, "\n",
      "Position: ", index_second, "\n");
    }
  }catch(pError){
    console.error(pError.message);
  }
}

Array.prototype.swap_numbers = function(index_first, index_second){
  try{
    if(this.validate(index_first) && index_second < this.length){
      this[index_first] += this[index_second];
      this[index_second] = this[index_first] - this[index_second];
      this[index_first] -= this[index_second];
    }else{
      throw new Error("Could not validate index positions in array:\n",
      "Position: ", index_first, " value: ", this[index_first], "\n",
      "Position: ", index_second, " value: ", this[index_second], "\n",
      this.Enumerator.caller);
    }
  }catch(pError){
    console.log(pError.message);
  }
}