import mongoose from "mongoose";

export const Connection = async (username, password) => {
  //   const url = `mongodb://localhost:27017/projectdb`;
  const url = `mongodb+srv://madhuraIPP:6H6uUAivniFUqhG3@cluster0.exjnoa4.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("database connected sucessfully");
  } catch (error) {
    console.log("Error while conneting to mongoose", error);
  }
};

export default Connection;