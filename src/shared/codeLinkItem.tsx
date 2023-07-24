interface CodeLinkItemProps {
    link: string,
    color: string
}

export const CodeLinkItem: React.FC<CodeLinkItemProps> = ({link, color}) => {

    return(
        <>
            <li className="list-item">
                <a href={link} className="list-item-link"><span style={{color: color}}>Code:</span></a>
            </li>
        </>
    )
}