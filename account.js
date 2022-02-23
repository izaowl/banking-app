const Transaction = require('./transaction')
const Statement = require('./bankStatement')

class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = []
  }

  deposit(amount){
    let currentBalance = amount + this.balance()
    let deposit =  this.transactionHistory.push(new Transaction(amount, currentBalance));
    console.log(`You balance is ${currentBalance}`);
    return deposit;
  }

  withdraw(amount){
    let currentBalance = this.balance() - amount
    let withdrawal = this.transactionHistory.push(new Transaction(- amount, currentBalance));
    console.log(`You balance is ${currentBalance}`);    
    return withdrawal;
  }

  viewStatement = () => {
    let statement = new Statement
    let printout = statement.printStatement(this.transactionHistory)
    console.log(printout)
    return printout
  }
  _transactionAmount(transaction) {
    return transaction.amount;
  }
  balance(){
    let tran = this.transactionHistory.map(transaction => {
      return this._transactionAmount(transaction);
    }).reduce(function (a, b) {
        return a + b;
      }, 0)
    return tran;
  }
}
module.exports = Account;