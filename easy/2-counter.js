let counter = 0;
function updateCounter() {
  counter++;
  console.log('its been ' + counter + ' seconds');
}

setTimeout(updateCounter, 1000);