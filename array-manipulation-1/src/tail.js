/* exported tail */
function tail(array) {
  var $tail = [];
  for (var i = 1; i < array.length; i++) {
    $tail.push(array[i]);
  }
  return $tail;
}
