const helloWorldService = require('../services/helloWorldService.js');

function postHelloWorldHandler(req, res) {
  const method = req.method;
  const message = helloWorldService(method);
  res.send(message);
}

module.exports = postHelloWorldHandler;
