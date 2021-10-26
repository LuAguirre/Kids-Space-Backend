import mongoClient from "mongoose";

const URL = process.env.MONGO_URL;

export const initializeDatabaseSystem = () => {
  mongoClient
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.info("Database connected"))
    .catch(console.error)
};