import { inject } from '@vercel/analytics';
import './components/background-slider.js';
import './components/site-header.js';
import './components/hero-content.js';
import './components/site-footer.js';
import './components/policies-content.js';

// Initialize Vercel Web Analytics
inject();

console.log('Studio Genki Redesign initialized.');
