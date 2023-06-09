import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllEventos = async () => {
  dispatch({ type: "LOADING" });

  const resultado = await API.get("/evento");

  dispatch({ type: "GET_EVENTOS", contenido: resultado.data });
};

const getEventoById = async (id) => {
  dispatch({ type: "CLEAR_EVENTO" });
  dispatch({ type: "LOADING" });

  const resultado = await API.get(`/evento/getbyid/${id}`);
  dispatch({ type: "GET_EVENTO", contenido: resultado.data });
};

const addEvento = async (eventoData) => {
    dispatch({ type: "LOADING" });
  
    try {
      const resultado = await API.post("/evento", eventoData);
  
      dispatch({ type: "ADD_EVENTO", contenido: resultado.data });
    } catch (error) {
      dispatch({ type: "ERROR", contenido: error.message });
    }
  };

export { getAllEventos, getEventoById, addEvento };
