import wrk from "./Work.module.css"
import russia from "../assets/mask.svg"
export const Work = () => {
    return(
        <section className={wrk.work}>
            <div className={wrk.main__wrapper}>
                <div className={wrk.text}>
                    <div><span className={wrk.sub__text}>Поможем найти любого работника!</span></div>
                    <div className={wrk.main__text}><h1>Весь комплекс услуг <span>рекрутинга</span></h1></div>
                    <ul className={wrk.list}>
                        <li>Нам доверяют организацию поставок и грузоперевозок начиная от бытовых товаров и заканчивая дорогостоящим оборудованием.</li>
                        <li>Осуществляем полный комплекс услуг “под ключ” от закупки у поставщика до доставки на ваш адрес . Можем подключиться на любом этапе грузоперевозки.</li>
                        <li>ВЭД - аутсорсинг</li>
                        <li>Lorem Lorem</li>
                    </ul>
                </div>
                <div className={wrk.phone}><a href="tel+796260232">+7 (962) 601-29-32</a></div>
            </div>
           </section>
)}