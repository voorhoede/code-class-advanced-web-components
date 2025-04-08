import { pauseTimer } from "../store/timer";

class PauseButton extends HTMLElement {
  buttonElement: HTMLButtonElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.buttonElement = this.shadowRoot.querySelector('button');
    this.buttonElement.addEventListener('click', pauseTimer);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button>Pause</button>
    `;
  }
}

customElements.define('code-class-pause-button', PauseButton);
