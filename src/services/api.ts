import axios from "axios";

export const api = axios.create({
  baseURL: "https://swiggy-backend-jnaj.onrender.com/api",
});