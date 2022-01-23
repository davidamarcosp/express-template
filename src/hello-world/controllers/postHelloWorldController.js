import { helloWorldService } from '../services/helloWorldService.js';

export function postHelloWorldHandler(req, res) {
  const method = req.method;
  const message = helloWorldService(method);
  res.send(message);
}
