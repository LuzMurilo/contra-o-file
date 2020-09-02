import React from "react"
import style from "../styles/contact.module.scss"

const Contact = () => {
    return (
        <body>
            <div className={style.titulo} />
            <div className={style.bgContato}>
                <div className={style.logoWhats} />
                <div className={style.clockIcon} />
                <a className={style.logoIfood} href="https://www.ifood.com.br" target="_blank"/>
                <p className={style.telefone}>
                    (16) 98765-1234
                </p>
                <p className={style.horario}>
                    Seg - Sáb: 11:00 às 15:00 
                </p>
                <p className={style.textoIfood}>
                    Peça também pelo Ifood:
                </p>
            </div>
        </body>
    )
}

export default Contact