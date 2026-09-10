import { LitElement, html, css } from 'lit';

export class StaticBackground extends LitElement {
  static properties = {
    imageUrl: { type: String, attribute: 'image-url' },
    theme: { type: String, state: true }
  };

  constructor() {
    super();
    this.theme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'dark';
    this._onThemeChange = () => {
      const t = document.documentElement.getAttribute('data-theme') || 'dark';
      this.theme = t;
      this.setAttribute('data-theme', t);
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const currentTheme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'dark';
    this.theme = currentTheme;
    this.setAttribute('data-theme', currentTheme);

    window.addEventListener('theme-changed', this._onThemeChange);
    if (typeof MutationObserver !== 'undefined') {
      this._observer = new MutationObserver(() => this._onThemeChange());
      this._observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('theme-changed', this._onThemeChange);
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  static styles = css`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: var(--color-bg, #000);
      transition: background-color 0.3s ease;
    }
    
    .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.26; /* Matches the slideshow opacity */
      transition: opacity 0.3s ease;
    }

    :host([data-theme="light"]) .bg-image {
      opacity: 0.10;
    }
  `;

  render() {
    return html`
      <div class="bg-image" style="background-image: url(${this.imageUrl})"></div>
    `;
  }
}

customElements.define('static-background', StaticBackground);

