import hdr from "./Header.module.css"
export const Header = ({children}) => {
    return(
        <div className={hdr.outter}>
            <div className={hdr.wrapper}>
            <header className={hdr.header} >
                <nav>
                    <ul className={hdr.list}>
                        <li className={hdr.li}><a className={hdr.a} href="#">LOGO</a></li>
                        <li className={hdr.li}><a className={hdr.a} href="#">О нас</a></li>
                        <li className={hdr.li}><a className={hdr.a} href="#">Услуги</a></li>
                        <li className={hdr.li}><a className={hdr.a} href="#">Решение для бизнеса</a></li>
                    </ul>
                </nav>
            </header>
                {children}
            </div>
        </div>
    )
}