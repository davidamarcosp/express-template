import express from 'express';
import cors from 'cors';

// Routes
import helloWorldRoutes from './routes/helloWorldRoutes.js';

// Middlewares
import logger from './middlewares/logger.js';

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/hello-world', helloWorldRoutes);

app.listen(port, () => console.log(`[Server listening on PORT: ${port}]`));
