const Transaction = require('./transaction')
const Statement = require('./bankStatement')
const ValidateTransaction = require('./validateTransaction');
class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = [];
  }

  depositCalculation(amount){
    let validateTransaction = new ValidateTransaction;
    let validatedAmount = validateTransaction.validateDeposit(amount)
    let currentBalance = validatedAmount + this.balance()
    let deposit =  this.transactionHistory.push(new Transaction(validatedAmount, currentBalance));
    console.log(`Your balance is ${currentBalance}`);
    return deposit;
  }

  withdrawCalculation(amount){
    let validateTransaction = new ValidateTransaction;
    let validatedAmount = validateTransaction.validateWithdrawal(amount, this.balance());
    let currentBalance = this.balance() - validatedAmount;
    let withdrawal = this.transactionHistory.push(new Transaction(- validatedAmount, currentBalance));
    console.log(`Your balance is ${currentBalance}`);    
    return withdrawal;
  }

  viewStatement = () => {
    let statement = new Statement;
    let printout = statement.printStatement(this.transactionHistory);
    //console.log(printout);
    return printout;
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