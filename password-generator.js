javascript:(async function(){
  const groups = 3;
  const charsPerGroup = 8;
  const separator = '-';
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < groups; i++) {
    for (let j = 0; j < charsPerGroup; j++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    if (i < groups - 1) {
      password += separator;
    }
  }
  await navigator.clipboard.writeText(password).then(async function() {await alert("Your new password has been generated and copied to your clipboard");});
})();
