/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  queue.enqueue(queue.dequeue());
}
