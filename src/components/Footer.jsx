import ftr from "./Footer.module.css"

export const Footer = () => {
    return(
        <section className={ftr.wrapper}>
            <hr className={ftr.line} />
            <h6 className={ftr.head}>Контакты</h6>
            <ul className={ftr.contacts}>
                <li className={`${ftr.contacts__el} ${ftr.contact} ${ftr.contact__name}`}>ООО «ЭМПИ Кодс»</li>
                <li className={`${ftr.contacts__el} ${ftr.contact} ${ftr.contact__INN}`}>ИНН 3221337</li>
                <li className={`${ftr.contacts__el} ${ftr.contact} ${ftr.contact__address}`}>428000, г. Чебоксары, пр-кт Максима Горького 26</li>
                <li className={`${ftr.contacts__el} ${ftr.contact} ${ftr.contact__mail}`}>info@testexpress.ru</li>
                <li className={`${ftr.contacts__el} ${ftr.contact} ${ftr.contact__time}`}>вт-вс 10:00-18:00</li>
            </ul>
        </section>
    )
}