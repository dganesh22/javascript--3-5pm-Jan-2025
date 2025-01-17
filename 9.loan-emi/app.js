/* 
    P    amount = principal loan amount
    R    rate = rate of interest per annum
    N    duration = number of installments

     EMI = P x R X (1+R)^N / (1+R)^N - 1 
*/

// inputs
let amt = document.getElementById("amount");
let intr = document.getElementById("intr");
let yr = document.getElementById("yr");

// output 
let emp = document.getElementById("emi_per_month")
let pa = document.getElementById("principal_amount")
let ri = document.getElementById("rate_of_interest")
let ta = document.getElementById("total_amount")

let loan_amt = document.getElementById("loan_amount")
let rate = document.getElementById("rate")
let year = document.getElementById("year")

function updateDetails() {

    loan_amt.innerHTML = "&#8377;" + amt.value;
    rate.innerHTML = intr.value + "%";
    year.innerHTML = yr.value + " month";

    pa.innerHTML = "<span> &#8377; </span>" + amt.value;

    console.log(`amount =`, amt.value)
    console.log(`rate =`, intr.value)
    console.log(` =`, yr.value)

    let p = Number(amt.value)
    let r = Number(intr.value)
    let n = Number(yr.value)
    
    let ia = (p * (r * (1 / 100))) / n;
    ri.innerHTML = "&#8377; " + ia.toFixed(2);

    let ei = ((p / n) + ia).toFixed(2)
    emp.innerHTML = "&#8377; " + ei;

    let total = (p + ia);
    ta.innerHTML = "&#8377; " + total.toFixed(2);
}

updateDetails()