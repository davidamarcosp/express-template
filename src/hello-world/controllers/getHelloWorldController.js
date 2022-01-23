import { helloWorldService } from '../services/helloWorldService.js';

export function getHelloWorldHandler(req, res) {
  const method = req.method;
  const message = helloWorldService(method);
  res.send(message);
}
