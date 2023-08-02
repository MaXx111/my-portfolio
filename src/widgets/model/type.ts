

export interface ProjectProps {
    id: number,
    title: string,
    info: {
        description: string[],
        deploy: string,
        code: string
    },
    bgImg: string,
    colorTitle: string
    technologies: {
        html: boolean,
        css: boolean,
        react: boolean,
        redux: boolean,
        ts: boolean,
        js:boolean
    }
}