import { useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { CSSTransition } from 'react-transition-group'
import { ImageTitle } from "../../../shared/imageTitle"


export const ViewImage: React.FC = () => {

    const {hoverProject} = useAppSelector(state => state.ViewProjectReducer)

    return(
        <>
            <div className="col-1" style={{ background: hoverProject.background }}>
                {hoverProject.allow && <ImageTitle />}
                
            </div>
        </>
    )
}