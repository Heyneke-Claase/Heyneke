// Prompt the user to enter a number with at least 3 digits
let user = prompt("Enter a number of at least 3 digits: ");

// Validate the input: ensure it has exactly 3 digits and is a number
while (user.length !== 3 || isNaN(user)) {
  alert("Please enter a valid number with exactly 3 digits.");
  user = prompt("Enter a number of at least 3 digits: ");
}

// Store the original number for display later
let originalNumber = user;
let newNumber = "";

// Loop through each digit of the number
for (let i = 0; i < user.length; i++) {
  if (i === 1) {
    // If it's the second digit, replace it with the last digit
    newNumber += user[user.length - 1];
  } else if (i === user.length - 1) {
    // If it's the last digit, replace it with the second digit
    newNumber += user[1];
  } else {
    // Keep the first digit unchanged
    newNumber += user[i];
  }
}

// Display the original and new modified numbers
alert("Original number: " + originalNumber);
alert("New number: " + newNumber);
