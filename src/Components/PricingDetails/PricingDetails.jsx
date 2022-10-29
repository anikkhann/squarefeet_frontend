import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import bg from "../../Assets/sf_logo/bg.png";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import general from "../../Assets/pricing_details/general.png";
import standard from "../../Assets/pricing_details/standard.png";
import exclusive from "../../Assets/pricing_details/exclusive.png";
import mail_add from "../../Assets/social_icon/mail_add.png";
import ph from "../../Assets/social_icon/ph.png";
import MailTo from "../MailTo/MailTo";
const PricingDetails = () => {
  const{mailTo, setMailTo} = useState ("nfo@squarefeet.xyz")
  return (
    //
    <section className="overflow-hidden max-w-5xl my-0 mx-auto float-none">
      <Header></Header>
      <Navbar></Navbar>
      {/* pricing start */}
      <section className="">
        {/* pricing banner */}
        <div className="relative md:relative bg-[#FDFAFA]">
          <img className="w-full h-52 sm:h-56 md:h-[235px]" src={bg} alt="" />
          <div className="absolute inset-0 ">
            <div className="flex flex-row justify-items-center items-center justify-center ">
              <img src={quotation_one} alt="" />
              <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 my-7 sm:my-7 md:my-11 text-xl sm:text-3xl  font-semibold">
                Simple Pricing
              </h1>
              <img src={quotation_two} alt="" />
            </div>
          </div>
          {/* overlay card start*/}
          <div className="-mt-32 sm:-mt-28 mb-5 w-full flex items-center justify-center  text-base font-medium ">
            <div className="sm:relative  py-5 px-8 bg-[#ffffff] shadow-lg rounded-sm ">
              <div className=" sm:absolute sm:bottom-0 sm:right-0 sm:-mx-10 sm:-my-10 flex justify-center">
                <img className=" w-20 h-20" src={general} />
              </div>
              <p className="text-center text-[#333333] font-semibold text-base sm:text-xl">
                1.General (Free of Cost)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 px-6 py-6">
                <ul className="list-none ">
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">Service Details</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">SquareFeet Newsfeed</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">Service Provider</span>
                      </div>
                    </a>
                  </li>
                </ul>

                <ul className="list-none ">
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">Accounts & Billing</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">Bill Pay</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                      <div className="">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="w-1 h-1 pb-1"
                        />{" "}
                        <span className="ml-2">Notice</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* standard & exclusive card  start*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:py-10 gap-4 px-5 w-full">
            {/* standard */}
            <div className="sm:mb-8 w-full flex items-center justify-center  text-base font-medium ">
              <div className="sm:relative  py-5 sm:px-4 px-10 bg-[#ffffff] shadow-lg rounded-sm ">
                <div className=" sm:absolute sm:bottom-0 sm:left-0 sm:-mx-5 sm:-my-10 flex justify-center">
                  <img className=" w-20 h-20" src={standard} />
                </div>
                <p className="text-center text-[#333333] font-semibold text-base sm:text-xl">
                  2.Standard
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 py-6">
                  <ul className="list-none ">
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2 ">SquareFeet Newsfeed</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Service Provider</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Accounts & Billing</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Bill Pay</span>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul className="list-none ">
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Notice</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Gatekeeper</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">
                            Online Contract template*
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* exclusive */}
            <div className="mb-8 w-full flex items-center justify-center  text-base font-medium ">
              <div className="sm:relative  py-5 sm:px-4 px-10 bg-[#ffffff] shadow-lg rounded-sm ">
                <div className=" sm:absolute sm:bottom-0 sm:right-0 sm:-mx-5 sm:-my-10 flex justify-center">
                  <img className=" w-20 h-20" src={exclusive} />
                </div>
                <p className="text-center text-[#333333] font-semibold text-base sm:text-xl">
                  3.Exclusive
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 py-6">
                  <ul className="list-none ">
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2 ">SquareFeet Newsfeed</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Service Provider</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Accounts & Billing</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Bill Pay</span>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul className="list-none ">
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Notice</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Gatekeeper</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">Meeting Module</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-1 h-1 pb-1"
                          />{" "}
                          <span className="ml-2">
                            Online Contract template*
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* phone & mail button */}
          <div className="grid place-content-center place-items-center justify-center items-center py-5">
            <p className="text-center text-[#333333] font-semibold text-sm sm:text-base">
              To know about our pricing please contact us -
            </p>
            <div className="flex flex-col  sm:flex-row sm:justify-around sm:space-x-10 sm:my-6 ">
              <a href="phn:01940301000" className="mt-5 ">
                <img
                  className="w-30 h-20 sm:w-30 sm:h-20 cursor-pointer"
                  src={ph}
                  alt=""
                />
              </a>


              <a  className="mt-5 "
                
              >
                <img
                onClick={(e) => {
                  window.location.href = mailTo;
                  e.preventDefault();
              }}
                  className="w-30 h-20 sm:w-30 sm:h-20 cursor-pointer"
                  src={mail_add}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Details end */}
      <Footer></Footer>
    </section>
  );
};

export default PricingDetails;
