import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const prt = process.env.PORT || 5000;

app.use(express.json());
controllerRouting(app);

app.listen(prt, () => {
  console.log(`Server running on port ${prt}`);
});

export default app;
