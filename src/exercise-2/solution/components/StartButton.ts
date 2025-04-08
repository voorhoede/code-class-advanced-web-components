class StartButton extends HTMLElement {
  buttonElement: HTMLButtonElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.buttonElement = this.shadowRoot.querySelector('button');
    this.buttonElement.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('start', { bubbles: true, composed: true }))
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button>Start</button>
    `;
  }
}

customElements.define('code-class-start-button', StartButton);
