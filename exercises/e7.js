// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  let arr = [];
    let lowestBalance = array[0].balance;

  for (let i = 1; i < array.length; i++) {
    let currentAccount = array[i];
    
    if(currentAccount.balance > 0 && currentAccount.balance < lowestBalance) {
			arr.push(currentAccount);
    } 
  }
  
 return arr; 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
