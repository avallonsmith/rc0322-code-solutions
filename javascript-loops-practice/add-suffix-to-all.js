/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addSuffix = [];
  for (var i = 0; i < words.length; i++) {
    addSuffix.push(words[i] += suffix);
  }
  return addSuffix;
}
