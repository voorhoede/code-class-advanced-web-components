import { html, WebComponent } from "web-component-base";

class Menu extends WebComponent {
  static shadowRootInit: ShadowRootInit = {
    mode: "open",
  };

  constructor() {
    super();
  }

  get template() {
    return html`
      <style>
        ul {
          display: flex;
          list-style-type: "";
          padding: 0;
          margin: 0;
        }

        a {
          padding: 0.75rem 1.5rem;
          display: inline-block;
        }
      </style>
      <nav>
        <ul>
          <li>
            <a href="/exercise-1/">Exercise 1</a>
          </li>
          <li>
            <a href="/exercise-2/">Exercise 2</a>
          </li>
          <li>
            <a href="/exercise-3/">Exercise 3</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("code-class-menu", Menu);
