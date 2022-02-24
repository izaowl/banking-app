//const { describe, it } = require('jest-circus')
const ValidateTransaction = require('./validateTransaction')
const Account = require('./account')

describe('#checking validation of withdrawals', () =>{
  it('Checks if enough money in account',() =>{
    const account = new Account();
    account.depositCalculation(800);
    expect(() => {account.withdrawCalculation(1000)})
    .toThrow('Not enough money in your account to withdraw this amount' );
  });
  it('Checks for negative withdrawals',() =>{
    const account = new Account();
    account.depositCalculation(800);
    expect(() => {account.withdrawCalculation(-800);})
    .toThrow('Please add a number without a minus sign' );
  });
  it('Checks for valid withdrawals',() =>{
    const account = new Account();
    account.depositCalculation(800);
    expect(() => {account.withdrawCalculation('money')})
    .toThrow('You entered an invalid value, please put in an integer instead' );
  });

});


describe('#checking validation of deposits', () =>{

    it('Checks for negative deposits',() =>{
      const account = new Account();
      expect(() => {account.depositCalculation(-800);})
      .toThrow('Please add a number without a minus sign' );
    });
    it('Checks for valid deposits',() =>{
      const account = new Account();
      expect(() => {account.depositCalculation('cash');})
      .toThrow('You entered an invalid value, please put in an integer instead' );
    });
  
  });