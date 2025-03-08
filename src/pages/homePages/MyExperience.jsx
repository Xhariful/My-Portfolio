import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Python Instructor",
      company: "Self-Employed",
      description:
        "Teaching Python programming, object-oriented concepts, and backend development to aspiring developers.",
    },
    {
      year: "2024 - Present",
      role: "Full-Stack Developer",
      company: "Freelance",
      description:
        "Building high-performance web applications using React, Django, and PostgreSQL for clients worldwide.",
    },
    {
      year: "2023 - 2024",
      role: "Frontend Developer",
      company: "Tech Startup",
      description:
        "Developed interactive and responsive UI components with React and Tailwind, enhancing user experience.",
    },
    {
      year: "2022 - 2023",
      role: "Web Developer",
      company: "Freelance",
      description:
        "Designed and developed websites using HTML, CSS, Bootstrap, and JavaScript for various businesses.",
    },
  ];

  return (
    <section className="bg-gray-100 text-black ">
      <div className="container max-w-7xl mx-auto">
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-lg border-l-4 border-black"
            >
              <h3 className="text-2xl font-semibold text-black">{exp.role}</h3>
              <p className="text-lg font-light">{exp.company} | {exp.year}</p>
              <p className="mt-2 ">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
