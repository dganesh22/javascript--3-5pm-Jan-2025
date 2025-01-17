// anonymous function

/* 
(function(){
    // body
})() // call 
*/


(function () {
    setInterval(function () {
        console.log(`time is = ${new Date().toLocaleTimeString()}`)
    }, 1000)
})()


