import User from '../database/User.js';

const fetchService = async (req, res) => {

  const user = await User.create({
    email: "andreiluasscas@gmail.com", 
    password: "123456"

  });

  return user;
};

const createService = async (body) => {

  const user = await User.create(body);;

  return user;
};

const authService = async (body) => {

   if(!body.email || !body.password){
    return { error: true, message: "Dados faltantes!", statusCode: 400 };
   }

   const user = await User.findOne({
    email: body.email,
    password: body.password
  });

  if(user == null){
    return {error: true, message: "Dados inválidos!", statusCode: 400 };
  }

  return user;
};  

export { fetchService, createService, authService };