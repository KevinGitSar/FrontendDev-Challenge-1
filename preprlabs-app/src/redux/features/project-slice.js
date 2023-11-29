import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
}
export const project = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {
        cancelProject: () => {
            return initialState;
        },

        createProject: (state, action) =>{
            return {projects: [...state.projects, action.payload]};
        },
    },
});


export const { cancelProject, createProject } = project.actions;
export default project.reducer;