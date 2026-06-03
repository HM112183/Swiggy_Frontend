import axios from "axios";

export const api = axios.create({
baseURL: "https://swiggy-backend.onrender.com/api",
});