import { LitElement, html, css } from 'lit';

export class ClassesList extends LitElement {
  static properties = {
    classes: { type: Array },
    theme: { type: String, state: true }
  };

  constructor() {
    super();
    this.classes = [
      {
        id: 'beginners-wheel-throwing',
        title: 'Wheel Throwing Classes',
        image: '/classes-gallery/02.png',
        link: '/beginners-pottery-classes-coimbatore.html',
        sessions: '6, 10, or 20',
        fees: 'From Rs. 9,900',
        duration: 'Regular classes',
        spots: '3 per slot',
        level: 'beginner'
      },
      {
        id: 'handbuilding-classes',
        title: 'Handbuilding Classes',
        image: '/classes-gallery/09.png',
        link: '/handbuilding-workshop.html',
        sessions: '6, 10, or 20',
        fees: 'From Rs. 9,900',
        duration: 'Regular classes',
        spots: '3 per slot',
        level: 'beginner'
      },
      {
        id: 'miniature-sculpting-crash-course',
        title: 'Miniature Sculpting Crash Course',
        image: '/classes-gallery/11.png',
        link: '/miniature-sculpting-crash-course.html',
        sessions: '3',
        fees: 'Rs. 5,000',
        duration: 'October 2, 3, 4',
        spots: '8',
        level: 'beginner'
      }
    ];
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
    this._themeObserver = new MutationObserver(() => {
      this._onThemeChange();
    });
    this._themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('theme-changed', this._onThemeChange);
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 0;
      color: #FFFFFF;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      transition: color 0.3s ease;
    }

    :host([data-theme="light"]) {
      color: #141414;
    }

    h1 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;
      margin: 0 0 48px 0;
      text-align: center;
      transition: color 0.3s ease;
    }

    .classes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    .class-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .class-card:hover {
      transform: translateY(-5px);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .card-image {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      background-color: #222;
    }

    .card-content {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card-title {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 12px 0;
      line-height: 1.3;
      transition: color 0.3s ease;
    }

    .level-tag {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      align-self: flex-start;
    }

    .level-beginner {
      background-color: rgba(185, 185, 185, 0.15);
      color: #B9B9B9;
      border: 1px solid rgba(185, 185, 185, 0.3);
    }
    
    .level-intermediate {
      background-color: rgba(74, 144, 226, 0.2);
      color: #4A90E2;
      border: 1px solid rgba(74, 144, 226, 0.3);
    }
    
    .level-advanced {
      background-color: rgba(226, 74, 74, 0.2);
      color: #E24A4A;
      border: 1px solid rgba(226, 74, 74, 0.3);
    }

    .card-meta {
      font-size: 15px;
      color: #B9B9B9;
      margin-bottom: 24px;
      line-height: 1.6;
      transition: color 0.3s ease;
    }

    .card-meta span {
      display: block;
      margin-bottom: 6px;
    }
    
    .card-meta strong {
      color: #FFFFFF;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .read-more {
      margin-top: auto;
      display: inline-block;
      padding: 12px 24px;
      background-color: transparent;
      color: #FFFFFF;
      border: 1px solid #FFFFFF;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      transition: all 0.2s ease;
      align-self: flex-start;
      border-radius: 6px;
    }

    .read-more:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Light mode styles */
    :host([data-theme="light"]) h1,
    .light-mode h1,
    :host([data-theme="light"]) .card-title,
    .light-mode .card-title {
      color: #141414;
    }

    :host([data-theme="light"]) .class-card,
    .light-mode .class-card {
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    }

    :host([data-theme="light"]) .class-card:hover,
    .light-mode .class-card:hover {
      border-color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }

    :host([data-theme="light"]) .card-meta,
    .light-mode .card-meta {
      color: #555555;
    }

    :host([data-theme="light"]) .card-meta strong,
    .light-mode .card-meta strong {
      color: #141414;
    }

    :host([data-theme="light"]) .level-beginner,
    .light-mode .level-beginner {
      background-color: #F4F1EC;
      color: #555555;
      border: 1px solid rgba(0, 0, 0, 0.12);
    }

    :host([data-theme="light"]) .read-more,
    .light-mode .read-more {
      color: #141414;
      border-color: #141414;
    }

    :host([data-theme="light"]) .read-more:hover,
    .light-mode .read-more:hover {
      background-color: #141414;
      color: #FFFFFF;
    }

    @media (max-width: 1024px) {
      .classes-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      h1 { font-size: 32px; }
      .classes-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }
  `;

  render() {
    const isLight = this.theme === 'light';

    return html`
      <div class="${isLight ? 'light-mode' : ''}">
        <h1>Classes & Workshops</h1>
        <div class="classes-grid">
          ${this.classes.map(cls => html`
            <div class="class-card">
              <img src="${cls.image}" alt="${cls.title}" class="card-image" onerror="this.style.backgroundColor='#333'" />
              <div class="card-content">
                ${cls.level ? html`<div class="level-tag level-${cls.level}">${cls.level}</div>` : ''}
                <h2 class="card-title">${cls.title}</h2>
                <div class="card-meta">
                  <span><strong>Sessions:</strong> ${cls.sessions}</span>
                  <span><strong>Fee:</strong> ${cls.fees}</span>
                  <span><strong>Duration:</strong> ${cls.duration}</span>
                  <span><strong>Batch:</strong> ${cls.spots}</span>
                </div>
                <a href="${cls.link}" class="read-more">Read more</a>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('classes-list', ClassesList);
