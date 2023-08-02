import { DescriptionItem } from "./descriptionItem"

interface ProjectInfoProps {
    info: {
            description: string[],
            deploy: string,
            code: string
    },
    color: string
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({info, color}) => {

    return(
            <>
                <div className="info">
                    {info.description.map((item, index) => <DescriptionItem key={index} description={item}/>)}
                    <ul className="info-links">
                        <li className="list-item">
                            <span className='list-item-txt Raleway-regular'>Ссылка на 
                                <a href={info.deploy} style={{color: color}} className="list-item-link"> Deploy</a>
                            </span>
                        </li>
                        <li className="list-item">
                            <span className='list-item-txt Raleway-regular'> Так же ссылка на 
                                <a href={info.code} style={{color: color}} className="list-item-link"> code</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </>
        )
}