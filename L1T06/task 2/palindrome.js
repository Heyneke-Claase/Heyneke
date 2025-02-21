// Prompt the user to enter a word and convert it to lowercase
let user = prompt("Enter a word: ").toLowerCase();

// Initialize two pointers for checking palindrome
let left = 0;
let right = user.length - 1;
let isPalindrome = true;

// Loop to compare characters from both ends
while (left < right) {
  if (user[left] !== user[right]) {
    // If characters don't match, it's not a palindrome
    isPalindrome = false;
    break;
  }
  // Move the pointers towards the center
  left++;
  right--;
}

// Determine the result message
let resultMessage = isPalindrome ? "is a palindrome!" : "is not a palindrome!";

// Display result in the console
console.log(resultMessage);

// Display result on the webpage
document.body.innerHTML = `<h1>The word "${user}" ${resultMessage}</h1>`;
