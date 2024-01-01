let counter = 0;

function updateCounter() {
  counter++;
  console.log('Its been ' + counter + 'seconds.');
}

setInterval(updateCounter, 1000);
