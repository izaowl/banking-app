# Banking Appp

I built a simple Banking App which calculates balance of the Bank Account. You can enter deposits and withdrawals and it will then print a statement with each transaction and the date when the transaction was entered.

### My approach

I started by analysing requirements for this application. I wrote User stories which are listed further on this page. I described there all requirements and then created  a doman model. I researched online how Banking ATM's and Bank Accounts are modeled. I decided then to create classes with distinctive responsibilities makind sure that they are loosely coupled.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

```
###Output from the Node REPL

![Alt text](/images/REPL_Node_output.png?raw=true "REPL Node output")

### User Stories

```
As person with Bank Account
So I can keep track of my funds
I want to be able to see balance on my account

As person with Bank Account
So I can make save money
I want to be able to deposit my money

As person with Bank Account
So I can make save money
I want to be able to withdraw my money

As person with Bank Account
So I can make sure all transactions are correct
I want to see my bank statement wit hall details of withdrawals and deposits
```

### Preparing your machine to run Node IRB

* Make sure you have Node and NPM installed,
* run npm install prompt-sync in the terminal,
* const prompt = require('prompt-sync')();
* to exit, press Ctrl+C again or Ctrl+D or type .exit)


### Preparing your machine to run testing
Test-drive performed using Jest.

* Adding testing tool to your directory: npm install -g jest
* git clone https://github.com/izaowl/banking-app.git
* cd banking-app
* yarn install node

### Testing

```
yarn test
```
OR
```
jest
```

![Alt text](/images/code_coverage.png?raw=true "Code coverage")

### Domain Model



| Class         | Account                                                                    |
|---------------|----------------------------------------------------------------------------|
| Properties    | openingBalance, transactionHistory                                         |
| Actions       | Constructor, deposit, withdraw, viewStatement, balance, _transactionAmount |                        |

| Class         | Transaction                  |
|---------------|------------------------------|
| Properties    | date, amount, currentBalance |
| Actions       | Constructor                  |

| Class         | BankStatement
|---------------|---------------------------------------------------------------------------------------------------------------------------|
| Properties    |   n/a                                                                                                                     | 
| Actions       | printStatement, formatStatementOutput, formatEachTransaction, formatCreditTransaction , formatDebitTransaction, addHeader |

### Technology
* JavaScript
* Node
* Jest

### Linting

![Alt text](/images/eslint_output.png?raw=true "Eslint output")

Edge cases added to 

