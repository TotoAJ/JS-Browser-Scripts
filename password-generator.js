(function(){
  const groups = 3; // number of groups of characters in the password
  const charsPerGroup = 6; // number of characters in each group
  const separator = '-'; // separator character between groups
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < groups; i++) {
    for (let j = 0; j < charsPerGroup; j++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    if (i < groups - 1) {
      password += separator;
    }
  }
  navigator.clipboard.writeText(password);
  alert("Your new password has been generated and copied to your clipboard");
})();
