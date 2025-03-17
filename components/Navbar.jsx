"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navdata = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about-me" },
  { title: "Services", href: "#services" },
  { title: "Case Studies", href: "#case-studies" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleActive = (title, href) => {
    setActive(title);
    smoothScroll(href);
    setIsOpen(false)
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
    <nav className="bg-whit\ fixed w-full z-20 top-0 start-0 px-2">
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 bg-white md:bg-white/95 md:rounded-full mt-2 md:shadow-md max-md:border-b ${isOpen ? "" : "rounded-full"}`}>
        <Link href="#home" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => smoothScroll("#home")}>
          {/* <Image 
            src="/kovaa.webp"
            width={160}
            height={100}
            className="self-center h-14 max-lg:-ms-6 -ms-4 lg:h-20 object-cover"
            alt="kovacpay logo"
          /> */}
          <span className="font-bold italic text-xl py-5">Samson Mburu</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1 md:py-2.5 text-center">
           CV
          </button>
          <button onClick={handleOpen} type="button" className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 max-md:gap-2 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {navdata.map((nav, i) => (
              <li key={i}>
                <button
                  onClick={() => handleActive(nav.title, nav.href)}
                  className={`block py-2 px-3 bg-blue-50 max-md:hover:bg-blue-200 max-md:w-1/2 rounded-sm md:bg-transparent text-black md:p-0 ${i === 0 ? "md:text-blue-700" : "md:text-black"}`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
