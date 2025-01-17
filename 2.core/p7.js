/* looping statements

1. for loop
2. while loop
3. do-while loop ()

*/

// for(initialization;condition;inc/dec)

for(var i=10; i <= 20; i++) {
    console.log(`${i}`)
}

console.log(`\n`)
/* 
    Task 
        create a variable x = number
        print the math table
*/

var x = 20;

for(var i=1; i <= 10; i++) {
    console.log(` ${x} x ${i} = ${x * i}`)
}


/* while loop
    initialization
        while(condition){
            statement
            inc/dec operator
        }
*/

console.log(`\n`)

var y =33;
var j = 1;

while(j <= 10) {
    console.log(`${y}  x ${j} = ${y * j}`);
    j++;
}

/* 
    do while loop
    initialization
        do {
        
        }while(condition);
*/
console.log(`\n`)
var z = 24;
var k = 1;

do {
    console.log(`${z} * ${k} = ${z * k}`);
    k++;
}while(k <= 10)