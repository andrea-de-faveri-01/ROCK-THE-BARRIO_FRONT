const INITIAL_STATE = {
  comentarios: [],
  loading: false,
};
export const comentariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "GET_COMENTARIOSBYEVENTO":
      return { ...state, loading: false, comentarios: action.contenido };

    case "EDIT_COMENTARIO":
      return {
        ...state,
        loading: false,
        comentarios: state.comentarios.map((comentario) =>
          comentario._id === action.contenido._id
            ? action.contenido
            : comentario
        ),
      };

    case "DELETE_COMENTARIO":
      return {
        ...state,
        loading: false,
        comentarios: state.comentarios.filter(
          (comentario) => comentario._id !== action.contenido._id
        ),
      };
      
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
