import { Router } from "express";
import { userAuthController, userCreateController, userFetchController } from "./user/controller.js";

const useRouter = Router();

useRouter.get('/fetch', userFetchController);

useRouter.post('/create', userCreateController);

useRouter.post('/auth', userAuthController);

export { useRouter };