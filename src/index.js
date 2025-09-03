import express, { Router } from 'express';
import cors from 'cors';
import { versiculos } from './mock.js';
import { connectToMongo } from './database/index.js';
import User from './database/User.js';
import { useRouter } from './router.js';

const app = express();

connectToMongo();

app.use(cors({
  exposedHeaders: ['x-total-count'],
})
);

app.use(express.json());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


app.get('/versiculos', (req, res) => {
  const all = getRandomInt(versiculos.length);
  return res.status(200).json(versiculos[all]);
});


app.use("/user", useRouter);

app.listen(3333);

export default app;