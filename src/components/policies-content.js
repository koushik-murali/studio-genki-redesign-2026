import { LitElement, html, css } from 'lit';

export class PoliciesContent extends LitElement {
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
      font-size: 32px;
      line-height: 1.2;
      color: #FFFFFF;
      margin-top: 60px;
      margin-bottom: 24px;
    }

    h2:first-of-type {
      margin-top: 0;
    }

    .date {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-style: italic;
      font-size: 16px;
      color: #B9B9B9;
      margin-bottom: 32px;
      margin-top: -16px;
    }

    p {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 18px;
      line-height: 1.6;
      color: #B9B9B9;
      max-width: 800px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    ul {
      font-family: var(--font-merriweather-sans, 'Merriweather Sans', sans-serif);
      font-weight: 300;
      font-size: 18px;
      line-height: 1.6;
      color: #B9B9B9;
      max-width: 800px;
      margin-bottom: 32px;
      padding-left: 24px;
    }

    li {
      margin-bottom: 12px;
    }
    
    a {
      color: #FFFFFF;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    
    a:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      h2 { 
        font-size: 28px; 
        margin-top: 40px;
      }
      h2:first-of-type {
        margin-top: 0;
      }
      p, ul { 
        font-size: 16px; 
      }
    }
  `;

  render() {
    return html`
      <h2>Shipping & Tracking</h2>
      <p class="date">Last updated on 25 Aug 2025</p>
      
      <p>At Studio Genki, we currently ship only within India. Orders are usually dispatched within 3 business days and delivered in 7–15 days.</p>
      
      <p>We ship through trusted couriers and take great care in packing each order. Once shipped, you’ll get a tracking number to follow your package.</p>
      
      <p>Please note:</p>
      <ul>
        <li>While we do our best, delays caused by couriers or postal services are outside our control.</li>
        <li>We don’t offer Cash on Delivery.</li>
        <li>Orders will be delivered to the address provided at checkout (changes aren’t possible after shipping).</li>
        <li>If delivery isn’t available in your area, we’ll let you know and issue a full refund.</li>
      </ul>

      <h2>Terms & Conditions</h2>
      <p>By using this website or making a purchase from us, you agree to the following terms:</p>
      <ul>
        <li>We do our best to keep all information accurate and up to date, but occasional errors or changes may happen. Please use your own judgment when relying on the content here.</li>
        <li>All designs, images, and content on this website belong to Studio Genki. Please don’t copy or reuse them without permission.</li>
        <li>Links to other websites may appear for your convenience, but we aren’t responsible for their content.</li>
        <li>Orders and payments are processed securely. If a payment fails or is declined, Studio Genki cannot be held liable for resulting delays or cancellations.</li>
        <li>Any disputes will fall under the laws of India.</li>
      </ul>
      <p>We’re committed to creating a smooth and transparent experience, and if you ever have questions, please reach out—we’re happy to help.</p>

      <h2>Cancellations, Returns and Refunds</h2>
      <p>All purchases are final. We do not accept returns or exchanges.</p>
      <p>Orders can only be cancelled on the same day of purchase, and only if shipping has not yet started.</p>
      <p>Every product is carefully packed. If your order arrives damaged or defective, please contact us the same day with an unboxing video (no cuts). We’ll arrange a replacement or refund, depending on the situation.</p>
      <p>If the product doesn’t match what you ordered or expected, let us know within the same day of delivery, and we’ll review your case.</p>
      <p>Approved refunds will be processed within 3–7 business days.</p>
    `;
  }
}

customElements.define('policies-content', PoliciesContent);
