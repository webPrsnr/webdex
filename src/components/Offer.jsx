import ofr from "./Offer.module.css"

export const Offer = () => {
    return(
        <section className={ofr.outter}>
            <div className={ofr.wrapper}>
                <div className={ofr.sub}><span>Как мы</span></div>
                <h3 className={ofr.main}>Работаем</h3>
                <p className={ofr.descr}>Наша логистическая компания организует поставку, грузоперевозку и таможенную очистку грузов. Нам доверяют грузы различного назначения: компьютеры, серверы и комплектующие к ним, системы видеонаблюдения, комплектующие для телекоммуникационных систем связи, досмотровое рентгеновское оборудование, сельскохозяйственное оборудование и комплектующие к нему, хозяйственные товары бытового назначения, продовольственные товары и прочие грузы.</p>
                <div className={ofr.container}>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>01</span>
                        </div>
                        <div className={ofr.element__block}>
                            <h4 className={ofr.element__name}>Расчет сделки</h4>
                            <p className={ofr.element__descr}>Клиент заполняет Заявку.
    Наш Менеджер рассчитывает стоимость перевозки и сопутствующих услуг.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>02</span>
                        </div>
                        <div className={ofr.element__block}>
                            <h4 className={ofr.element__name}>Расчет сделки</h4>
                            <p className={ofr.element__descr}>Клиент заполняет Заявку.
    Наш Менеджер рассчитывает стоимость перевозки и сопутствующих услуг.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>03</span>
                        </div>
                        <div className={ofr.element__block}>
                        <h4 className={ofr.element__name}>Расчет сделки</h4>
                        <p className={ofr.element__descr}>Клиент заполняет Заявку.
Наш Менеджер рассчитывает стоимость перевозки и сопутствующих услуг.</p>
                        </div>
                    </div>
                    <div className={ofr.element}>
                        <div className={ofr.element__step}>
                            <span>04</span>
                        </div>
                        <div className={ofr.element__block}>
                        <h4 className={ofr.element__name}>Расчет сделки</h4>
                        <p className={ofr.element__descr}>Клиент заполняет Заявку.
Наш Менеджер рассчитывает стоимость перевозки и сопутствующих услуг.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}