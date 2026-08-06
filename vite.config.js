import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all generated blog post HTML files
const blogPosts = {};
const blogDir = resolve(__dirname, 'blog');
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    const name = `blog-${file.replace('.html', '')}`;
    blogPosts[name] = resolve(blogDir, file);
  });
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        works: resolve(__dirname, 'works.html'),
        classes: resolve(__dirname, 'pottery-classes-coimbatore.html'),
        blog: resolve(__dirname, 'blog.html'),
        ...blogPosts
      }
    }
  }
});
