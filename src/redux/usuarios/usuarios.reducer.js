const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const usuariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOGIN":
      return {
        ...state,
        loading: false,
        user: { ...action.contenido.user },
        token: { ...action.contenido.token },
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        error: action.contenido,
      };
    default:
      return state;
  }
};
