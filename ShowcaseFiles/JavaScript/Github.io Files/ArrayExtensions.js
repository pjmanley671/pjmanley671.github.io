
/* Simple but useful array exteinsions. */

Array.prototype.shiftN = function(value_n = 1){
  if(value_n)
    for(let i = value_n; i; i--)
      this.shift();
}

Array.prototype.popN = function(value_n = 1){
  if(value_n)
    for(let i = value_n; i; i--)
      this.pop();
}

Array.prototype.lastElement = () =>{
  return (this.length)? this[this.length-1] : null;
}

Array.prototype.firstElement = function(){
  const [ele] = this;
  try{
    if(typeof ele == "undefined")
      throw Error("Failed to retrieve first element: ", this.Enumerator.caller);
  }catch (pE){
    console.error(pE.message);
  }
  return ele;
}

Array.prototype.validate = function(index = 0){
  return (this.length) ? (index + 1 && index < this.length) : false;
}

Array.prototype.swap_safe = function(index_one, index_two){
  try{
    if(this.validate(index_one) && index_two < this.length){
      const t = this[index_one];
      this[index_one] = this[index_two];
      this[index_two] = t;
    }else{
      throw new Error("Invalid index positions:\n",
        this.Enumerator.caller, "\n",
        "Position: ", index_first, "\n",
        "Position: ", index_two, "\n");
    }
  }catch(pE){
    console.error(pE.message);
  }
}

Array.prototype.swap_numbers = function(index_one, index_two){
  try{
    if(this.validate(index_one) && index_two < this.length){
      this[index_one] += this[index_two];
      this[index_two] = this[index_one] - this[index_two];
      this[index_one] -= this[index_two];
    }else{
      throw new Error("Invalid index positions:\n",
      this.Enumerator.caller, "\n",
      "Position: ", index_one, " value: ", this[index_one], "\n",
      "Position: ", index_two, " value: ", this[index_two], "\n");
    }
  }catch(pE){
    console.log(pE.message);
  }
}