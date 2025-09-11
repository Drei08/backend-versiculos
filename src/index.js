import express, { response } from "express";
import cors from "cors";
import { versiculos } from "./mock.js";
import { connectToMongo } from "./database/index.js";
import User from "./database/schema/User.js";


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

app.post("/user", async (request, response) => {
  console.log(request.body);
  try {
    const user = await User.create(req.body);
    return response.status(200).send({ working: true, user: user });
  } catch (err) {
    return response.status(500).send({ error: err.message });
  }
});

app.post("/user/auth", async (request, response) => {
    const user = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });

    if(user == null){
      return response.status(400).send({ error: true, menssage: "Dados inválidos" });
    }
    else
    return response.status(200).send({ working: true, user: user });
});

app.listen(3333);

export default app;