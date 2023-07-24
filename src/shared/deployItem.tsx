interface DeployItemProps{
    link: string,
    color: string
}

export const DeployItem: React.FC<DeployItemProps> = ({link, color}) => {

    return(
        <>
        <li className="list-item">
            <a href={link} className="list-item-link"><span style={{color: color}}>Deploy</span></a>
        </li>
        </>
    )
}