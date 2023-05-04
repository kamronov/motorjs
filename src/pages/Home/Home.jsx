import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import Services from '../../components/Services/Services'
import Contact from '../../components/Contact/Contact'

function Home() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <Services/>
      <Contact/>
    </div>

  )
}

export default Home