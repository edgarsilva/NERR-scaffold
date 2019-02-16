const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Service and API keys setup
const keys = require('./config/keys');

// DB Setup
// - Using Mongoose
// - Require models
require('./models/User');
mongoose.connect(keys.mongoURI);

// - Using Postgress and Bookshelf
// - Require models

// Require services
require('./services/passport');

// Creating Express app.
const app = express();

// Setting-Up Middleware
// - Setting up body-parser for req post body data
app.use(bodyParser.json());

// -  Setting up session with cookies
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60* 1000,
    keys: [keys.cookieKey]
  })
);

// -  Setting up Passport cookie serialize and deserialize
app.use(passport.initialize());
app.use(passport.session());

// Setting up Routes
require('./routes/authRoutes')(app);

// Set up app serving in prod mode
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like main.js and main.css files!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
