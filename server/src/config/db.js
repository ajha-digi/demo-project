import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URL } = process.env;
    const connection = await mongoose.connect(MONGO_URL, { });

    console.log(`Connected to MongoDB at ${MONGO_URL}`);
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
