import axios from "axios";

export const createAPIInstance = (userIP) => {
  return axios.create({
    baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=at_KoQaGSIEszHcgEqt8LwhMimejmC1V&ipAddress=${userIP}`,
  });
};
