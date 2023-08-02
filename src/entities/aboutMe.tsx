import { data } from "../data/dataProjects"

export const AboutMe: React.FC = () => {

    

    return(
        <>
            <div className="about-me">  
                <h1 className="about-me_title Menlo-regular">Портфолио<br/> Frontend-разработчика</h1>
                <span>---</span>
                    <br/>
                <div className="total_info">
                    <span className="total Menlo-regular">{data.length}</span>
                    <span className="total_text Menlo-regular">Проектов в портфолио</span>
                    <span className="total_text Menlo-regular">Последнее обновление 1 августа 2023 года</span>
                    <span className="total_text text-end Menlo-regular">Подготовлено <a href="" className="total-link">Максимом Сидоровым</a></span>
                </div>
            </div>  
        </>
    )
}