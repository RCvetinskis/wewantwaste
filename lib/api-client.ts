import axios from "axios";

const wasteApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WASTE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default wasteApiClient;
