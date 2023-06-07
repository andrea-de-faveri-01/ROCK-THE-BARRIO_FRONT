import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllComentarios = async () => {
  dispatch({ type: "LOADING" });
  const resultado = await API.get("comentario");

  dispatch({ type: "GET_COMENTARIOS", contenido: resultado.data });
};

const getComentariosByEvent = async (eventId) =>{
  console.log('eventid',eventId)
  dispatch({ type: "LOADING" });
  console.log(`HOLA ESTOY EN LA LINEA 15 ${eventId}`);
  const resultado = await API.get(`comentario/getbyevent/${eventId}`);
  console.log(`HOLA ESTOY EN LA LINEA 17 ${eventId}`);
  console.log('data',resultado.data)
  dispatch({ type: "GET_COMENTARIOSBYEVENTO", contenido: resultado.data });
}

export { getAllComentarios, getComentariosByEvent};
