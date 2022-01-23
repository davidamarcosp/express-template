import express from 'express';
import { getHelloWorldHandler, postHelloWorldHandler } from '../hello-world/index.js';

const router = express.Router();

router.get('/', getHelloWorldHandler);
router.post('/', postHelloWorldHandler);

export default router;
