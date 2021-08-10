import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="w-full bg-no-repeat h-screen bg-cover flex justify-center md:justify-end lg:justify-end xl:justify-end  items-center" style={{backgroundImage:"url(/assets/bg-1.png)"}}>
      <div className="md:w-1/2 lg:w-2/1 xl:w-2/1 p-8">
        <h2 className="text-justify text-xl md:text-6xl lg:text-6xl py-2 mb-4 text-indigo-100 font-bold">Grow with Us</h2>
        <p className="text-indigo-100 text-justify mt-2 mb-5 pr-6 text-lg">Welcome to odyssey digital, odyssey digital is one of the best and fastest growing digital marketing and social media marketing agencies providing the best service to make the business successful online.</p>
        <button className="bg-pink-900 px-8 py-5 rounded text-2xl text-pink-100">Get Started</button>
      </div>
    </div>
  )
}

export default Hero
