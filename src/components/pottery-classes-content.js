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

    .course-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
      padding: 24px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 32px;
    }
    
    .course-meta-bar span {
      font-size: 18px;
      color: #E0E0E0;
    }
    
    .course-meta-bar strong {
      color: #FFFFFF;
      font-weight: 600;
      margin-right: 8px;
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

    /* Table styles */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 80px;
    }

    th, td {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 16px 24px;
      text-align: left;
    }

    th {
      font-weight: 700;
      background: rgba(255, 255, 255, 0.05);
    }

    td {
      color: #B9B9B9;
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
      th, td { padding: 12px 16px; }
      
      /* Vertical table on mobile */
      table, thead, tbody, th, td, tr { 
        display: block; 
      }
      
      thead tr { 
        display: none; 
      }
      
      tr { 
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 16px;
      }
      
      td { 
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
        position: relative;
        padding-left: 50%; 
        text-align: right;
      }
      
      td:before { 
        position: absolute;
        top: 12px;
        left: 16px;
        width: 45%; 
        padding-right: 10px; 
        white-space: nowrap;
        text-align: left;
        font-weight: 700;
        color: #FFFFFF;
      }
      
      td:nth-of-type(1):before { content: "No. of sessions"; }
      td:nth-of-type(2):before { content: "Level"; }
      td:nth-of-type(3):before { content: "Fee"; }
      
      td:last-child {
        border-bottom: 0;
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
      <h1>Beginners Wheel Throwing Course</h1>
      <p class="description">
        Studio Genki is a place for aspiring potters and people who take the craft seriously.
      </p>
      <p class="description">
        Our beginners wheel throwing course is designed for those wanting an intensive introduction to wheel throwing and ceramics. Absolutely no prior experience or artistic background is required!
      </p>

      <div class="course-meta-bar">
        <span><strong>Sessions:</strong> 10</span>
        <span><strong>Fee:</strong> Rs. 15,000</span>
        <span><strong>Duration:</strong> September 16 - October 15</span>
      </div>

      <p class="subtitle" style="margin-bottom: 24px; color: #F5C518; font-weight: 600;">Only 4 spots left.</p>
      
      <a href="https://wa.me/917373074962?text=I%20would%20like%20to%20register%20for%20the%20wheel%20throwing%20course" target="_blank" rel="noopener noreferrer" class="contact-button" style="margin-top: 0; margin-bottom: 64px;">Reserve Your Spot</a>

      <ul class="features-list">
        <li>
          <h3>During the course, you will learn the fundamentals of wheel work.</h3>
          <p>Preparing clay for throwing, throwing cylinders and bowls, trimming, attaching handles, and an introduction to glazing.</p>
        </li>
        <li>
          <h3>The course is catered to the individual student's needs.</h3>
          <p>Training is personalized. We take on a maximum of 4 students per course to ensure that everyone has ample time and a solid foundation.</p>
        </li>
        <li>
          <h3>From making to firing. Understand the whole process.</h3>
          <p>The course is designed to make you an independent potter. You will learn the entire process from start to finish, and take home 3-5 finished, food-safe pieces you threw yourself.</p>
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

      <h2>Course Details</h2>
      <table>
        <thead>
          <tr>
            <th>No. of sessions</th>
            <th>Level</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>Beginner</td>
            <td>Rs. 15,000</td>
          </tr>
        </tbody>
      </table>

      <div class="info-section">
        <h2>Course inclusions</h2>
        <ul class="info-list">
          <li>Clay</li>
          <li>Apron</li>
          <li>Basic tools</li>
          <li>Firing upto 5 pieces.</li>
          <li>Additional pieces can be fired at the rate of 1000 rupees per kg.</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>Schedule</h2>
        <ul class="info-list">
          <li>Dates : September 16 - October 15</li>
          <li>Days : All 7 days of the week</li>
          <li>Duration per session : 3 hrs / session</li>
          <li>Clean-up after classes is mandatory</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>What to prepare</h2>
        <ul class="info-list">
          <li>Wear comfortable clothes you don't mind getting dirty.</li>
          <li>Bring a hand towel for personal use.</li>
          <li>Keep your fingernails trimmed short for the best experience on the wheel.</li>
          <li>Bring some snacks if you feel necessary.</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>Policies</h2>
        <ul class="info-list">
          <li>Up to 2 makeup sessions are allowed during the course duration.</li>
          <li>Course passes will expire strictly after the set course dates.</li>
        </ul>
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
