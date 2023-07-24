

export interface ProjectProps {
    id: number,
    title: string,
    info: string,
    bgImg: string,
    colorTitle: string
    technologies: {
        html: boolean,
        css: boolean
    }
}