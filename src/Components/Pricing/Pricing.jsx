import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    //
    <section className="bg-[#FDFAFA] max-w-5xl my-0 mx-auto float-none" id="#pricing">
    <Link to={"/price"} >
    <div className="pt-5 pb-20 px-5 md:px-5 md:pb-20">
        <div className="flex flex-row justify-items-center items-center justify-center py-3 ">
          <img src={quotation_one} alt="" />
          <h1 className="text-secondary underline underline-offset-8 md:text-4xl px-3 text-2xl font-semibold">
            Simple Pricing!!
          </h1>
          <img src={quotation_two} alt="" />
        </div>

        <p className="text-center mt-3">
          We offer the least price with the best features, check it out!
        </p>

        {/*pricing tabs start */}
        {/* <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex justify-items-start">
              <ul className="flex list-none pt-3 flex-row  z-20" role="tablist">
                <li className="mr-2 sm:mr-4 md:mr-4 last:mr-0 text-center">
                  <a
                    className={`text-base sm:text-lg sm:py-4 md:text-base md:py-4 lg:text-lg font-bold px-2 py-3 lg:py-5  block leading-normal " +
                          ${
                            openTab === 1 ? "text-secondary" : "text-[#333333]"
                          }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Free & Primium
                  </a>
                </li>
                <p className="divide-y-2"></p>
                <li className="mr-2 sm:mr-4 md:mr-4 last:mr-0  text-center">
                  <a
                    className={`text-base sm:text-lg sm:py-4 md:text-base md:py-4 lg:text-lg font-bold px-2 py-3 lg:py-5 block leading-normal " +
                          ${
                            openTab === 2 ? "text-secondary" : "text-[#333333]"
                          }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Offer for You
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
              <div className="sm:px-4 flex-auto">
                <div className="tab-content tab-space">
                
                  <div
                    className={` ${openTab === 1 ? "block" : "hidden"}`}
                    id="link1"
                  >
                  
                    <div className="md:px-5 lg:px-5 md:py-3 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 ">
                      <div className="block p-6 w-full bg-primary rounded-sm border border-primary shadow-md hover:bg-primary md:h-[19rem]">
                        <div>
                          <h2 className="text-white text-center text-lg font-semibold">
                            1.General
                          </h2>
                        </div>
                        <div className="border-b border-deep-purple-accent-200  mt-3"></div>

                       
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 my-4">
                          <div className="table m-0 ml-auto mr-auto">
                            <p className="font-medium tracking-wide text-white sm:text-base text-lg underline underline-offset-2">
                              Service Details
                            </p>
                            <ul className="mt-2 space-y-2">
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  SquareFeet Newsfeed
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Service Provider
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Accounts & Billing
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Bill Pay
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Notice
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                     
                      </div>

                    
                      <div className="block p-6 w-full bg-primary rounded-sm border border-primary shadow-md hover:bg-primary md:h-[25rem]">
                        <div>
                          <h2 className="text-white text-center text-lg font-semibold">
                            2.Standard
                          </h2>
                        </div>
                        <div className="border-b border-deep-purple-accent-200  mt-3"></div>

                   
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 my-4">
                          <div className="table m-0 ml-auto mr-auto">
                            <p className="font-medium tracking-wide text-white sm:text-base text-lg underline underline-offset-2">
                              Service Details
                            </p>
                            <ul className="mt-2 space-y-2">
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  SquareFeet Newsfeed
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Service Provider
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Accounts & Billing
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Bill Pay
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Notice
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Gatekeeper
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Online Contract template*
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                    
                      </div>

                  
                      <div className="block p-6 w-full bg-primary rounded-sm border border-primary shadow-md hover:bg-primary md:h-[29rem]">
                        <div>
                          <h2 className="text-white text-center text-lg font-semibold">
                            3.Exclusive
                          </h2>
                        </div>
                        <div className="border-b border-deep-purple-accent-200 mt-3"></div>

                    
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 my-4">
                          <div className="table m-0 ml-auto mr-auto">
                            <p className="font-medium tracking-wide text-white sm:text-base text-lg underline underline-offset-2">
                              Service Details
                            </p>
                            <ul className="mt-2 space-y-2">
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  SquareFeet Newsfeed
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Service Provider
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Accounts & Billing
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Bill Pay
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Notice
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Gatekeeper
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Meeting Module
                                </a>
                              </li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  className="text-white h-1 mb-1 mr-1"
                                />
                                <a
                                  href="/"
                                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 sm:text-sm text-base"
                                >
                                  Online Contract template*
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      
                      </div>
                   
                    </div>

                    <p className="text-center py-10">
                      *Additional pay for the print & execution in stamp paper,
                      per contract
                      <span className="ml-2 text-semibold text-base text-black">
                        500 BDT
                      </span>
                    </p>
                  </div>
               
                  <div
                    className={` ${openTab === 2 ? "block" : "hidden"}`}
                    id="link2"
                  >
                   
                    <div className="md:px-5 lg:px-5 md:py-3 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    
                      <div className="block p-6 w-full bg-secondary rounded-sm border border-secondary shadow-md hover:bg-secondary">
                        <div>
                          <h2 className="text-white text-center text-lg font-semibold">
                            Exclusive
                          </h2>
                          <p className="text-white text-center text-base font-semibold mt-2">
                            Free for the first 4 months
                          </p>
                          <p className="mt-2 text-center text-white font-semibold text-xl">
                            400 BDT/Month/member
                          </p>
                          <p className="mt-2 text-center text-white font-semibold text-xl">
                            4,000 BDT/Year/member
                          </p>
                          <p className="font-normal mt-4 tracking-wide text-white text-center text-sm">
                            A Dedicated Account Manager
                          </p>
                        </div>
                      </div>

                  
                      <div className="block p-6 w-full bg-secondary rounded-sm border border-secondary shadow-md hover:bg-secondary md:h-[11rem]">
                        <div>
                          <h2 className="text-white text-center text-lg font-semibold">
                            Standard
                          </h2>
                          <p className="text-white text-center text-base font-semibold mt-2">
                            Free for the first 4 months
                          </p>
                          <p className="mt-2 text-center text-white font-semibold text-xl">
                            200 BDT/Month/member
                          </p>
                          <p className="mt-2 text-center text-white font-semibold text-xl">
                            2,000 BDT/Year/member
                          </p>
                        </div>
                      </div>
                   
                    </div>

                    <p className="text-center py-10">
                      *Additional pay for the print & execution in stamp paper,
                      per contract
                      <span className="ml-2 text-semibold text-base text-black">
                        500 BDT
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
     
      </div>
    </Link>
    </section>
  );
};

export default Pricing;
