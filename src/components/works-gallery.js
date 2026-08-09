import { LitElement, html, css } from 'lit';
import worksConfig from '../assets/works/works.json';

export class WorksGallery extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
    }


    .gallery-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      width: 100%;
    }

    .work-item {
      display: block;
      height: 55vh;
      flex: 0 0 auto;
    }

    .image-container {
      display: block;
      height: 100%;
      overflow: hidden;
      background: transparent;
      cursor: pointer;
    }

    .image-container img {
      display: block;
      height: 100%;
      width: auto;
      object-fit: contain;
      transition: transform 0.5s ease;
    }

    .image-container:hover img {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .gallery-grid {
        flex-direction: column;
        gap: 16px;
      }
      
      .work-item {
        height: auto;
        width: 100%;
      }

      .image-container {
        height: auto;
        width: 100%;
      }
      
      .image-container img {
        width: 100%;
        height: auto;
      }
    }
  `;

  constructor() {
    super();
    this.works = [];
    this.loadWorks();
  }

  loadWorks() {
    // Vite's import.meta.glob to dynamically fetch all images from the works folder
    const images = import.meta.glob('../assets/works/*.{jpg,jpeg,png,webp,svg}', { eager: true, query: '?url', import: 'default' });
    
    this.works = Object.keys(images).map(path => {
      const filename = path.split('/').pop();
      let title = filename.replace(/\.[^/.]+$/, "");
      
      // Check if there is a config in works.json for this image
      const config = worksConfig.find(item => item.image === filename);
      
      return {
        url: images[path],
        title: title,
        link: config && config.link ? config.link : null
      };
    });
  }

  render() {
    return html`
      <div class="gallery-grid">
        ${this.works.map(work => html`
          <div class="work-item">
            ${work.link 
              ? html`
                  <a href="${work.link}" class="image-container" target="_blank" rel="noopener noreferrer">
                    <img src="${work.url}" alt="${work.title}" loading="lazy" />
                  </a>
                `
              : html`
                  <div class="image-container" style="cursor: default;">
                    <img src="${work.url}" alt="${work.title}" loading="lazy" />
                  </div>
                `
            }
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('works-gallery', WorksGallery);
