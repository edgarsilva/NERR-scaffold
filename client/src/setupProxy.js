const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  // How to add multiple proxies
  app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
};
