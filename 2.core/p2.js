// variables
/* 
   Characters a-z A-Z 
   Symbols 
   Numbers

   Data Types var (global),let and const=(fixed) (block scope)
    1. Primitive
        Number -> int,float,double
        String -> char,string '' , "", ``
        boolean -> true,false
        null   
        undefined
    2. Non-Primitive
        Array []
        Object (property) {key:value}
        Map(Entry) { key => value }
        Set  
*/

// type name = value;
var x = 12;
var y = 12.45;
var z = 2e12;

console.log(`x =`, x)
console.log(`type x =`, typeof x)
console.log(`\n`)

console.log('y =', y)
console.log('y =', typeof y)
console.log('\n')

console.log("z =", z)
console.log("z =", typeof z)

x = 30;
console.log(`x =`, x)
console.log(`type x =`, typeof x)
console.log(`\n`)

// Task - 1
console.log(typeof typeof 124); // typeof 124 is number , typeof number = string
console.log(typeof typeof "124") // typeof "124" is string, typeof string = string

console.log(`\n`)
var a = true;
console.log(`a =`, a)
console.log(`a =`, typeof a)
console.log(typeof typeof true)// typeof true is boolean , typeof boolean = string
console.log(Number(true))// 1
console.log(Number(false))// 0
console.log(typeof "true")//string
console.log(10 > 20)

console.log(`\n`)

var p;
console.log(`p =`, p) // undefined

console.log(`\n`)
var q = null;
console.log(`q =`, q) // null
console.log(`q =`, typeof q) // object

var r = undefined; 
console.log(`r =`, r) // undefined
console.log(`r =`, typeof r) // undefined


console.log(`\n`)

// array - group of values (not mandatory tobe same datatype)
var num = [1,2,3,4,5,6,7];
console.log(`num =`, num) 
console.log(`num =`, typeof num) // object

console.log(`\n`)

//object - group of key value pair
var user = {
    name: "John",
    age: 20
};
console.log(`user =`, user) // object
console.log(`user =`, typeof user)// object

console.log(`\n`)

// any
 email = "john@gmail.com";
 console.log(`email =`, email)
 console.log(`email =`, typeof email)

 // string
var title = "Welcome to JS";
console.log(`title =`, title)
console.log(`title =`, typeof title)

console.log(`\n`)
// char
var inp = 'C';
console.log(`char = `,inp)
console.log(`char = `,typeof inp)


