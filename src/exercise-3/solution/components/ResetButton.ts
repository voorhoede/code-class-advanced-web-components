import { $timer } from "../store/timer";

class ResetButton extends HTMLElement {
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
      $timer.setKey('seconds', 0);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button>Reset</button>
    `;
  }
}

customElements.define('code-class-reset-button', ResetButton);
