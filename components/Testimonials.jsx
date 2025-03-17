"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO of XYZ Company",
    text: "An exceptional professional who truly understands client needs. Their strategic approach helped our business improve customer retention by 30%. Highly recommended!",
  },
  {
    name: "Jane Smith",
    role: "Senior Account Manager at ABC Corp",
    text: "A great leader in client solutions! Always proactive, insightful, and dedicated to delivering results. Working together was a fantastic experience.",
  },
  {
    name: "Michael Lee",
    role: "Business Consultant",
    text: "An expert in building strong client relationships. Their ability to optimize workflows and improve customer satisfaction is outstanding!",
  },
  {
    name: "John Doe",
    role: "CEO of XYZ Company",
    text: "An exceptional professional who truly understands client needs. Their strategic approach helped our business improve customer retention by 30%. Highly recommended!",
  },
  {
    name: "Jane Smith",
    role: "Senior Account Manager at ABC Corp",
    text: "A great leader in client solutions! Always proactive, insightful, and dedicated to delivering results. Working together was a fantastic experience.",
  },
  {
    name: "Michael Lee",
    role: "Business Consultant",
    text: "An expert in building strong client relationships. Their ability to optimize workflows and improve customer satisfaction is outstanding!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blue-100 py-20">
      <div className="container max-w-screen-xl mx-auto px-6 text-center max-md:text-start">
        <h2 className="text-xl md:text-3xl font-bold text-blue-900">
          What Clients & Partners Say About My Work
        </h2>
        <hr className='h-[3px] bg-blue-700 w-14 mt-2 md:mx-auto'/>
        <p className="mt-4 md:text-lg text-gray-700 max-w-2xl mx-auto">
          Client satisfaction is at the core of what I do. Here’s what business
          partners, colleagues, and clients have to say about working with me.
        </p>

        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <p className="text-gray-700">"{testimonial.text}"</p>
                  <h3 className="mt-4 font-semibold text-blue-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
