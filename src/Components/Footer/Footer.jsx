import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../Assets/social_icon/facebook.png";
import instagram from "../../Assets/social_icon/instagram.png";
import linkedIn from "../../Assets/social_icon/linkedIn.png";
import location from "../../Assets/social_icon/location.png";
import phone from "../../Assets/social_icon/phone.png";
import mail from "../../Assets/social_icon/mail.png";
const Footer = () => {
  return (
    //

    <div
      className="relative  bg-[#333333] max-w-5xl my-0 mx-auto float-none mt-16"
      id="#footer"
    >
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          className="text-[#333333]"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-6">
        <div className="grid  row-gap-10 mb-8  lg:grid-cols-4">
          <div className="md:max-w-md ">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="text-xl font-semibold tracking-wide text-white ">
                About Squarefeet
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-white">
                The first Bangladeshi community-based property management
                platform, that wants to redefine the concept of urban
                neighbourhood is SquareFeet.
              </p>
              {/* <p className="mt-4 text-sm text-deep-purple-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p> */}
              <div className="flex flex-col justify-between pt-5 pb-10 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                  <a
                    href="https://www.facebook.com/squarefeet.xyz"
                    target="_blank"
                    className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                    <img src={facebook} alt="" className="h-7" />
                  </a>
                  <a
                    href="https://www.instagram.com/squarefeet.xyz/"
                    target="_blank"
                    className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                    <img src={instagram} alt="" className="h-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/squarefeetxyz/"
                    target="_blank"
                    className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                    <img src={linkedIn} alt="" className="h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 row-gap-6  lg:col-span-3 md:grid-cols-3 ">
            <div className="lg:table lg:m-0 lg:ml-auto lg:mr-auto">
              <p className="font-semibold tracking-wide text-white text-xl">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.squarefeet.xyz/"
                    target="_blank"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    to={"/price"}
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/privacy-policy"}
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:table lg:m-0 lg:ml-auto lg:mr-auto">
              <p className="font-semibold tracking-wide text-white text-xl">
                Contact Us
              </p>

              <ul className="mt-2 space-y-2">
                <li className="flex items-center md:justify-start mb-4">
                  <img src={location} className="w-4 mr-4" alt="" />

                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    14 Rd 16/A, Gulshan, Dhaka 1212, Bangladesh
                  </a>
                </li>
                <li className="flex items-center md:justify-start mb-4">
                  <img src={phone} className="w-4 mr-4" alt="" />
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    +880 1999999999
                  </a>
                </li>
                <li className="flex items-center md:justify-start mb-4">
                  <img src={mail} className="w-4 mr-4" alt="" />
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                  >
                    info@squarefeet.xyz
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:table lg:m-0 lg:ml-auto lg:mr-auto">
              <p className="text-2xl font-semibold tracking-wide text-white underline underline-offset-4">
                Let’s talk
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <form action="#" className="space-y-4">
                    <div>
                      <label
                        for="name"
                        className="block mb-2 text-base font-medium text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="subject"
                        className="block mb-2 text-base font-medium text-white dark:text-gray-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="number"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="xyz@gmail.com"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="grid place-items-center py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit  focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            Copyright © 2022 Squarefeet. All Rights Reserved.
          </p>
          {/* <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <img src={facebook} alt="" className="h-5" />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <img src={instagram} alt="" className="h-5" />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <img src={linkedIn} alt="" className="h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
