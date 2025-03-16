import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Herosection = () => {
    return (
        <div>
            <section className="bg-gray-100 text-white w-full">
                <div className="container mx-auto max-w-7xl lg:h-screen">
                    <div className="flex items-center justify-center">
                        <div className="w-full lg:mt-20 mt-6 px-4">
                            {/* Image Section */}
                            <div className="flex justify-between bg-white rounded-lg rounded-tl-[50px] rounded-br-[50px] w-full">
                                <img
                                    src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1737689659/shariful_1_tagld5.png"
                                    alt="Developer illustration"
                                    className="bg-yellow-600 rounded-lg rounded-tl-[50px] rounded-br-[50px] lg:w-[300px] md:w-[200px] w-[150px] rotate-0 hover:rotate-0 scale-[1.1]"
                                />
                                <div className="flex flex-col justify-center items-center text-center lg:px-20 px-6 ">
                                    <p className="text-2xl lg:text-5xl text-black font-bold leading-tight">
                                        Hi, I'm <span className="text-yellow-600">Shariful Islam</span>
                                    </p>
                                    <p className="md:mt-4 text-black text-md md:text-3xl font-semibold">
                                        <Typewriter
                                            words={[
                                                "Full-Stack Developer",
                                                "Python & Django Expert",
                                                "React & Frontend Enthusiast",
                                                "Problem Solver & Learner",
                                            ]}
                                            loop={0} // Infinite loop
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={90}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                        
                                    </p>
                                    <p className="md:mt-4 text-black text-md md:text-xl font-semibold">
                                    I specialize in building scalable web applications with clean, efficient code and modern, responsive designs. My goal is to create impactful digital solutions that enhance user experience and drive innovation.
                                    </p>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="flex justify-center space-x-4 lg:mt-8 mt-8">
                                <a
                                    href="https://drive.google.com/file/d/1u_Mx73qMz3ean2PsaxeYe3V5ItPlhN9J/view?usp=drive_link"
                                    className="bg-yellow-600 hover:bg-black text-black px-6 py-3 rounded-lg font-semibold hover:text-white border border-black"
                                >
                                    Download  CV
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-transparent border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black text-black hover:text-white"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Herosection;
