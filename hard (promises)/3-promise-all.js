/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function delay(t) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, t * 1000);
  });
}

function wait1(t) {
  return delay(t);
}

function wait2(t) {
  return delay(t);
}

function wait3(t) {
  return delay(t);
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    .then(function() {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      return totalTime;
    });
}

// calculateTime(10000, 1000, 1000).then(totalTime => {
//   console.log('total time taken: ' + totalTime);
// });

module.exports = calculateTime;
