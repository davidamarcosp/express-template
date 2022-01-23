import { Request, Response } from 'express';
import * as services from '../services';

export function getHelloWorldHandler(req: Request, res: Response) {
  const method: string = req.method;
  const message = services.helloWorldService(method);
  res.send(message);
}
