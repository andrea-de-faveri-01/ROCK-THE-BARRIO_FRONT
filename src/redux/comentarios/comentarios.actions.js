import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllComentarios =()=> async () => {
  dispatch({ type: "LOADING" });
  const resultado = await API.get("comentario");

  dispatch({ type: "GET_COMENTARIOS", contenido: resultado.data });
};

const addComentario = (comentarioData) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const resultado = await API.post("/comentario", comentarioData);

    dispatch({ type: "ADD_COMENTARIO", contenido: resultado.data });
  } catch (error) {
    dispatch({ type: "ERROR_COMENTARIOS", contenido: error.message });
  }
};

const getComentariosByEvent = async (eventId) => {
  dispatch({ type: "LOADING" });

  const resultado = await API.get(`comentario/getbyevent/${eventId}`);

  dispatch({ type: "GET_COMENTARIOSBYEVENTO", contenido: resultado.data });
};

const editComentario = (idComentario, comentarioData)=> async () => {
  dispatch({ type: "LOADING" });
  try {
    
    const resultado = await API.put(
      `/comentario/${idComentario}`,
      comentarioData
    );

    console.log(resultado.data)

    dispatch({ type: "EDIT_COMENTARIO", contenido: resultado.data });
  } catch (error) {
    dispatch({ type: "ERROR_COMENTARIOS", contenido: error.message });
  }
};

const deleteComentario =  (idComentario)=> async () => {
  dispatch({ type: "LOADING" });
  try {
    const resultado = await API.delete(`comentario/${idComentario}`);

    dispatch({ type: "DELETE_COMENTARIO", contenido: resultado.data });
  } catch (error) {
    dispatch({ type: "ERROR_COMENTARIOS", contenido: error.message });
  }
};

export {
  addComentario,
  getAllComentarios,
  getComentariosByEvent,
  editComentario,
  deleteComentario,
};
