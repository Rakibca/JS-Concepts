let secondsRemaining = 3;
function startCountdown() {
  if (secondsRemaining === 0) {
    console.log(`Your device is shutting down`);
    clearInterval(shutdownTimer);
  } else if (secondsRemaining > 0) {
    secondsRemaining--;
    console.log(`Your device will shut down in ${secondsRemaining} seconds`);
  }

  /*
Challenge:
1. Every 1000 milliseconds, log out: 
    `Your device will shut down in ${secondsRemaining} seconds`.
    Decrement 'secondsRemaining'.
2. When 'secondsRemaining' hits zero, you should log out 
    `Your device is shutting down`. 
    At this point, the setInterval should be cleared. What method 
    can you use to do that? (We used clearTimeout to cancel setTimeout.)
*/
}
const shutdownTimer = setInterval(startCountdown, 1000);
