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
      this.dispatchEvent(new CustomEvent('pause', { bubbles: true, composed: true }))
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button>Pause</button>
    `;
  }
}

customElements.define('code-class-pause-button', PauseButton);
