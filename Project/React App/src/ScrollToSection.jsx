import React, { useRef } from "react";

const ScrollToSection = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
  
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 rounded" onClick={() => scrollToSection(homeRef)}>Home</button>
        <button className="px-4 py-2 bg-green-500 rounded" onClick={() => scrollToSection(servicesRef)}>Services</button>
        <button className="px-4 py-2 bg-yellow-500 rounded" onClick={() => scrollToSection(aboutRef)}>About</button>
        <button className="px-4 py-2 bg-red-500 rounded" onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>


      <div ref={homeRef} className="h-screen flex items-center justify-center bg-blue-200">
        <h1 className="text-4xl font-bold">Home Section</h1>
      </div>
      <div ref={servicesRef} className="h-screen flex items-center justify-center bg-green-200">
        <h1 className="text-4xl font-bold">Services Section</h1>
      </div>
      <div ref={aboutRef} className="h-screen flex items-center justify-center bg-yellow-200">
        <h1 className="text-4xl font-bold">About Section</h1>
      </div>
      <div ref={contactRef} className="h-screen flex items-center justify-center bg-red-200">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </div>
    </div>
  );
};

export default ScrollToSection;
