import { data } from "../data/dataProjects"

export const AboutMe: React.FC = () => {

    

    return(
        <>
            <div className="about-me">  
                <h1 className="about-me_title">Портфолио<br/> Frontend-разработчика</h1>
                <span>---</span>
                    <br/>
                <div className="total_info">
                    <span className="total">{data.length}</span>
                    <span className="total_text">Проектов в портфолио</span>
                    <span className="total_text">Последнее обновление 1 августа 2023 года</span>
                    <span className="total_text text-end">Подготовлено <a href="" className="total-link">Максимом Сидоровым</a></span>
                </div>
            </div>  
        </>
    )
}