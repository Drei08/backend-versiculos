import User from "../database/schema/User.js";


const fetchService = async (request, response) => {
  const user = await User.create({
    email: "teste@gmail.com",
    password: "123",
  });
  
  return user;
};

const createService = async (body) => {
    const user = await User.create(body);
    return user;
};

const authService = async (body) => {

  if(!body.email){
    return { error: true, statusCode: 400, message: "Dados Faltando" };
  }

 const user = await User.findOne({
      email: body.email,
      password: body.password,
    });

    if(user == null){
      return { error: true, statusCode: 400, message: "Dados inválidos" };
    }

    return user;
};


export { fetchService, createService, authService}