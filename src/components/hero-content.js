import { LitElement, html, css } from 'lit';

export class HeroContent extends LitElement {
  static properties = {
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
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
    }

    h1 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 48px;
      line-height: 1.13;
      color: var(--color-text, #FFFFFF);
      margin-bottom: 24px;
      margin-top: 0;
      max-width: 920px;
      transition: color 0.3s ease;
    }

    p {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 300;
      font-size: 36px;
      line-height: 1.4;
      color: var(--color-text-muted, #B9B9B9);
      max-width: 920px;
      margin-bottom: 53px;
      transition: color 0.3s ease;
    }

    .button-group {
      display: flex;
      gap: 41px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 20px 68px;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 700;
      font-size: 20px;
      line-height: 1.5;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .btn-primary {
      background: #FFFFFF;
      color: #000000;
      border: 1px solid #FFFFFF;
    }
    
    .btn-primary:hover {
      background: #e0e0e0;
      border-color: #e0e0e0;
    }

    .btn-secondary {
      background: transparent;
      color: #FFFFFF;
      border: 1px solid #FFFFFF;
    }
    
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Light mode styling */
    :host([data-theme="light"]) .btn-primary {
      background: #141414;
      color: #FFFFFF;
      border: 1px solid #141414;
    }

    :host([data-theme="light"]) .btn-primary:hover {
      background: #2a2a2a;
      border-color: #2a2a2a;
    }

    :host([data-theme="light"]) .btn-secondary {
      background: transparent;
      color: #141414;
      border: 1px solid #141414;
    }

    :host([data-theme="light"]) .btn-secondary:hover {
      background: rgba(20, 20, 20, 0.05);
    }

    @media (max-width: 1024px) {
      h1 { font-size: 42px; }
      p { font-size: 26px; margin-bottom: 40px; }
      .btn { padding: 16px 48px; font-size: 18px; }
    }

    @media (max-width: 768px) {
      :host {
        text-align: left;
      }
      h1 { 
        font-size: 30px; 
        line-height: 1.25;
        margin-bottom: 20px;
      }
      p { 
        font-size: 18px; 
        line-height: 1.5;
        margin-bottom: 32px;
      }
      .button-group {
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 360px;
      }
      .btn { 
        width: 100%; 
        padding: 14px 24px;
        font-size: 16px;
      }
    }
  `;

  render() {
    return html`
      <h1>Ceramic Art and Design Studio Based Out of Coimbatore</h1>
      <p>Studio Genki is a dual-practice space, dedicated to both small-batch ceramic production and an alternative, progressive design curriculum.</p>
      
      <div class="button-group">
        <a href="/classes.html" class="btn btn-primary">Explore courses</a>
        <a href="/works.html" class="btn btn-secondary">Explore Products</a>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);

