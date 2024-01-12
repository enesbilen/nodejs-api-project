const express = require('express');
const { register, login, forgotPassword } = require('../controllers/auth.js');

const router = express.Router();

//post

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);


module.exports = router