import React from 'react'

import Header from './header'
import Footer from './footer'
import NavBar from './navBar'
import About from './about'
import Cardapio from './cardapio'
import Contact from './contact'

import '../styles/index.scss'
import style from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.content}>
                <Header />
                <About />
                <Cardapio />
                <Contact />
                {props.children}
            </div>
            <Footer />    
        </div>   
    )
}

export default Layout