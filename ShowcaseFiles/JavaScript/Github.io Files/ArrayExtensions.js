
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
      throw Error("Retrieving array firstElement error. Array is empty or undefined.");
  }catch (pError){
    console.error(pError.message);
  }
  return value_first;
}

Array.prototype.validate = (index = 0)=>{
  return (this.length < 0 || index == undefined || null) ? false : (index >= 0 && index < this.length);
}

Array.prototype.mySwap = (index_first, index_second)=>{
  try{
    if(this.validate(index_first) && this.validate(index_second)){
      const temp = this[index_first];
      this[index_first] = this[index_second];
      this[index_second] = temp;
    }else{
      throw new Error("Could not validate index positions in array:\n",
      "passed index one: ", index_first, "\n",
      "passed index two: ", index_second, "\n",
      this.Enumerator.caller);
    }
  }catch(pError){
    console.error(pError.message);
  }
}

Array.prototype.mySwap = (index_first = 0, index_second = 1)=>{
  try{
    if(this.validate(index_first) && this.validate(index_second)){
      this[index_first] += this[index_second];
      this[index_second] = this[index_first] - this[index_second];
      this[index_first] -= this[index_second];
    }else{
      throw new Error("Could not validate index positions in array:\n",
      "passed index one: ", index_first, "\n",
      "passed index two: ", index_second, "\n",
      this.Enumerator.caller);
    }
  }catch(pError){
    console.log(pError);
  }
}