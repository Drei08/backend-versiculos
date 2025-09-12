import { response, Router } from "express";
import User from "./database/schema/User.js";
import { userAthController, userCreateController, userFetchController } 
from "./user/controller.js";

const userRouter = Router();

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController); 

userRouter.post("/auth", userAthController);

export { userRouter };