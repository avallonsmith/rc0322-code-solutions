/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const second = list.next;
  const third = list.next.next;
  second.next = list;
  list.next = third;
  return second;
}
