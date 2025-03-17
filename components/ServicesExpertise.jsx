import React from 'react'

export default function ServicesExpertise() {
  return (
    <section id="services" className="services bg-blue-100 py-20 max-md:py-10">
  <div className="container max-w-screen-xl mx-auto px-6 max-md:px-4 text-center max-md:text-start">

    <h2 className="text-xl md:text-3xl font-bold text-blue-900 ">Delivering Tailored Solutions for Business Growth & Client Success</h2>
    <hr className='h-[3px] bg-blue-700 w-14 mt-2 md:mx-auto '/>
    <p className="mt-4 md:text-lg text-gray-700 mx-auto max-w-2xl">
      With a deep understanding of client needs and business operations, I specialize in crafting strategic solutions that enhance customer experiences, streamline processes, and drive long-term success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Client Relationship Management</h3>
        <p className="mt-2 text-gray-700">Building and maintaining strong client connections for lasting business success.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Customer Experience Optimization</h3>
        <p className="mt-2 text-gray-700">Enhancing engagement, satisfaction, and retention through tailored strategies.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Strategic Business Solutions</h3>
        <p className="mt-2 text-gray-700">Identifying and implementing data-driven solutions to improve operational efficiency.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Process Improvement & Workflow Optimization</h3>
        <p className="mt-2 text-gray-700">Streamlining business processes to increase productivity and effectiveness.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Negotiation & Conflict Resolution</h3>
        <p className="mt-2 text-gray-700">Managing client interactions with professionalism to drive favorable outcomes.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Consulting & Business Strategy</h3>
        <p className="mt-2 text-gray-700">Providing expert guidance on business growth, retention, and scalability.</p>
      </div>
    </div>
  </div>
</section>

  )
}
