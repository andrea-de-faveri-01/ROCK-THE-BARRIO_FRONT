import axios from "axios";

export const APIHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": localStorage.getItem("token")
};

export const API = axios.create({
    baseURL: import.meta.env.VITE_DB_URL,
    headers: APIHeaders
});