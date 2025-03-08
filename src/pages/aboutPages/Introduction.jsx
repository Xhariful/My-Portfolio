import React from 'react'

const Introduction = () => {
    return (
        <div>
            <section id="introduction" class="bg-gray-50 py-20">
                <div class="container mx-auto px-6 text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-4">Hello, I'm Shariful</h2>
                    <p class="text-xl text-gray-600 mb-8">A passionate web developer and backend engineer. I specialize in full-stack development and creating seamless user experiences.</p>

                    <div class="flex justify-center space-x-6 mb-8">
                        {/* <!-- Social Media Icons --> */}
                        <a href="#" class="text-blue-500 hover:text-blue-700 transition-colors">
                            <i class="fab fa-facebook-f text-2xl"></i>
                        </a>
                        <a href="#" class="text-blue-500 hover:text-blue-700 transition-colors">
                            <i class="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="#" class="text-blue-500 hover:text-blue-700 transition-colors">
                            <i class="fab fa-linkedin-in text-2xl"></i>
                        </a>
                        <a href="#" class="text-blue-500 hover:text-blue-700 transition-colors">
                            <i class="fab fa-github text-2xl"></i>
                        </a>
                    </div>

                    <p class="text-lg text-gray-600">Let's create something amazing together!</p>

                    {/* <!-- Call to Action Button --> */}
                    <div class="mt-8">
                        <a href="#contact" class="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300">Get in Touch</a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Introduction