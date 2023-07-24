import { createSlice } from "@reduxjs/toolkit";
import { ProjectProps } from "./type";

interface initialStateProps {
    hoverProject: {
        bgImg: string,
        title: string,
        allow: boolean
    },
    activeProject: number | boolean
}

const initialState: initialStateProps = {
    hoverProject: {
        bgImg: "./Снимок экрана 2023-07-22 в 19.13.57.png",
        title: '',
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
            state.hoverProject.allow = true

        },
        mouseLeave(state, action) {
            console.log(`j`)
            state.hoverProject.bgImg = action.payload.bgImg,
            state.hoverProject.title = action.payload.title,
            state.hoverProject.allow = action.payload.allow
        }
    }
})

export default ViewProjectSlice.reducer