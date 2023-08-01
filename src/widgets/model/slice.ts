import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    hoverProject: {
        bgImg: string,
        title: string,
        color: string,
        id: number
        allow: boolean
    },
    activeProject: number | boolean
}

const initialState: initialStateProps = {
    hoverProject: {
        bgImg: "./Снимок экрана 2023-07-22 в 19.13.57.png",
        title: '',
        color: '',
        id: 0,
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
            state.hoverProject.bgImg = action.payload.bgImg
            state.hoverProject.title = action.payload.title
            state.hoverProject.color = action.payload.color
            state.hoverProject.id = action.payload.id
            state.hoverProject.allow = true
        },
        mouseLeave(state, action) {
            state.hoverProject.bgImg = action.payload.bgImg,
            state.hoverProject.title = action.payload.title,
            state.hoverProject.color = action.payload.color
            state.hoverProject.id = action.payload.id
            state.hoverProject.allow = action.payload.allow
        }
    }
})

export default ViewProjectSlice.reducer