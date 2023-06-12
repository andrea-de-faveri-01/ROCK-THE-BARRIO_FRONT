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
      case "EDIT_EVENTO":
        return {
          ...state,
          eventos: state.eventos.map(evento =>
            evento._id === action.id ? { ...evento, ...action.datos } : evento
          ),
          evento: { ...state.evento, ...action.datos },
          loading: false,
          error: null
        };
    case "DELETE_EVENTO":
      return {
        ...state,
        eventos: state.eventos.filter(
          (evento) => evento.id !== action.contenido
        ),
      };
      case "GET_EVENTOBYID":
        return {
          ...state,
          evento: state.eventos.filter(
            (evento) => evento.id === action.contenido
          ),
        };
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
