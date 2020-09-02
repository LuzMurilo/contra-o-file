import React from "react"
import style from "../styles/about.module.scss"

const About = () => {
    return (
        <body>
            <div className={style.transicao} />
            <div className={style.titulo} />
            <div className={style.caixa1}>
                <p className={style.texto1}>
                    <p>
                        <b>
                            Comida do Bem
                        </b>
                        <p>
                            O restaurante Contra o Filé é um restaurante vegano 
                            saudável, de custo acessível e que respeita as pessoas e o meio-ambiente.
                        </p>
                    </p>
                    <p>
                        <b>Produtores locais e orgânicos</b>
                        <p>
                            Trabalhamos com produtos de agricultura familiar e incentivamos a produção de
                             comida local.
                        </p>
                    </p>
                    
                </p>
                <div className={style.imagem1} />
            </div>
            <div className={style.caixa2}>
                <p className={style.texto2}>
                    <p> 
                        <b>Comida vegana saudável e fresca</b>
                        <p>
                            Não importa se você começou ontem no veganismo ou já está no caminho a tempos,
                             temos algo que vai agradar o seu paladar.
                        </p> 
                    </p>
                    <p>
                        <b>Acessível a todos</b>
                        <p>
                            Comida vegana não precisa ser cara e inacessível,
                            o Contra o Filé tenta democratizar o acesso a esse tipo de produto. 
                        </p>
                    </p>
                  
                </p>
                <div className={style.imagem2} />
            </div>
        </body>
    )
}

export default About