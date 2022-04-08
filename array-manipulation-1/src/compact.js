/* exported compact */
function compact(array) {
  var $compact = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      $compact.push(array[i]);
    }
  }
  return $compact;
}
