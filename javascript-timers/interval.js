var $h1 = document.querySelector('h1');
var intervalId = null;
var number = 4;

function countdown() {
  number--;
  if (number > 0) {
    $h1.textContent = number;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}

intervalId = setInterval(countdown, 1000);
