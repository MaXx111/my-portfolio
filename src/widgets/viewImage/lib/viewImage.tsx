import { useAppSelector } from "../../../app/hooks"
import { data } from "../../projects/data/dataProjects"
import { ViewItem } from "./viewItem"


export const ViewImage: React.FC = () => {

    const {hoverProject} = useAppSelector(state => state.ViewProjectReducer)

    return(
        <>
            <div className="col-1" style={{backgroundColor: 'mistyrose'}}>
                {hoverProject.allow && <div style={{backgroundImage: `url(${hoverProject.bgImg})`}}className="viewImg"></div>}
                <div className="view-items">
                    {data.map(item => <ViewItem key={item.id} item={item}/>)}
                </div>
            </div>
        </>
    )
}