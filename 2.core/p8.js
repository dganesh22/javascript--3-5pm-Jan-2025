/* nested loops

1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5

*/

for(var i=1;i<=5; i++) {
    for(var j=1; j <= i; j++) {
        document.write(`${j} &nbsp;`)
    }
    document.write(`<br>`)
}

/* 
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
*/

for(var i=1;i<=5; i++) {
    for(var j=1; j <= i; j++) {
        document.write(`${i} &nbsp;`)
    }
    document.write(`<br>`)
}

/* 
1
2 3
4 5 6
7 8 9 10
*/

/* 
1
3 5
7 9 11
*/
