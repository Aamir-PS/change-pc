// routes/blog.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import blogs from '../data/blogs.js';
import { constants } from 'buffer';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/index.html'));
  // res.render('../home')
  res.render('home');
});

router.get('/blog', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/bloghome.html'));
  res.render('blogHome', {
  blogs: blogs
  });
});




router.get('/blogpost/:slug', (req, res) => {
  const myBlog = blogs.filter(e => e.slug === req.params.slug);

  if (myBlog.length === 0) {
    return res.status(404).send('Blog post not found');
  }

  res.render('blogPage', {
    title: myBlog[0].title,
    content: myBlog[0].content
  });
});

export default router;  
