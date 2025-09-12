import express, { response } from "express";
import cors from "cors";
import { versiculos } from "./mock.js";
import { connectToMongo } from "./database/index.js";
import User from "./database/schema/User.js";
import { userRouter } from "./router.js";


const app = express();

connectToMongo();

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

app.get("/versiculos", async (request,response) => {
  const mock = getRandomInt(versiculos.length);
  return response.status(200).send({versiculos: versiculos[mock]});
})


app.use("/user", userRouter);

app.listen(3333);

export default app;