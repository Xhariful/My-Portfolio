import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio" class="py-20 bg-gray-100 z-10">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-center mb-12">My Portfolio</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div class="portfolio-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                            <img src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741433119/Screenshot_2025-01-20_232729_holrkf.png" alt="Project 1" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">Eroupean Consultancy</h3>
                                <p class="text-gray-600 mt-2">This is a description of project 1.</p>
                                <a href="#" class="text-blue-500 mt-3 inline-block">View Project</a>
                            </div>
                        </div>

                        <div class="portfolio-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                            <img src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741433210/Screenshot_2025-01-21_233232_qq64mp.png" alt="Project 2" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">Rahman Son's and Group</h3>
                                <p class="text-gray-600 mt-2">This is a description of project 2.</p>
                                <a href="#" class="text-blue-500 mt-3 inline-block">View Project</a>
                            </div>
                        </div>

                        <div class="portfolio-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                            <img src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741433465/Screenshot_2025-03-08_173055_w5m2hy.png" alt="Project 3" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">Hajj and Ummarah</h3>
                                <p class="text-gray-600 mt-2">This is a description of project 3.</p>
                                <a href="#" class="text-blue-500 mt-3 inline-block">View Project</a>
                            </div>
                        </div>

                        <div class="portfolio-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                            <img src="https://res.cloudinary.com/dgi6ua9rd/image/upload/v1741433610/Screenshot_2025-03-08_173331_x0ipgb.png" alt="Project 4" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="text-xl font-semibold text-gray-800">Ronjona Grils Hostel</h3>
                                <p class="text-gray-600 mt-2">This is a description of project 4.</p>
                                <a href="#" class="text-blue-500 mt-3 inline-block">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Portfolio