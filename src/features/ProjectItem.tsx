import { ProjectInfo } from "../entities/projectInfo"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import ProjectItemHeader from "../entities/projectItemHeader";

import React, { useState } from 'react'
import { ViewProjectSlice } from "../widgets/model/slice";
import { ProjectProps } from "../widgets/model/type";

interface ProjectItemProps {
    item: ProjectProps
}

const ProjectItem: React.FC<ProjectItemProps> = ({item}) => {
    const {activeProject} = useAppSelector(state => state.ViewProjectReducer)

    const dispatch = useAppDispatch();

    const [color, setColor] = useState('#000')

    const hoverProject = {
        bgImg: "./Снимок экрана 2023-07-22 в 19.13.57.png",
        title: '',
        allow: false
    }

    const onHoverEnter = () => {
        dispatch(ViewProjectSlice.actions.mouseEnter({bgImg: item.bgImg, title: item.title}))
        setColor(item.colorTitle)
    }

    const onHoverLeave = () => {
        dispatch(ViewProjectSlice.actions.mouseLeave(hoverProject))
        setColor('#000')
    }

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