var $contactForm = document.querySelector('#contact-form');

function newFunction(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('message', messageData);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', newFunction);
