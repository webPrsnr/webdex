import qst from "./Questions.module.css"

export const Questions = () =>{

    return(
        <section className={qst.wrapper}>
            <div className={qst.outer}>
                <div className={qst.inner}>
                    <h4 className={qst.inner__main}>Остались вопросы?</h4>
                    <p className={qst.inner__text}>По всем вопросам, вы можете обратиться к менеджеру компании.
    Мы свяжемся с вами в удобное для вас время</p>
                    <div className={qst.container}>
                        <div className={qst.container__left}>
                            <input className={qst.container__left_text} type="text" placeholder="Ваше имя"/>
                            <input className={qst.container__left_text} type="email" placeholder="Email"/>
                        </div>
                        <div className={qst.container__right}>
                            <textarea className={qst.container__right_text} type="text" />
                        </div>
                    </div>
                    <button className={qst.container__btn}>Отправить</button>
                </div>
            </div>
        </section>
    )
}