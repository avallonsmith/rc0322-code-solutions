/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (typeof stack.peek !== 'undefined') {
    max = Math.max(max, stack.pop());
  }
  return max;
}
