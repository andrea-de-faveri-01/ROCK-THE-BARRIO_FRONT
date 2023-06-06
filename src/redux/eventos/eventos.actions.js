import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;


const getAllEventos = async () => {

    dispatch({ type: "LOADING"});
// para ir probando he utilizado mi node de un antiguo proyecto, hay que cambiar el "ais" por "eventos" cuando este el back.
   const resultado = await API.get("ais");

   dispatch({ type: "GET_EVENTOS", contenido: resultado.data })

}


const getEventoById = async (id) => {

    dispatch({ type: "LOADING"});
// hay que cambiar el "ais".
   const resultado = await API.get("ais");

   dispatch({ type: "GET_EVENTO", contenido: resultado.data })

}

export {
    getAllEventos,
    getEventoById
}