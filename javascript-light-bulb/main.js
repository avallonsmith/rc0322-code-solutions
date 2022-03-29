var $background = document.querySelector('body');
var $button = document.querySelector('button');

function lightSwitch() {
  if ($background.className === 'background-on') {
    $background.className = 'background-off';
  } else ($background.className = 'background-on');
  if ($button.className === 'button-on') {
    $button.className = 'button-off';
  } else ($button.className = 'button-on');
}

$button.addEventListener('click', lightSwitch);
