import formatTime from "../utils/format-time";

class Timer extends HTMLElement {
  _seconds = 0;

  timerElement: HTMLParagraphElement;
  startButton: HTMLButtonElement;
  pauseButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;

  interval: number | null = null;
  isRunning = false;

  get seconds(): number {
    return this._seconds;
  }

  set seconds(value: number) {
    this._seconds = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = window.setInterval(() => {
        this.seconds++;
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.isRunning) {
      this.isRunning = false;
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.seconds = 0;
  }

  render() {
    this.shadowRoot.innerHTML = ``;
  }
}

customElements.define("code-class-timer", Timer);
