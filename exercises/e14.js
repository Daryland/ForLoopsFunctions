
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  return array.filter(account => {
    const sumOfDeposits = account.deposits ? account.deposits.reduce((a, b) => a + b, 0) : 0;
    const sumOfWithdrawals = account.withdrawals ? account.withdrawals.reduce((a, b) => a + b, 0) : 0;
    const calculatedBalance = sumOfDeposits - sumOfWithdrawals;
    return calculatedBalance !== account.balance;
  });
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
