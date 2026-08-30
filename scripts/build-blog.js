import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup paths
const BLOG_SRC = path.join(__dirname, '../src/content/blog');
const BLOG_OUT_DIR = path.join(__dirname, '../blog');
const BLOG_INDEX_OUT = path.join(__dirname, '../blog.html');

const INDEX_TEMPLATE = fs.readFileSync(path.join(__dirname, '../src/templates/blog-index.html'), 'utf-8');
const POST_TEMPLATE = fs.readFileSync(path.join(__dirname, '../src/templates/blog-post.html'), 'utf-8');

// Ensure output directory exists
if (!fs.existsSync(BLOG_OUT_DIR)) {
  fs.mkdirSync(BLOG_OUT_DIR, { recursive: true });
}

// Parse frontmatter
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim();
      meta[key] = val;
    }
  });

  return { meta, body: match[2].trim() };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 1. Read all markdown files
const files = fs.readdirSync(BLOG_SRC).filter(f => f.endsWith('.md'));

const posts = files.map(file => {
  const raw = fs.readFileSync(path.join(BLOG_SRC, file), 'utf-8');
  const { meta, body } = parseFrontmatter(raw);
  const slug = file.replace('.md', '');
  return { slug, meta, body };
});

// 2. Sort by date (newest first)
posts.sort((a, b) => {
  const dateA = new Date(a.meta.date || '1970-01-01');
  const dateB = new Date(b.meta.date || '1970-01-01');
  return dateB - dateA;
});

// 3. Generate Individual Post Pages
posts.forEach(post => {
  const renderedHtml = marked.parse(post.body);
  const dateStr = formatDate(post.meta.date);
  const metaInfo = post.meta.author ? `${dateStr}<span class="meta-separator">·</span>${post.meta.author}` : dateStr;
  
  let postPage = POST_TEMPLATE
    .replaceAll('{{TITLE}}', post.meta.title || post.slug)
    .replaceAll('{{DESCRIPTION}}', post.meta.description || `Read ${post.meta.title} on Studio Genki.`)
    .replaceAll('{{SLUG}}', post.slug)
    .replaceAll('{{META_INFO}}', metaInfo)
    .replaceAll('{{POST_CONTENT}}', renderedHtml);
    
  fs.writeFileSync(path.join(BLOG_OUT_DIR, `${post.slug}.html`), postPage);
});

// 4. Generate Blog Listing Page
const listingHtml = posts.map(post => {
  const dateStr = formatDate(post.meta.date);
  const metaInfo = post.meta.author ? `${dateStr}<span class="meta-separator">·</span>${post.meta.author}` : dateStr;
  
  return `
    <div class="post-card">
      <div class="post-meta">${metaInfo}</div>
      <div class="post-title">
        <a href="/blog/${post.slug}.html">${post.meta.title || post.slug}</a>
      </div>
      <div class="post-excerpt">${post.meta.description || ''}</div>
    </div>
  `;
}).join('\n');

const noPostsHtml = `<p style="color: #B9B9B9; font-family: var(--font-merriweather-sans, sans-serif); font-size: 20px;">No posts yet. Add a markdown file to <code>src/content/blog/</code> to get started.</p>`;

let indexPage = INDEX_TEMPLATE.replace(
  '{{POST_LISTING_CONTENT}}', 
  posts.length > 0 ? listingHtml : noPostsHtml
);

fs.writeFileSync(BLOG_INDEX_OUT, indexPage);

console.log(`✅ Built blog index and ${posts.length} blog posts successfully.`);
