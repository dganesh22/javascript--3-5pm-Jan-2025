// switch case

/* 
    switch(key) {
        case value:  statement
            break;
        case value: statement
            break;
        default: default statement
    }
*/

/* 
    Task-4 using swich case
    input   day in number 
    output print the day name

*/

var day = 5;
switch(day) {
    case 1: console.log(`monday`);
        break;
    case 2: console.log(`tuesday`);
        break;
    case 3: console.log(`wednesday`);
        break;
    case 4: console.log(`thursday`);
        break;
    case 5: console.log(`friday`);
        break;
    case 6: console.log(`saturday`);
        break;
    case 7: console.log(`sunday`);
        break;
    default: console.log(`enter correct day number`)
}