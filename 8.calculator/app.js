// target all keys
var keys = document.querySelectorAll('.key')
// console.log(`all keys = `, keys)

let inEl = document.querySelector(".in")
let outEl = document.querySelector(".out")

keys.forEach((item, index) => {
    item.addEventListener("click", function (event) {
        // console.log(`value =`, event.target.innerText)

        let val = event.target.innerText;
        if (val === "CE") {
            //clear both input and output
            inEl.textContent = "";
            outEl.textContent = "";
        } else if (val === "C") {
            // clear only input
            inEl.textContent = "";
        } else if (val === "BS") {
            // backspace 
            let x = inEl.innerText.slice(0, -1)
            inEl.textContent = x;

        } else if (val === "=") {
            // calculation - eval(expressoion) built in js math function to resolve expression
            let res = eval(inEl.innerText);
            outEl.innerText = res;
        } else if (val === "exp") {
            // exponential
            let res = Math.exp(parseInt(inEl.innerText))
            outEl.innerText = res;
        } else if (val === "cbrt") {
            // cube root
            let res = Math.cbrt(parseFloat(inEl.innerText))
            outEl.innerText = res;
        } else if (val === "sqrt") {
            // sqrt
            let res = Math.sqrt(parseFloat(inEl.innerText))
            outEl.innerText = res;
        } else {
            // print the input text in display
            inEl.textContent += val
        }
    });
});