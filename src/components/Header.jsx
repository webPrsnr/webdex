import hdr from "./Header.module.css"

export const Header = ({children}) => {
    return(
        <div className={hdr.outter}>
            <div className={hdr.wrapper}>
            <header className={hdr.header} >
                <nav>
                    <ul className={hdr.list}>
                        <li className={hdr.li}><a className={hdr.a} href="#offer">О нас</a></li>
                        <li className={hdr.li}><a className={hdr.a} href="#services">Услуги</a></li>
                        <li className={hdr.li}><a className={hdr.a} href="#pricing">Решения</a></li>
                    </ul>
                </nav>
            </header>
                {children}
            </div>
        </div>
    )
}