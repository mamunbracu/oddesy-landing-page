import React from 'react'
import Achievement from './Achievement'
import Banner from './Banner'
import Blog from './Blog'
import Footer from './Footer'
import Hero from './Hero'
import NavBar from './Navbar'
import NewsLetter from './NewsLetter'
import Service from './Service'

const Home = () => {
  return (
    <div className="transition duration-500">
       <NavBar />
        <Hero />
        <Banner />
        <Service />
        <Achievement />
        <Blog />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home
