const INITIAL_STATE = {
    comentarios: [],
    loading: false,
  };
  export const comentariosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "GET_COMENTARIOS":
        return { ...state, loading: false, comentarios: [...action.contenido] };
      case "ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };