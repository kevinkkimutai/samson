import React from 'react'

export default function AboutMe() {
  return (
    <section id='about-me' className="about bg-white py-20">
    <div className="container max-w-screen-xl mx-auto max-md:px-4">
     <div className=' grid grid-cols-1 md:grid-cols-2 items-center  gap-12'>
     <div className="w-full mt-14 max-md:hidden">
        <img src="/illustration.webp" alt="Client Solutions Expert" className="w-full  " />
      </div>
      <div className="w-full  mt-8 md:mt-0 max-md:text-start text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-bold text-blue-900">Building Strong Client Relationships & Driving Business Success</h2>
        <hr className='h-[3px] bg-blue-700 w-14 mt-2 '/>
        <p className="mt-4 md:text-lg text-gray-700">
          With years of experience in client solutions and servicing, I specialize in fostering strong business relationships, optimizing customer experiences, and implementing strategic solutions that drive growth.
        </p>
        <ul className="mt-4 text-gray-700 space-y-2 max-md:text-start">
          <li>✅ Expert in Client Relationship Management</li>
          <li>✅ Proven Track Record in Business Growth & Retention</li>
          <li>✅ Skilled in Strategic Problem-Solving & Process Optimization</li>
          <li>✅ Excellent Communication & Negotiation Skills</li>
        </ul>
        <a href="#contact" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
          Learn More
        </a>
      </div>
      <div className="w-full mt-14 md:hidden">
        <img src="/illustration.webp" alt="Client Solutions Expert" className="w-full  " />
      </div>
     </div>
    </div>
  </section>
  
  )
}
