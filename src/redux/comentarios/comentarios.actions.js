import { API } from "../../shared/api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllComentarios = async () => {
  dispatch({ type: "LOADING" });
  const resultado = await API.get("comentario");

  dispatch({ type: "GET_COMENTARIOS", contenido: resultado.data });
};

export { getAllComentarios };
