// lib/passport.js
const passport = require('passport')
const passportLocal = require('passport-local')
const LocalStrategy = passportLocal.Strategy
const {User} = require('../db/models')

/* Authentication Function */
const authenticate = async (username, password, done) => {
  try {
    // Call our last method
    const user = await User.authenticate({username, password});
    /*
    done adalah callback, parameter pertamanya adalah error,
    jika tidak ada error, maka kita beri null saja.
    Parameter keduanya adalah data yang nantinya dapat
    kita akses di dalam req.user */
    return done(null, user)
  } catch (err) {
    /* Parameter ketiga akan dilempar ke dalam flash */
    return done(null, false, {message: err.message})
  }
}

passport.use(new LocalStrategy({
    usernameField: 'username', // username is the name tag of HTML Form
    passwordField: 'password'  // password is the name tag of HTML Form
  }, authenticate)
)


/* Serialize dan Deserialize
Cara untuk membuat sesi dan menghapus sesi. Menerjemahkan cookies dari browser.
*/
passport.serializeUser( // Server ke Browser
  (user, done) => done(null, user.id)
)

// Dengan begini nanti tinggal memanggil req.user
passport.deserializeUser( // Browser ke Server
  async (id, done) => done(null, await User.findByPk(id))
)

module.exports = passport;
