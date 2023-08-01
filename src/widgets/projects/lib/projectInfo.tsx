
interface ProjectInfoProps {
    info: {
            description: string,
            deploy: string,
            code: string
    },
    color: string
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({info, color}) => {

    return(
            <>
                <div className="info">
                    <p className="info-description">{info.description}</p>
                    <ul className="info-links">
                        <li className="list-item">
                            <a href={info.deploy} className="list-item-link"><span style={{color: color}}>Deploy</span></a>
                        </li>
                        <li className="list-item">
                            <a href={info.code} className="list-item-link"><span style={{color: color}}>Code:</span></a>
                        </li>
                    </ul>
                </div>
            </>
        )
}