import { $timer } from "../store/timer";

class PauseButton extends HTMLElement {
  buttonElement: HTMLButtonElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.buttonElement = this.shadowRoot.querySelector('button');
    this.buttonElement.addEventListener('click', () => {
      $timer.setKey('isRunning', false);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button>Pause</button>
    `;
  }
}

customElements.define('code-class-pause-button', PauseButton);
