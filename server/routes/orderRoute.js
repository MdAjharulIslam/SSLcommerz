import express from "express";
import { initPayment, success, fail, cancel } from "../controllers/paymentController.js";

const orderRouter = express.Router();

orderRouter.post("/init", initPayment);
orderRouter.post("/success", success);
orderRouter.post("/fail", fail);
orderRouter.post("/cancel", cancel);

export default orderRouter;
