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
    case "CLEAR_EVENTO":
      return { ...state, evento: null };
      break;
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
