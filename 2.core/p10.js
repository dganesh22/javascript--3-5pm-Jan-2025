
/* Array 

    1. Group of values 
    2. Types
        1.single (literal)
            a. direct assignment
            b. array constructor
            c. array constructor parameter
        2.Object Array
            a.direct assingment
            b. array constructor
            c. array constructor parameter
        3.JSON Array
            server response
*/

// literal (single) dimension
const nums = [1,2,3,4,5,6,7];

console.log(`nums =`, nums)
console.log(`nums[3] =`, nums[3]) // 4

// iterate an array using loop
for(var i=0; i < nums.length; i++) {
    document.write(`<h3> i = ${i} and value = ${nums[i]} </h3>`)
}

// string array
var colors = ["red", "blue", "orange", "deeppink", "black", "skyblue"];

var j=0;
while(j < colors.length) {
    document.write(`<h3 style="color:${colors[j]}"> ${colors[j]} </h3>`)
    j++;
}

// mix array
var arr = ["Hello wolrd", true, 123, null, undefined];

var k = 0;
do {
    document.write(`<h3> index = ${k} and value = ${arr[k]} </h3>`)
    k++
}while( k < arr.length)


    console.log(`\n`)