import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;


const getAllEventos = async () => {

    dispatch({ type: "LOADING"});

   const resultado = await API.get("/evento");

   dispatch({ type: "GET_EVENTOS", contenido: resultado.data })

}


const getEventoById = async (id) => {

    dispatch({ type: "LOADING"});

   const resultado = await API.get("/getbyid/:idEvento");

   dispatch({ type: "GET_EVENTO", contenido: resultado.data })

}

export {
    getAllEventos,
    getEventoById
}