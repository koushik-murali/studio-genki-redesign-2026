import { LitElement, html, css } from 'lit';

export class PotteryClassesContent extends LitElement {
  static properties = {
    galleryImages: { type: Array }
  };

  constructor() {
    super();
    // Edit this array to add, remove, or rename gallery images
    this.galleryImages = [
      '01.png',
      '02.png',
      '03.png',
      '04.png'
    ];
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

    .accordion-content ul {
      list-style-type: disc;
      padding-left: 20px;
      margin: 0;
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
      background-color: #222; /* Placeholder background */
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

    /* Reviews section */
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-bottom: 96px;
    }
    
    .review-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .review-text {
      color: #B9B9B9;
      font-style: italic;
      line-height: 1.6;
      margin: 0 0 24px 0;
      font-size: 16px;
    }
    
    .review-author {
      font-weight: 600;
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .stars {
      color: #F5C518;
      font-size: 18px;
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
      margin-bottom: 6px;
    }

    .card-subtext {
      font-size: 14px;
      color: #8E8E8E;
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

    .info-list {
      list-style-type: disc;
      padding-left: 24px;
      margin: 0;
    }

    .info-list li {
      font-size: 18px;
      line-height: 1.8;
      color: #B9B9B9;
      margin-bottom: 8px;
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

    @media (max-width: 768px) {
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
      .instructor-section, .review-card {
        padding: 24px;
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

      .instructor-section {
        flex-direction: column;
        text-align: center;
      }
      
      .contact-button { 
        width: 100%; 
        padding: 14px 24px;
        font-size: 16px;
        box-sizing: border-box;
      }
    }
  `;

  render() {
    return html`
      <a href="/classes.html" class="back-link">&larr; Back to courses</a>
      <h1>Wheel Throwing Classes</h1>
      <p class="description">
        Studio Genki is a place for aspiring potters and people who take the craft seriously.
      </p>
      <p class="description">
        Our wheel throwing classes are designed as an introduction to wheel throwing and ceramics. No prior experience or artistic background is required.
      </p>

      <div class="pricing-grid">
        <!-- Explore (6 Sessions) -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">Explore</h3>
            <div class="card-price">₹9,900</div>
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
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Explore%20(6%20sessions)%20wheel%20throwing%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Explore</a>
        </div>

        <!-- Foundation (10 Sessions - Featured) -->
        <div class="pricing-card featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="card-header">
            <h3 class="card-title">Foundation</h3>
            <div class="card-price">₹16,500</div>
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
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Foundation%20(10%20sessions)%20wheel%20throwing%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Foundation</a>
        </div>

        <!-- Intensive (20 Sessions) -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">Intensive</h3>
            <div class="card-price">₹33,000</div>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>20 Sessions</strong> (60 hrs total)</span>
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
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20Intensive%20(20%20sessions)%20wheel%20throwing%20course" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose Intensive</a>
        </div>
      </div>

      <div class="inclusions-section">
        <h2 class="inclusions-title">All packages include</h2>
        <div class="inclusions-grid">
          <div class="inclusion-card">
            <div class="inclusion-icon">🏺</div>
            <div class="inclusion-heading">Wheel Fundamentals</div>
            <p class="inclusion-desc">Learn clay preparation, centering, pulling cylinders & bowls, trimming foot rings, and attaching handles.</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">🛠️</div>
            <div class="inclusion-heading">Full Studio & Wheel Access</div>
            <p class="inclusion-desc">Your own dedicated electric wheel, unlimited clay for practice, complete trimming tools, and clean aprons.</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">🔥</div>
            <div class="inclusion-heading">Firings & Glazing</div>
            <p class="inclusion-desc">Understand the entire firing cycle. Bisque and food-safe glaze firings included for your quota of finished pieces.</p>
          </div>

          <div class="inclusion-card">
            <div class="inclusion-icon">👥</div>
            <div class="inclusion-heading">1-on-1 Guidance</div>
            <p class="inclusion-desc">Intimate studio format (max 4 students per session) with personalized instruction suited to your pace.</p>
          </div>
        </div>
        <p class="inclusions-extra-note">* Additional pieces beyond your package quota can be fired at ₹1,000 / kg.</p>
      </div>

      <div class="gallery-wrapper">
        <div class="gallery-track">
          <!-- Primary images (loads from the array above) -->
          ${this.galleryImages.map(img => html`
            <img src="/classes-gallery/${img}" alt="Pottery Class Gallery" onerror="this.style.width='300px'" />
          `)}
          
          <!-- Duplicated for desktop marquee loop -->
          ${this.galleryImages.map(img => html`
            <img src="/classes-gallery/${img}" alt="Pottery Class Gallery" class="duplicate-for-marquee" onerror="this.style.width='300px'" />
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
      <div class="reviews-grid">
        <div class="review-card">
          <p class="review-text">"Have recently taken a 10 day course on pottery from this studio. The classes are really informative and insightful and taught so well by Koushik. Its a must for those looking to learn pottery. The best in terms of clarity, technique, creativity and also exposure."</p>
          <div class="review-author">
            <span>Afshan</span>
            <span class="stars">★★★★</span>
          </div>
        </div>
        <div class="review-card">
          <p class="review-text">"Had an opportunity to attend 10 days of pottery classes on wheel throwing. It was an amazing experience and to mentally rewire our minds into the world of creation. Koushik patiently teaches the techniques and answers all our doubts. Anyone wishing to have an experience in creating things out of clay can definitely step into STUDIO GENKI and enjoy the experience."</p>
          <div class="review-author">
            <span>Priya</span>
            <span class="stars">★★★★★</span>
          </div>
        </div>
        <div class="review-card">
          <p class="review-text">"I recently took the 30 day pottery class at Studio Genki and it was one of the best decisions ever. Koushik was a great instructor and was very patient with me throughout the class. He knew when to step in and when to let me figure out on my own. Highly recommend :)"</p>
          <div class="review-author">
            <span>Dharani</span>
            <span class="stars">★★★★★</span>
          </div>
        </div>
      </div>

      <div class="accordion-group">
        <details class="accordion-item">
          <summary class="accordion-header">
            <span>Schedule & Timings</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li><strong>Dates:</strong> On-going regular classes</li>
              <li><strong>Days:</strong> All days (flexible scheduling)</li>
              <li><strong>Duration:</strong> 3 hours per session</li>
              <li>Clean-up after classes is mandatory</li>
            </ul>
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">
            <span>What to prepare</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <ul>
              <li>Wear comfortable clothes you don't mind getting dirty.</li>
              <li>Bring a hand towel for personal use.</li>
              <li>Keep your fingernails trimmed short for the best experience on the wheel.</li>
              <li>Bring some snacks if you feel necessary.</li>
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
              <li>All sessions must be completed within your designated pass validity period unless a reschedule is initiated by the studio due to production work or official holidays.</li>
              <li>Glaze completion: Within one week following your final session.</li>
              <li>Finished articles must be collected within the designated pick-up window communicated by the studio. Articles will not be retained or saved in the studio beyond the pick-up deadline.</li>
            </ul>
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
        <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20wheel%20throwing%20course" target="_blank" rel="noopener noreferrer" class="contact-button">Reserve Your Spot</a>
      </div>
    `;
  }
}

customElements.define('pottery-classes-content', PotteryClassesContent);
