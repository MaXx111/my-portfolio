import { AboutMe } from "../../entities/aboutMe"
import { Projects } from "../../widgets/projects/lib/projects"
import { ViewImage } from "../../widgets/viewImage/lib/viewImage"


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