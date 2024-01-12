const express = require('express');
const { getPosts, createPost, getDetail, getUpdate, deletePost, searchApi } = require('../controllers/post.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

// Retrieve all posts
router.get('/getPosts', getPosts);

// Create a new post (protected by auth middleware)
router.post('/createPost', auth, createPost);

// Retrieve details of a specific post
router.get('/getDetail/:id', getDetail);

// Update a specific post (protected by auth middleware)
router.patch('/getUpdate/:id', auth, getUpdate);

// Delete a specific post (protected by auth middleware)
router.delete('/deletePost/:id', auth, deletePost);

// Search for posts
router.get('/searchPost', searchApi);

module.exports = router;

