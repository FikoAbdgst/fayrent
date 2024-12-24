import React from 'react'
import Info from './Info'
import Home from './Home'
import Navigation from '../Navigation'
import Game from './Game'
import Promo from './Promo'
import Rent from './Rent'
import Footer from './Footer'

const Landing = () => {
    return (
        <div className='bg-[rgb(0,0,52)] overflow-hidden'>
            <Navigation />

            <section id="home">
                <Home />
            </section>

            <section id="games">
                <Game />
            </section>

            <section id="info">
                <Info />
            </section>

            <section id="promo">
                <Promo />
            </section>

            <section id="rent">
                <Rent />
            </section>

            <Footer />
        </div>
    )
}

export default Landing