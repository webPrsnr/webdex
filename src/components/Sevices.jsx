import srvc from "./Services.module.css"
import image from "../assets/test.png"

export const Services = () => {
    return(

        <section className={srvc.outer}>
            <div className={srvc.wrapper}>
                <div className={srvc.sub}><span>Как мы</span></div>
                <h3 className={srvc.main}>Работаем</h3>
                <p className={srvc.descr}>Наша логистическая компания оказывает услуги ВЭД аутсорсинга и транспортной логистики. 
    Наши менеджеры урегулируют все вопросы по ВЭД и организуют международную грузоперевозку любого товара, в том числе: любой сложности и любым видом транспорта, позволяя Вашей организации сконцентрироваться на ведении собственного  бизнеса.  
    Мы возьмем на себя как организацию разовой поставки, так и обеспечение бесперебойного снабжения Вашего бизнеса товарами, сырьем,  оборудованием. Мы можем осуществить доставку товаров из-за рубежа «под ключ»: поиск поставщика, заключение контракта (как на себя, так и на Клиента), валютный перевод, сертификация, таможенная очистка, доставка “от двери до двери”.
    </p>
            </div>
            <div className={srvc.offer}>
                <div className={srvc.offer__image_place}>
                    <img src={image} alt="" />
                </div>
               <div className={srvc.offer__text_place}>
                    <h4 className={srvc.offer__title}>Контрактная логистика</h4>
                    <ul className={srvc.offer__nav}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vel.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <div className={srvc.next}><a href="#">Следущее</a></div>
               </div>
            </div>
        </section>
    )
}