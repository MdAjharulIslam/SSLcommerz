import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  tran_id: { type: String, required: true, unique: true },
  amount: Number,
  name: String,
  email:String,
  phone:String,
  status: { type: String, default: "PENDING" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);