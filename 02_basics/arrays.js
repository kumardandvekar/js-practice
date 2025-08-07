//array

const arr = [0, 1, 2, 3, 4, 5]
const heroes = ["spidey", "hulk"]

//console.log(arr[0]);

//array methods

//arr.push(6)
//arr.pop()

//arr.unshift(9)
//at the start
//arr.shift()



//console.log(arr.includes(9));
//console.log(arr.indexOf(3));
//slice, splica
console.log("A", arr);

const myn1 = arr.slice(1,3)
//slice() extracts a portion of an array and returns a new array containing the extracted elements.
console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1,3)
//splice() modifies an array by removing, replacing, or adding elements directly within the original array.
console.log("c",arr);
console.log(myn2);
