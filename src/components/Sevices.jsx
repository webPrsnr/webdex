import srvc from "./Services.module.css"
import image from "../assets/widget.png"
import image1 from "../assets/trello.png"
import { useState } from "react"

export const Services = () => {
    const someData = [
        {
            title: "Расширение",
            img: image,
            li:[
                "Первым делом необходимо ввести ваш секретный ключ в графе Api Key.",
                "Парсинг осуществляется обводкой необходимой области.",
                "При выделении ключевого слова появляется форма ввода, куда необходимо ввести заголовок критерия.",
                "При нажатии клавиши действия или обводки другой области элемент сохраняется.",
                "Открытие расширение осуществляется на нажатии кнопки около панели адресса.",
                "При необходимости можно отредактировать уже готовые элементы или же удалить.",
                "При составлении готового резюме кандидата необходимо нажать кнопку Push."
            ]
        },
        {
            title: "Клиент",
            img: image1,
            li:[
                "Клиент представляет из себя доску",
                "Столбцы представляют из себя стадии приема кандидата на итоговую работу",
                "Все заного поступающие анкеты попадают в столбец Входящие вакансии",
                "По ходу собеседования, рекрутер перемещает анкету по доске на соответствующий столбец",
                "Можно расскрыть анкеты, для получения более информативного описания кандидата",
                "Каждый элемент столбца может подвергаться редактированию (обновление, удаление)"
            ]
        }
    ]
    const [flag, setFlag] = useState(someData[0])
    const [take, setTake] = useState(true)
    
    const changeTake = (event) => {
        event.preventDefault()
        if(take){
            setFlag(someData[1])
            setTake(false)
            return
        }

        setFlag(someData[0])
        setTake(true)
    }

    return(
        <section id="services" className={srvc.outer}>
            <div className={srvc.wrapper}>
                <div className={srvc.sub}><span>Что мы</span></div>
                <h3 className={srvc.main}>Предлагаем</h3>
                <p className={srvc.descr}>Наша сервис предоставляет услуги по парсингу резюме кандидата по интересующим критериям (ключевым словам). Сервис не требует особых навыков со стороны рекрутера. Основная работа осуществляется внутри браузера: <span className={srvc.descr__point}>1)</span> разбор резюме на наличие интересующих ключевых слов <span className={srvc.descr__point}>2)</span> формирование из входящего потока элементов резюме кандидата <span className={srvc.descr__point}>3)</span> работа внутри сервиса по мониторингу состояния резюме кандидата (редактирования резюме, перемещение по внутренней доске, удалении).
    </p>
            </div>
            <div className={srvc.offer}>
                <div className={srvc.offer__image_place}>
                    <img src={flag.img} alt="" />
                </div>
               <div className={srvc.offer__text_place}>
                    <h4 className={srvc.offer__title}>{flag.title}</h4>
                    <ul className={srvc.offer__nav}>
                        {flag.li.map((el, index) => {
                            return(<li key={index}>{el}</li>)
                        })}
                    </ul>
                    <div className={srvc.next}><a href="#" onClick={changeTake}>Следущее</a></div>
               </div>
            </div>
        </section>
    )
}