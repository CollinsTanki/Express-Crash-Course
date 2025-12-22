import express from 'express';
import {getPosts, getPost, createPost, updatePost, deletePost } from './controllers/postController.js';
const router = express.Router();





//Get all posts
router.get('/', getPosts);

//Get single post
router.get('/:id', getPost);
//Create new post
router.post('/', createPost);

//Update Post
router.put('/:id', updatePost);

//Delete Post
router.delete('/:id', deletePost );

//app.get('/', (req, res) => {
  //res.send('<h1>Hello World</h1>');
   //res.send({message: '<h1>Hello World</h1>'});
   //res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

//app.get('/about', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public', 'about.html'));
   //res.send({message: '<h1>Hello World</h1>'});
//});
//Create new post


export default router;