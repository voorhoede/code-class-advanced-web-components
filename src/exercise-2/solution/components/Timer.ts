import formatTime from "../../../utils/format-time";

class TimerTwoSolution extends HTMLElement {
  _seconds = 0;

  timerElement: HTMLParagraphElement;

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
    this.addEventListener('start', this.startTimer.bind(this));
    this.addEventListener('pause', this.pauseTimer.bind(this));
    this.addEventListener('reset', this.resetTimer.bind(this));
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
      <code-class-start-button></code-class-start-button>
      <code-class-pause-button></code-class-pause-button>
      <code-class-reset-button></code-class-reset-button>
    `;
  }
}

customElements.define('code-class-timer', TimerTwoSolution);
