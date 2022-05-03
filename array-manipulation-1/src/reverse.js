/* exported reverse */
function reverse(array) {
  var $reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    $reverse.push(array[i]);
  }
  return $reverse;
}
