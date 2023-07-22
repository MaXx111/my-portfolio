import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    projects: [{
        title: string
    }],
    hoverProject: {
        background: string,
        title: string,
        allow: boolean
    },
    activeProject: number | boolean
}

const initialState: initialStateProps = {
    projects: [{
        title: "k"
    }],
    hoverProject: {
        background: "#000",
        title: 'Hello',
        allow: false
    },
    activeProject: false
}

export const ViewProjectSlice = createSlice({
    name: 'ViewProject',
    initialState,
    reducers: {
        clickOnProject(state, action) {
            state.activeProject = action.payload
        },
        mouseEnter(state, action) {
            state.hoverProject.background = action.payload.background
            state.hoverProject.title = action.payload.title
            state.hoverProject.allow = true

        },
        mouseLeave(state) {
            state.hoverProject = initialState.hoverProject
        }
    }
})

export default ViewProjectSlice.reducer