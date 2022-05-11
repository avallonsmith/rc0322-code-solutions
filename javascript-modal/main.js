var $container = document.querySelector('.container');
var $modalButton = document.querySelector('.blue-button');
var $surveyButton = document.querySelector('.no-button');
function modelBtn(event) {
  if ($container.classList.contains('.hidden')) {
    $container.className = 'container hidden';
  } else {
    $container.className = 'container';
  }
}
function surveyNo(event) {
  if ($container.classList.contains('.hidden')) {
    $container.className = 'container';
  } else {
    $container.className = 'container hidden';
  }
}
$modalButton.addEventListener('click', modelBtn);
$surveyButton.addEventListener('click', surveyNo);
