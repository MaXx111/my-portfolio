import { ProjectInfo } from "./projectInfo"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import ProjectItemHeader from "./projectItemHeader";

import React, { useEffect, useState } from 'react'
import { ViewProjectSlice } from "../../model/slice";
import { ProjectProps } from "../../model/type";

interface ProjectItemProps {
    item: ProjectProps
}

const ProjectItem: React.FC<ProjectItemProps> = ({item}) => {
    const {activeProject, hoverProject} = useAppSelector(state => state.ViewProjectReducer)

    const dispatch = useAppDispatch();

    const [color, setColor] = useState('#000')

    const initialHoverProject = {
        bgImg: "./Снимок экрана 2023-07-22 в 19.13.57.png",
        title: '',
        color: '#000',
        id: 0,
        allow: false
    }

    const onHoverEnter = () => {
        const hoverPrj = {
            bgImg: item.bgImg, 
            title: item.title, 
            color: item.colorTitle, 
            id: item.id
        }
        dispatch(ViewProjectSlice.actions.mouseEnter(hoverPrj))
    }

    const onHoverLeave = () => {
        dispatch(ViewProjectSlice.actions.mouseLeave(initialHoverProject))
    }

    useEffect(()=> {
        if(item.id == hoverProject.id) {
            setColor(hoverProject.color)
        } else {
            setColor('#000')
        }
    }, [hoverProject])

    return(
        <>
        <div className="project" onMouseEnter={() => onHoverEnter()} onMouseLeave={() => onHoverLeave()}>
            <ProjectItemHeader project={item} color={color}/>
            {activeProject === item.id && <ProjectInfo info={item.info} color={item.colorTitle}/>}
        </div>
        </>
    )
}

export default React.memo(ProjectItem)