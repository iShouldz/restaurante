import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
    modalCarrinho: false, itens: []
};

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState: initialUsersState,
    reducers: {
        handleChangeModal(state) {
            state.modalCarrinho = !state.modalCarrinho
        },
        handleAddCart(state, actions) {
            state.itens.push(actions.payload)
        },
        handleRemoveCart(state, actions) {
            const index = state.itens.findIndex(item => item.id === actions.payload.id);
            if (index !== -1) {
                state.itens.splice(index, 1);
            }
        }
    },
});

export default carrinhoSlice;
export const carrinhoActions = carrinhoSlice.actions;