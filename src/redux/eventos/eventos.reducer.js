const INITIAL_STATE = {
  eventos: [],
  loading: false,
  evento: null,
};
export const eventosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_EVENTOS":
      return { ...state, loading: false, eventos: [...action.contenido] };
    case "GET_EVENTO":
      return { ...state, loading: false, evento: action.contenido };
    case "ADD_EVENTO":
      return { ...state, eventos: [...state.eventos, action.contenido] };
    case "CLEAR_EVENTO":
      return { ...state, evento: null };
      break;
    case "ERROR_EVENTO":
      return {
        ...state,
        loading: false,
        error: action.contenido,
      };
    default:
      return state;
  }
};
