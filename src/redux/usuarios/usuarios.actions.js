import { API } from "../../shared/api";
import store from "../store";

const { dispatch } = store;

const login = async (datos) => {
    dispatch({ type: "LOADING_LOGIN" });

API.post("/usuario/login", datos)
.then((resultado) => {
    console.log(resultado.data);
    dispatch({
        type: "LOGIN",
        contenido: {
            token: resultado.data.token,
        },
    });
    console.log(resultado.data);
})
  .catch((error) => {
    dispatch({ type: "ERROR", contenido: error.response.data})
  })
};

export { login };
