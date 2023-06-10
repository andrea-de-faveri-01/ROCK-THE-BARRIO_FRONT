import { API } from "../../shared/api";
import store from "../store";

const { dispatch } = store;

const login = (datos,navigate)=> async () => {
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

const checkSesion = ()=>() =>{
  try {
    const userJson = localStorage.getItem("user");
    const tokenJson = localStorage.getItem("token");
    
    if (userJson && tokenJson){
      dispatch({
        type: "LOGIN",
        contenido: {
          user: JSON.parse(userJson),
          token:tokenJson.replaceAll('"',''),
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export { login, logout, setUser,checkSesion };
