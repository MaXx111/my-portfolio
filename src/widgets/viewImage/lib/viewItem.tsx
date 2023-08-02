import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ViewProjectSlice } from "../../model/slice";

interface ViewItemProps {
    item: any
}

export const ViewItem: React.FC<ViewItemProps> = ({item}) => {

    const dispatch = useAppDispatch();

    const {hoverProject, activeProject} = useAppSelector(state => state.ViewProjectReducer);

    const [color, setColor] = useState("mistyrose")
    const [cursor, setCursor] = useState('auto')

    const initialHoverProject = {
        bgImg: "./Снимок экрана 2023-07-22 в 19.13.57.png",
        title: '',
        color: '#000',
        id: 0,
        allow: false
    }

    const hoverEnterHandler = () => {
        const hoverPrj = {
            bgImg: item.bgImg, 
            title: item.title, 
            color: item.colorTitle, 
            id: item.id
        }
        setCursor('pointer')
        dispatch(ViewProjectSlice.actions.mouseEnter(hoverPrj))
    }

    const hoverLeaveHandler = () => {
        setCursor('auto')
        dispatch(ViewProjectSlice.actions.mouseLeave(initialHoverProject))
    }

    const clickHandler = (id: number) => {
        if(activeProject == id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(false))
            return
        }

        if(activeProject !== id) {
            dispatch(ViewProjectSlice.actions.clickOnProject(item.id))
        }
    }

    useEffect(() => {
        if(item.id == hoverProject.id) {
            setColor(hoverProject.color)
        } else {
            setColor('mistyrose')
        }
    },[hoverProject])
   
    return(
        <>
            <div className="view-item" 
            onMouseEnter={() => hoverEnterHandler()} 
            onMouseLeave={() => hoverLeaveHandler()} 
            onClick={() => clickHandler(item.id)}
            style={{backgroundColor: color, cursor: cursor}}
            >
                <span className="view-item-txt Raleway-regular" >{item.title}</span>
            </div>
        </>
    )
}