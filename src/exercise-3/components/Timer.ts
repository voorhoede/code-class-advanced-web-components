import { $timer } from "../store/timer";
import formatTime from "../../utils/format-time";

class Timer extends HTMLElement {
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

customElements.define('code-class-timer', Timer);
