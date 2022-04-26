/* Various research functions */

function ReturnFirstIndex(pArray = [])
{ // Destructuring used to find the first index in an array.
    if(pArray.length < 1) return -1;
    const [value_first, ...value_rest] = pArray;
    return pArray.findIndex(value_first);
}