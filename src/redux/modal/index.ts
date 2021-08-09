import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
    show: boolean;
    content: Record<string, unknown>;
}

const initialState: ModalState = {
    show: false,
    content: {},
};

export const Modal = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        setShowModal: (state, action) => {
            state.show = action.payload.show;
            state.content = action.payload.content;
        },
    },
});

export const { setShowModal } = Modal.actions;

export default Modal.reducer;
