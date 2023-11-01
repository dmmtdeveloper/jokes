import mongoose from "mongoose";
const mongodbConfig = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/jokes")
    .then(() => {
      console.log("Se conecto correctamente");
    })
    .catch((error) => {
      console.log("hubo un error: " + error);
    });
};

export default mongodbConfig;
