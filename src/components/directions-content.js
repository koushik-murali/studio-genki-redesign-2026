import { LitElement, html, css } from 'lit';

export class DirectionsContent extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
      text-align: center;
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

    .map-container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
    
    .map-container iframe {
      width: 100%;
      display: block;
    }

    @media (max-width: 1024px) {
      h2 { font-size: 36px; }
    }

    @media (max-width: 768px) {
      h2 { font-size: 32px; }
      p { 
        font-size: 18px; 
      }
    }
  `;

  render() {
    return html`
      <h2>Directions</h2>
      <p>Find us at Studio Genki</p>
      
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.342810426298!2d77.0667372865575!3d11.050664523413825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857740d223e7b%3A0xa10dd35b49e304ba!2sStudio%20Genki%3A%20Pottery%20Studio!5e0!3m2!1sen!2sin!4v1786421043892!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    `;
  }
}

customElements.define('directions-content', DirectionsContent);
