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

    /* Features list */
    .features-list {
      list-style-type: disc;
      padding-left: 24px;
      margin-bottom: 80px;
    }
    
    .features-list li {
      margin-bottom: 32px;
      color: #FFFFFF;
    }
    
    .features-list p {
      color: #B9B9B9;
      line-height: 1.6;
      margin: 0;
      font-size: 18px;
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

    .packages-footer-note {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 64px;
      font-size: 15px;
      color: #B9B9B9;
      line-height: 1.6;
    }

    .packages-footer-note h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
      color: #FFFFFF;
      font-weight: 600;
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

      <p class="subtitle" style="margin-bottom: 20px; color: #F5C518; font-weight: 600;">Only 6 spots left.</p>

      <div class="pricing-grid">
        <!-- 6 Sessions -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">6 Sessions</h3>
            <div class="card-price">₹9,900</div>
            <div class="card-subtext">₹1,650 / session</div>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>2 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekday Pass:</strong> Valid for 2 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekend Pass:</strong> Valid for 3 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>3 hours</strong> per session (18 hrs total)</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%206%20sessions%20wheel%20throwing%20package" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose 6 Sessions</a>
        </div>

        <!-- 10 Sessions (Featured) -->
        <div class="pricing-card featured">
          <div class="pricing-badge">Most Popular</div>
          <div class="card-header">
            <h3 class="card-title">10 Sessions</h3>
            <div class="card-price">₹16,500</div>
            <div class="card-subtext">₹1,650 / session</div>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>5 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekday Pass:</strong> Valid for 4 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekend Pass:</strong> Valid for 5 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>3 hours</strong> per session (30 hrs total)</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%2010%20sessions%20wheel%20throwing%20package" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose 10 Sessions</a>
        </div>

        <!-- 20 Sessions -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="card-title">20 Sessions</h3>
            <div class="card-price">₹33,000</div>
            <div class="card-subtext">₹1,650 / session</div>
          </div>
          <ul class="card-features">
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>10 pieces</strong> glazed & fired included</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekday Pass:</strong> Valid for 8 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>Weekend Pass:</strong> Valid for 10 weeks</span>
            </li>
            <li class="card-feature-item">
              <span class="card-feature-bullet">✓</span>
              <span><strong>3 hours</strong> per session (60 hrs total)</span>
            </li>
          </ul>
          <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%2020%20sessions%20wheel%20throwing%20package" 
             target="_blank" rel="noopener noreferrer" class="card-btn">Choose 20 Sessions</a>
        </div>
      </div>

      <div class="packages-footer-note">
        <h3>All packages include:</h3>
        Clay, studio aprons, trimming and throwing tools, bisque & glaze firings, and dedicated one-on-one guidance (max 4 students per slot). Additional pieces beyond package allowance can be fired at ₹1,000 / kg.
      </div>

      <ul class="features-list">
        <li>
          <h3>During the course, you will learn the fundamentals of wheel work.</h3>
          <p>Preparing clay for throwing, throwing cylinders and bowls, trimming, attaching handles, and an introduction to glazing.</p>
        </li>
        <li>
          <h3>The course is catered to the individual student's needs.</h3>
          <p>Training is personalized. We take in a limited number of students per session to ensure that everyone has ample time and a solid foundation.</p>
        </li>
        <li>
          <h3>From making to firing. Understand the whole process.</h3>
          <p>The course is designed to make you an independent potter. You will learn the entire process from start to finish, and take home finished, food-safe pieces you threw yourself.</p>
        </li>
      </ul>

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

      <div class="info-section">
        <h2>Schedule</h2>
        <ul class="info-list">
          <li>Dates : On-going regular classes</li>
          <li>Days : All days (flexible schedule)</li>
          <li>Duration per session : 3 hrs / session</li>
          <li>Clean-up after classes is mandatory</li>
        </ul>
      </div>

      <div class="accordion-group">
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
              <li>Registration validity depends on the selected session package and pass type (Weekday or Weekend pass).</li>
              <li>All sessions must be completed within the designated pass validity period unless a reschedule is initiated by the studio due to production work or official holidays.</li>
              <li>Glaze completion: Within a week after the last session for Weekday Passes, and the following weekend for Weekend Passes.</li>
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
