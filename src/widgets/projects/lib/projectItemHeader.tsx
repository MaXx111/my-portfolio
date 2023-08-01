import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';

import { FaReact } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiRedux } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useState } from 'react';
import { ViewProjectSlice } from '../../model/slice';
import React from 'react'

interface ProjectItemHeaderProps {
    project: any,
    color: string
}

const ProjectItemHeader: React.FC<ProjectItemHeaderProps> = ({project, color}) => {

    const dispatch = useAppDispatch()

    const {activeProject} = useAppSelector(state => state.ViewProjectReducer)

    const [cursor, setCursor] = useState('auto')
   
    const clickHandler = (id: number) => {
        if(activeProject == id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(false))
            return
        }

        if(activeProject !== id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(project.id))
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
            onClick={() => clickHandler(project.id)}
            onMouseEnter={() => enterHandler()}
            onMouseLeave={() => leaveHandler()}
            >
                <h3 className="project-header_title">{project.title}</h3>
                <ul className="project-header_technologies">
                    {project.technologies.html &&  <HtmlIcon />}
                    {project.technologies.css &&  <CssIcon />}
                    {project.technologies.react && <FaReact />}
                    {project.technologies.ts && <BiLogoTypescript />}
                    {project.technologies.redux && <SiRedux />}
                    {project.technologies.js && <DiJavascript1 />}
                </ul>
            </div>
        </>
    )
}

export default React.memo(ProjectItemHeader)