import { LitElement, html, css } from 'lit';

export class ContactContent extends LitElement {
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
      line-height: 1.6;
      color: #B9B9B9;
      margin-bottom: 40px;
      margin-top: 0;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .contact-item {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 20px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .contact-item a {
      color: #FFFFFF;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .contact-item a:hover {
      opacity: 0.7;
      text-decoration: underline;
    }

    .label {
      font-weight: 400;
      color: #B9B9B9;
      width: 120px;
    }

    @media (max-width: 1024px) {
      h2 { font-size: 36px; }
    }

    @media (max-width: 768px) {
      h2 { font-size: 32px; }
      p { 
        font-size: 18px; 
      }
      .contact-item {
        flex-direction: column;
        gap: 8px;
        font-size: 18px;
      }
      .label {
        width: auto;
      }
    }
  `;

  render() {
    return html`
      <h2>Contact Studio Genki</h2>
      <p>For enquiries and classes,</p>
      
      <div class="contact-info">
        <div class="contact-item">
          <span class="label">Email address:</span>
          <a href="mailto:koushik@studiogenki.in">koushik@studiogenki.in</a>
        </div>
        <div class="contact-item">
          <span class="label">Whatsapp:</span>
          <a href="https://wa.me/917373074962" target="_blank" rel="noopener noreferrer">+91 73730 74962</a>
        </div>
      </div>
    `;
  }
}

customElements.define('contact-content', ContactContent);
