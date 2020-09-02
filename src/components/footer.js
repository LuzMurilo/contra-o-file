import React from "react"
import style from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.logo} />
            <div className={style.line} />
            <div className={style.adress}>
                Endereço: Rua Alfredo Lopes 1717 - CEP 13560460
            </div>
            <div className={style.signature}>
                Criado por LuzMurilo
            </div>
        </footer>
    )
}

export default Footer
