import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./carrinho/carrinhoSlice";
const store = configureStore({
    reducer: { carrinho: carrinhoSlice.reducer },
});

export default store;