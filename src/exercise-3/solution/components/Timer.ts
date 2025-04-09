import { $timer } from "../store/timer";
import formatTime from "../../../utils/format-time";

class TimerTwoSolution extends HTMLElement {
  timerElement: HTMLParagraphElement;
  timer = $timer.get();
  interval: number | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.timerElement = this.shadowRoot.querySelector("p.timer");
    $timer.subscribe((value) => {
      this.timer = value;
      this.timerElement.textContent = formatTime(value.seconds);

      if (value.isRunning && !this.interval) {
        this.interval = window.setInterval(() => {
          $timer.setKey('seconds', $timer.get().seconds + 1);
        }, 1000);
      } else if (!value.isRunning && this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <p class="timer">${formatTime(this.timer.seconds)}</p>
      <code-class-start-button></code-class-start-button>
      <code-class-pause-button></code-class-pause-button>
      <code-class-reset-button></code-class-reset-button>
    `;
  }
}

customElements.define('code-class-timer', TimerTwoSolution);
