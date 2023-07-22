import ProjectItem from "../../../features/ProjectItem"
import { ProjectsHeader } from "../../../entities/projectsHeader"
import { data } from "../data/dataProjects"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ViewProjectSlice } from "../../model/slice"
import { useCallback, useEffect, useState } from "react"


export const Projects: React.FC = () => {


    return(
        <>
            <div className="projects">
                <ProjectsHeader />
                {data.map(item => <ProjectItem key={item.id} item={item}/>)}
            </div>
        </>
    )
}