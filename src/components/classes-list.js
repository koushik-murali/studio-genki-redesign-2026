import { LitElement, html, css } from 'lit';

export class ClassesList extends LitElement {
  static properties = {
    classes: { type: Array }
  };

  constructor() {
    super();
    this.classes = [
      {
        id: 'beginners-wheel-throwing',
        title: 'Wheel Throwing Classes',
        image: '/classes-gallery/02.png',
        link: '/beginners-pottery-classes-coimbatore.html',
        sessions: '6',
        fees: 'Rs. 10,000',
        duration: 'Regular classes',
        spots: '6',
        level: 'beginner'
      },
      {
        id: 'handbuilding-classes',
        title: 'Handbuilding Classes',
        image: '/classes-gallery/09.png',
        link: '/handbuilding-workshop.html',
        sessions: '6',
        fees: 'Rs. 10,000',
        duration: 'Regular classes',
        spots: '6',
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
    }

    h1 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;
      margin: 0 0 48px 0;
      text-align: center;
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
      transition: transform 0.3s ease, border-color 0.3s ease;
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

    .spots-tag {
      display: inline-block;
      background-color: rgba(245, 197, 24, 0.15);
      color: #F5C518;
      font-size: 13px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 6px;
      margin-bottom: 20px;
      align-self: flex-start;
    }

    .card-meta {
      font-size: 15px;
      color: #B9B9B9;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .card-meta span {
      display: block;
      margin-bottom: 6px;
    }
    
    .card-meta strong {
      color: #FFFFFF;
      font-weight: 600;
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
    }

    .read-more:hover {
      background-color: rgba(255, 255, 255, 0.1);
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
    return html`
      <h1>Classes & Workshops</h1>
      <div class="classes-grid">
        ${this.classes.map(cls => html`
          <div class="class-card">
            <img src="${cls.image}" alt="${cls.title}" class="card-image" onerror="this.style.backgroundColor='#333'" />
            <div class="card-content">
              ${cls.level ? html`<div class="level-tag level-${cls.level}">${cls.level}</div>` : ''}
              <h2 class="card-title">${cls.title}</h2>
              ${cls.spots ? html`<div class="spots-tag">Only ${cls.spots} spots left</div>` : ''}
              <div class="card-meta">
                <span><strong>Sessions:</strong> ${cls.sessions}</span>
                <span><strong>Fee:</strong> ${cls.fees}</span>
                <span><strong>Duration:</strong> ${cls.duration}</span>
              </div>
              <a href="${cls.link}" class="read-more">Read more</a>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('classes-list', ClassesList);
