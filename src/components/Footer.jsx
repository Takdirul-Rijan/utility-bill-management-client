import React, { use } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <footer
      className="bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-100
      dark:from-gray-900 dark:via-indigo-900 dark:to-gray-950
      text-gray-700 dark:text-gray-300 transition-all duration-300 mt-0 mx-auto"
    >
      <div className="overflow-hidden py-6 px-4">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-300 dark:border-gray-700 pb-5">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-blue-400 mb-2">
                Smart
                <span className="text-blue-700 dark:text-white">BillHub</span>
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                SmartBillHub helps you manage all your monthly utility bills —
                Electricity, Gas, Water, and Internet — all in one place. Track,
                pay, and download reports securely.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Useful Links
              </h3>

              <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-center md:text-left">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    Home
                  </a>
                </li>
                {!user && (
                  <li>
                    <a
                      href="/auth/login"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      Login
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="/all-bills"
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    All Bills
                  </a>
                </li>
                {!user && (
                  <li>
                    <a
                      href="/auth/register"
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      Register
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href="/my-pay-bills"
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    My Pay Bills
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Connect With Us
              </h3>

              <div className="flex justify-center md:justify-start gap-5 text-2xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-gray-200 transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                SmartBillHub
              </span>{" "}
              — All Rights Reserved.
            </p>
            <p className="mt-1">Designed by Team SmartBillHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
