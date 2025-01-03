import React from 'react'

const page = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#651b0d] via-[#faa722] to-[#9e3722] py-16 px-4 text-white">
            <div className="container mx-auto max-w-5xl p-8 glass shadow-lg rounded-xl">
                <h1 className="text-5xl font-bold text-center text-[#faa722] mb-8">Contact Us</h1>

                <p className="text-lg text-center text-gray-300 mb-12">
                    Have questions, feedback, or want to work with us? We’d love to hear from you!
                </p>

                <form action="#" method="POST" className="space-y-8">
                    {/* Name Input */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold mb-2 text-[#faa722]">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 text-[#651b0d] bg-white/90 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#faa722]"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2 text-[#faa722]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 text-[#651b0d] bg-white/90 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#faa722]"
                            required
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-lg font-semibold mb-2 text-[#faa722]">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What is your message about?"
                            className="w-full px-4 py-3 text-[#651b0d] bg-white/90 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#faa722]"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-semibold mb-2 text-[#faa722]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type your message here..."
                            className="w-full h-40 px-4 py-3 text-[#651b0d] bg-white/90 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#faa722]"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#faa722] text-[#651b0d] font-bold text-lg rounded-md hover:bg-[#e5941c] transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-300">
                    Email us at: <a href="mailto:contact@yourbusiness.com" className="text-[#faa722] underline">contact@yourbusiness.com</a>
                </p>
                <p className="text-lg text-gray-300">
                    Call us at: <a href="tel:+123456789" className="text-[#faa722] underline">+123 456 789</a>
                </p>
            </div>
        </section>
    );
};

export default page
