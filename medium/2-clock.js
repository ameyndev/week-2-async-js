function updateClock() {
  const now = new Date();

  const formatTime24 = `${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
  const formatTime12 = `${formatDigit(now.getHours() % 12 || 12)}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())} ${now.getHours() < 12 ? 'AM' : 'PM'}`;

  console.clear();
  console.log('24 hour format: ' + formatTime24);
  console.log('12 hour format: ' + formatTime12);
}

function formatDigit(digit) {
  return digit < 10 ? `0${digit}` : digit;
}

setInterval(updateClock, 1000);

updateClock();