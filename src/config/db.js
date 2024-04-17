import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/login";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
