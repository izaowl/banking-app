class BankStatement {
  constructor() {
    this.transactions = [];
    this.header = "date || credit || debit || balance\n";
  }
    printStatement = (transactionHistory) => {
      return this.addHeader() + this.formatStatementOutput(transactionHistory).reverse().join('\n')
    }
  
    formatStatementOutput = (transactionHistory) => {
      return transactionHistory.map((transaction) => this.formatEachTransaction(transaction))
    }
  
    formatEachTransaction = (transaction) => {
      if (transaction.amount > 0) {
        return this.formatCreditTransaction(transaction)
      } else {
        return this.formatDebitTransaction(transaction)
      }
    }

    formatCreditTransaction = (transaction) => {
      return `| ${transaction.date} ||   ${transaction.amount.toFixed(2)} ||         ||   ${transaction.currentBalance.toFixed(2)} |`
    }
  
    formatDebitTransaction = (transaction) => {
      let finalAmount = Math.abs(transaction.amount)
      return `| ${transaction.date} ||          || ${finalAmount.toFixed(2)}  ||   ${transaction.currentBalance.toFixed(2)} |`
    }
    addHeader = () => {
      return "|       date ||   credit ||  debit  ||  balance |\n"
    }
  
  }
  
  module.exports = BankStatement;
