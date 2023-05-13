import axios from "axios";

export const createAPIInstance = (userIP) => {
  const apiKey = process.env.API_KEY;
  return axios.create({
    baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIP}`,
  });
};
