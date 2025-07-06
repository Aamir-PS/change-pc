import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import blogRouter from './routes/blog.js';
import router from './routes/blog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // app define

const port = 5001;

app.use('/', blogRouter);

// Set up Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Static folder serve
app.use(express.static(path.join(__dirname, 'static')));

app.get('/hello/:name', (req, res) => {
  res.status(201).send(`Hello world, ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
