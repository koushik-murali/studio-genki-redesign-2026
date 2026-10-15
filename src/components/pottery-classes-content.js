import { LitElement, html, css } from 'lit';

export class PotteryClassesContent extends LitElement {
  static properties = {
    galleryImages: { type: Array },
    theme: { type: String, state: true }
  };

  constructor() {
    super();
    this.galleryImages = [
      '01.png',
      '02.png',
      '03.png',
      '04.png'
    ];
    this.theme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'light';
    this._onThemeChange = () => {
      const t = document.documentElement.getAttribute('data-theme') || 'light';
      this.theme = t;
      this.setAttribute('data-theme', t);
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const currentTheme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'light';
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
      max-width: 900px;
      margin: 0 auto;
      color: #FFFFFF;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      transition: color 0.3s ease;
    }

    :host([data-theme="light"]) {
      color: #141414;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      color: #B9B9B9;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 24px;
      transition: color 0.2s ease;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
    }
    
    .back-link:hover {
      color: #FFFFFF;
    }

    h1 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;
      margin: 0 0 20px 0;
    }

    h2 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 700;
      font-size: 28px;
      margin: 0 0 24px 0;
      color: #FFFFFF;
    }
    
    h3 {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 10px 0;
      color: #FFFFFF;
      line-height: 1.4;
    }

    .description {
      font-size: 20px;
      line-height: 1.6;
      color: #B9B9B9;
      margin-bottom: 24px;
      font-family: var(--font-merriweather, 'Merriweather', serif);
    }

    /* Top Information Cards (Sessions, Schedule, Slots) */
    .info-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 32px 0 20px 0;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 22px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .info-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .info-card-label {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #F5C518;
      margin-bottom: 10px;
    }

    .info-card-value {
      font-family: var(--font-merriweather, serif);
      font-size: 20px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.3;
      margin-bottom: 8px;
    }

    .info-card-sub {
      font-size: 13.5px;
      color: #A0A0A0;
      line-height: 1.45;
      margin: 0;
    }

    /* Course Fee & Action Bar */
    .cta-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 20px 24px;
      margin-bottom: 64px;
    }

    .fee-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .fee-headline {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }

    .fee-amount {
      font-size: 28px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1;
    }

    .fee-badge {
      font-size: 12px;
      color: #F5C518;
      font-weight: 600;
    }

    .fee-desc {
      font-size: 13.5px;
      color: #8E8E8E;
      margin: 0;
    }

    .contact-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 14px 32px;
      background-color: #FFFFFF;
      color: #000000;
      border: 1px solid #FFFFFF;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
      transition: all 0.2s ease;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      cursor: pointer;
      border-radius: 6px;
    }
    
    .contact-button:hover {
      background: #e0e0e0;
      border-color: #e0e0e0;
    }

    /* Symmetrical 2x2 Curriculum Grid */
    .curriculum-section {
      margin-bottom: 80px;
    }

    .section-intro {
      font-size: 17px;
      line-height: 1.6;
      color: #B9B9B9;
      margin-bottom: 32px;
    }

    .curriculum-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 20px;
    }

    .curriculum-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .curriculum-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .card-top {
      margin-bottom: 16px;
    }

    .card-meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .week-badge {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #F5C518;
      background: rgba(245, 197, 24, 0.1);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .session-count {
      font-size: 13px;
      color: #8E8E8E;
    }

    .card-title {
      font-size: 20px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 12px 0;
      font-family: var(--font-merriweather, serif);
    }

    .session-details {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .session-details li {
      font-size: 14.5px;
      line-height: 1.5;
      color: #B9B9B9;
    }

    .session-details strong {
      color: #FFFFFF;
    }

    .card-tag {
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 12.5px;
      color: #8E8E8E;
      line-height: 1.4;
    }

    .card-tag.highlight {
      color: #F5C518;
    }

    /* Full-width Glazing Banner */
    .glazing-banner {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      margin-top: 20px;
    }

    .glazing-left {
      flex: 1;
    }

    .glazing-banner h3 {
      font-family: var(--font-merriweather, serif);
      font-size: 20px;
      margin: 6px 0 8px 0;
    }

    .glazing-banner p {
      font-size: 14.5px;
      line-height: 1.5;
      color: #B9B9B9;
      margin: 0;
    }

    .glazing-badge {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #F5C518;
      background: rgba(245, 197, 24, 0.1);
      padding: 3px 8px;
      border-radius: 4px;
    }

    /* Inclusions Grid */
    .inclusions-section {
      margin-bottom: 80px;
    }

    .inclusions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 16px;
    }

    .inclusion-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
    }

    .inclusion-icon {
      font-size: 22px;
      margin-bottom: 12px;
    }

    .inclusion-heading {
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 6px 0;
    }

    .inclusion-desc {
      font-size: 13.5px;
      color: #A0A0A0;
      line-height: 1.45;
      margin: 0;
    }

    /* Gallery */
    .gallery-wrapper {
      margin: 64px 0;
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .gallery-track {
      display: flex;
      gap: 16px;
      height: 320px;
      width: max-content;
    }

    .gallery-track img {
      height: 100%;
      width: auto;
      object-fit: cover;
      border-radius: 8px;
      flex-shrink: 0;
      background-color: #222;
    }

    @media (min-width: 769px) {
      .gallery-track {
        animation: marquee 30s linear infinite;
      }
      .gallery-track:hover {
        animation-play-state: paused;
      }
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 8px)); }
    }

    /* Instructor */
    .instructor-section {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 12px;
      margin-bottom: 80px;
      display: flex;
      align-items: center;
      gap: 32px;
    }
    
    .instructor-image {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .instructor-info h2 {
      margin: 0 0 12px 0;
    }

    .instructor-label {
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #8E8E8E;
      margin: 0 0 6px 0;
      font-weight: 600;
    }

    .instructor-bio {
      color: #B9B9B9;
      line-height: 1.6;
      margin: 0;
      font-size: 16.5px;
    }

    /* Reviews Carousel */
    .reviews-carousel {
      margin-bottom: 80px;
      position: relative;
    }

    .reviews-track {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding: 6px 4px 18px 4px;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
    }

    .reviews-track::-webkit-scrollbar {
      height: 4px;
    }

    .reviews-track::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }

    .review-card {
      flex: 0 0 340px;
      scroll-snap-align: start;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 24px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
    }

    .review-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
    }

    .stars {
      color: #F5C518;
      font-size: 14px;
      letter-spacing: 2px;
    }

    .review-tag {
      font-size: 11px;
      color: #8E8E8E;
      background: rgba(255, 255, 255, 0.06);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .review-text {
      color: #B9B9B9;
      font-style: italic;
      line-height: 1.55;
      margin: 0 0 18px 0;
      font-size: 14.5px;
      flex-grow: 1;
    }

    .review-author {
      display: flex;
      align-items: center;
      gap: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 12px;
    }

    .review-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: #FFFFFF;
      font-weight: 700;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .review-name {
      font-weight: 600;
      color: #FFFFFF;
      font-size: 13.5px;
    }

    .review-verified {
      font-size: 11px;
      color: #7E7E7E;
    }

    /* Accordion styles */
    .accordion-group {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 80px;
    }

    .accordion-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.2s ease;
    }

    .accordion-item[open] {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .accordion-header {
      padding: 18px 24px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      font-family: var(--font-merriweather, serif);
      font-size: 18px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .accordion-header::-webkit-details-marker {
      display: none;
    }

    .accordion-icon {
      font-size: 20px;
      color: #8E8E8E;
      transition: transform 0.2s ease;
    }

    .accordion-item[open] .accordion-icon {
      transform: rotate(45deg);
      color: #FFFFFF;
    }

    .accordion-content {
      padding: 0 24px 20px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 14px;
    }

    .accordion-content p, .accordion-content li {
      font-size: 15px;
      line-height: 1.7;
      color: #B9B9B9;
      margin: 0;
    }

    .accordion-content ul {
      list-style-type: disc;
      padding-left: 20px;
      margin: 0;
    }

    .accordion-content li {
      margin-bottom: 6px;
    }

    .accordion-content li:last-child {
      margin-bottom: 0;
    }

    /* Map container */
    .map-container {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      margin-bottom: 40px;
    }
    
    .map-container iframe {
      width: 100%;
      display: block;
    }

    .info-section {
      margin-bottom: 80px;
    }

    .mobile-sticky-bar {
      display: none;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      :host {
        padding-bottom: 80px;
      }

      h1 { font-size: 32px; }
      h2 { font-size: 24px; }
      h3 { font-size: 18px; }
      .description { font-size: 18px; }

      .info-cards-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .cta-bar {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
        gap: 16px;
        padding: 20px 16px;
      }

      .fee-headline {
        justify-content: center;
      }

      .cta-bar .contact-button {
        width: 100%;
        box-sizing: border-box;
      }

      .curriculum-grid {
        grid-template-columns: 1fr;
      }

      .glazing-banner {
        flex-direction: column;
        align-items: flex-start;
      }

      .inclusions-grid {
        grid-template-columns: 1fr 1fr;
      }

      .instructor-section {
        flex-direction: column;
        text-align: center;
        padding: 24px;
      }

      .review-card {
        flex: 0 0 280px;
        padding: 20px;
      }

      .gallery-wrapper {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
      }

      .gallery-wrapper::-webkit-scrollbar {
        display: none;
      }

      .gallery-track {
        height: 240px;
        padding: 0 16px;
      }

      .gallery-track img {
        scroll-snap-align: center;
      }

      .duplicate-for-marquee {
        display: none;
      }

      .mobile-sticky-bar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(12, 12, 12, 0.95);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px)) 16px;
        z-index: 999;
      }

      .mobile-sticky-btn {
        width: 100%;
        background: #FFFFFF;
        color: #000000;
        font-size: 16px;
        font-weight: 700;
        padding: 14px 20px;
        border-radius: 8px;
        text-decoration: none;
        text-align: center;
        font-family: var(--font-merriweather-sans, sans-serif);
      }
    }

    /* Light Mode */
    :host([data-theme="light"]) h1,
    .light-mode h1,
    :host([data-theme="light"]) h2,
    .light-mode h2,
    :host([data-theme="light"]) h3,
    .light-mode h3,
    :host([data-theme="light"]) .card-title,
    .light-mode .card-title,
    :host([data-theme="light"]) .info-card-value,
    .light-mode .info-card-value,
    :host([data-theme="light"]) .fee-amount,
    .light-mode .fee-amount {
      color: #141414;
    }

    :host([data-theme="light"]) .description,
    .light-mode .description,
    :host([data-theme="light"]) .section-intro,
    .light-mode .section-intro,
    :host([data-theme="light"]) .info-card-sub,
    .light-mode .info-card-sub,
    :host([data-theme="light"]) .fee-desc,
    .light-mode .fee-desc {
      color: #555555;
    }

    :host([data-theme="light"]) .back-link,
    .light-mode .back-link {
      color: #666666;
    }

    :host([data-theme="light"]) .back-link:hover,
    .light-mode .back-link:hover {
      color: #000000;
    }

    :host([data-theme="light"]) .contact-button,
    .light-mode .contact-button {
      background-color: #141414;
      color: #FFFFFF;
      border-color: #141414;
    }

    :host([data-theme="light"]) .contact-button:hover,
    .light-mode .contact-button:hover {
      background-color: #333333;
      border-color: #333333;
    }

    :host([data-theme="light"]) .info-card,
    .light-mode .info-card,
    :host([data-theme="light"]) .cta-bar,
    .light-mode .cta-bar,
    :host([data-theme="light"]) .curriculum-card,
    .light-mode .curriculum-card,
    :host([data-theme="light"]) .glazing-banner,
    .light-mode .glazing-banner,
    :host([data-theme="light"]) .inclusion-card,
    .light-mode .inclusion-card,
    :host([data-theme="light"]) .accordion-item,
    .light-mode .accordion-item,
    :host([data-theme="light"]) .instructor-section,
    .light-mode .instructor-section,
    :host([data-theme="light"]) .review-card,
    .light-mode .review-card {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    }

    :host([data-theme="light"]) .info-card:hover,
    .light-mode .info-card:hover,
    :host([data-theme="light"]) .curriculum-card:hover,
    .light-mode .curriculum-card:hover,
    :host([data-theme="light"]) .accordion-item:hover,
    .light-mode .accordion-item:hover,
    :host([data-theme="light"]) .review-card:hover,
    .light-mode .review-card:hover {
      border-color: rgba(0, 0, 0, 0.22);
    }

    :host([data-theme="light"]) .info-card-label,
    .light-mode .info-card-label,
    :host([data-theme="light"]) .week-badge,
    .light-mode .week-badge,
    :host([data-theme="light"]) .glazing-badge,
    .light-mode .glazing-badge,
    :host([data-theme="light"]) .fee-badge,
    .light-mode .fee-badge {
      color: #996515;
      background: rgba(184, 134, 11, 0.12);
    }

    :host([data-theme="light"]) .info-card-label {
      background: transparent;
    }

    :host([data-theme="light"]) .session-count,
    .light-mode .session-count,
    :host([data-theme="light"]) .card-tag,
    .light-mode .card-tag {
      color: #666666;
    }

    :host([data-theme="light"]) .card-tag.highlight,
    .light-mode .card-tag.highlight {
      color: #996515;
    }

    :host([data-theme="light"]) .session-details li,
    .light-mode .session-details li,
    :host([data-theme="light"]) .glazing-banner p,
    .light-mode .glazing-banner p,
    :host([data-theme="light"]) .inclusion-desc,
    .light-mode .inclusion-desc,
    :host([data-theme="light"]) .instructor-bio,
    .light-mode .instructor-bio,
    :host([data-theme="light"]) .review-text,
    .light-mode .review-text,
    :host([data-theme="light"]) .accordion-content p,
    .light-mode .accordion-content p,
    :host([data-theme="light"]) .accordion-content li,
    .light-mode .accordion-content li {
      color: #444444;
    }

    :host([data-theme="light"]) .session-details strong,
    .light-mode .session-details strong,
    :host([data-theme="light"]) .inclusion-heading,
    .light-mode .inclusion-heading,
    :host([data-theme="light"]) .review-name,
    .light-mode .review-name,
    :host([data-theme="light"]) .accordion-header,
    .light-mode .accordion-header {
      color: #141414;
    }

    :host([data-theme="light"]) .card-tag,
    .light-mode .card-tag,
    :host([data-theme="light"]) .accordion-content,
    .light-mode .accordion-content,
    :host([data-theme="light"]) .review-author,
    .light-mode .review-author {
      border-top-color: rgba(0, 0, 0, 0.06);
    }

    :host([data-theme="light"]) .stars,
    .light-mode .stars {
      color: #D99E10;
    }

    :host([data-theme="light"]) .mobile-sticky-bar,
    .mobile-sticky-bar.light-mode {
      background: rgba(251, 249, 245, 0.95);
      border-top-color: rgba(0, 0, 0, 0.1);
    }

    :host([data-theme="light"]) .mobile-sticky-btn,
    .mobile-sticky-bar.light-mode .mobile-sticky-btn {
      background: #141414;
      color: #FFFFFF;
    }
  `;

  render() {
    const isLight = this.theme === 'light';

    return html`
      <div class="${isLight ? 'light-mode' : ''}">
        <a href="/classes.html" class="back-link">&larr; Back to courses</a>

        <h1>Weekend Wheel Throwing Classes</h1>
        <p class="description">
          A dedicated 9-session weekend course designed for aspiring potters. No prior experience required.
        </p>

        <!-- Top Information Cards: Sessions, Schedule, Slots -->
        <div class="info-cards-grid">
          <div class="info-card">
            <span class="info-card-label">Sessions</span>
            <div class="info-card-value">9 Sessions</div>
            <p class="info-card-sub">8 throwing & trimming practice + 1 dedicated glazing</p>
          </div>

          <div class="info-card">
            <span class="info-card-label">Schedule</span>
            <div class="info-card-value">Weekends Only</div>
            <p class="info-card-sub">Oct 24 – Nov 21 · 5 weekends (Saturdays & Sundays)</p>
          </div>

          <div class="info-card">
            <span class="info-card-label">Slots</span>
            <div class="info-card-value">10am–1pm & 2pm–5pm</div>
            <p class="info-card-sub">3 students per slot · Dedicated wheel per student</p>
          </div>
        </div>

        <!-- Course Fee & Action Bar -->
        <div class="cta-bar">
          <div class="fee-info">
            <div class="fee-headline">
              <span class="fee-amount">₹15,900</span>
              <span class="fee-badge">● Only 3 seats per slot</span>
            </div>
            <p class="fee-desc">All materials, unlimited practice clay & firings included</p>
          </div>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20weekend%20wheel%20throwing%20classes%20starting%20Oct%2024" 
             target="_blank" rel="noopener noreferrer" class="contact-button">
            Reserve Your Spot
          </a>
        </div>

        <!-- Symmetrical 2x2 Curriculum Grid: What You Will Make -->
        <div class="curriculum-section">
          <h2>Curriculum & Progression</h2>
          <p class="section-intro">
            Focused on making bowls, cylinders, and mugs with handles. Weeks 1 & 2 are for practice without saving pieces; Weeks 3 & 4 are for your finished ware.
          </p>

          <div class="curriculum-grid">
            <!-- Card 1 -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Week 1</span>
                  <span class="session-count">Sessions 1 & 2 • Oct 24 & 25</span>
                </div>
                <div class="card-title">Bowls</div>
                <ul class="session-details">
                  <li><strong>Sat:</strong> Centering clay and making your first bowls.</li>
                  <li><strong>Sun:</strong> Shaping and throwing open bowls.</li>
                </ul>
              </div>
              <div class="card-tag">Practice only — pieces are not saved.</div>
            </div>

            <!-- Card 2 -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Week 2</span>
                  <span class="session-count">Sessions 3 & 4 • Oct 31 & Nov 1</span>
                </div>
                <div class="card-title">Cylinders</div>
                <ul class="session-details">
                  <li><strong>Sat:</strong> Pulling straight walls and making cylinders.</li>
                  <li><strong>Sun:</strong> Shaping taller, even cylinders.</li>
                </ul>
              </div>
              <div class="card-tag">Practice only — pieces are not saved.</div>
            </div>

            <!-- Card 3 -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Week 3</span>
                  <span class="session-count">Sessions 5 & 6 • Nov 7 & 8</span>
                </div>
                <div class="card-title">Bowls & Cylinders</div>
                <ul class="session-details">
                  <li><strong>Sat:</strong> Throwing foundation bowls and cylinders to keep.</li>
                  <li><strong>Sun:</strong> Trimming foot rings on your leather-hard pieces.</li>
                </ul>
              </div>
              <div class="card-tag highlight">Pieces kept for firing.</div>
            </div>

            <!-- Card 4 -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Week 4</span>
                  <span class="session-count">Sessions 7 & 8 • Nov 14 & 15</span>
                </div>
                <div class="card-title">Mugs & Finished Ware</div>
                <ul class="session-details">
                  <li><strong>Sat:</strong> Throwing finished pieces; making coiled handles for mugs.</li>
                  <li><strong>Sun:</strong> Final trimming, detailing, and prep for the bisque kiln.</li>
                </ul>
              </div>
              <div class="card-tag highlight">Prepped for bisque firing.</div>
            </div>
          </div>

          <!-- Session 9 Glazing Banner -->
          <div class="glazing-banner">
            <div class="glazing-left">
              <span class="glazing-badge">Week 5 • Nov 21</span>
              <h3>Session 9: Glazing</h3>
              <p>Glaze all your finished bowls, cylinders, and mugs for the final stoneware firing.</p>
            </div>
          </div>
        </div>

        <!-- Symmetrical 4-Card Inclusions -->
        <div class="inclusions-section">
          <h2>All Inclusions</h2>
          <div class="inclusions-grid">
            <div class="inclusion-card">
              <div class="inclusion-icon">🏺</div>
              <div class="inclusion-heading">Wheel Fundamentals</div>
              <p class="inclusion-desc">Wedging, centering, throwing bowls, pulling cylinders, trimming foot rings, and handle attachments.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">🛠️</div>
              <div class="inclusion-heading">Wheel & Tools</div>
              <p class="inclusion-desc">Dedicated electric wheel per student, unlimited practice clay, complete trimming tools, and aprons.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">🔥</div>
              <div class="inclusion-heading">Firings & Glazes</div>
              <p class="inclusion-desc">Studio bisque firing and cone 6 glaze firings for your finished pieces made in Weeks 3 & 4.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">👥</div>
              <div class="inclusion-heading">1-on-1 Mentorship</div>
              <p class="inclusion-desc">Strictly 3 students per slot for focused, personal hands-on guidance from the instructor.</p>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div class="gallery-wrapper">
          <div class="gallery-track">
            ${this.galleryImages.map(img => html`
              <img src="/classes-gallery/${img}" alt="Weekend Wheel Throwing Pottery Class at Studio Genki" onerror="this.style.width='300px'" />
            `)}
            ${this.galleryImages.map(img => html`
              <img src="/classes-gallery/${img}" alt="Weekend Wheel Throwing Pottery Class at Studio Genki" class="duplicate-for-marquee" onerror="this.style.width='300px'" />
            `)}
          </div>
        </div>

        <!-- Instructor -->
        <div class="instructor-section">
          <img src="/profile-picture.png" alt="Koushik Murali" class="instructor-image" />
          <div class="instructor-info">
            <p class="instructor-label">Your instructor</p>
            <h2>Koushik Murali</h2>
            <p class="instructor-bio">Koushik Murali is a studio potter and designer with over 4 years of hands-on ceramic practice. He runs Studio Genki full-time and mentors students with patient, technique-driven instruction.</p>
          </div>
        </div>

        <!-- Reviews -->
        <h2>Student Reviews</h2>
        <div class="reviews-carousel">
          <div class="reviews-track">
            <div class="review-card">
              <div class="review-card-top">
                <span class="stars">★★★★★</span>
                <span class="review-tag">Wheel Throwing</span>
              </div>
              <p class="review-text">"Informative, insightful, and taught so well by Koushik. A must for those looking to learn pottery. The best in terms of clarity, technique, and creativity."</p>
              <div class="review-author">
                <div class="review-avatar">A</div>
                <div class="review-meta">
                  <span class="review-name">Afshan</span>
                  <span class="review-verified">Verified Student</span>
                </div>
              </div>
            </div>

            <div class="review-card">
              <div class="review-card-top">
                <span class="stars">★★★★★</span>
                <span class="review-tag">Wheel Throwing</span>
              </div>
              <p class="review-text">"Amazing experience. Koushik patiently teaches the techniques and answers every doubt. Anyone wishing to create in clay can step into Studio Genki."</p>
              <div class="review-author">
                <div class="review-avatar">P</div>
                <div class="review-meta">
                  <span class="review-name">Priya</span>
                  <span class="review-verified">Verified Student</span>
                </div>
              </div>
            </div>

            <div class="review-card">
              <div class="review-card-top">
                <span class="stars">★★★★★</span>
                <span class="review-tag">Studio Member</span>
              </div>
              <p class="review-text">"One of the best decisions ever. Koushik is very patient, knowing when to step in and when to let you figure it out. Highly recommend :)"</p>
              <div class="review-author">
                <div class="review-avatar">D</div>
                <div class="review-meta">
                  <span class="review-name">Dharani</span>
                  <span class="review-verified">Verified Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <h2>FAQ & Policies</h2>
        <div class="accordion-group">
          <details class="accordion-item" open>
            <summary class="accordion-header">
              <span>Schedule & Timings</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li><strong>Dates:</strong> Oct 24 – Nov 21, 2026 (Weekends only).</li>
                <li><strong>Sessions:</strong> 9 sessions (8 throwing/trimming + 1 glazing). 3 hours each.</li>
                <li><strong>Slots:</strong> Morning (10:00 AM – 1:00 PM) or Afternoon (2:00 PM – 5:00 PM).</li>
                <li><strong>Batch Size:</strong> Strictly 3 students per slot.</li>
              </ul>
            </div>
          </details>

          <details class="accordion-item">
            <summary class="accordion-header">
              <span>Cancellations & Rescheduling</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li><strong>Refunds:</strong> All registrations are final and non-refundable. Non-transferable between people.</li>
                <li><strong>Cohort Commitment:</strong> Because sessions build sequentially on previous drying stages, attending all weekend sessions is required.</li>
                <li><strong>Emergency Reschedule:</strong> Inform the studio at least 24 hours in advance to coordinate a catch-up before the next trimming window.</li>
                <li><strong>Pickup:</strong> Finished pieces must be collected within the designated pickup window communicated by the studio.</li>
              </ul>
            </div>
          </details>

          <details class="accordion-item">
            <summary class="accordion-header">
              <span>What to Prepare</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li>Wear comfortable clothes you don't mind getting clay on.</li>
                <li><strong>Trim your fingernails short</strong> — essential for wheel control.</li>
                <li>Bring a personal hand towel. Aprons and tools are provided.</li>
              </ul>
            </div>
          </details>

          <details class="accordion-item">
            <summary class="accordion-header">
              <span>Why aren't Week 1 & 2 pieces saved?</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <p>Recycling early clay eliminates performance pressure so you can focus entirely on muscle memory. You throw pieces to keep in Weeks 3 & 4 with confidence and clean technique.</p>
            </div>
          </details>
        </div>

        <!-- Directions -->
        <div class="info-section">
          <h2>Directions & Location</h2>
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.342810426298!2d77.0667372865575!3d11.050664523413825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857740d223e7b%3A0xa10dd35b49e304ba!2sStudio%20Genki%3A%20Pottery%20Studio!5e0!3m2!1sen!2sin!4v1786421043892!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>

        <div class="info-section">
          <h2>Ready to learn?</h2>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20weekend%20wheel%20throwing%20classes%20starting%20Oct%2024" target="_blank" rel="noopener noreferrer" class="contact-button" style="margin-top: 16px;">Reserve Your Spot</a>
        </div>
      </div>

      <!-- Sticky Mobile Bar -->
      <div class="mobile-sticky-bar ${isLight ? 'light-mode' : ''}">
        <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20weekend%20wheel%20throwing%20classes%20starting%20Oct%2024" 
           target="_blank" rel="noopener noreferrer" class="mobile-sticky-btn">
          Reserve Spot on WhatsApp
        </a>
      </div>
    `;
  }
}

customElements.define('pottery-classes-content', PotteryClassesContent);
