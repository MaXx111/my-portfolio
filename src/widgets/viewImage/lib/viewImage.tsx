import { useEffect, useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { ImageTitle } from "../../../shared/imageTitle"


export const ViewImage: React.FC = () => {

    const {hoverProject} = useAppSelector(state => state.ViewProjectReducer)

    return(
        <>
            <div className="col-1" style={{backgroundColor: '#000'}}>
                {hoverProject.allow && <img src={`${hoverProject.bgImg}`} alt="" className="viewImg"/>}
                {hoverProject.allow && <ImageTitle />}
            </div>
        </>
    )
}