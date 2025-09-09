import express, { response } from "express";
import cors from "cors";
import { piadas } from "./mock.js";

const app = express();

app.use(
  cors({
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

app.get("/piadas", (req,res) => {
  const mock = getRandomInt(piadas.length);
  return res.status(200).send({piada: piadas[mock]});
})

app.listen(3333);