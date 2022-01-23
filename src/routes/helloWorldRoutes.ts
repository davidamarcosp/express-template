import express from 'express';
import * as controllers from '../hello-world';

const router = express.Router();

router.get('/', controllers.getHelloWorldHandler);
router.post('/', controllers.postHelloWorldHandler);

export default router;
