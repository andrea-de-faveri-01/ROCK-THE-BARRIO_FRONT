const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  token: null,
  loading: false,
  error: null,
};

export const usuariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_LOGIN":
      return { ...state, loading: true };

   case "SET_USER":
      return {...state, 
        user: action.contenido};

    case "LOGIN":
      return {
        ...state,
        loading: false,
        user: { ...action.contenido.user },
        token: action.contenido.token ,
        error:null,
      };
    case "ERROR_USUARIO":
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        error: action.contenido,
      };
      case "LOGOUT": 
      return {...state, user: null, token: null};

      
    default:
      return state;
  }
};
