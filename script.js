function createPassword() {
    //Sets the desired password length
    const length = 12; // Adjust the length as needed

    //Define a character st for password generation
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  
    //Initializing an empty string to store the egenrated password
    let password = "";

    //Generate the password character by character
    for (let i = 0; i < length; i++) 

        //Generate a random index within the character set
      {
        const randomIndex = Math.floor(Math.random() * charset.length);

        //Append the randomly selected character to the password 
        password += charset[randomIndex];
    }

    //Set the value of the password input field to the generated password
    document.getElementById("password").value = password;
  
    // Basic password strength indicator (you can customize this)
    const strengthIndicator = document.getElementById("strength-indicator");
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()]/.test(password)) {
      strengthIndicator.textContent = "Strong";
    } else {
      strengthIndicator.textContent = "Weak";
    }
  }
  
  function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }