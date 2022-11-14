import prc from "./Pricing.module.css"

export const Pricing = () => {
    return(
        <section className={prc.wrapper}>
            <div className={prc.head}>
                <span className={prc.head__sub}>Решения</span>
                <h2 className={prc.head__main}>Для бизнеса</h2>
                <p className={prc.head__descr}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos totam dolorum earum beatae blanditiis! Eum, sequi perferendis! Est fugiat odio, ducimus, consequuntur ipsam, earum accusantium corrupti ullam ad commodi amet!</p>
            </div>
            <div className={prc.container}>
                <div className={prc.container__area}>
                    <div className={prc.container__img}>
                        <span className={prc.container__price}>₽ 3000</span>
                    </div>
                    <div className={prc.container__descr}>
                        <h4 className={prc.descr__head}>Комплекс 1</h4>
                        <p className={prc.descr__sub}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium accusamus eum totam saepe.</p>
                    </div>
                </div>
                <div className={prc.container__area}>
                    <div className={`${prc.container__img} ${prc.container__img_vim}`}>
                        <span className={prc.container__price}>₽ 6000</span>
                    </div>
                    <div className={prc.container__descr}>
                        <h4 className={prc.descr__head}>Комплекс 2</h4>
                        <p className={prc.descr__sub}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium accusamus eum totam saepe.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}