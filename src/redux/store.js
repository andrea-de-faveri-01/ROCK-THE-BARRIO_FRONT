import { configureStore } from "@reduxjs/toolkit";
import { eventosReducer } from "./eventos/eventos.reducer";


export default configureStore({
    reducer: {
        eventos: eventosReducer
    },

})