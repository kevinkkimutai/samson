"use client";
import React from 'react'
export default function Footer() {
  const navdata = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about-me" },
    { title: "Services", href: "#services" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "Contact", href: "#contact" },
  ];
  const [active, setActive] = React.useState("Home");
  const handleActive = (title, href) => {
    setActive(title);
    smoothScroll(href);
  };

  // Smooth scroll function
  const smoothScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust for navbar height (top-20 equivalent)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };
    return (
      <footer id='footer' className="bg-blue-950 text-white py-10">
        <div className="container max-w-screen-xl mx-auto px-6">
          {/* Top Section: Branding & Quick Links */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
            <h3 className="text-2xl font-semibold">Client Solutions & Servicing Executive</h3>
  
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-6 text-gray-200">
                {navdata.map((item, index) => (
                <li key={index}>
                  <button   onClick={() => handleActive(item.title, item.href)} className="hover:text-white transition">{item.title}</button>
                </li>
               ))}
              </ul>
            </nav>
          </div>
  
          {/* Middle Section: Social Media Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className='h-10 w-10 bg-blue-200 flex items-center justify-center rounded-full shadow-xl'>
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className='h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-xl'>
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="mailto:email@example.com" className='h-10 w-10 bg-orange-100 flex items-center justify-center rounded-full shadow-xl'>
              <img src="/icons/email.svg" alt="Email" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
  
          {/* Bottom Section: Copyright */}
          <div className="text-center text-gray-300 text-sm mt-6">
            <p>&copy; {new Date().getFullYear()} Samson Mburu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  