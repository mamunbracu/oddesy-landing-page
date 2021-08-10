import React from 'react'

const Blog = () => {
  const data = [
    {
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name:"Afjal Hossain",
      address:"18/12/2021, 5 Min Read",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name:"Afjal Hossain",
      address:"18/12/2021, 5 Min Read",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name:"Afjal Hossain",
      address:"18/12/2021, 5 Min Read",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]
  return (
    <div id="blog" className="p-8 mt-15" style={{background:"#0E1727"}}>
      <h1 className="text-center font-bold font-sans text-4xl mt-10 text-indigo-50 mb-10 ">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {
          data.map(({title,name,address,text}) => (
            <div data-aos="slide-left" className="shadow-lg m-3 p-4 flex flex-col mt-6 rounded-lg hover:scale-105 transition transform duration-200 ease-in-out" style={{ background: " #282F3B" }}>
              <h4 className="text-indigo-50 mb-8 mt-6 text-lg font-bold font-sans">{title}</h4>
              <h6 className="text-gray-200 mb-6 text-left">{name}</h6>
              <h6 className="text-gray-200 mb-6 text-left">{address}</h6>
              <h6 className="text-gray-200 mb-6 text-left">{text}</h6>
            </div>
          ))
        }
      </div>
        <div className="flex justify-center items-center">
        <button className="flex justify-center items-center mb-6 mt-20">
          <span  className="text-gray-50 text-lg font-mono text-center">Learn More</span>
          <img className="ml-4" src="/assets/rightA.png" alt="" />
        </button>
        </div>
    </div>
  )
}

export default Blog
