import mongoose, { Connection } from "mongoose";
import config from "../config/config";
import gradient from "gradient-string";

const { MONGODB_URI } = config;
let db: mongoose.Connection;
export async function connectDb(): Promise<void> {
  try {
    mongoose.connect(MONGODB_URI as string);
    db = mongoose.connection;
    db.on("connected", () =>
      console.log(gradient("blue", "red")("---> connected to db"))
    );
    db.on("open", () =>
      console.log(gradient("blue", "red")("---> db is open"))
    );
    db.on("disconnected", () =>
      console.log(gradient("red", "red")("---> db is disconnected"))
    );
    db.on("reconnected", () =>
      console.log(gradient("red", "red")("---> db is reconnected"))
    );
    db.on("disconnecting", () =>
      console.log(gradient("red", "red")("db disconnecting"))
    );
    db.on("close", () => console.log(gradient("red", "red")("close")));
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // process code 1 means exit with failure, 0 means success
  }
}
