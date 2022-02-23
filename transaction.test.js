const Transaction = require('./transaction');

describe( 'Transaction', () => {
  test( 'class has attributes', () => {
    const transaction = new Transaction(200, 200)
    expect(transaction.date).toEqual(new Date().toLocaleDateString())
    expect(transaction.amount).toEqual(200)
    expect(transaction.currentBalance).toEqual(200)
  })
})

describe('Date mock', () => {
  const transaction = new Transaction(100,100);
  it('Has transaction date', () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2012-10-10'));
      const transaction = new Transaction();
      expect(transaction.date).toBe('10/10/2012');
  });
})