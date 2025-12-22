import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 5000;

const app = express();

//Body parser middware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Logger middleware
app.use(logger);


//Setup static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/posts', posts);


//Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route works!' });
});

//Not Found Handler
app.use(notFound);

//Error Handler
app.use(errorHandler);





app.listen(port, () => console.log(`Server is running on port ${port}`));