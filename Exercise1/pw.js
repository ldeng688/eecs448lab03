function validate(input)
{
  let password1 = document.getElementById('pw1');
  let validate1= document.getElementById('validate');

  if(password1.value==validate1.value)
  {
    alert("Passwords match.");
  }
  else {
    alert("Passwords don't match.");
  }

  if(password1.value.length < 8)
  {
    alert("Password is not long enough - must be at least 8 characters long.");
  }
}
