var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', callBack);

function callBack(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var tLoop = 0; tLoop < $tab.length; tLoop++) {
    if ($tab[tLoop] === event.target) {
      $tab[tLoop].className = 'tab active';
    } else {
      $tab[tLoop].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');
  for (var viewIndex = 0; viewIndex < $view.length; viewIndex++) {
    if ($view[viewIndex].getAttribute('data-view') !== viewName) {
      $view[viewIndex].setAttribute('class', 'view hidden');
    } else {
      $view[viewIndex].setAttribute('class', 'view');
    }
  }
}

$tabContainer.addEventListener('click', callBack);
