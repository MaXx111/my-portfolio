interface DescriptionItemProps {
    description: string
}


export const DescriptionItem = ({description}: DescriptionItemProps) => {
    return(
        <>
            <p className="info-description Raleway-regular">{description}</p>
        </>
    )
}