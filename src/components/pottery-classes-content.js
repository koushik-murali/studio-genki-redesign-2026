import { LitElement, html, css } from 'lit';

export class PotteryClassesContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
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
      text-transform: uppercase;
    }

    .description {
      font-size: 20px;
      line-height: 1.6;
      color: #B9B9B9;
      margin-bottom: 48px;
      max-width: 800px;
      font-family: var(--font-merriweather, 'Merriweather', serif);
    }

    table {
      width: 100%;
      max-width: 800px;
      border-collapse: collapse;
      margin-bottom: 48px;
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

    h2 {
      font-family: var(--font-merriweather, 'Merriweather', serif);
      font-weight: 700;
      font-size: 24px;
      margin: 0 0 24px 0;
    }

    .info-section {
      margin-bottom: 48px;
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .info-list li {
      font-size: 18px;
      line-height: 1.8;
      color: #B9B9B9;
    }

    @media (max-width: 768px) {
      h1 { font-size: 32px; }
      .description { font-size: 18px; }
      th, td { padding: 12px 16px; }
    }
  `;

  render() {
    return html`
      <h1>Professional Pottery Courses</h1>
      <p class="description">
        Our wheel throwing course is designed to set strong foundation in wheel-throwing and ceramics.
      </p>

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
          <tr>
            <td>20</td>
            <td>Beginner</td>
            <td>Rs. 30,000</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Intermediate</td>
            <td>Rs. 40,000</td>
          </tr>
        </tbody>
      </table>

      <div class="info-section">
        <h2>Schedule</h2>
        <ul class="info-list">
          <li>Dates : Flexible (ongoing regular classes)</li>
          <li>Days : Tuesday &ndash; Sunday</li>
          <li>Duration per session : 3.5 hrs / session</li>
          <li>Clean-up after classes is mandatory</li>
        </ul>
      </div>

      <div class="info-section">
        <h2>Contact</h2>
        <ul class="info-list">
          <li>Koushik Murali &ndash; 73730 74962</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('pottery-classes-content', PotteryClassesContent);
