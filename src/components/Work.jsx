import wrk from "./Work.module.css"
import russia from "../assets/mask.svg"
export const Work = () => {
    return(
        <section className={wrk.work}>
            <div className={wrk.main__wrapper}>
                <div className={wrk.text}>
                    <div><span className={wrk.sub__text}>Поможем найти работника!</span></div>
                    <div className={wrk.main__text}><h1>Удобный комплекс услуг <span>рекрутинга</span></h1></div>
                    <ul className={wrk.list}>
                        <li>Предоставляем спектр услуг по мониторингу резюме</li>
                        <li>Удобный парсинг на любых сервисов по поиску сотрудников</li>
                        <li>Полная поддержка на любом этапе мониторинга претендентов</li>
                        <li>Работаем по подписочной системе</li>
                    </ul>
                </div>
                <div className={wrk.phone}><a href="tel+796260232">+7 (962) 601-29-32</a></div>
            </div>
           </section>
)}