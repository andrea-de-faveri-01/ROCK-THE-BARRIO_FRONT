import { API, APIIMAGES } from "../../shared/api";
import store from "../store";

const { dispatch } = store;

const setUserData = (resultado, navigate) => {
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
};

const login = (datos, navigate) => async () => {
  dispatch({ type: "LOADING_LOGIN" });

  API.post("/usuario/login", datos)
    .then((resultado) => {
      setUserData(resultado, navigate);
    })
    .catch((error) => {
      dispatch({ type: "ERROR", contenido: error.response.data });
    });
};

const setUser = (userData) => {
  return {
    type: "SET_USER",
    contenido: userData,
  };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};

const checkSesion = () => () => {
  try {
    const userJson = localStorage.getItem("user");
    const tokenJson = localStorage.getItem("token");

    if (userJson && tokenJson) {
      dispatch({
        type: "LOGIN",
        contenido: {
          user: JSON.parse(userJson),
          token: tokenJson.replaceAll('"', ""),
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const registerUser = (datos, navigate) => async () => {
  try {
    const formData = new FormData();

    formData.append("email", datos.email);
    formData.append("username", datos.username);
    formData.append("password", datos.password);
    formData.append("birthday", datos.birthday);
    if (datos.image[0] !== undefined) {
      formData.append("avatar", datos.image[0]);
    }

    // APIIMAGES.post("/usuario/register", formData).then((resultado) => {
    //   dispatch({ type: "SET_USER", contenido: resultado.data.user }).then(
    //     setUserData(resultado, navigate)
    //   );

    //   // navigate("/")
    // });

    const resultado = await APIIMAGES.post("/usuario/register", formData);
    dispatch({ type: "SET_USER", contenido: resultado.data.user });
    setUserData(resultado, navigate);
    
    // await  setUserData(result, navigate)
  } catch (error) {
    dispatch({ type: "ERROR", contenido: error.message });
  }
};

export { login, logout, setUser, checkSesion, registerUser };
