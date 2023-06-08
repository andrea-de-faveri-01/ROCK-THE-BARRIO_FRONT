import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllComentarios = async () => {
  dispatch({ type: "LOADING" });
  const resultado = await API.get("comentario");

  dispatch({ type: "GET_COMENTARIOS", contenido: resultado.data });
};

const getComentariosByEvent = async (eventId) => {
  dispatch({ type: "LOADING" });

  const resultado = await API.get(`comentario/getbyevent/${eventId}`);

  dispatch({ type: "GET_COMENTARIOSBYEVENTO", contenido: resultado.data });
};

const editComentario = async (idComentario, comentarioData) => {
  dispatch({ type: "LOADING" });
  try {
    const resultado = await API.put(
      `comentario/${idComentario}`,
      comentarioData
    );

    dispatch({ type: "EDIT_COMENTARIO", contenido: resultado.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.message });
  }
};

const deleteComentario = async (idComentario) => {
  dispatch({ type: "LOADING" });
  try {
    const resultado = await API.delete(`comentario/${idComentario}`);

    dispatch({ type: "DELETE_COMENTARIO", contenido: resultado.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.message });
  }
};

export {
  getAllComentarios,
  getComentariosByEvent,
  editComentario,
  deleteComentario,
};
