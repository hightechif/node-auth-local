## Authentication with Local Strategy | Passport.js | NodeJS

### Description

This is a simple login system using authentication in NodeJS with express, passportJS, and ejs. This authentication using local strategy.

### Dependency NPM Package

- `express`               for handling your routes
- `express-session`       for building a user session
- `express-flash`         to display flash messages
- `passport`              to handle user authentication
- `passport-local`        which is a strategy(authentication mechanism)
- `sequelize`             ORM for storing users in the database
- `pg`                    Non-blocking PostgreSQL client for Node.js
- `bcrypt`                for encrypting your passwords before you store them in your database. It’s a necessity to never store passwords in plain text for obvious security reasons.
- `ejs`                   module to send data from Express to ejs files
- `morgan`                HTTP request logger middleware for node.js 

Routes:

```
GET    /                        """Home Page"""
GET    /register                """Show Register Page"""
POST   /register                """Register POST handle"""
GET    /login                   """Show Login Page"""
POST   /login                   """Login Authentication POST handle"""
```

### Instalation

**1. Clone the source code**

```
$ git clone https://github.com/ridhanf/node-auth-local.git
$ cd node-auth-local
```

**2. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Project dependencies listed in `package.json`.

```
$ npm install
```

**3. Run the server**

Run server with:

```
$ npm run start
```

or

```
$ npm run dev
```

&nbsp;

Server listening in port 3000 (open http://localhost:3000)

That's all. Thank you.


Sincerely,

&nbsp;

Ridhan Fadhilah
