import React from 'react'

export default function Hero() {
  return (
    <section id='home' className="hero bg-blue-100 py-20  ">
    <div className="container max-w-screen-xl mx-auto max-md:px-4 pt-10 md:pt-20">
       
   <div className='grid grid-cols-1 md:grid-cols-2 items-center  gap-12'>
   <div className="w-full text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Elevating Client Solutions for Lasting Success
        </h1>
        <p className="mt-4 md:text-lg text-gray-700">
          Crafting strategies that drive customer satisfaction, optimize business operations, and foster long-term growth.
        </p>
        <a href="#contact" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all">
          Let's Connect
        </a>
      </div>
      <div className="w-full">
        <img src="/illustration.webp" alt="Client Solutions Expert" className="w-full" />
      </div>
   </div>
    </div>
  </section>
  
  )
}
