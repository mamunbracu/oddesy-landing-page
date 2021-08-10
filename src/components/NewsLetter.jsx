import React from 'react'

const NewsLetter = () => {
  return (
    <div id="contact" className="px-8 pt-8 pb-20" style={{background:"#101A2B"}}>
      <div className="flex mt-16 justify-center items-center">
        <div data-aos="fade-left" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-2/1 md:ml-14">
          <h2 className="font-bold text-2xl text-indigo-50 font-sans">subscribe to our newsletter & stay updated with exclusive marketing tips and insights we share</h2>
        </div>
        <div data-aos="fade-up" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ml-14">
          <input type="text" placeholder="Write your Email" className="py-4 px-20 rounded-tl-2xl rounded-l-2xl focus:border-none focus:outline-none" />
          <button className="text-indigo-50 font-sans py-4 px-12 rounded-br-2xl rounded-tr-2xl bg-red-600">Subscribe</button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 pb-6">
      <div className="bg-red-600 p-12 w-full rounded-lg text-center m-11" data-aos="fade-left">
        <h1 className="font-serif font-bold text-2xl text-indigo-50 mt-4">Let’s work together. We would love to hear from you.</h1>
        <button className="px-10 py-3 text-indigo-50 font-mono font-bold mt-10 rounded-lg" style={{background:"#101A2B"}}>Talk to Us</button>
      </div>

      </div>
    </div>
  )
}

export default NewsLetter
