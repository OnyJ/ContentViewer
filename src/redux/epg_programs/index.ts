import { createSlice } from '@reduxjs/toolkit';

interface EPGProgramsState {
    data: Record<string, unknown>;
}

const initialState: EPGProgramsState = {
    data: {},
};

export const EPGPrograms = createSlice({
    name: 'EPGPrograms',
    initialState,
    reducers: {
        saveEPGPrograms: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { saveEPGPrograms } = EPGPrograms.actions;

export default EPGPrograms.reducer;
