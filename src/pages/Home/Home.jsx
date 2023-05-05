import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import Services from '../../components/Services/Services'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
function Home() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default Home