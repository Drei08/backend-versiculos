import { create } from "domain";
import {authService, createService, fetchService } from "./service.js";


const userFetchController =  async (req, res) =>{

  const user = await fetchService(req, res);
  return res.status(200).json({ok: true, user: user})

};

const userCreateController = async (req, res) =>{

  const user = await createService(req.body);
  return res.status(200).json({user: user})

};

const userAuthController = async (req, res) =>{
  
  const serviceResponse = await authService(req.body);
  
  if(serviceResponse?.error){

    return res
    .status(serviceResponse.statusCode)
    .send({error: true, message: serviceResponse.message});
  }

  return res.status(200).send({ working: true, user: serviceResponse });
};

export { userFetchController, userCreateController, userAuthController };