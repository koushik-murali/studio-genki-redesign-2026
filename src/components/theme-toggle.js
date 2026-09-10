import { LitElement, html, css } from 'lit';

export class ThemeToggle extends LitElement {
  static properties = {
    theme: { type: String, state: true }
  };

  constructor() {
    super();
    // Default to dark or saved preference
    const savedTheme = localStorage.getItem('theme');
    this.theme = savedTheme ? savedTheme : 'dark';
  }

  connectedCallback() {
    super.connectedCallback();
    document.documentElement.setAttribute('data-theme', this.theme);
    this.setAttribute('data-theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    this.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: this.theme } }));
  }

  static styles = css`
    :host {
      position: fixed;
      top: 22px;
      right: 28px;
      z-index: 1000;
      display: inline-block;
    }

    .toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(25, 25, 25, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FFFFFF;
      font-family: var(--font-merriweather-sans, sans-serif);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      user-select: none;
    }

    .toggle-btn:hover {
      background: rgba(45, 45, 45, 0.85);
      border-color: rgba(255, 255, 255, 0.35);
      transform: translateY(-1px);
    }

    .toggle-btn:active {
      transform: translateY(1px) scale(0.98);
    }

    .toggle-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    .toggle-btn:hover .toggle-icon {
      transform: rotate(15deg);
    }

    /* Light mode styles for the toggle itself */
    :host([data-theme="light"]) .toggle-btn,
    .toggle-btn.is-light {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(0, 0, 0, 0.15);
      color: #141414;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }

    :host([data-theme="light"]) .toggle-btn:hover,
    .toggle-btn.is-light:hover {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
      :host {
        top: 22px;
        right: 74px;
      }

      .toggle-btn {
        padding: 6px 10px;
        font-size: 12px;
      }

      .toggle-label {
        display: none;
      }
    }
  `;

  render() {
    const isLight = this.theme === 'light';

    return html`
      <button 
        class="toggle-btn ${isLight ? 'is-light' : ''}" 
        @click="${this.toggleTheme}" 
        aria-label="Switch to ${isLight ? 'dark' : 'light'} theme"
        title="Switch to ${isLight ? 'dark' : 'light'} theme">
        <span class="toggle-icon">
          ${isLight ? html`
            <!-- Moon Icon for switching back to dark -->
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ` : html`
            <!-- Sun Icon for switching to light -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          `}
        </span>
        <span class="toggle-label">${isLight ? 'Dark' : 'Light'}</span>
      </button>
    `;
  }
}

customElements.define('theme-toggle', ThemeToggle);
