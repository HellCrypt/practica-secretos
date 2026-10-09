require("dotenv").config();

const STRIPE_KEY = process.env.STRIPE_KEY;
if (!STRIPE_KEY) throw new Error("Falta STRIPE_KEY en .env");

console.log("App de pagos iniciada con clave:", STRIPE_KEY.slice(0, 8) + "***");
