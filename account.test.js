/* eslint-disable no-undef */
const Account = require('./account');

describe( '#account', () => {
  it( 'opening balance is zero', () => {
    const account = new Account()
    expect(account.openingBalance).toBe(0);
  }) 

  it( 'transaction history is updated', () => {
    const account = new Account()
    account.deposit(100)
    account.withdraw(80)
    expect(account.transactionHistory[1].currentBalance).toBe(20)
  })
})

describe( '#deposit', () => {
  it( 'can deposit money to account', () => {
    const account = new Account()
    account.deposit(100)
    expect(account.balance()).toEqual(100)
  })

  it( 'can deposit floats', () => {
    const account = new Account()
    account.deposit(100.50)
    expect(account.balance()).toEqual(100.50)
  })
})

describe( '#withdraw', () => {
  it( 'can withdraw money from account', () => {
    const account = new Account()
    account.deposit(1000)
    account.withdraw(800)
    expect(account.balance()).toEqual(200)
  })

  it( 'can withdraw floats', () => {
    const account = new Account()
    account.deposit(100.50)
    account.withdraw(50.25)
    expect(account.balance()).toEqual(50.25)
  })

  describe( '#viewStatement', () => {
    it( 'can print transaction history as a formatted statement', () => {
      const account = new Account()
      account.deposit(200)
      account.withdraw(100)
      expect(account.viewStatement()).toEqual( `|       date ||   credit ||  debit  ||  balance |\n| ${new Date().toLocaleDateString()} ||          || 100.00  ||   100.00 |\n| ${new Date().toLocaleDateString()} ||   200.00 ||         ||   200.00 |`)
    })
  })
})