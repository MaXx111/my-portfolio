interface ProjectInfoProps {
    info: string
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({info}) => {

    return(
            <>
                <div className="info">
                    <p>{info}</p>
                </div>
            </>
        )
}