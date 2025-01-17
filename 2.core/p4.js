// conditional statements

/* 
    1. if 
    2. if and else
    3. if else if and else
    4. switch case
*/

/* 
    if(condition) {
        // statement
    }
*/

var x = 50;

if(x > 40) {
    console.log(`true = ${x} value is greater than 40`)
} 

/* 
    if(condition) {
        // true
    } else {
        // false  
    }
*/

if(x < 20) {
    console.log("true, " + x + " is less than 20");
} else {
    console.log(`false ${x} is greaterthan 20`)
}

// short form of if and else ternary operator
console.log(x > 20 ? "Condition true": "Condition false")


/* 
    more than one condition to check
    if(con1) {

    }else if(con2) {

    } else if (con3) {

    } else {

      }

*/

if( x > 50) {
    console.log(`${x} is greaterthan 50`)
} else if( x < 50) {
    console.log(`${x} is lesserthan 50`)
} else if (x === 50) {
    console.log(`${x} is equal to 50`)
} else {
    console.log(`enter proper input`)
}

/* 
    Task -2
    day = string , 
    print the day number as for monday = 1 for sunday = 7
*/