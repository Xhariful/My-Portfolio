import React from 'react';


const ContactUs = () => {
    return (
        <div>
            {/* <!-- contact us start --> */}
            <section>
                <div className="container max-w-7xl mx-auto text-white">
                    <div className="flex p-8">
                        {/* <!-- left side start --> */}
                        <div className="w-2/5">
                            <img src='https://res.cloudinary.com/dgi6ua9rd/image/upload/v1737689659/shariful_1_tagld5.png' alt="Minimalist" />
                        </div>
                        {/* <!-- left side end --> */}

                        {/* <!-- right side start --> */}
                        <div className="w-3/5">
                            <form action="" method="post" className="border bg-black border-gray-500 flex flex-col justify-start p-8">
                                <div className="text-white flex flex-col justify-center items-center">
                                    <p className="text-md ">CONTACT</p>
                                    <p className="text-4xl">Let's get in touch</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="p-2 my-2 bg-[rgb(34,32,30)]"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 my-2 bg-[rgb(34,32,30)]"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    className="p-2 my-2 bg-[rgb(34,32,30)]"
                                    required
                                ></textarea>
                                <button type="submit" className="p-2 bg-white text-black my-2">
                                    Send Message
                                </button>
                            </form>

                            <div className="grid grid-cols-3 gap-4 my-4">
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-facebook p-2"></i>Facebook
                                    </a>
                                </div>
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-twitter p-2"></i>Twitter
                                    </a>
                                </div>
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-instagram p-2"></i>Instagram
                                    </a>
                                </div>
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-linkedin p-2"></i>LinkedIn
                                    </a>
                                </div>
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-github p-2"></i>GitHub
                                    </a>
                                </div>
                                <div className="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                                    <a href="#">
                                        <i className="fab fa-youtube p-2"></i>YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- right side end --> */}
                    </div>
                </div>
            </section>
            {/* <!-- contact us end --> */}
        </div>
    );
};

export default ContactUs;
