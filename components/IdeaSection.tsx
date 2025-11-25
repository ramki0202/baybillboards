import React from "react";

const IdeaSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Got a question or want to book? Just fill out the form below and we'll
          get back to you soon!
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-b-2 border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b-2 border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border-b-2 border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border-b-2 border-gray-300 focus:border-gray-900 outline-none py-2 resize-none transition-colors"
            />
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default IdeaSection;
