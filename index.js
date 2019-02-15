const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Require models
require('./models/User');

// Require services
require('./services/passport');

mongoose.connect(keys.mongoURI);

// Creating Express app.
const app = express();

// Setting-Up Middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60* 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Setting up Auth Routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
