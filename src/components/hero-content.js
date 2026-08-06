import { LitElement, html, css } from 'lit';

export class HeroContent extends LitElement {
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
      color: #FFFFFF;
      margin-bottom: 24px;
      margin-top: 0;
      max-width: 920px;
    }

    p {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 300;
      font-size: 36px;
      line-height: 1.4;
      color: #B9B9B9;
      max-width: 920px;
      margin-bottom: 53px;
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

    @media (max-width: 1024px) {
      p { font-size: 28px; }
      .btn { padding: 15px 40px; }
    }

    @media (max-width: 768px) {
      :host {
        text-align: center;
      }
      h1 { 
        font-size: 60px; 
        line-height: 1.1;
      }
      p { 
        font-size: 20px; 
        margin-left: auto;
        margin-right: auto;
      }
      .button-group {
        flex-direction: column;
        gap: 16px;
      }
      .btn { 
        width: 100%; 
        padding: 12px 0;
        font-size: 18px;
      }
    }
  `;

  render() {
    return html`
      <h1>Ceramic Art and Design Studio Based Out of Coimbatore</h1>
      <p>Studio Genki is a dual-practice space, dedicated to both small-batch ceramic production and an alternative, progressive design curriculum.</p>
      
      <div class="button-group">
        <a href="/pottery-classes-coimbatore.html" class="btn btn-primary">Explore courses</a>
        <a href="/works.html" class="btn btn-secondary">Explore Products</a>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
