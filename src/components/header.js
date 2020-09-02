import React, { useState } from 'react'
import style from "../styles/header.module.scss"

const Header = () => {

    const handleClickCardapio = () => window.scrollTo(0, 1600);

    return (
        <header className={style.head}>
            <h1 className={style.logo}></h1>
            <div className={style.gradiente} />
            <div className={style.subtitle}>
            COMIDA VEGANA
            </div>
            <div className={style.subtitle2}>
            SABOROSA, SAUDÁVEL E ACESSÍVEL PARA TODOS
            </div>
            <div className={style.botaoCardapio} onClick={handleClickCardapio}/>
        </header>
    )
}

export default Header