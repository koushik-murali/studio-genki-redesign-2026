import { LitElement, html, css } from 'lit';

export class StaticBackground extends LitElement {
  static properties = {
    imageUrl: { type: String, attribute: 'image-url' }
  };

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #000;
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
    }
  `;

  render() {
    return html`
      <div class="bg-image" style="background-image: url(${this.imageUrl})"></div>
    `;
  }
}

customElements.define('static-background', StaticBackground);
