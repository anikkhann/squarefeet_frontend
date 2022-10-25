import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import bg from "../../Assets/sf_logo/bg.png";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import location from "../../Assets/social_icon/location.png";
import phone from "../../Assets/social_icon/phone.png";
import mail from "../../Assets/social_icon/mail.png";
const ContactUs = () => {
  return (
    //
    <section className="overflow-hidden max-w-5xl my-0 mx-auto float-none">
      <Header></Header>
      <Navbar></Navbar>
      <div className="relative md:relative bg-[#FDFAFA]">
        <img className="w-full h-64 sm:h-72 md:h-[350px]" src={bg} alt="" />
        <div className="absolute inset-0 ">
          <div className="flex flex-row justify-items-center items-center justify-center ">
            <img src={quotation_one} alt="" />
            <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 my-7 sm:my-7 md:my-11 text-xl sm:text-3xl  font-semibold">
              Contact Us
            </h1>
            <img src={quotation_two} alt="" />
          </div>
          <p className="text-center">
            To register as community admin, or as a partner, please contact us.
          </p>
        </div>
        {/* Get In touch */}
        <section className="-mt-36 sm:-mt-44 md:-mt-52 w-full flex justify-center items-center bg-[#FDFAFA] bg-opacity-10">
          <div className="container w-[85%] md:w-90% max-w-[1000px] mt-[50px] mb-[50px] mr-auto ml-auto flex items-center justify-center">
            <div className="left relative hidden md:inset-y-5 z-10 md:w-[50%] min-h-[450px] bg-secondary md:flex items-center justify-center p-[30px] rounded-lg text-white">
              <div className=" content absolute min-h-[450px] w-full grid grid-cols-1 md:place-items-center md:justify-center md:px-6 sm:justify-items-center text-base font-medium">
                <div className="mb-5 ">
                  <h4 className="py-4 text-2xl font-medium text-white underline underline-offset-8">
                    Contact Information
                  </h4>
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
                        +8801940301000
                      </a>
                    </li>
                    <li className="flex items-center md:justify-start mb-4">
                      <img src={mail} className="w-4 mr-4" alt="" />
                      <a
                        href="/"
                        className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                      >
                        info@staging.squarefeet.xyz
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right w-full md:-ml-[130px] md:w-[74%] h-[530px] rounded-lg bg-grey-lighter flex flex-col bg-white px-6 py-8 shadow-md">
              <div className="md:pl-[30%] md:pr-[10%] mt-3">
                <div>
                  <h1 className="text-secondary text-2xl md:text-3xl font-semibold">
                    Get In Touch
                  </h1>
                  <p class="py-4 text-sm font-medium">
                    Don't be shy. Give us a call or drop us a line.
                  </p>
                </div>
                <form>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-sm"
                    name="fullname"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-sm"
                    name="email"
                    placeholder="Your Email"
                  />

                  <textarea
                    type="text"
                    id="message"
                    rows="4"
                    className="shadow-sm rounded-md p-3 outline-none w-full placeholder:text-sm input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium"
                    placeholder="Type Your Message Here"
                  ></textarea>

                  <button className="text-sm md:text-base px-5 py-1 mt-8 border-primary border-solid border-2 rounded-lg text-white text-center btn-primary">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ContactUs;
