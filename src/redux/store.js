import { configureStore } from "@reduxjs/toolkit";
import { eventosReducer } from "./eventos/eventos.reducer";
import { comentariosReducer } from "./comentarios/comentarios.reducer";

export default configureStore({
  reducer: {
    eventosReducer: eventosReducer,
    comentariosReducers: comentariosReducer
  },
});
