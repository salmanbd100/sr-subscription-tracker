import express from 'express';
import { PORT } from './config/env.js ';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to. the subscription API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
