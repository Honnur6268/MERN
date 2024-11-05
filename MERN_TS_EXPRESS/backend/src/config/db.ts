/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import env from "../utils/validateEnv";

export const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process code 1 means exit with failure, 0 means success
  }
};
