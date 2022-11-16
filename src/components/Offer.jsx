import ofr from "./Offer.module.css"

export const Offer = () => {
    return(
        <section id="offer" className={ofr.outter}>
            <div className={ofr.wrapper}>
                <div className={ofr.sub}><span>Как мы</span></div>
                <h3 className={ofr.main}>Работаем</h3>
                <p className={ofr.descr}>
                    Наша компания предоставляет комплекс сервисов по мониторингу соискателя внутри компании. 
                </p>
                <div className={ofr.container}>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>01</span>
                        </div>
                        <div className={ofr.element__block}>
                            <h4 className={ofr.element__name}>Выбор плана</h4>
                            <p className={ofr.element__descr}>Клиент выбирает интересующий План сервиса исходя из собственных материальных возможностей.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>02</span>
                        </div>
                        <div className={ofr.element__block}>
                            <h4 className={ofr.element__name}>Подписание договора</h4>
                            <p className={ofr.element__descr}>Клиент заполняет Заявку.
    Наш Менеджер рассчитывает стоимость сервиса и сопутствующих услуг.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>03</span>
                        </div>
                        <div className={ofr.element__block}>
                        <h4 className={ofr.element__name}>Оплата сделки</h4>
                        <p className={ofr.element__descr}>На основе заключенного договора заключается контракт и осуществляется перевод.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>04</span>
                        </div>
                        <div className={ofr.element__block}>
                        <h4 className={ofr.element__name}>Сопровождение</h4>
                        <p className={ofr.element__descr}>Наш Менеджер подготавливает и передает Клиенту полный комплект необходимых документов по выполненному контракту</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}