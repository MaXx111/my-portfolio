import { ProjectInfo } from "../entities/projectInfo"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import ProjectItemHeader from "../entities/projectItemHeader";

import React, { useCallback, useEffect, useState } from 'react'
import { ViewProjectSlice } from "../widgets/model/slice";

interface ProjectItemProps {
    item: {
        title: string,
        info: string,
        background: string,
        technologies: {
            html: boolean
        },
        id: number
    }, 
}

const ProjectItem: React.FC<ProjectItemProps> = ({item}) => {
    const {activeProject} = useAppSelector(state => state.ViewProjectReducer)

    const dispatch = useAppDispatch();

    const [color, setColor] = useState('#000')

    const onHoverEnter = (back: string) => {
        dispatch(ViewProjectSlice.actions.mouseEnter(back))
        setColor(item.background)
    }

    const onHoverLeave = () => {
        dispatch(ViewProjectSlice.actions.mouseLeave())
        setColor('#000')
    }

    return(
        <>
        <div className="project" onMouseEnter={() => onHoverEnter(item.background)} onMouseLeave={() => onHoverLeave()}>
            <ProjectItemHeader project={item} color={color}/>
            {activeProject === item.id && <ProjectInfo info={item.info}/>}
        </div>
        </>
    )
}

export default React.memo(ProjectItem)