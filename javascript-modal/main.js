var $container = document.querySelector('.container');
var $modalButton = document.querySelector('.modal-button');
var $surveyButton = document.querySelector('.no-button');
// console.log($modalButton);
// console.log($surveyButton);

function modalButton(event) {
  if ($container.classList.contains('.hide-window')) {
    $container.className = 'container hide-window';
  } else {
    $container.className = 'container';
  }
  // console.log('click');
}

function survey(event) {
  if ($container.classList.contains('.hide-window')) {
    $container.className = 'container';
  } else {
    $container.className = 'container hide-window';
  }
  // console.log('click');
}

$modalButton.addEventListener('click', modalButton);
$surveyButton.addEventListener('click', survey);
