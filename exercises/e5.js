
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  // Your code goes here...
  
  const name = array.map((bankAccounts) => bankAccounts.clientName);
  return name;
  
}

import { bankAccounts } from './data/data.js';

console.log(bankAccounts);
console.log(getAllClientNames(bankAccounts)); // ['Susan', 'Morgan', 'Joshua', 'Candy', 'Phil']


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function