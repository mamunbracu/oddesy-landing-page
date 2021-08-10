import React from 'react'

const Banner = () => {
  return (
    <div id="service" className="md:flex lg:flex xl:flex justify-between p-8" style={{background:"#101A2B"}}>
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-16">
    <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-5xl mb-8 text-indigo-50 font-extrabold">Why You should Choose Us</h1>
    <p className="text-lg text-indigo-100 mb-5"> Our motto and principle is we think content is fire social media is gasoline and we do the perfect mixture of gasoline and fire to boost up our clients </p>
    <button className="bg-pink-900 px-8 py-3 w-full sm:w-auto md:w-auto mb-8 rounded text-2xl text-pink-100">Talk to Us</button>
      </div>
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-6 md:mt-0 lg:mt-16 xl:mt-16">
      <div className="flex md:justify-center xl:justify-center lg:justify-center items-center mb-5">
      <img src="/assets/check.png" className="mr-5" alt="" />
      <span className="text-lg text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="flex md:justify-center xl:justify-center lg:justify-center items-center mb-5">
      <img src="/assets/check.png" className="mr-5" alt="" />
      <span className="text-lg text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="flex md:justify-center xl:justify-center lg:justify-center items-center mb-5">
      <img src="/assets/check.png" className="mr-5" alt="" />
      <span className="text-lg text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="flex md:justify-center xl:justify-center lg:justify-center items-center mb-5">
      <img src="/assets/check.png" className="mr-5" alt="" />
      <span className="text-lg text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="flex md:justify-center xl:justify-center lg:justify-center items-center mb-5">
      <img src="/assets/check.png" className="mr-5" alt="" />
      <span className="text-lg text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      </div>
    </div>
  )
}

export default Banner
