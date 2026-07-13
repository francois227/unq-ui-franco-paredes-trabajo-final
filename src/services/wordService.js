import axios from "axios";

const api = axios.create({
  baseURL: "https://word-api-hmlg.vercel.app/api",
});

export const validateWord = async (word) => {
  const response = await api.get("/validate", {
    params: {
      word,
    },
  });

  return response.data;
};