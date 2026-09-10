import { LitElement, html, css } from 'lit';

export class HandbuildingClassContent extends LitElement {
  static properties = {
    galleryImages: { type: Array },
    theme: { type: String, state: true }
  };

  constructor() {
    super();
    // Edit this array to add, remove, or rename gallery images
    this.galleryImages = [
      '05.png',
      '06.png',
      '08.png',
      '09.png'
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
      color: #FFFFFF;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      transition: color 0.3s ease;
    }

    :host([data-theme="light"]) {
      color: #141414;
    }

    .course-content-column {
      width: 100%;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
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
      margin: 0 0 24px 0;
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
      margin: 0 0 12px 0;
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
    
    .subtitle {
      font-size: 18px;
      color: #FFFFFF;
      margin-bottom: 48px;
      font-weight: 400;
    }

    /* Accordion styles */
    .accordion-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 80px;
    }

    .accordion-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s ease;
    }

    .accordion-item:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .accordion-item[open] {
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.25);
    }

    .accordion-header {
      padding: 22px 28px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      font-family: var(--font-merriweather, serif);
      font-size: 20px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .accordion-header::-webkit-details-marker {
      display: none;
    }

    .accordion-icon {
      font-size: 22px;
      line-height: 1;
      font-weight: 300;
      color: #B9B9B9;
      transition: transform 0.2s ease, color 0.2s ease;
    }

    .accordion-item[open] .accordion-icon {
      transform: rotate(45deg);
      color: #FFFFFF;
    }

    .accordion-content {
      padding: 0 28px 24px 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 18px;
    }

    .accordion-content p {
      font-size: 16px;
      line-height: 1.8;
      color: #B9B9B9;
      margin: 0;
    }

    .accordion-content ul {
      list-style-type: disc;
      padding-left: 20px;
      margin: 0;
    }

    .accordion-content .sub-list {
      list-style-type: circle;
      padding-left: 20px;
      margin-top: 6px;
      margin-bottom: 6px;
    }

    .accordion-content li {
      font-size: 16px;
      line-height: 1.8;
      color: #B9B9B9;
      margin-bottom: 8px;
    }

    .accordion-content li:last-child {
      margin-bottom: 0;
    }

    /* Gallery section */
    .gallery-wrapper {
      margin: 80px 0;
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .gallery-track {
      display: flex;
      gap: 16px;
      height: 350px;
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

    /* Instructor section */
    .instructor-section {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 56px;
      border-radius: 12px;
      margin-bottom: 80px;
      display: flex;
      align-items: center;
      gap: 40px;
    }
    
    .instructor-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .instructor-info h2 {
      margin: 0 0 16px 0;
    }

    .instructor-label {
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #B9B9B9;
      margin: 0 0 8px 0;
      font-weight: 600;
    }

    .instructor-info p.instructor-bio {
      color: #B9B9B9;
      line-height: 1.6;
      margin: 0;
      font-size: 18px;
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

    .reviews-track::-webkit-scrollbar-track {
      background: transparent;
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
      padding: 26px 24px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: background 0.2s ease, border-color 0.2s ease;
      box-sizing: border-box;
    }

    .review-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .review-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .review-tag {
      font-size: 11px;
      color: #8E8E8E;
      background: rgba(255, 255, 255, 0.06);
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 500;
    }

    .review-text {
      color: #B9B9B9;
      font-style: italic;
      line-height: 1.6;
      margin: 0 0 20px 0;
      font-size: 15px;
      flex-grow: 1;
    }

    .review-author {
      display: flex;
      align-items: center;
      gap: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 14px;
    }

    .review-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFFFFF;
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-merriweather-sans, sans-serif);
      flex-shrink: 0;
    }

    .review-meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .review-name {
      font-weight: 600;
      color: #FFFFFF;
      font-size: 14px;
    }

    .review-verified {
      font-size: 11px;
      color: #7E7E7E;
    }
    
    .stars {
      color: #F5C518;
      font-size: 15px;
      letter-spacing: 2px;
    }

    /* Pricing Cards */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin: 40px 0 24px 0;
      align-items: stretch;
    }

    .pricing-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 36px 28px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .pricing-card:hover {
      transform: translateY(-4px);
      border-color: rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.05);
    }

    .pricing-card.featured {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .pricing-badge {
      position: absolute;
      top: -13px;
      left: 50%;
      transform: translateX(-50%);
      background: #FFFFFF;
      color: #000000;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 4px 14px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .card-header {
      margin-bottom: 24px;
      text-align: center;
    }

    .card-title {
      font-family: var(--font-merriweather, serif);
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 12px 0;
    }

    .card-price {
      font-family: var(--font-merriweather-sans, sans-serif);
      font-size: 36px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1;
      margin-bottom: 12px;
    }

    .card-ideal-for {
      font-size: 13.5px;
      color: #A0A0A0;
      line-height: 1.45;
      margin: 0;
      min-height: 40px;
    }

    .pricing-helper {
      text-align: center;
      margin: 28px 0 64px 0;
      font-size: 15px;
      color: #8E8E8E;
    }

    .pricing-helper a {
      color: #FFFFFF;
      text-decoration: underline;
      text-underline-offset: 4px;
      margin-left: 6px;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .pricing-helper a:hover {
      color: #F5C518;
    }

    .card-features {
      list-style: none;
      padding: 0;
      margin: 0 0 32px 0;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 24px;
    }

    .card-feature-item {
      font-size: 15px;
      color: #CCCCCC;
      line-height: 1.4;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    .card-feature-item strong {
      color: #FFFFFF;
    }

    .card-feature-bullet {
      color: #FFFFFF;
      font-weight: 700;
      flex-shrink: 0;
    }

    .card-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px 20px;
      background: transparent;
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      text-align: center;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
    }

    .card-btn:hover {
      background: #FFFFFF;
      color: #000000;
      border-color: #FFFFFF;
    }

    .pricing-card.featured .card-btn {
      background: #FFFFFF;
      color: #000000;
      border-color: #FFFFFF;
    }

    .pricing-card.featured .card-btn:hover {
      background: #e0e0e0;
      border-color: #e0e0e0;
    }

    /* Inclusions Feature Cards */
    .inclusions-section {
      margin: 48px 0 80px 0;
    }

    .inclusions-title {
      font-family: var(--font-merriweather, serif);
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 24px 0;
      text-align: center;
    }

    .inclusions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 20px;
    }

    .inclusion-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .inclusion-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.18);
    }

    .inclusion-icon {
      font-size: 24px;
      margin-bottom: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .inclusion-heading {
      font-family: var(--font-merriweather-sans, sans-serif);
      font-size: 16px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 8px 0;
      line-height: 1.3;
    }

    .inclusion-desc {
      font-size: 14px;
      color: #A0A0A0;
      line-height: 1.5;
      margin: 0;
    }

    .inclusions-extra-note {
      text-align: center;
      font-size: 14px;
      color: #8E8E8E;
      margin: 0;
      font-style: italic;
    }

    .info-section {
      margin-bottom: 80px;
    }

    /* Button */
    .contact-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 20px 68px;
      background-color: #FFFFFF;
      color: #000000;
      border: 1px solid #FFFFFF;
      text-decoration: none;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.5;
      transition: all 0.2s ease;
      margin-top: 24px;
      margin-bottom: 48px;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      cursor: pointer;
    }
    
    .contact-button:hover {
      background: #e0e0e0;
      border-color: #e0e0e0;
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

    .mobile-sticky-bar {
      display: none;
    }

    @media (max-width: 768px) {
      :host {
        padding-bottom: 80px;
      }

      h1 { font-size: 32px; }
      h2 { font-size: 24px; }
      h3 { font-size: 18px; }
      .description { font-size: 18px; }

      .pricing-grid {
        grid-template-columns: 1fr;
        gap: 28px;
      }

      .pricing-card {
        padding: 32px 20px;
      }

      .inclusions-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .inclusions-title, .inclusions-extra-note {
        text-align: left;
      }

      .accordion-header {
        padding: 18px 20px;
        font-size: 18px;
      }

      .accordion-content {
        padding: 0 20px 20px 20px;
        padding-top: 14px;
      }
      
      .instructor-section {
        padding: 24px;
        flex-direction: column;
        text-align: center;
      }

      .review-card {
        flex: 0 0 290px;
        padding: 22px 18px;
      }

      .gallery-wrapper {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -ms-overflow-style: none;  
        scrollbar-width: none;  
      }
      
      .gallery-wrapper::-webkit-scrollbar {
        display: none;
      }

      .gallery-track {
        height: 250px;
        padding: 0 16px;
      }

      .gallery-track img {
        scroll-snap-align: center;
      }

      .duplicate-for-marquee {
        display: none;
      }
      
      .contact-button { 
        width: 100%; 
        padding: 14px 24px;
        font-size: 16px;
        box-sizing: border-box;
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
        box-shadow: 0 -8px 28px rgba(0, 0, 0, 0.75);
      }

      .mobile-sticky-btn {
        width: 100%;
        box-sizing: border-box;
        background: #FFFFFF;
        color: #000000;
        font-size: 16px;
        font-weight: 700;
        padding: 16px 20px;
        border-radius: 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.3px;
        transition: background 0.2s ease, transform 0.1s ease;
        font-family: var(--font-merriweather-sans, sans-serif);
      }

      .mobile-sticky-btn:hover {
        background: #e0e0e0;
      }

      .mobile-sticky-btn:active {
        transform: scale(0.98);
      }
    }

    /* ==========================================================================
       Light Mode Overrides (Warm Japanese Ceramic Bisque Minimalist)
       ========================================================================== */
    :host([data-theme="light"]) h1,
    .light-mode h1,
    :host([data-theme="light"]) h2,
    .light-mode h2,
    :host([data-theme="light"]) h3,
    .light-mode h3 {
      color: #141414;
    }

    :host([data-theme="light"]) .description,
    .light-mode .description {
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

    :host([data-theme="light"]) .pricing-card,
    .light-mode .pricing-card {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.12);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    }

    :host([data-theme="light"]) .pricing-card:hover,
    .light-mode .pricing-card:hover {
      border-color: rgba(0, 0, 0, 0.28);
      background: #FFFFFF;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }

    :host([data-theme="light"]) .pricing-card.featured,
    .light-mode .pricing-card.featured {
      background: #FFFFFF;
      border: 2px solid #141414;
      box-shadow: 0 10px 36px rgba(0, 0, 0, 0.09);
    }

    :host([data-theme="light"]) .pricing-badge,
    .light-mode .pricing-badge {
      background: #141414;
      color: #FFFFFF;
    }

    :host([data-theme="light"]) .card-title,
    .light-mode .card-title,
    :host([data-theme="light"]) .card-price,
    .light-mode .card-price {
      color: #141414;
    }

    :host([data-theme="light"]) .card-ideal-for,
    .light-mode .card-ideal-for {
      color: #666666;
    }

    :host([data-theme="light"]) .card-features,
    .light-mode .card-features {
      border-top-color: rgba(0, 0, 0, 0.08);
    }

    :host([data-theme="light"]) .card-feature-item,
    .light-mode .card-feature-item {
      color: #444444;
    }

    :host([data-theme="light"]) .card-feature-item strong,
    .light-mode .card-feature-item strong,
    :host([data-theme="light"]) .card-feature-bullet,
    .light-mode .card-feature-bullet {
      color: #141414;
    }

    :host([data-theme="light"]) .card-btn,
    .light-mode .card-btn {
      color: #141414;
      border: 1.5px solid #141414;
      background: transparent;
    }

    :host([data-theme="light"]) .card-btn:hover,
    .light-mode .card-btn:hover {
      background: #141414;
      color: #FFFFFF;
      border-color: #141414;
    }

    :host([data-theme="light"]) .pricing-card.featured .card-btn,
    .light-mode .pricing-card.featured .card-btn {
      background: #141414;
      color: #FFFFFF;
      border-color: #141414;
    }

    :host([data-theme="light"]) .pricing-card.featured .card-btn:hover,
    .light-mode .pricing-card.featured .card-btn:hover {
      background: #333333;
      border-color: #333333;
    }

    :host([data-theme="light"]) .pricing-helper,
    .light-mode .pricing-helper {
      color: #666666;
    }

    :host([data-theme="light"]) .pricing-helper a,
    .light-mode .pricing-helper a {
      color: #141414;
    }

    :host([data-theme="light"]) .pricing-helper a:hover,
    .light-mode .pricing-helper a:hover {
      color: #C08A0A;
    }

    :host([data-theme="light"]) .inclusions-title,
    .light-mode .inclusions-title {
      color: #141414;
    }

    :host([data-theme="light"]) .inclusion-card,
    .light-mode .inclusion-card {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.08);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
    }

    :host([data-theme="light"]) .inclusion-card:hover,
    .light-mode .inclusion-card:hover {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.22);
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    }

    :host([data-theme="light"]) .inclusion-icon,
    .light-mode .inclusion-icon {
      background: #F4F1EC;
      border-color: rgba(0, 0, 0, 0.08);
    }

    :host([data-theme="light"]) .inclusion-heading,
    .light-mode .inclusion-heading {
      color: #141414;
    }

    :host([data-theme="light"]) .inclusion-desc,
    .light-mode .inclusion-desc {
      color: #555555;
    }

    :host([data-theme="light"]) .inclusions-extra-note,
    .light-mode .inclusions-extra-note {
      color: #777777;
    }

    :host([data-theme="light"]) .accordion-item,
    .light-mode .accordion-item {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    }

    :host([data-theme="light"]) .accordion-item:hover,
    .light-mode .accordion-item:hover {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.22);
    }

    :host([data-theme="light"]) .accordion-item[open],
    .light-mode .accordion-item[open] {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.28);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    }

    :host([data-theme="light"]) .accordion-header,
    .light-mode .accordion-header {
      color: #141414;
    }

    :host([data-theme="light"]) .accordion-icon,
    .light-mode .accordion-icon {
      color: #777777;
    }

    :host([data-theme="light"]) .accordion-item[open] .accordion-icon,
    .light-mode .accordion-item[open] .accordion-icon {
      color: #141414;
    }

    :host([data-theme="light"]) .accordion-content,
    .light-mode .accordion-content {
      border-top-color: rgba(0, 0, 0, 0.06);
    }

    :host([data-theme="light"]) .accordion-content p,
    .light-mode .accordion-content p,
    :host([data-theme="light"]) .accordion-content li,
    .light-mode .accordion-content li {
      color: #444444;
    }

    :host([data-theme="light"]) .accordion-content li strong,
    .light-mode .accordion-content li strong {
      color: #141414;
    }

    :host([data-theme="light"]) .instructor-section,
    .light-mode .instructor-section {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    }

    :host([data-theme="light"]) .instructor-label,
    .light-mode .instructor-label {
      color: #777777;
    }

    :host([data-theme="light"]) .instructor-bio,
    .light-mode .instructor-bio {
      color: #555555;
    }

    :host([data-theme="light"]) .review-card,
    .light-mode .review-card {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    }

    :host([data-theme="light"]) .review-card:hover,
    .light-mode .review-card:hover {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.22);
    }

    :host([data-theme="light"]) .review-tag,
    .light-mode .review-tag {
      color: #666666;
      background: #F4F1EC;
    }

    :host([data-theme="light"]) .review-text,
    .light-mode .review-text {
      color: #444444;
    }

    :host([data-theme="light"]) .review-author,
    .light-mode .review-author {
      border-top-color: rgba(0, 0, 0, 0.06);
    }

    :host([data-theme="light"]) .review-avatar,
    .light-mode .review-avatar {
      background: #EDEAE4;
      border-color: rgba(0, 0, 0, 0.1);
      color: #141414;
    }

    :host([data-theme="light"]) .review-name,
    .light-mode .review-name {
      color: #141414;
    }

    :host([data-theme="light"]) .review-verified,
    .light-mode .review-verified {
      color: #888888;
    }

    :host([data-theme="light"]) .stars,
    .light-mode .stars {
      color: #D99E10;
    }

    :host([data-theme="light"]) .reviews-track,
    .light-mode .reviews-track {
      scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
    }

    :host([data-theme="light"]) .reviews-track::-webkit-scrollbar-thumb,
    .light-mode .reviews-track::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.18);
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

    :host([data-theme="light"]) .map-container,
    .light-mode .map-container {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 768px) {
      :host([data-theme="light"]) .mobile-sticky-bar,
      .mobile-sticky-bar.light-mode {
        background: rgba(251, 249, 245, 0.95);
        border-top-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 -8px 28px rgba(0, 0, 0, 0.08);
      }

      :host([data-theme="light"]) .mobile-sticky-btn,
      .mobile-sticky-bar.light-mode .mobile-sticky-btn {
        background: #141414;
        color: #FFFFFF;
      }

      :host([data-theme="light"]) .mobile-sticky-btn:hover,
      .mobile-sticky-bar.light-mode .mobile-sticky-btn:hover {
        background: #333333;
      }
    }
  `;

  render() {
    const isLight = this.theme === 'light';

    return html`
      <div class="course-content-column ${isLight ? 'light-mode' : ''}">
        <a href="/classes.html" class="back-link">&larr; Back to courses</a>
      <h1>Handbuilding Classes</h1>
      <p class="description">
        Studio Genki is a place for aspiring potters and people who take the craft seriously.
      </p>
      <p class="description">
        An introduction to handbuilding ceramics. Learn to make functional and decorative forms without the potter's wheel. No prior experience or artistic background is required.
      </p>

      <div class="pricing-grid">
        <!-- Explore (6 Sessions) -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">Explore</h3>
            <div class="card-price">₹9,900</div>
            <p class="card-ideal-for">Best for beginners wanting a hands-on intro to clay sculpting and hand-formed pieces.</p>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>6 Sessions</strong> (18 hrs total)</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Prerequisite:</strong> None</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>2 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Validity:</strong> 3 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span>Flexible scheduling across all days</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Explore%20(6%20sessions)%20handbuilding%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Explore</a>
        </div>

        <!-- Foundation (10 Sessions - Featured) -->
        <div class="pricing-card featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="card-header">
            <h3 class="card-title">Foundation</h3>
            <div class="card-price">₹16,500</div>
            <p class="card-ideal-for">Best for building coil, slab, and pinch technique mastery and surface texturing.</p>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>10 Sessions</strong> (30 hrs total)</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Prerequisite:</strong> None</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>5 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Validity:</strong> 5 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span>Flexible scheduling across all days</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Foundation%20(10%20sessions)%20handbuilding%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Foundation</a>
        </div>

        <!-- Intensive (20 Sessions) -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">Intensive</h3>
            <div class="card-price">₹33,000</div>
            <p class="card-ideal-for">Best for establishing an independent workflow and setting up your own studio practice.</p>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>20 Sessions</strong> (60 hrs guided instruction)</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Unlimited free studio practice</strong> within validity</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Prerequisite:</strong> Beginner course required</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>10 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Validity:</strong> 8 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span>Flexible scheduling across all days</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Intensive%20(20%20sessions)%20handbuilding%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Intensive</a>
        </div>
      </div>

      <div class="pricing-helper">
        <span>Not sure which package fits your schedule?</span>
        <a href="https://wa.me/917373074962?text=Hi%20Koushik%2C%20I'm%20not%20sure%20which%20handbuilding%20package%20suits%20me%20best.%20Could%20you%20help%20me%20decide%3F" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp &rarr;</a>
      </div>

      <div class="inclusions-section">
        <h2 class="inclusions-title">All packages include</h2>
        <div class="inclusions-grid">
          <div class="inclusion-card">
            <div class="inclusion-icon">🏺</div>
            <div class="inclusion-heading">Handbuilding Fundamentals</div>
            <p class="inclusion-desc">Master pinching, coiling, slab construction, surface texture carving, and functional joins (handles, spouts).</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">🛠️</div>
            <div class="inclusion-heading">Full Studio Access</div>
            <p class="inclusion-desc">Unlimited practice clay, sculpting tools, wooden modeling ribs, texture mats, and clean studio aprons.</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">🔥</div>
            <div class="inclusion-heading">Firings & Glazing</div>
            <p class="inclusion-desc">Understand drying, bisque firing, and glaze application. Professional firings included for your quota of pieces.</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">👥</div>
            <div class="inclusion-heading">1-on-1 Guidance</div>
            <p class="inclusion-desc">Small batch studio setting (max 3 students per slot) providing dedicated attention suited to your pace and creative ideas.</p>
          </div>
        </div>
        <p class="inclusions-extra-note">* Additional pieces beyond your package quota can be fired at ₹1,000 / kg.</p>
      </div>

      <div class="gallery-wrapper">
        <div class="gallery-track">
          <!-- Primary images (loads from the array above) -->
          ${this.galleryImages.map(img => html`
            <img src="/classes-gallery/${img}" alt="Handbuilding Pottery Gallery" onerror="this.style.width='300px'" />
          `)}
          
          <!-- Duplicated for desktop marquee loop -->
          ${this.galleryImages.map(img => html`
            <img src="/classes-gallery/${img}" alt="Handbuilding Pottery Gallery" class="duplicate-for-marquee" onerror="this.style.width='300px'" />
          `)}
        </div>
      </div>

      <div class="instructor-section">
        <img src="/profile-picture.png" alt="Koushik Murali" class="instructor-image" />
        <div class="instructor-info">
          <p class="instructor-label">Your instructor</p>
          <h2>Koushik Murali</h2>
          <p class="instructor-bio">Koushik Murali is a studio potter and designer. He has spent the last 4 years working with clay and understanding the complex material. He runs the studio full-time and is looking forward to sharing his knowledge and helping you on your clay journey.</p>
        </div>
      </div>

      <h2>What students say</h2>
      <div class="reviews-carousel">
        <div class="reviews-track">
          <div class="review-card">
            <div class="review-card-top">
              <span class="stars">★★★★★</span>
              <span class="review-tag">10 Sessions</span>
            </div>
            <p class="review-text">"Have recently taken a 10 day course on pottery from this studio. The classes are really informative and insightful and taught so well by Koushik. Its a must for those looking to learn pottery. The best in terms of clarity, technique, creativity and also exposure."</p>
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
              <span class="review-tag">10 Sessions</span>
            </div>
            <p class="review-text">"Had an opportunity to attend 10 days of pottery classes. It was an amazing experience and to mentally rewire our minds into the world of creation. Koushik patiently teaches the techniques and answers all our doubts. Anyone wishing to have an experience in creating things out of clay can definitely step into STUDIO GENKI."</p>
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
              <span class="review-tag">30-day Pass</span>
            </div>
            <p class="review-text">"I recently took the 30 day pottery class at Studio Genki and it was one of the best decisions ever. Koushik was a great instructor and was very patient with me throughout the class. He knew when to step in and when to let me figure out on my own. Highly recommend :)"</p>
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

      <h2>FAQ</h2>
      <div class="accordion-group">
        <details class="accordion-item">
          <summary class="accordion-header">
            <span>Schedule & Timings</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li><strong>Dates:</strong> On-going regular classes</li>
              <li><strong>Days:</strong> All days (flexible scheduling across weekdays and weekends)</li>
              <li><strong>Daily Time Slots:</strong>
                <ul class="sub-list">
                  <li>Morning: 10:00 AM – 1:00 PM</li>
                  <li>Afternoon: 2:00 PM – 5:00 PM</li>
                  <li>Evening: 5:30 PM – 8:30 PM</li>
                </ul>
              </li>
              <li><strong>Duration:</strong> 3 hours per session</li>
              <li><strong>Batch Size:</strong> Strictly capped at 3 students per slot for personalized attention</li>
            </ul>
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">
            <span>Studio Policies & Validity</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li><strong>Validity periods:</strong> 3 weeks for Explore (6 sessions), 5 weeks for Foundation (10 sessions), and 8 weeks for Intensive (20 sessions).</li>
              <li><strong>Unlimited studio practice:</strong> Intensive course students receive unlimited free studio practice access within their 8-week validity period to establish an independent workflow and practice rhythm.</li>
              <li>All sessions must be completed within your designated pass validity period unless a reschedule is initiated by the studio due to production work or official holidays.</li>
              <li>Glaze completion: Within one week following your final session.</li>
              <li>Finished articles must be collected within the designated pick-up window communicated by the studio. Articles will not be retained or saved in the studio beyond the pick-up deadline.</li>
            </ul>
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">
            <span>Can I reschedule if I miss a class?</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <p>Yes. As long as you inform us at least 24 hours in advance, you can reschedule your session to any open slot within your package validity period.</p>
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">
            <span>Can two people share a single package?</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <p>Packages are strictly individual and non-transferable. Handbuilding and clay forming relies on continuous skill progression and personalized instruction across the sequence.</p>
          </div>
        </details>
      </div>

      <div class="info-section">
        <h2>Directions</h2>
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.342810426298!2d77.0667372865575!3d11.050664523413825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857740d223e7b%3A0xa10dd35b49e304ba!2sStudio%20Genki%3A%20Pottery%20Studio!5e0!3m2!1sen!2sin!4v1786421043892!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

      <div class="info-section">
        <h2>Ready to start?</h2>
        <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20handbuilding%20course" target="_blank" rel="noopener noreferrer" class="contact-button">Reserve Your Spot</a>
      </div>
    </div>

      <!-- Sticky Mobile Enquiry Bar -->
      <div class="mobile-sticky-bar ${isLight ? 'light-mode' : ''}">
        <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20know%20more%20about%20the%20handbuilding%20pottery%20classes" 
           target="_blank" rel="noopener noreferrer" class="mobile-sticky-btn">
          Enquire on WhatsApp
        </a>
      </div>
    `;
  }
}

customElements.define('handbuilding-class-content', HandbuildingClassContent);
