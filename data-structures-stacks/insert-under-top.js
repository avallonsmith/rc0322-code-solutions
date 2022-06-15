/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (typeof top === 'undefined') return;
  stack.push(value);
  stack.push(top);
}
