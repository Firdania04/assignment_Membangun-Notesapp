class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          footer {
              background: linear-gradient(to right, 
                #3498db, 
                #3498db);
              color: white;
              text-align: center;
              font-weight: bold;
              padding: 1rem;
          }
          p {
            margin: 0;
          }
        </style>
        <footer>
          <p>&copy; 2025 Firdania Sasmita Sari</p>
        </footer>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
