let interval = 3;
const timeout = setInterval(countDown, 1000);

function countDown() {
  if (interval > 0) {
    console.log(interval);
    interval--;
  } else {
    console.log('Blast off!');
    clearInterval(timeout);
  }
}
