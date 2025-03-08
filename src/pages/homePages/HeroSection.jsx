import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gray-100 flex flex-col-reverse md:flex-row items-center justify-center lg:px-24 py-12">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Hi, I'm <span className="text-yellow-500">Shariful</span> 👋
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            A passionate <span className="font-semibold text-black">Full-Stack Developer</span> who loves creating
            stunning and functional web experiences.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="#portfolio" className="bg-black text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition duration-300">
              View Portfolio
            </a>
            <a href="#contact" className="border border-black text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1737689659/shariful_1_tagld5.png" alt="Profile" className="w-60 md:w-80 rounded-full " />
        </div>
      </section>
    </div>
  )
}

export default HeroSection