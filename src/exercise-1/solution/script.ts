import formatTime from "../../utils/format-time";

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
    this.timerElement.textContent = formatTime(value);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.timerElement = this.shadowRoot.querySelector("p.timer");
    this.startButton = this.shadowRoot.querySelector('button[data-action="start"]');
    this.pauseButton = this.shadowRoot.querySelector('button[data-action="pause"]');
    this.resetButton = this.shadowRoot.querySelector('button[data-action="reset"]');

    this.startButton.addEventListener("click", this.startTimer.bind(this));
    this.pauseButton.addEventListener("click", this.pauseTimer.bind(this));
    this.resetButton.addEventListener("click", this.resetTimer.bind(this));
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
    this.shadowRoot.innerHTML = `
      <p class="timer">${formatTime(this.seconds)}</p>
      <button type="button" data-action="start">Start</button>
      <button type="button" data-action="pause">Pause</button>
      <button type="button" data-action="reset">Reset</button>
    `;
  }
}

customElements.define("code-class-timer", Timer);
