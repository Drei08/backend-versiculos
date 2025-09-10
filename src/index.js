import express, { response } from "express";
import cors from "cors";
import { versiculos } from "./mock.js";


const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    exposedHeaders: ["X-Total-Count"],
  })
);

app.use(express.json());


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/", (req, res) =>{
  res.status(200).send("deu certo")
})

app.get("/versiculos", (req,res) => {
  const mock = getRandomInt(versiculos.length);
  return res.status(200).send({versiculos: versiculos[mock]});
})

app.listen(3333);

export default app;