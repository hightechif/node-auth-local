const route = require('color-convert/route');
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const homeController = require('../controllers/home.controller');

// Homepage
router.get('/', homeController.showIndexPage)

// Register Page
router.get('/register', authController.showRegisterPage);
router.post('/register', authController.register);

// Login Page
router.get('/login', authController.showLoginPage);
router.post('/login', authController.login);

module.exports = router;
