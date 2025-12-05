import express from "express";
import Order from "../model/Order.js";


const store_id = process.env.SSLC_STORE_ID;
const store_passwd = process.env.SSLC_STORE_PASSWORD;
const is_live = process.env.SSLC_IS_LIVE === "true";
const FRONTEND_URL = process.env.FRONTEND_URL;


export const initPayment = async (req, res) => {
  const { amount, name, email, phone } = req.body;

  const tran_id = "TXN_" + Date.now();

  
  await Order.create({
    tran_id,
    amount,
    name,
    email,
    phone,
    status: "PENDING",
  });

  
  const data = {
    total_amount: amount,
    currency: "BDT",
    tran_id,
    success_url: `http://localhost:${process.env.PORT}/api/payment/success`,
    fail_url: `http://localhost:${process.env.PORT}/api/payment/fail`,
    cancel_url: `http://localhost:${process.env.PORT}/api/payment/cancel`,
    product_name: "Test Product",
    product_category: "General",
    product_profile: "general",
    cus_name: name,
    cus_email: email,
    cus_add1: "Dhaka",
    cus_phone: phone,
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  const apiResponse = await sslcz.init(data);

  if (apiResponse.GatewayPageURL) {
    res.json({ url: apiResponse.GatewayPageURL });
  } else {
    res.status(500).json({ error: "SSLCommerz Failed!" });
  }
};

export const success = async (req, res) => {
  try {
    const tran_id = req.body.tran_id;

    await Order.findOneAndUpdate(
      { tran_id },
      { status: "PAID" }
    );

    return res.redirect(`${FRONTEND_URL}/success?payment=success`);
  } catch (err) {
    console.log(err);
    res.redirect(`${FRONTEND_URL}/fail`);
  }
};


export const fail = async (req, res) => {
  const tran_id = req.body.tran_id;

  await Order.findOneAndUpdate(
    { tran_id },
    { status: "FAILED" }
  );

  return res.redirect(`${FRONTEND_URL}/fail`);
};


export const cancel = async (req, res) => {
  const tran_id = req.body.tran_id;

  await Order.findOneAndUpdate(
    { tran_id },
    { status: "CANCELED" }
  );

  return res.redirect(`${FRONTEND_URL}/cancel`);
};
