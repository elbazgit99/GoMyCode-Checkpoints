import generatePassword from 'generate-password'; // Import the package

// Generate a random password
const password = generatePassword.generate({
  length: 10,       // Length of the password
  numbers: true,    // Include numbers
  symbols: true,    // Include symbols
  uppercase: true,  // Include uppercase letters
  lowercase: true,  // Include lowercase letters
  strict: true      // Ensure at least one of each type if true
});

// Log the generated password to the console
console.log('Generated Password:', password);
