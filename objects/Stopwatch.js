class Stopwatch {
  elapsedTime = 0;
  intervalId = null;

  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTime += 1;
      console.log(this.elapsedTimeFormatted);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTime = 0;
  }

  get elapsedTimeFormatted() {
    return Stopwatch.formatTime(this.elapsedTime);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    // const seconds = timeInSeconds % 60;
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;
    return `${Stopwatch.zeroPadding(hours, 2)}:${Stopwatch.zeroPadding(
      minutes,
      2
    )}:${Stopwatch.zeroPadding(seconds, 2)}`;
  }

  static zeroPadding(originalNumber, desiredLength) {
    // return String(originalNumber).padStart(desiredLength, '0');
    let strNumber = String(originalNumber);
    const zerosRequired = desiredLength - strNumber.length;

    if (zerosRequired <= 0) {
      return strNumber;
    }

    for (let i = 0; i < zerosRequired; i++) {
      strNumber = '0' + strNumber;
    }

    return strNumber;
  }
}

let sw = new Stopwatch();
sw.start();

setTimeout(() => {
  sw.stop();
  console.log(
    'After stopped: ' + 'Seconds passed ' + Stopwatch.formatTime(sw.elapsedTime)
  );
}, 5000);

setTimeout(() => {
  sw.reset();
  console.log('After reset: ' + Stopwatch.formatTime(sw.elapsedTime));
}, 8000);
