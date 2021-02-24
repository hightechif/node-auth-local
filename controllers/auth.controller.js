const passport = require('passport');
const {User} = require('../models');

const register = (req, res, next) => {
  User.register(req.body)
    .then(() => {
      res.redirect('/login');
    })
    .catch((error) => next(error.message))
  
  // Another way
  // const {username, password} = req.body;  
  
  // const encryptedPassword = bcrypt.hashSync(password, 10);
  // User.create({
  //   username,
  //   password: encryptedPassword
  // }).then(() => {
  //       res.redirect('/login');
  // }).catch((error) => next(error.message))
};

const showRegisterPage = (req, res) => {
  res.render('register');
}

const showLoginPage = (req, res) => {
  res.render('login');
}

const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  successFlash: true
})

module.exports = {
  register,
  showRegisterPage,
  showLoginPage,
  login
};
