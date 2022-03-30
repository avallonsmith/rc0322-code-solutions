function handleFocus(event) {
  console.log('focus event has fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event had fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

var $inputUserName = document.querySelector('#user-name');
$inputUserName.addEventListener('focus', handleFocus);
$inputUserName.addEventListener('blur', handleBlur);
$inputUserName.addEventListener('input', handleInput);

var $inputUserEmail = document.querySelector('#user-email');
$inputUserEmail.addEventListener('focus', handleFocus);
$inputUserEmail.addEventListener('blur', handleBlur);
$inputUserEmail.addEventListener('input', handleInput);

var $textarea = document.querySelector('textarea');
$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
