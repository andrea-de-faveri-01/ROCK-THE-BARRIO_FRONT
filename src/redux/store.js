import { configureStore } from "@reduxjs/toolkit";
import { eventosReducer } from "./eventos/eventos.reducer";
import { comentariosReducer } from "./comentarios/comentarios.reducer";
import { usuariosReducer } from "./usuarios/usuarios.reducer";

export default configureStore({
  reducer: {
    eventosReducer: eventosReducer,
    comentariosReducer: comentariosReducer,
    usuariosReducer: usuariosReducer
  },
});
