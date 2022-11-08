import React from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = (props) => {
  return (
    <>
      <Hero/>
      <Features/>
      <Card/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default Home