import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true , useUnifiedTopology:true}).then((data) => {
      console.log(`Mongodb connect to: ${data.connection.host}`);
    }).catch((e) => {
      console.log(e);
    });
};