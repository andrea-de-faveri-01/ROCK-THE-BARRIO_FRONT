import { API } from "../../shared/api";
import store from "../store";

const { dispatch } = store;

const login = async (datos, navigate) => {
  dispatch({ type: "LOADING_LOGIN" });
 

  
    API.post("/usuario/login", datos)
      .then((resultado) => {
        dispatch({
          type: "LOGIN",
          contenido: {
            user: resultado.data.user,
            token: resultado.data.token,
          },
        });

        localStorage.setItem("token", resultado.data.token);
        localStorage.setItem("user", JSON.stringify(resultado.data.user));

        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "ERROR", contenido: error.response.data });
      });
  
};

const setUser = (userData) => {
  return{
    type: "SET_USER",
    contenido: userData,
  }
}
  
const logout = () => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};

export { login, logout, setUser };
