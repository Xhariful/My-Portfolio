import React, { useState } from "react";
import Experience from "./MyExperience";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Introduction", "Skills", "Experience"];
    const tabContent = [
        {
            title: "Introduction",
            content: (
                <>
                    <section className="bg-gray-100 py-20 rounded-lg">
                        <div className="container max-w-7xl mx-auto text-center">
                            <div className="bg-white p-6">
                                <h1 className="lg:text-6xl text-2xl font-extrabold mb-4 animate-fade-in">
                                    Hi, I'm <span className="text-blue-400">Shariful</span> 👋
                                </h1>
                                <h2 className="lg:text-3xl text-xl font-semibold mb-6">
                                    Full-Stack Developer | Web Designer | Problem Solver
                                </h2>
                                <p className="text-lg  max-w-3xl mx-auto">
                                    I build high-performance, user-friendly websites with modern technologies like
                                    React, Django, and PostgreSQL. My goal? To craft digital experiences that are
                                    both functional and visually stunning.
                                </p>
                            </div>

                        </div>
                    </section>
                </>
            ),
        },
        {
            title: "Skills",
            content: (
                <div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
                        {/* skills */}
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429665/html1_euxz2g.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">HTML</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">95%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429648/css1_d9uyl8.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">CSS</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429773/js_zt4306.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">JavaScript</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center  ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429624/bootstrap_iiabqu.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">Bootstrap</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center  ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429812/tailwind_jfcq2p.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">Tailwind CSS</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center  ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429801/python_lqvxlp.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">Python</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                        <div className="bg-whiter shadow-lg transition-all duration-500 w-52 h-48 rounded-lg justify-items-center  ">
                            <img className="w-28 h-28 p-2" src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741429413/django_mdsjnh.png" alt="" />
                            <p className="text-2xl text-black font-bold mb-2">Django</p>
                            <span className="bg-white px-10 py-1.5 rounded-lg shadow-lg mt-4">80%</span>
                        </div>
                    </div>
                </div>

            ),
        },
        {
            title: "Experience",
            content: (
                <div className="">
                    <Experience />
                </div>

            ),
        },
    ];

    return (
        <section id="about-me" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>

                {/* Tabs */}
                <div className="tabs mb-8">
                    <ul className="flex justify-center space-x-6">
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer py-2 px-4 text-lg font-semibold ${activeTab === index
                                    ? "border-b-4 border-blue-500 text-blue-500"
                                    : "text-gray-600"
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tab Content */}
                <div className="tab-content mt-8">{tabContent[activeTab].content}</div>
            </div>
        </section>
    );
};

export default AboutMe;
