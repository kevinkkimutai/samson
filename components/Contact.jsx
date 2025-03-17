"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. ❌");
    }
  };

  return (
    <section id="contact" className="bg- py-20">
      <div className="containe text-start max-w-screen-xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
      <h2 className="text-3xl font-bold text-blue-900">Let’s Connect & Collaborate!</h2>
      <hr className='h-[3px] bg-blue-700 w-14 mt-2 '/>
        <p className="mt-8 text-lg text-gray-700 max-w-2xl md:w-[90%]">
          Whether you’re looking to enhance client experiences, optimize business processes, 
          or explore collaboration opportunities, I’d love to hear from you.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg shadow-xl p-4 flex gap-4">
            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z"/>
  <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z"/>
</svg>

<span className="text-black">YourEmail@gmail.com</span>

            </div>
            <div className="rounded-lg shadow-xl p-4 flex gap-4">
            <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>
<span>+1-416-900-0000</span>

            </div>

        </div>
        <div className="flex justify-center gap-6 mt-10">
            <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="rounded-full shadow-xl flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-blue-200">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition rounded-full shadow-xl " />
            </a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="rounded-full shadow-xl flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-gray-200">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="mailto:email@example.com" className="rounded-full shadow-xl flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-orange-100">
              <img src="/icons/email.svg" alt="Email" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
      </div>

        <div className="max-w-2xl w-full mx-auto bg-blue-50 p-6 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div class="mb-5">
    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
    <input type="text" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
     value={formData.name}
     onChange={handleChange}
    placeholder="Your Name" 
    required />
  </div>

             <div class="mb-5">
    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
    <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
    value={formData.email}
    onChange={handleChange}
     placeholder="Your Email" 
     required />
  </div>
       </div>
           
  <div class="mb-5">
  <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-gray-600">{status}</p>}
        </div>
      </div>
    </section>
  );
}
