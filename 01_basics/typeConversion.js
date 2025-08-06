score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" => 33
// ""33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn);

// Operations

console.log("1" + 2 + 2);
// 122 string first all string
console.log(1 + 2 + "2");
// 32 string last then conversion first

console.log(true);   