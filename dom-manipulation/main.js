var numbers = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', $click);

function $click(event) {
  numbers++;
  var temperature;
  if (numbers < 4) {
    temperature = 'cold';
  } else if (temperature < 7) {
    temperature = 'cool';
  } else if (temperature < 10) {
    temperature = 'tepid';
  } else if (temperature < 13) {
    temperature = 'warm';
  } else if (temperature < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button' + ' ' + temperature;
  $clickCount.textContent = 'click-count' + ' ' + numbers;
}
