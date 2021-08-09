import { createSlice } from '@reduxjs/toolkit';

interface VODContentState {
    data: Record<string, unknown>;
}

const initialState: VODContentState = {
    data: {},
};

export const VODContent = createSlice({
    name: 'VODContent',
    initialState,
    reducers: {
        saveVODContent: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { saveVODContent } = VODContent.actions;

export default VODContent.reducer;
