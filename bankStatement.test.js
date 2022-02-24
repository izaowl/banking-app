const BankStatement = require('./bankStatement');

let transaction1 = {date: '10/01/2023', amount: 1000, currentBalance: 1000}
let transaction2 = {date: '13/01/2023', amount: 2000, currentBalance: 3000}
let transaction3 = {date: '14/01/2023', amount: -500, currentBalance: 2500}
const transactionHistory = [transaction1,transaction2,transaction3]

describe( 'BankStatement', () => {
     const bankStatement = new BankStatement
  
     it( 'Checking validity of printed statement', () => {
       expect(bankStatement.printStatement(transactionHistory)).toEqual
       ( "|       date ||   credit ||  debit  ||  balance |\n| 14/01/2023 ||          || 500.00  ||   2500.00 |\n| 13/01/2023 ||   2000.00 ||         ||   3000.00 |\n| 10/01/2023 ||   1000.00 ||         ||   1000.00 |")
     })
})