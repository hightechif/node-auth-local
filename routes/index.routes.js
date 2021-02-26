const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const homeController = require('../controllers/home.controller');

// Middleware
const {restrict} = require('../middlewares/restrict')

// Homepage
router.get('/', restrict, homeController.showIndexPage)

// Register Page
router.get('/register', authController.showRegisterPage);
router.post('/register', authController.register);

// Login Page
router.get('/login', authController.showLoginPage);
router.post('/login', authController.login);

// Whoami page
router.get('/whoami', restrict, authController.whoami)

module.exports = router;
