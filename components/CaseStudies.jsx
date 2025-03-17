import React from 'react'

export default function CaseStudies() {
  return (
    <section id='case-studies' className="case-studies bg-white py-20">
  <div className="container max-w-screen-xl mx-auto px-6 text-center max-md:text-start">

    <h2 className="text-xl md:text-3xl font-bold text-blue-900 ">Proven Success in Client Solutions & Business Growth</h2>
    <hr className='h-[3px] bg-blue-700 w-14 mt-2 md:mx-auto'/>
    <p className="mt-4 md:text-lg text-gray-700 max-w-2xl mx-auto">
      I believe in delivering measurable results. Here are some success stories that demonstrate my expertise in client solutions, customer experience enhancement, and business strategy.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* <!-- Case Study 1 --> */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Boosting Customer Retention for a SaaS Company</h3>
        <p className="mt-2 text-gray-700"><strong>Client Challenge:</strong> Struggling with customer engagement & retention.</p>
        <p className="mt-2 text-gray-700"><strong>Solution:</strong> Implemented a CRM strategy and proactive engagement plan.</p>
        <p className="mt-2 text-gray-700"><strong>Results:</strong> 30% increase in retention, 40% fewer client escalations.</p>
      </div>

      {/* <!-- Case Study 2 --> */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="md:text-xl font-semibold text-blue-600">Streamlining Operations for a Logistics Firm</h3>
        <p className="mt-2 text-gray-700"><strong>Client Challenge:</strong> Inefficiencies in service delivery led to delays.</p>
        <p className="mt-2 text-gray-700"><strong>Solution:</strong> Optimized workflow, automated reporting, and improved tracking.</p>
        <p className="mt-2 text-gray-700"><strong>Results:</strong> 25% faster delivery times, 20% reduction in costs.</p>
      </div>
    </div>
  </div>
</section>

  )
}
