function helloWorldService(method) {
  const messages = {
    GET: 'GET => Hello World!',
    POST: 'POST => Hello World!'
  };
  return messages[method];
}

module.exports = helloWorldService;
