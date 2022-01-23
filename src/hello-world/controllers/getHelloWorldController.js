const helloWorldService = require('../services/helloWorldService.js');

function getHelloWorldHandler(req, res) {
  const method = req.method;
  const message = helloWorldService(method);
  res.send(message);
}

module.exports = getHelloWorldHandler;
