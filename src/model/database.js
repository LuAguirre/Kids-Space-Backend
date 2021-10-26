import mongoClient, { model } from "mongoose";
import userModel from "./userModel";

const URL = process.env.MONGO_URL;

export const initializeDatabaseSystem = async () => {
  try {
    await mongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error;
  }
};

export const UserModel = model("User", userModel);
export default mongoClient;
