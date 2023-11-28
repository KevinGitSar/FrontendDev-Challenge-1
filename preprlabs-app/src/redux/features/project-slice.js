import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    title: '',
    description: '',
    outsideView: 'outsideViewAllowed',
    outsideDownload: 'outsideDownloadAllowed',
    slug: '',
    challenge: '',
    lab: '',
    dropzoneFile: '',
    recruitStatus: '',
    leader: '',
}
export const project = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {
        cancelProject: () => {
            return initialState;
        },

        createProject: (state, action) =>{
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                outsideView: action.payload.outsideView,
                outsideDownload: action.payload.outsideDownload,
                slug: action.payload.slug,
                challenge: action.payload.challenge,
                lab: action.payload.lab,
                dropzoneFile: action.payload.dropzoneFile,
                recruitStatus: action.payload.recruitStatus,
                leader: action.payload.leader,
            }
        },
    },
});


export const { cancelProject, createProject } = project.actions;
export default project.reducer;