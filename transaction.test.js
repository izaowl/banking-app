const Transaction = require('./transaction');

describe( 'Transaction', () => {
  test( 'Checking validity of attributes of class constructor', () => {
    const transaction = new Transaction(300, 200)
    expect(transaction.date).toEqual(new Date().toLocaleDateString())
    expect(transaction.amount).toEqual(300)
    expect(transaction.currentBalance).toEqual(200)
  })
})

describe('Date mock to check printable format of Date attribute', () => {
  const transaction = new Transaction(100,100);
  it('Can output expected format of a date', () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2012-10-10'));
      const transaction = new Transaction();
      expect(transaction.date).toBe('10/10/2012');
  });
})