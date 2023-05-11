import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const apiKey = process.env.API_KEY;

export default axios.create({
  baseURL: `https://geo.ipify.org/api/v2/country?apiKey=`,
});
