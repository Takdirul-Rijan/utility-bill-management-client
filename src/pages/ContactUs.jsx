import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
      confirmButtonColor: "#3085d6",
    });
    e.target.reset();
  };
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-100 
      dark:from-gray-900 dark:via-indigo-900 dark:to-gray-950 
      text-gray-800 dark:text-gray-200 py-16 px-6 transition-all duration-300"
    >
      <div className="w-11/12 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-gray-800/50 shadow-lg rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Our support team is available 7 days a week to assist you with
                billing, account access, or technical issues.
              </p>

              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-lg" />
                  +880 1700-123456
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-lg" />
                  support@smartbillhub.com
                </p>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-lg" />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md">
              <iframe
                title="SmartBillHub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9036811044697!2d90.3911820759668!3d23.750903078677712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894d7b54a8b%3A0x7f76b58e89b82a0!2sDhaka%20City!5e0!3m2!1sen!2sbd!4v1699123456789!5m2!1sen!2sbd"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/50 shadow-lg rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-5 text-blue-700 dark:text-blue-400">
              Send Us a Message
            </h2>

            <form onSubmit={handleSendMessage} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  pattern="[A-Za-z.\s]+"
                  title="Please enter letters only"
                  className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
