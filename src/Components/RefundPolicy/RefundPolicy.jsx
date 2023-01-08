import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import bg from "../../Assets/sf_logo/bg.png";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import Footer from "../Footer/Footer";
const RefundPolicy = () => {
  return (
    <section className="overflow-hidden max-w-5xl my-0 mx-auto float-none">
      <Header />
      <Navbar />

      <section>
        {/* refund policy banner */}
        <div className="relative md:relative">
          <img className="w-full h-28 sm:h-28 md:h-40 " src={bg} alt="" />
          <div className="absolute inset-0 ">
            <div className="flex flex-row justify-items-center items-center justify-center ">
              <img src={quotation_one} alt="" />
              <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 my-10 sm:my-10 md:my-14 text-xl sm:text-3xl font-semibold">
                Refund Policy
              </h1>
              <img src={quotation_two} alt="" />
            </div>
          </div>
        </div>

        <section className="w-full py-5 px-5 bg-[#FDFAFA]">
          <div className="flex flex-col min-w-0 break-words  w-full mb-6 ">
            <div className="px-4  flex-auto ">
              <div className="tab-content tab-space">
                <div className="w-full py-2">
                  <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                    Refund Policy
                  </p>

                  <div className="grid grid-cols-1">
                    <ul className="list-none ">
                      <li>
                        <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                          <div className="">
                            <FontAwesomeIcon
                              icon={faCircle}
                              className="w-1 h-1 pb-1"
                            />{" "}
                            <span className="ml-2">
                              For any technical disruption, kindly contact on
                              SquareFeet hotline number 01940-301000, or email
                              us - at info@squarefeet.xyz
                            </span>
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
                              For any user experience malfunction, you have to
                              inform SquareFeet immediately. Otherwise, no
                              benefit is promised later.
                            </span>
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
                              SquareFeet is only the booking facilitator on
                              behalf of the original institutions.
                            </span>
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
                              To cancel your fully paid booked item, you have to
                              contact the institution personally. The
                              institutions should leave their hotline number,
                              and/ or email address in the description/ features
                              part.
                            </span>
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
                              Canceling a booking is fully dependent on the
                              institution. SquareFeet has nothing to do with it.
                            </span>
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
                              After canceling the booking, the amount, or no
                              amount to be returned depends on the particular
                              institution, SquareFeet has no relation with it
                            </span>
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
                              If any institution is not available with their
                              given phone number, SquareFeet can not be held
                              responsible.
                            </span>
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
                              If any institution is found to be fraud or
                              cheating or does not provide the promised service,
                              SquareFeet can not be held responsible.
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* list of Terms of service end */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default RefundPolicy;
