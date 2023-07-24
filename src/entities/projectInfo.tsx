import { CodeLinkItem } from "../shared/codeLinkItem"
import { DeployItem } from "../shared/deployItem"
import { ProjectProps } from "../widgets/model/type"

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
                        <DeployItem link={info.deploy} color={color}/>
                        <CodeLinkItem link={info.code} color={color}/>
                    </ul>
                </div>
            </>
        )
}