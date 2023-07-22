import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    projects: [{
        title: string
    }],
    activeColor: string,
    activeProject: number | boolean
}

const initialState: initialStateProps = {
    projects: [{
        title: "k"
    }],
    activeColor: "#000",
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
            state.activeColor = action.payload

        },
        mouseLeave(state) {
            state.activeColor = "#000"
        }
    }
})

export default ViewProjectSlice.reducer