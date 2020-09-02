import React from "react"
import style from "../styles/cardapio.module.scss"

const Cardapio = () => {
    return (
        <body>
            <div className={style.titulo} />
            <div className={style.cardPrincipal}>
                <p className={style.cardTitulo}>
                    Segunda-feira
                </p>
                <p className={style.cardContent}>
                    <p>
                        <b>
                            Entrada:
                        </b>
                        <text>
                            Salada de Rúcula com Tomates
                        </text>
                    </p>
                    <p>
                        <b>
                            Prato Principal:
                        </b>
                        <text>
                            Mandioca cozida com Brócolis
                        </text>
                    </p>
                    <p>
                        <b>
                            Guarnição:
                        </b>
                        <text>
                            Quinua refogada
                        </text>
                    </p>
                    <p>
                        <b>
                            Acompanhamentos:
                        </b>
                        <text>
                            Arroz integral e Feijão branco
                        </text>
                    </p>
                </p>
            </div>
            <div className={style.bgPreco}>
                <p className={style.tituloPreco}>
                    Marmitex
                </p>
                <ul className={style.listaPreco}>
                    <li className={style.itemPreco}>
                        Pequena
                        R$ 10,00
                    </li>
                    <li className={style.itemPreco}>
                        Média
                        R$ 14,00
                    </li>
                    <li className={style.itemPreco}>
                        Grande
                        R$ 18,00
                    </li>
                    <p className={style.subitem}>
                        (Serve duas pessoas)
                    </p>
                </ul>
                <div className={style.line1} />
                <div className={style.line2} />
            </div>
            <div className={style.botaoSeg}>
                Segunda-feira
            </div>
            <div className={style.botaoTer}>
                Terça-feira
            </div>
            <div className={style.botaoQua}>
                Quarta-feira
            </div>
            <div className={style.botaoQui}>
                Quinta-feira
            </div>
            <div className={style.botaoSex}>
                Sexta-feira
            </div>
            <div className={style.botaoSab}>
                Sábado
            </div>
            
        </body>
    )
}

export default Cardapio