import React, { useState } from 'react'
import { useEffect } from 'react'
import botaoBarra from '../images/botao-barra.png'
import style from "../styles/navBar.module.scss"

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openAviso, setOpenAviso] = useState(false);

    const handleClickMenu = () => setOpenMenu(!openMenu);
    const handleClickAviso = () => setOpenAviso(!openAviso);

    const handleClickInicio = () => window.scrollTo(0, 0);
    const handleClickQuemSomos = () => window.scrollTo(0, 660);
    const handleClickCardapio = () => window.scrollTo(0, 1600);
    const handleClickContato = () => window.scrollTo(0, 2350);


    return (
        <div className={style.navbar}>
            {openMenu ? (
                <div className={style.container} onMouseLeave={handleClickMenu}>
                    <nav>
                        <div className={style.logo} onClick={handleClickInicio}/>
                        <ul className={style.list}>
                            <li className={style.item} onClick={handleClickInicio}>
                                INÍCIO
                            </li>
                            <li className={style.item} onClick={handleClickQuemSomos}>
                                QUEM SOMOS
                            </li>
                            <li className={style.item} onClick={handleClickCardapio}>
                                CARDÁPIO
                            </li>
                            <li className={style.item} onClick={handleClickContato}>
                                CONTATO
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : 
            <div className={style.barHidden} onMouseEnter={handleClickMenu}>
            </div>
            }
            {openAviso ? (
                <div className={style.avisoBG}>
                    <div className={style.buttonExit} onClick={handleClickAviso} />
                    <p className={style.avisoText}>
                        Devido a pandemia da covid-19 estamos atendendo apenas por delivery.
                        Voltaremos a atender na loja presencial assim que a situação voltar ao normal.
                    </p>
                </div>
            ) : 
                <div className={style.aviso} onClick={handleClickAviso}/>
            }
            
            
        </div>  
    )
}

export default NavBar