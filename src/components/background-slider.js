import { LitElement, html, css } from 'lit';

// Vite specific: load all background images from the backgrounds folder
const backgroundModules = import.meta.glob('../assets/backgrounds/*.{jpg,jpeg,png,webp,svg,avif}', { eager: true, import: 'default' });
const backgroundImages = Object.values(backgroundModules);

export class BackgroundSlider extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      background-color: #000;
    }
    
    .slider-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 2s ease-in-out;
    }
    
    .slider-bg.active {
      opacity: 0.26; /* Reduced from 0.36 to increase perceived black overlay */
    }
  `;

  static properties = {
    images: { type: Array },
    currentIndex: { type: Number, state: true }
  };

  constructor() {
    super();
    // Fallback to placeholder if no local images are placed in the folder yet
    this.images = backgroundImages.length > 0 ? backgroundImages : [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=3540&auto=format&fit=crop', // Ceramics
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=3540&auto=format&fit=crop', // Pottery tools
      'https://images.unsplash.com/photo-1598920959737-0d50711db1e2?q=80&w=3540&auto=format&fit=crop'  // Pottery making
    ];
    this.currentIndex = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // 5 seconds per slide
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  render() {
    return html`
      ${this.images.map((src, index) => html`
        <img 
          src=${src} 
          class="slider-bg ${index === this.currentIndex ? 'active' : ''}" 
          alt="Studio Background"
        />
      `)}
    `;
  }
}

customElements.define('background-slider', BackgroundSlider);
