// singleton 
//object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name : "kumar",
    [mysym] : "mykey1",
    age : 18,
    location : "pune",
    isLoggedIn : false,
    email : "kumar@google.com"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mysym]);

JsUser.email = "kumar@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "kumar@apple.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




