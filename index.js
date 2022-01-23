const app = require('./src/index');

if (process.env.ENVIRONMENT === 'development') {
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`[Server listening on PORT: ${port}]`));
}

module.exports = app;
