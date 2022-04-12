var $h1 = document.querySelector('h1');

function greeting() {
  $h1.textContent = 'Hello There';
}

setTimeout(greeting, 2000);
