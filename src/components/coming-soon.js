import { LitElement, html, css } from 'lit';

export class ComingSoon extends LitElement {
  static properties = {
    title: { type: String }
  };

  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
      text-align: left;
    }

    h2 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;
      color: #FFFFFF;
      margin-bottom: 24px;
      margin-top: 0;
    }

    p {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 20px;
      color: #B9B9B9;
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 { font-size: 32px; }
      p { font-size: 18px; }
    }
  `;

  render() {
    return html`
      <h2>${this.title}</h2>
      <p>Coming Soon</p>
    `;
  }
}

customElements.define('coming-soon', ComingSoon);
