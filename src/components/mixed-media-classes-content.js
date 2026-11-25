import { LitElement, html, css } from 'lit';

export class MixedMediaClassesContent extends LitElement {
  static properties = {
    theme: { type: String, state: true }
  };

  constructor() {
    super();
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
      margin: 0 0 16px 0;
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

    .disciplines-subtitle {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #FFD700;
      margin-bottom: 12px;
    }

    .description {
      font-size: 20px;
      line-height: 1.6;
      color: #B9B9B9;
      margin-bottom: 24px;
      font-family: var(--font-merriweather, 'Merriweather', serif);
    }

    /* Top Information Cards */
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .info-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
    }

    .info-card-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #FFD700;
    }

    .info-card-value {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 20px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.3;
    }

    .info-card-sub {
      font-size: 14px;
      color: #B9B9B9;
      line-height: 1.4;
      margin: 0;
    }

    /* CTA Bar */
    .cta-bar {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 14px;
      padding: 24px 28px;
      margin: 0 0 48px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .fee-info {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .fee-headline {
      display: flex;
      align-items: baseline;
      gap: 12px;
      flex-wrap: wrap;
    }

    .fee-amount {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 26px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 0.5px;
    }

    .fee-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 215, 0, 0.12);
      color: #FFD700;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .fee-desc {
      font-size: 14px;
      color: #B9B9B9;
      margin: 0;
      font-style: italic;
    }

    .contact-button {
      display: inline-block;
      padding: 15px 32px;
      background-color: #FFFFFF;
      color: #000000;
      border: 1px solid #FFFFFF;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      transition: all 0.2s ease;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      border-radius: 8px;
      white-space: nowrap;
      text-align: center;
    }

    .contact-button:hover {
      background-color: #E0E0E0;
      border-color: #E0E0E0;
      transform: translateY(-1px);
    }

    /* Curriculum / Learning Areas Section */
    .curriculum-section {
      margin-bottom: 56px;
    }

    .section-intro {
      font-size: 17px;
      line-height: 1.6;
      color: #B9B9B9;
      margin: -12px 0 28px 0;
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
      transition: border-color 0.2s ease;
    }

    .curriculum-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
    }

    .card-top {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .card-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .week-badge {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #FFD700;
      background: rgba(255, 215, 0, 0.1);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .session-count {
      font-size: 13px;
      color: #B9B9B9;
    }

    .card-title {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 4px 0 0 0;
    }

    .session-details {
      list-style: none;
      padding: 0;
      margin: 4px 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .session-details li {
      font-size: 15px;
      line-height: 1.5;
      color: #D1D1D1;
      padding-left: 16px;
      position: relative;
    }

    .session-details li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #FFD700;
    }

    .session-details strong {
      color: #FFFFFF;
      font-weight: 600;
    }

    .card-tag {
      margin-top: 20px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 13px;
      color: #B9B9B9;
      font-style: italic;
    }

    .card-tag.highlight {
      color: #FFD700;
      font-style: normal;
      font-weight: 600;
    }

    /* Banner (90-Min Class Structure) */
    .structure-banner {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 215, 0, 0.25);
      border-radius: 12px;
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .structure-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .glazing-badge {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #FFD700;
      background: rgba(255, 215, 0, 0.12);
      padding: 4px 10px;
      border-radius: 6px;
      display: inline-block;
    }

    .structure-banner h3 {
      margin: 0;
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 20px;
    }

    .structure-steps {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
    }

    .structure-step {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .step-time {
      font-size: 13px;
      font-weight: 700;
      color: #FFD700;
    }

    .step-name {
      font-size: 14px;
      line-height: 1.4;
      color: #D1D1D1;
    }

    /* 4-Card Highlights Grid */
    .inclusions-section {
      margin-bottom: 56px;
    }

    .inclusions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .inclusion-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .inclusion-icon {
      font-size: 24px;
      line-height: 1;
    }

    .inclusion-heading {
      font-size: 16px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .inclusion-desc {
      font-size: 14px;
      line-height: 1.5;
      color: #B9B9B9;
      margin: 0;
    }

    /* Instructor */
    .instructor-section {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 12px;
      margin-bottom: 56px;
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

    /* Accordion / FAQ */
    .accordion-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 48px;
    }

    .accordion-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
      transition: border-color 0.2s ease;
    }

    .accordion-item:hover {
      border-color: rgba(255, 255, 255, 0.25);
    }

    .accordion-header {
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      list-style: none;
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 600;
      font-size: 17px;
      color: #FFFFFF;
      user-select: none;
    }

    .accordion-header::-webkit-details-marker {
      display: none;
    }

    .accordion-icon {
      font-size: 20px;
      color: #B9B9B9;
      transition: transform 0.2s ease;
      line-height: 1;
    }

    details[open] .accordion-icon {
      transform: rotate(45deg);
    }

    .accordion-content {
      padding: 0 24px 20px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 16px;
    }

    .accordion-content p {
      font-size: 15px;
      line-height: 1.7;
      color: #B9B9B9;
      margin: 0 0 10px 0;
    }

    .accordion-content p:last-child {
      margin-bottom: 0;
    }

    .accordion-content ul {
      list-style: disc;
      padding-left: 20px;
      margin: 0;
    }

    .accordion-content li {
      font-size: 15px;
      line-height: 1.7;
      color: #B9B9B9;
      margin-bottom: 8px;
    }

    .accordion-content li:last-child {
      margin-bottom: 0;
    }

    .info-section {
      margin-bottom: 48px;
    }

    .map-container {
      margin-top: 16px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mobile-sticky-bar {
      display: none;
    }

    @media (max-width: 900px) {
      .info-cards-grid {
        grid-template-columns: 1fr;
      }

      .curriculum-grid {
        grid-template-columns: 1fr;
      }

      .structure-steps {
        grid-template-columns: 1fr;
      }

      .inclusions-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .cta-bar {
        flex-direction: column;
        align-items: flex-start;
      }

      .contact-button {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      :host {
        padding-bottom: 72px;
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 24px;
      }

      .description {
        font-size: 18px;
      }

      .inclusions-grid {
        grid-template-columns: 1fr;
      }

      .instructor-section {
        flex-direction: column;
        text-align: center;
        padding: 24px;
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
    :host([data-theme="light"]) .fee-desc {
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
    :host([data-theme="light"]) .structure-banner,
    .light-mode .structure-banner,
    :host([data-theme="light"]) .structure-step,
    .light-mode .structure-step,
    :host([data-theme="light"]) .inclusion-card,
    .light-mode .inclusion-card,
    :host([data-theme="light"]) .instructor-section,
    .light-mode .instructor-section,
    :host([data-theme="light"]) .accordion-item,
    .light-mode .accordion-item {
      background: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    }

    :host([data-theme="light"]) .info-card:hover,
    .light-mode .info-card:hover,
    :host([data-theme="light"]) .curriculum-card:hover,
    .light-mode .curriculum-card:hover,
    :host([data-theme="light"]) .accordion-item:hover,
    .light-mode .accordion-item:hover {
      border-color: rgba(0, 0, 0, 0.22);
    }

    :host([data-theme="light"]) .info-card-label,
    .light-mode .info-card-label,
    :host([data-theme="light"]) .disciplines-subtitle,
    .light-mode .disciplines-subtitle,
    :host([data-theme="light"]) .week-badge,
    .light-mode .week-badge,
    :host([data-theme="light"]) .glazing-badge,
    .light-mode .glazing-badge,
    :host([data-theme="light"]) .fee-badge,
    .light-mode .fee-badge,
    :host([data-theme="light"]) .step-time,
    .light-mode .step-time {
      color: #996515;
      background: rgba(184, 134, 11, 0.12);
    }

    :host([data-theme="light"]) .info-card-label,
    :host([data-theme="light"]) .disciplines-subtitle,
    :host([data-theme="light"]) .step-time {
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
    :host([data-theme="light"]) .step-name,
    .light-mode .step-name,
    :host([data-theme="light"]) .inclusion-desc,
    .light-mode .inclusion-desc,
    :host([data-theme="light"]) .instructor-bio,
    .light-mode .instructor-bio,
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
    :host([data-theme="light"]) .accordion-header,
    .light-mode .accordion-header {
      color: #141414;
    }

    :host([data-theme="light"]) .card-tag,
    .light-mode .card-tag,
    :host([data-theme="light"]) .accordion-content,
    .light-mode .accordion-content {
      border-top-color: rgba(0, 0, 0, 0.06);
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

        <h1>Sunday Mixed Media Art Classes</h1>
        <p class="description">
          Learn painting, clay modeling and paper/texture work. Kid-friendly and beginner friendly.
        </p>

        <!-- Top Information Cards -->
        <div class="info-cards-grid">
          <div class="info-card">
            <span class="info-card-label">Schedule</span>
            <div class="info-card-value">Every Sunday</div>
            <p class="info-card-sub">Once a week · 2 Hours</p>
          </div>

          <div class="info-card">
            <span class="info-card-label">Age Group</span>
            <div class="info-card-value">10 Years & Above</div>
            <p class="info-card-sub">10+ · Tailored guidance for 10–12, 13–17 & 18+ years</p>
          </div>

          <div class="info-card">
            <span class="info-card-label">Level & Approach</span>
            <div class="info-card-value">Beginner to Intermediate</div>
            <p class="info-card-sub">Demonstration and hands-on practical learning</p>
          </div>
        </div>

        <!-- Price & Action Bar -->
        <div class="cta-bar">
          <div class="fee-info">
            <div class="fee-headline">
              <span class="fee-amount">Rs. 5,000 / month</span>
            </div>
          </div>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20enquire%20about%20the%20Sunday%20Mixed%20Media%20Art%20Classes"
             target="_blank" rel="noopener noreferrer" class="contact-button">
            Enquire / Reserve Spot
          </a>
        </div>

        <!-- Symmetrical 2x2 Grid: Learning Areas & Age-Appropriate Approach -->
        <div class="curriculum-section">
          <h2>Learning Areas & Approach</h2>
          <p class="section-intro">
            Three core disciplines—Painting, Ceramic Art, and Craft—with theme-based projects adjusted to each learner's age, interests, and skill level.
          </p>

          <div class="curriculum-grid">
            <!-- Card 1: Painting and Drawing -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Area A</span>
                  <span class="session-count">2D Visual Arts</span>
                </div>
                <div class="card-title">Painting & Drawing</div>
                <ul class="session-details">
                  <li>Basic drawing and sketching</li>
                  <li>Colour theory &amp; texture exploration</li>
                  <li>Watercolour and acrylic painting</li>
                  <li>Composition and visual elements</li>
                  <li>Still-life, landscape and abstract painting</li>
                </ul>
              </div>
              <div class="card-tag">Foundations to expressive compositions.</div>
            </div>

            <!-- Card 2: Ceramic Art and Clay Modelling -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Area B</span>
                  <span class="session-count">3D Clay Practice</span>
                </div>
                <div class="card-title">Ceramic Art & Clay Modelling</div>
                <ul class="session-details">
                  <li>Clay preparation and hand-building techniques</li>
                  <li>Pinch pot, coil techniques &amp; clay modelling</li>
                  <li>Making mugs, plates and bowls</li>
                  <li>Ceramic decoration and underglaze painting</li>
                  <li>Functional and decorative ceramic art</li>
                </ul>
              </div>
              <div class="card-tag highlight">Hands-on functional &amp; decorative ceramics.</div>
            </div>

            <!-- Card 3: Craft -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Area C</span>
                  <span class="session-count">Mixed Media</span>
                </div>
                <div class="card-title">Craft & Material Exploration</div>
                <ul class="session-details">
                  <li>Collage and paper craft</li>
                  <li>Texture exploration &amp; recycled material art</li>
                  <li>Material experimentation</li>
                  <li>Combining different art materials</li>
                  <li>Relief and surface-based artwork</li>
                </ul>
              </div>
              <div class="card-tag">Multi-material creativity &amp; surface design.</div>
            </div>

            <!-- Card 4: Age-Appropriate Teaching Approach -->
            <div class="curriculum-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span class="week-badge">Age Groups</span>
                  <span class="session-count">10+ Years</span>
                </div>
                <div class="card-title">Age-Appropriate Approach</div>
                <ul class="session-details">
                  <li><strong>10–12 Years:</strong> Creative drawing, painting techniques, colour exploration and basic clay projects.</li>
                  <li><strong>13–17 Years:</strong> Advanced techniques, composition, material exploration and independent projects.</li>
                  <li><strong>18+ Years:</strong> Personal expression, detailed artwork, experimental techniques and independent projects.</li>
                </ul>
              </div>
              <div class="card-tag highlight">Same theme adapted to age, interests &amp; skill level.</div>
            </div>
          </div>

          <!-- 2-Hour Class Structure Banner -->
          <div class="structure-banner">
            <div class="structure-header">
              <div>
                <span class="glazing-badge">2 Hours Total</span>
                <h3 style="margin-top: 8px;">Class Structure (Every Sunday)</h3>
              </div>
            </div>
            <div class="structure-steps">
              <div class="structure-step">
                <span class="step-time">10 min</span>
                <span class="step-name">1. Introduction &amp; Concept Discussion</span>
              </div>
              <div class="structure-step">
                <span class="step-time">15 min</span>
                <span class="step-name">2. Educator Demonstration</span>
              </div>
              <div class="structure-step">
                <span class="step-time">80 min</span>
                <span class="step-name">3. Hands-on Practical Activity</span>
              </div>
              <div class="structure-step">
                <span class="step-time">10 min</span>
                <span class="step-name">4. Individual Guidance</span>
              </div>
              <div class="structure-step">
                <span class="step-time">5 min</span>
                <span class="step-name">5. Artwork Presentation &amp; Feedback</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Symmetrical 4-Card Highlights -->
        <div class="inclusions-section">
          <h2>Programme Highlights</h2>
          <div class="inclusions-grid">
            <div class="inclusion-card">
              <div class="inclusion-icon">🎨</div>
              <div class="inclusion-heading">3 Core Disciplines</div>
              <p class="inclusion-desc">Painting, Ceramic Art, and Mixed Media in a beginner-friendly, supportive environment.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">🛠️</div>
              <div class="inclusion-heading">Practical &amp; Activity-Based</div>
              <p class="inclusion-desc">Weekly Sunday 2-hour sessions built around educator demonstrations and hands-on practice.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">✨</div>
              <div class="inclusion-heading">Individual Freedom</div>
              <p class="inclusion-desc">Personal attention, creative freedom, and opportunities to explore your own artistic interests.</p>
            </div>

            <div class="inclusion-card">
              <div class="inclusion-icon">🖼️</div>
              <div class="inclusion-heading">Personal Portfolio</div>
              <p class="inclusion-desc">Exposure to traditional and contemporary art techniques while building a personal art portfolio.</p>
            </div>
          </div>
        </div>

        <!-- Instructor -->
        <div class="instructor-section">
          <img src="/karthik-profile.jpg" alt="Karthik Subramanian" class="instructor-image" />
          <div class="instructor-info">
            <p class="instructor-label">Your instructor</p>
            <h2>Karthik Subramanian</h2>
            <p class="instructor-bio">Karthik Subramanian holds an MFA from the Government College of Arts, Chennai, and brings 10 years of experience in sculpting and art education. He specializes in miniature forms and detail-oriented craftsmanship.</p>
          </div>
        </div>

        <!-- FAQ / Programme Details Accordion -->
        <h2>Programme Details & Outcomes</h2>
        <div class="accordion-group">
          <details class="accordion-item" open>
            <summary class="accordion-header">
              <span>Teaching Methodology</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li>Theme-based learning</li>
                <li>Educator demonstrations</li>
                <li>Hands-on practical sessions</li>
                <li>Individual guidance</li>
                <li>Creative experimentation</li>
                <li>Exploration of different materials and techniques</li>
                <li>Artwork presentation and feedback</li>
                <li>Independent creative projects</li>
              </ul>
            </div>
          </details>

          <details class="accordion-item">
            <summary class="accordion-header">
              <span>Expected Learning Outcomes</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li>Understand different art techniques and materials.</li>
                <li>Develop drawing, painting and clay modelling skills.</li>
                <li>Experiment with different art mediums.</li>
                <li>Create original and creative artworks.</li>
                <li>Improve observation and visual expression.</li>
                <li>Develop composition and design skills.</li>
                <li>Present and explain artwork confidently.</li>
                <li>Build a personal art portfolio.</li>
              </ul>
            </div>
          </details>

          <details class="accordion-item">
            <summary class="accordion-header">
              <span>Programme Overview &amp; Summary</span>
              <span class="accordion-icon">+</span>
            </summary>
            <div class="accordion-content">
              <ul>
                <li><strong>Programme Name:</strong> Sunday Mixed Media Art Classes</li>
                <li><strong>Age Eligibility:</strong> 10 Years and Above (10+)</li>
                <li><strong>Class Day &amp; Frequency:</strong> Every Sunday (Once a week)</li>
                <li><strong>Class Duration:</strong> 2 Hours</li>
                <li><strong>Fee:</strong> Rs. 5,000 per month</li>
                <li><strong>Learning Level:</strong> Beginner to Intermediate</li>
                <li><strong>Art Disciplines:</strong> Painting, Ceramic Art and Mixed Media</li>
                <li><strong>Teaching Method:</strong> Demonstration and Practical Learning</li>
              </ul>
              <p style="margin-top: 12px;">Sunday Mixed Media Art Classes provide an opportunity for learners aged 10 years and above to explore different art forms, develop practical skills and express their creativity in a supportive creative environment.</p>
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
          <h2>Ready to create?</h2>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20enquire%20about%20the%20Sunday%20Mixed%20Media%20Art%20Classes" target="_blank" rel="noopener noreferrer" class="contact-button" style="margin-top: 16px;">Enquire on WhatsApp</a>
        </div>
      </div>

      <!-- Sticky Mobile Bar -->
      <div class="mobile-sticky-bar ${isLight ? 'light-mode' : ''}">
        <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20enquire%20about%20the%20Sunday%20Mixed%20Media%20Art%20Classes"
           target="_blank" rel="noopener noreferrer" class="mobile-sticky-btn">
          Enquire on WhatsApp
        </a>
      </div>
    `;
  }
}

customElements.define('mixed-media-classes-content', MixedMediaClassesContent);

