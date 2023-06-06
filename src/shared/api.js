import axios from "axios";

export const APIHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": localStorage.getItem("token")
};

export const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: APIHeaders
});

// he dejado la segunda instancias como hizo Santi en el ejemplo. Si queremos semplificarlo tenemos que  
// eliminar la linea del content-type en APiHeaders y APIHeders2 por completo y recordanos de especificar el tipo de dato en la solecitud.

export const APIHeaders2 = {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Authorization": localStorage.getItem("token")
}

export const APIIMAGES = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: APIHeaders2
});