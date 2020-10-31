import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
import Button from '../components/StyledHero'

export const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe room starting at $299">
            <Link to='/rooms' className="btn-primary">
                our rooms
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
        </>
    )
}
