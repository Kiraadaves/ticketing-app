import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

//dotenv.config();
const url = process.env.MONGODB_URI;

if (!url) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
mongoose.connect(url);
mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true, //to give a created at
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema); //first one is if it exists and then if it doesnt exist, we create in the second one

export default Ticket;
