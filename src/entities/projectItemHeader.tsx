import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useRef, useState } from 'react';
import { ViewProjectSlice } from '../widgets/model/slice';
import React from 'react'

interface ProjectItemHeaderProps {
    project: any,
    color: string
}

const ProjectItemHeader: React.FC<ProjectItemHeaderProps> = ({project, color}) => {

    const dispatch = useAppDispatch()

    const {activeProject} = useAppSelector(state => state.ViewProjectReducer)

    const [cursor, setCursor] = useState('auto')

    const myRef = useRef<HTMLDivElement>(null)
   
    const clickHandler = (id: number) => {
        if(activeProject == id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(false))
            return
        }

        if(activeProject !== id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(project.id))

            myRef.current?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    const enterHandler = () => {
        setCursor('pointer')
    }

    const leaveHandler = () => {
        setCursor('auto')
    }

    return(
        <>
            <div className="project-header" style={{color: color, cursor: cursor}} 
            ref={myRef} 
            onClick={() => clickHandler(project.id)}
            onMouseEnter={() => enterHandler()}
            onMouseLeave={() => leaveHandler()}
            >
                <p className="project-header_title">{project.title}</p>
                <ul className="project-header_technologies">
                    {project.technologies.html &&  <HtmlIcon />}
                    {project.technologies.css &&  <CssIcon />}
                </ul>
            </div>
        </>
    )
}

export default React.memo(ProjectItemHeader)