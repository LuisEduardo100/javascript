class Stopwatch {
  #elapsedTime = 0;
  #intervalId = null;
  #isRunning = false;

  start(callback = () => {}) {
    if (!this.#isRunning) {
      this.#intervalId = setInterval(() => {
        this.#isRunning = true;
        this.#elapsedTime += 1;
        callback();
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  reset(callback = () => {}) {
    this.#elapsedTime = 0;
    callback();
  }

  get elapsedTimeFormatted() {
    return Stopwatch.formatTime(this.#elapsedTime);
  }

  get isRunning() {
    return this.#isRunning;
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

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

const stopwatchDisplay = document.querySelector('.stopwatch-display');
const sw1 = new Stopwatch();

function updateDisplay() {
  stopwatchDisplay.innerText = sw1.elapsedTimeFormatted;
}

startBtn.addEventListener('click', () => {
  if (!sw1.isRunning) {
    startBtn.classList.add('disabled');
  }
  sw1.start(updateDisplay);
});

stopBtn.addEventListener('click', () => {
  sw1.stop();
});

resetBtn.addEventListener('click', () => {
  sw1.reset(updateDisplay);
});
