import ProjectItem from "./lib/ProjectItem"
import { data } from "../../data/dataProjects"

export const Projects: React.FC = () => {


    return(
        <>
            <div className="projects">
                <div className="projects-header">
                    <span className="projects-header_text Raleway-regular">ПРОЕКТЫ</span>
                    <span className="projects-header_text Raleway-regular">ТЕХНОЛОГИИ</span>
                </div>
                {data.map(item => <ProjectItem key={item.id} item={item}/>)}
            </div>
        </>
    )
}