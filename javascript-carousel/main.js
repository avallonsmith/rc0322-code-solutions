var $leftArrow = document.querySelector('#left-arrow');
var $rightArrow = document.querySelector('#right-arrow');
var $cycleContainer = document.querySelector('#cycle-container');
var $cycleList = document.querySelectorAll('.cycle');
var $carourselImg = document.querySelector('#carousel-image');
var images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
var activeIndex = 0;
function updateDots() {
  for (var i = 0; i < $cycleList.length; i++) {
    $cycleList[i].classList.remove('fas');
    $cycleList[i].classList.add('far');
  }
  $cycleList[activeIndex].classList.add('fas');
}
$cycleContainer.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;
  for (var i = 0; i < $cycleList.length; i++) {
    if ($cycleList[i] === event.target) {
      activeIndex = i;
      break;
    }
  }
  $carourselImg.setAttribute('src', images[activeIndex]);
  updateDots();
});
$leftArrow.addEventListener('click', function (event) {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = images.length - 1;
  }
  $carourselImg.setAttribute('src', images[activeIndex]);
  updateDots();
});
$rightArrow.addEventListener('click', stepUp);
function stepUp(event) {
  activeIndex++;
  if (activeIndex >= images.length) {
    activeIndex = 0;
  }
  $carourselImg.setAttribute('src', images[activeIndex]);
  updateDots();
}
setInterval(stepUp, 3000);
