/* exported tail */
function tail(array) {
  var $tail = [];
  for (var i = 1; i < array.length; i++) {
    $tail.push(array[i]);
  }
  return $tail;
}

// create a new function named 'tail'
// give it one parameter 'array'
// delcare a new variavle '$tail" and assign it the value of an empty array
// use a for loop to make the array contain all elements after the first
// push the index of the array into the new array variable '$tail'
// return the variable '$tail"
