import prc from "./Pricing.module.css"

export const Pricing = () => {
    return(
        <section id="pricing" className={prc.wrapper}>
            <div className={prc.head}>
                <span className={prc.head__sub}>Решения</span>
                <h2 className={prc.head__main}>Для бизнеса</h2>
                <p className={prc.head__descr}>Мы готовы предложить решения для Вашего бизнеса, а также предоставить полный комплекс сопутствующих услуг.</p>
            </div>
            <div className={prc.container}>
                <div className={prc.container__area}>
                    <div className={prc.container__img}>
                        <span className={prc.container__price}>₽ 3000/мес</span>
                    </div>
                    <div className={prc.container__descr}>
                        <h4 className={prc.descr__head}>Комплекс 1</h4>
                        <p className={prc.descr__sub}>Стандартный набор: Клиент + Расширение. Сюда также включена постоянная поддержка (обновления в штатном режиме).</p>
                    </div>
                </div>
                <div className={prc.container__area}>
                    <div className={`${prc.container__img} ${prc.container__img_vim}`}>
                        <span className={prc.container__price}>₽ 6000/мес</span>
                    </div>
                    <div className={prc.container__descr}>
                        <h4 className={prc.descr__head}>Комплекс 2</h4>
                        <p className={prc.descr__sub}>Продвинутый набор: Комплекс 1 + Личная настройка под нужды предприятия. Сюда также включена постоянная поддержка.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}