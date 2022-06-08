class ValidateTransaction{

  validateDeposit = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error ('You entered an invalid value, please put in an integer instead')
    }
    if (amount < 0) {
      throw new Error ('Please add a number without a minus sign')
    }
    else{ 
      return amount
    }
  }

  validateWithdrawal = (amount, balance) => {
    if (isNaN(amount) === true) {
      throw new Error ('You entered an invalid value, please put in an integer instead')
    }
    else if (amount < 0) {
      throw new Error ('Please add a number without a minus sign')
    }
    else if (amount > balance) {
      throw new Error ('Not enough money in your account to withdraw this amount')
    }
    else{
      return amount;
    }
  }
}
module.exports = ValidateTransaction;