/* 
    class Wallet
        balance = property

    methods
        debit(amount)  - withdraw money into wallet balance
        credit(amount) - adding money from wallet balance

        if withdraw amount > balance - throw error message
*/

class Wallet {
    constructor(bal) {
        this.balance = bal;
    }

    debit(amt) {
        if (amt > this.balance) {
            document.write(`<h3 class="warning"> Insufficient balance and your balance is  &#8377; ${this.balance} </h3>`)
        } else {
            this.balance -= amt;
            document.write(`<h3 class="info"> Amount of &#8377;${amt} is debited from wallet and balance is &#8377;${this.balance} </h3>`)
        }
    }

    credit(amt) {
        this.balance += amt;
        document.write(`<h3 class="success"> Amount of &#8377;${amt} is credited to wallet and balance is  &#8377;${this.balance} </h3>`)
    }
}

let x = new Wallet(0)

x.credit(2200.540)
x.credit(2450.33)

x.debit(443.34)
x.debit(4400)