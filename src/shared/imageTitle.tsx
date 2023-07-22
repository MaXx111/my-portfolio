import { useAppSelector } from "../app/hooks"


export const ImageTitle: React.FC= () => {

    const {hoverProject} = useAppSelector(state => state.ViewProjectReducer)

    return (
        <>
        <h2 className="view-project_title">{hoverProject.title}</h2>
        </>
    )
}