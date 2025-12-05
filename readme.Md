# SSLCommerz Payment Gateway Integration with MERN Stack

A full-stack e-commerce payment solution using **MongoDB, Express.js, React.js, and Node.js (MERN)** integrated with **SSLCommerz** – the most popular payment gateway in Bangladesh.

This project demonstrates how to securely integrate SSLCommerz payment gateway (Sandbox + Live) in a MERN application with proper success, fail, and cancel redirects, IPN (Instant Payment Notification), transaction verification, and order management.



## 🚀 Features

- Full SSLCommerz Sandbox & Live mode support
- Secure payment initiation from frontend (React)
- Success, Fail, Cancel URL handling
- IPN (Instant Payment Notification) listener
- Transaction validation & status update
- Order history with payment status
- Responsive UI with Tailwind CSS / Material UI (customizable)
- Protected routes & authentication (optional JWT)

## 🛠 Tech Stack

| Technology       | Version  |
|------------------|----------|
| MongoDB          | Latest   |
| Express.js       | ^4.18    |
| React.js         | ^18      |
| Node.js          | >=18     |
| SSLCommerz       | Official SDK |
| Axios            | Latest   |
| dotenv           | Latest   |


## 🚪 Environment Variables

Create `.env` in the root (backend) folder:

```env
# Server
PORT=5000

# MongoDB
MONGODB_URI=your_mongodb_uri_here

# SSLCommerz Credentials (Get from SSLCommerz Dashboard)
STORE_ID=your_store_id        # e.g., testbox or your_live_store_id
STORE_PASSWORD=your_store_password
IS_LIVE=false                 # Set true for production