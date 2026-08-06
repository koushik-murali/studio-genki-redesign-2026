import { LitElement, html, css } from 'lit';

export class AboutContent extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
      text-align: left;
    }

    h2 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 400;
      font-size: 40px;
      line-height: 1.2;
      color: #FFFFFF;
      margin-top: 80px;
      margin-bottom: 32px;
    }

    h2:first-of-type {
      margin-top: 0;
    }

    p {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 20px;
      line-height: 1.6;
      color: #B9B9B9;
      max-width: 800px;
      margin-top: 0;
      margin-bottom: 24px;
    }

    .quote {
      font-style: italic;
      color: #FFFFFF;
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-size: 26px;
      border-left: 2px solid #FFFFFF;
      padding-left: 24px;
      margin-bottom: 40px;
    }

    ul {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 20px;
      line-height: 1.6;
      color: #B9B9B9;
      max-width: 800px;
      margin-bottom: 32px;
      padding-left: 24px;
    }

    li {
      margin-bottom: 16px;
    }
    
    li strong {
      color: #FFFFFF;
      font-weight: 400;
    }

    a {
      color: #FFFFFF;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    
    a:hover {
      opacity: 0.8;
    }

    @media (max-width: 1024px) {
      h2 { font-size: 36px; }
    }

    @media (max-width: 768px) {
      h2 { 
        font-size: 32px; 
        margin-top: 60px;
      }
      h2:first-of-type {
        margin-top: 0;
        margin-bottom: 32px;
      }
      p, ul { 
        font-size: 18px; 
      }
      .quote { 
        font-size: 22px; 
        padding-left: 16px;
      }
    }
  `;

  render() {
    return html`
      <h2>About Studio Genki</h2>
      
      <p class="quote">“All buildings are predictions. All predictions are wrong”</p>
      
      <p>When I first heard this quote, I had no idea it would have such an impact on me and influence my studio’s development.</p>
      
      <p>If Studio Genki is a living, breathing building, I do not want to predict what the building is going to evolve into. It is effectively a blank canvas.</p>
      
      <p>But the foundation has to be laid out, and the canvas has to be stretched.</p>
      
      <p>At its core, Studio Genki is an art and design studio that aims to do high-quality, human-made work.</p>
      
      <p>The studio operates with two fundamental principles.</p>
      
      <ul>
        <li><strong>Create thoughtful pieces.</strong> Thoughtful, not in the abstract sense. Thoughtful in the sense that the work that is being done at Studio Genki should be done with care and attention to detail.</li>
        <li><strong>Be like Sisyphus.</strong> As Camus described, show up every day and push that boulder up the hill. Even if it rolls down, which it eventually does, walk back down hill and repeat. The process is the reward.</li>
      </ul>
      
      <p>If these two principles can be upheld, then that is the success of the studio. The business itself might evolve, and the studio’s style would evolve. But the operating principles remain the same.</p>

      <h2>About Koushik</h2>
      
      <p>Koushik is a graphic designer and a potter. Born in Coimbatore, he was raised in the southern part of Tamil Nadu in Tuticorin. He completed his college in Chennai, and continued to work there. The pandemic provided him with the opportunity to move to his hometown, Coimbatore.</p>
      
      <p>After 7 years in the tech industry, Koushik decided to dabble with pottery towards the end of 2023. A couple of weekend classes were enough to make him fall in love with the idea of expressing ideas through clay. In August 2024, he signed up for a long-term training at Anvi Pottery.</p>
      
      <p>At Anvi, he learnt pottery under the guidance of Master Potter Sandeep Manchekar. He also had the privilege of assisting Sandeep during his solo ceramic exhibition in Mumbai at Ninefish Art Gallery.</p>
      
      <p>In January 2025, he was also lucky enough to assist <a href="https://www.johndix.com/bio" target="_blank" rel="noopener">John Dix</a> during a 2-week woodfiring workshop at Anvi.</p>
      
      <p>Koushik has exposure to Wood firing, gas firing, naked raku firing, soda firing and lustre firing.</p>
      
      <p>After an incredible 8-month journey at Anvi, he started Studio Genki in Coimbatore at a very modest scale. He runs a solo operation and you can reach out to him by following the link below:</p>
      
      <p>Email <a href="mailto:koushik@studiogenki.in">koushik@studiogenki.in</a> to get in touch with Koushik.</p>
    `;
  }
}

customElements.define('about-content', AboutContent);
