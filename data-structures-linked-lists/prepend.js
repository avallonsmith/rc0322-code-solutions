/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const head = new LinkedList(value);
  head.next = list;
  return head;
}
