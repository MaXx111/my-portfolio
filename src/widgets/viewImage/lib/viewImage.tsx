import { useAppSelector } from "../../../app/hooks"

export const ViewImage: React.FC = () => {

    const {activeColor} = useAppSelector(state => state.ViewProjectReducer)

    return(
        <>
            <div className="col-1" style={{ background: activeColor }}>
                ViewImage
            </div>
        </>
    )
}