import express from 'express';
import cors from 'cors';
import { versiculos } from './mock.js';


const app = express();

app.use(cors({
  exposedHeaders: ['x-total-count'],
})
);

app.use(express.json());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/',(req, res) =>{
  return res.status(200).json({ok: true})
});

app.get('/versiculos', (req, res) => {
  const all = getRandomInt(versiculos.length);
  return res.status(200).json(versiculos[all]);
});

app.listen(3333);

export default app;