/* exported removeNext */

function removeNext(list) {
  const next = list.next;
  if (next === null) return;
  list.next = next.next;
}
