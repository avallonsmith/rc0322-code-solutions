var $taskList = document.querySelector('.task-list');

function callBack(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('.task-list-item', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', callBack);
