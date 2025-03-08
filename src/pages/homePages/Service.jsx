import React from "react";

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-items-center text-black text-center">
          
          
          <h2 className="text-5xl font-semibold text-black mb-8">My Services</h2>
          <span className="text-lg ">I offer a range of services to help you build amazing web applications and
          designs.</span>
          <span className="text-lg mb-6">From full-stack development to UI/UX design, I'm here to turn your
          ideas into reality.</span>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {/* Service 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <i className="text-4xl text-blue-500">💻</i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Front-End Development</h3>
            <p className="text-black">
              I build responsive, high-performance websites using modern technologies like
              React, Django, and more. Whether it's a landing page or a complex web app, I’ve
              got you covered.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <i className="text-4xl text-green-500">🔧</i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Back-End Development</h3>
            <p className="text-black">
              I specialize in building robust back-end systems using Python, Django, and
              PostgreSQL. I'll ensure your applications are secure, scalable, and maintainable.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <i className="text-4xl text-yellow-500">🎨</i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
            <p className="text-black">
              I offer clean, modern, and user-centered designs. I’ll work with you to craft
              designs that provide a seamless and delightful experience for your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
