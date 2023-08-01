import { AboutMe } from "../entities/aboutMe"
import { Projects } from "../widgets/projects/projects"
import { ViewImage } from "../widgets/viewImage/viewImage"


export const MainPage: React.FC = () => {

    return(
        <>
            <ViewImage/>
            <div className="col-2">
                <AboutMe />
                <Projects />
            </div>
        </>
    )
}