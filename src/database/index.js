import mongoose, { mongo } from "mongoose";

const dbUrl = process.env.DB_KEY;

const connectToMongo = () =>{
  mongoose.connect(dbUrl);

  mongoose.connection.on("connected", () => {
    console.log("Connected to DB");
  });

  mongoose.connection.on("error", (err) => { 
    console.log("Error connecting to DB", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from DB");
  });
}


export { connectToMongo };
