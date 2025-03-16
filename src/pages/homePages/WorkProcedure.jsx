import React from 'react'

const Workprocess = () => {
  return (
    <div>
      {/* <!-- work process start --> */}
      <section>
        <div className="container  mx-auto pt-10 text-black bg-gray-100">
          <div className="flex flex-col justify-items-center text-black text-center">
            <span className="text-lg ">THE PROCESS</span>
            <span className="text-5xl mb-4">Your Website</span>
            <span className="text-4xl mb-4 italic"> in 5 steps</span>
            <span className="text-xl ">Our process ensures that we create a website</span>
            <span className="text-xl ">tailored to your business needs.</span>
          </div>
          {/* <!-- step main start --> */}
          {/* only for large screen */}
          <div className="hidden lg:block">
            <div className="flex justify-items-center mt-12 ">
              {/* <!-- left side start --> */}
              <div className="grid grid-row-5 justify-items-center p-6 gap-2 ">
                {/* <!-- step-1 --> */}
                <div className="shadow-lg rounded-lg max-w-xl mx-auto  h-96 p-4 bg-white">
                  <div className="flex items-center justify-end mb-4 text-black">
                    <span className="bgb font-medium px-4 py-2 rounded-lg">2 HOURS</span>
                  </div>
                  <h2 className="text-lg">Do we Match?</h2>
                  <h3 className="text-2xl font-semibold ">Discovery Call</h3>
                  <div className="rounded-md mb-4 pt-4">
                    <p className="text-sm">Before we start, we determine if and how I can help you. What are your
                      requirements for your new website? Why do you need a new website? What goals do you
                      have, and what problems can we solve with a new website?</p>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>We get to know each other better</li>
                    <li>Determine how I can best assist you</li>
                    <li>Understand the goals you have for your website</li>
                  </ul>
                </div>
                {/* <!-- empty div --> */}
                <div className="h-96">
                  <p className=""></p>
                </div>
                {/* <!-- step 3 --> */}
                <div className="shadow-lg rounded-lg max-w-xl mx-auto  h-96 p-4 bg-white">
                  <div className="flex items-center justify-end mb-4 text-black">
                    <span className="bgb font-medium px-4 py-2 rounded-lg">2 WEEKS</span>
                  </div>
                  <h2 className="text-lg">Some Magic</h2>
                  <h3 className="text-2xl font-semibold ">Web Design</h3>
                  <div className="pt-4 rounded-md mb-4">
                    <p className="text-sm">Now comes the magic. Based on the previously developed concept, I create
                      a high-end screen design perfectly tailored to your brand. A web design that sets you
                      apart from your competition, fits your target audience ideally, and provides an
                      excellent user experience.</p>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>High-end web design tailored to your brand</li>
                    <li>Interactive prototype of the design</li>
                  </ul>
                </div>
                {/* <!-- empty div --> */}
                <div className="h-96">
                  <p className=""></p>
                </div>
                {/* <!-- step 5 --> */}
                <div className="shadow-lg rounded-lg max-w-xl mx-auto  h-96 p-4 bg-white">
                  <div className="flex items-center justify-end mb-4 text-black">
                    <span className="bgb font-medium px-4 py-2 rounded-lg">1 DAY</span>
                  </div>
                  <h2 className="text-lg">Ready to go</h2>
                  <h3 className="text-2xl font-semibold ">Website Onboarding</h3>
                  <div className="pt-4 rounded-md mb-4">
                    <p className="text-sm">In a personal Framer workshop, I will show you how to make changes to
                      your new website quickly and easily. Additionally, you will receive personalized Framer
                      video tutorials that you can access at any time. Edit your Framer website without a
                      complicated backend or the need for an additional programmer. It's as simple as that</p>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>Personal workshop</li>
                    <li> Personalized video tutorials</li>
                    <li>Edit text and images directly on your website</li>
                  </ul>
                </div>
              </div>
              {/* <!-- this is middle step numver--> */}
              <div className="grid grid-row-5 justify-items-center items-center">
                <div className="mt-8">
                  <p className="px-4 py-2 text-black text-center rounded-full border border-black">1</p>
                </div>
                <div className="mt-8">
                  <p className="px-4 py-2 text-black text-center rounded-full border border-black">2</p>
                </div>
                <div className="mt-8">
                  <p className="px-4 py-2 text-black text-center rounded-full border border-black">3</p>
                </div>
                <div className="mt-8">
                  <p className="px-4 py-2 text-black text-center rounded-full border border-black">4</p>
                </div>
                <div className="mt-8">
                  <p className="px-4 py-2 text-black text-center rounded-full border border-black">5</p>
                </div>
              </div>
              {/* <!-- Right side start --> */}
              <div className="grid grid-row-5 justify-items-center p-6 gap-2 ">
                {/* <!-- empty div --> */}
                <div className="h-96">
                  <p className=""></p>
                </div>
                {/* <!-- step-2 --> */}
                <div className="shadow-lg rounded-lg max-w-xl mx-auto  h-96 p-4 bg-white">
                  <div className="flex items-center justify-end mb-4 text-black">
                    <span className="bgb font-medium px-4 py-2 rounded-lg">1 WEEKS</span>
                  </div>
                  <h2 className="text-lg">We need a plan</h2>
                  <h2 className="text-2xl font-bold mb-4">Concept & Strategy</h2>
                  <p className="mb-4">
                    Together, we develop a strategy that successfully combines your goals with the needs of your
                    target audience. Based on this concept, I create the first wireframes and an interactive
                    prototype. This provides us with a very good impression of the website and the user
                    interface.
                  </p>
                  <ul className="list-disc list-inside ">
                    <li>UX Design</li>
                    <li>Wireframes</li>
                    <li>Interactive Prototype</li>
                  </ul>
                </div>
                {/* <!-- empty div --> */}
                <div className="h-96">
                  <p className=""></p>
                </div>
                {/* <!-- step 4 --> */}
                <div className="shadow-lg rounded-lg max-w-xl mx-auto  h-96 p-4 bg-white">
                  <div className="flex items-center justify-end mb-4 text-black">
                    <span className="bgb font-medium px-4 py-2 rounded-lg">2 WEEKS</span>
                  </div>
                  <h2 className="text-lg">More Magic</h2>
                  <h3 className="text-2xl font-semibold ">Web Development</h3>
                  <div className="pt-4 rounded-md mb-4">
                    <p className="text-sm">In this step, we breathe life into your new high-end design. You will
                      receive a custom-built website using a modular web design system and CMS integration.
                      Animations will add the necessary flair to your site and set you apart from the boring
                      competition.</p>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>Custom framer website.</li>
                    <li>Modular web design systems</li>
                    <li>CMS integration</li>
                  </ul>
                </div>
                {/* <!-- empty div --> */}
                <div className="h-96">
                  <p className=""></p>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="flex flex-col justify-items-center text-black text-center">
              {/* step start */}
              <div className="text-center pt-10 ">
                <span className="rounded-full border border-black px-4 py-2">1</span>
              </div>
              {/* <!-- step-1 --> */}
              <div className="shadow-lg rounded-lg max-w-xl mx-auto h-96 p-4">
                <div className="flex items-center justify-end mb-4 text-black">
                  <span className="bgb font-medium px-4 py-2 rounded-lg">2 HOURS</span>
                </div>
                <h2 className="text-lg">Do we Match?</h2>
                <h3 className="text-2xl font-semibold ">Discovery Call</h3>
                <div className="rounded-md mb-4 pt-4">
                  <p className="text-sm">Before we start, we determine if and how I can help you. What are your
                    requirements for your new website? Why do you need a new website? What goals do you
                    have, and what problems can we solve with a new website?</p>
                </div>
                <ul className="list-disc list-inside">
                  <li>We get to know each other better</li>
                  <li>Determine how I can best assist you</li>
                  <li>Understand the goals you have for your website</li>
                </ul>
              </div>
              <div className="text-center pt-10 ">
                <span className="rounded-full border border-black px-4 py-2">2</span>
              </div>
              {/* <!-- step-2 --> */}
              <div className="shadow-lg rounded-lg max-w-xl mx-auto h-96 p-4">
                <div className="flex items-center justify-end mb-4 text-black">
                  <span className="bgb font-medium px-4 py-2 rounded-lg">1 WEEKS</span>
                </div>
                <h2 className="text-lg">We need a plan</h2>
                <h2 className="text-2xl font-bold mb-4">Concept & Strategy</h2>
                <p className="mb-4">
                  Together, we develop a strategy that successfully combines your goals with the needs of your
                  target audience. Based on this concept, I create the first wireframes and an interactive
                  prototype. This provides us with a very good impression of the website and the user
                  interface.
                </p>
                <ul className="list-disc list-inside ">
                  <li>UX Design</li>
                  <li>Wireframes</li>
                  <li>Interactive Prototype</li>
                </ul>
              </div>
              <div className="text-center pt-10 ">
                <span className="rounded-full border border-black px-4 py-2">3</span>
              </div>
              {/* <!-- step 3 --> */}
              <div className="shadow-lg rounded-lg max-w-xl mx-auto h-96 p-4">
                <div className="flex items-center justify-end mb-4 text-black">
                  <span className="bgb font-medium px-4 py-2 rounded-lg">2 WEEKS</span>
                </div>
                <h2 className="text-lg">Some Magic</h2>
                <h3 className="text-2xl font-semibold ">Web Design</h3>
                <div className="pt-4 rounded-md mb-4">
                  <p className="text-sm">Now comes the magic. Based on the previously developed concept, I create
                    a high-end screen design perfectly tailored to your brand. A web design that sets you
                    apart from your competition, fits your target audience ideally, and provides an
                    excellent user experience.</p>
                </div>
                <ul className="list-disc list-inside">
                  <li>High-end web design tailored to your brand</li>
                  <li>Interactive prototype of the design</li>
                </ul>
              </div>
              <div className="text-center pt-10 ">
                <span className="rounded-full border border-black px-4 py-2">4</span>
              </div>
              {/* <!-- step 4 --> */}
              <div className="shadow-lg rounded-lg max-w-xl mx-auto h-96 p-4">
                <div className="flex items-center justify-end mb-4 text-black">
                  <span className="bgb font-medium px-4 py-2 rounded-lg">2 WEEKS</span>
                </div>
                <h2 className="text-lg">More Magic</h2>
                <h3 className="text-2xl font-semibold ">Web Development</h3>
                <div className="pt-4 rounded-md mb-4">
                  <p className="text-sm">In this step, we breathe life into your new high-end design. You will
                    receive a custom-built website using a modular web design system and CMS integration.
                    Animations will add the necessary flair to your site and set you apart from the boring
                    competition.</p>
                </div>
                <ul className="list-disc list-inside">
                  <li>Custom framer website.</li>
                  <li>Modular web design systems</li>
                  <li>CMS integration</li>
                </ul>
              </div>
              <div className="text-center pt-10 ">
                <span className="rounded-full border border-black px-4 py-2">5</span>
              </div>
              {/* <!-- step 5 --> */}
              <div className="shadow-lg rounded-lg max-w-xl mx-auto h-96 p-4">
                <div className="flex items-center justify-end mb-4 text-black">
                  <span className="bgb font-medium px-4 py-2 rounded-lg">1 DAY</span>
                </div>
                <h2 className="text-lg">Ready to go</h2>
                <h3 className="text-2xl font-semibold ">Website Onboarding</h3>
                <div className="pt-4 rounded-md mb-4">
                  <p className="text-sm">In a personal Framer workshop, I will show you how to make changes to
                    your new website quickly and easily. Additionally, you will receive personalized Framer
                    video tutorials that you can access at any time. Edit your Framer website without a
                    complicated backend or the need for an additional programmer. It's as simple as that</p>
                </div>
                <ul className="list-disc list-inside">
                  <li>Personal workshop</li>
                  <li> Personalized video tutorials</li>
                  <li>Edit text and images directly on your website</li>
                </ul>
              </div>





            </div>
          </div>
        </div>
      </section>
      {/* <!-- work process end --> */}
    </div>
  )
}

export default Workprocess