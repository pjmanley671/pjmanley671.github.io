/* Various research functions */

function ReturnFirstIndex(pArray = []){
    const [value_first] = pArray;
    return (typeof value_first === "undefined")? -1 : pArray.findIndex(value_first);
}