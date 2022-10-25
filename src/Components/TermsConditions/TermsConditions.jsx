import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import bg from "../../Assets/sf_logo/bg.png";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
const TermsConditions = () => {
  const [openTerms, setOpenTerms] = useState(1);
  return (
    //
    <section className="overflow-hidden max-w-5xl my-0 mx-auto float-none">
      <Header></Header>
      <Navbar></Navbar>
      {/* Terms & Conditions section start */}
      <section className="">
        {/* terms & condition banner */}
        <div className="relative md:relative">
          <img className="w-full h-28 sm:h-28 md:h-40 " src={bg} alt="" />
          <div className="absolute inset-0 ">
            <div className="flex flex-row justify-items-center items-center justify-center ">
              <img src={quotation_one} alt="" />
              <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 my-10 sm:my-10 md:my-14 text-xl sm:text-3xl font-semibold">
                Terms & Conditions
              </h1>
              <img src={quotation_two} alt="" />
            </div>
          </div>
        </div>
        {/* terms & conditions tabs section*/}
        <section className="w-full py-5 px-5 bg-[#FDFAFA]">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="flex">
                <ul
                  className="flex list-none py-6 flex-row justify-between w-full "
                  role="tablist"
                >
                  <li
                    className={`w-1/2 text-center px-5 divide-y-2 " + ${
                      openTerms === 1 ? "divide-secondary" : "divide-[#A5A7AA]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTerms(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <a
                      className={`text-[11px] sm:text-xl md:text-2xl font-medium " + ${
                        openTerms === 1
                          ? "divide-secondary text-secondary"
                          : "divide-[#A5A7AA] text-[#A5A7AA]"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTerms(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      TERMS OF SERVICE
                    </a>
                    <p className=""></p>
                  </li>
                  <li
                    className={`w-1/2 text-center px-5 divide-y-2 " + ${
                      openTerms === 1 ? "divide-[#A5A7AA]" : "divide-secondary"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTerms(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <a
                      className={`text-[14px] sm:text-xl md:text-2xl font-medium" + ${
                        openTerms === 2
                          ? "divide-secondary text-secondary"
                          : "divide-[#A5A7AA] text-[#A5A7AA]"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTerms(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Privacy Policy
                    </a>
                    <p className=""></p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col min-w-0 break-words  w-full mb-6 ">
                <div className="px-4  flex-auto ">
                  <div className="tab-content tab-space">
                    {/* tab 1 */}
                    <div
                      className={` ${openTerms === 1 ? "block" : "hidden"}`}
                      id="link1"
                    >
                      <div className="w-full py-2">
                        <p className="py-2 text-base text-[#455A64]">
                          This document is an electronic record and is generated
                          by a computer system and does not require any physical
                          or digital signatures.
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          Please carefully read the terms and conditions of the
                          following agreement. It contains very important
                          information about your rights and obligations, as well
                          as limitations and exclusions that may apply to you.
                        </p>

                        <p className="py-6 text-[#333333] text-center font-bold text-lg sm:text-xl md:text-3xl">
                          TERMS OF SERVICE
                          <p className="py-2 text-[#333333] text-center font-bold text-xs">
                            Last Updated: February 2022
                          </p>
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          We want every Bangladeshi to be welcomed warmly in
                          SquareFeet. To access this site, mobile app or any
                          subdomain or links verified and offered by SquareFeet
                          platform limited, the users must read our terms and
                          conditions thoroughly, and agree.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          TERMS OF SERVICE
                        </p>

                        {/* list of Terms of service start */}
                        <div className="grid grid-cols-1">
                          <ul className="list-none ">
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  1. This is only a property management
                                  platform, there exists no direct obligation in
                                  the transaction process.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  2. No one can claim to bring any tenant or any
                                  other rental business from the platform.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  3. There exists no obligation to provide
                                  service providers on demand.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  4. The landlords can not blame the platform
                                  for any activity of the tenants or users.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  5. We encourage everyone to act honestly, but
                                  do not take responsibility for any dishonest
                                  behaviour by anyone.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  6. The act of the gatekeepers is not related
                                  to us, we just provide them a platform for
                                  better security.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  7. We do not participate in any business
                                  contract or association contract, so take
                                  steps towards any of them at your own risk.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  8. We will not be responsible for any scam or
                                  mishap caused by anyone who uses this
                                  platform.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  9. No user can violate the privacy of the
                                  platform by any means.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  10. Everyone should be cautious of any danger,
                                  stranger, suspicions and deal with them
                                  according to law with their own
                                  responsibility.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  11. No one can download and use any of our
                                  contents and data that has copyright, and use
                                  for any commercial purpose.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  12. When you provide your email and contact
                                  number, you are giving us the permission to
                                  allow the platform and our associated sites to
                                  send the promotional information. We can use
                                  your contact information for any of our
                                  essential actions as per requirement in any
                                  situation and at time.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  13. If any member or ex-member of our platform
                                  provides fake information, we will not be
                                  responsible. So, please verify the user and
                                  others as per your need.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  14. Lastly, use this platform at your own
                                  risk, you can always ask for help, but we are
                                  not bound to provide any.
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-5 sm:text-base  text-[#455A64] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  If you have any further questions or requests
                                  regarding this terms and conditions, or your
                                  personal Information, feel free to{" "}
                                  <a className="text-[#326EBD] font-semibold">
                                    contact us
                                  </a>
                                  .
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Customer Support for booking
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
                                  For any technical disruption, kindly contact
                                  on SquareFeet hotline number 01940-301000, or
                                  email us - at info@squarefeet.xyz
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
                                  For any user experience malfunction, you have
                                  to inform SquareFeet immediately. Otherwise,
                                  no benefit is promised later.
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
                                 To cancel your fully paid booked item, you
                                  have to contact the institution personally.
                                  The institutions should leave their hotline
                                  number, and/ or email address in the
                                  description/ features part.
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
                                  institution. SquareFeet has nothing to do with
                                  it.
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
                                  amount to be returned depends on the
                                  particular institution, SquareFeet has no
                                  relation with it
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
                                  cheating or does not provide the promised
                                  service, SquareFeet can not be held
                                  responsible.
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* list of Terms of service end */}
                      </div>
                    </div>
                    {/* tab2 */}
                    <div
                      className={`${openTerms === 2 ? "block" : "hidden"}`}
                      id="link2"
                    >
                      <div className="w-full py-2">
                        <p className="py-2 text-base text-[#455A64]">
                          This document is an electronic record and is generated
                          by a computer system and does not require any physical
                          or digital signatures.
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          Please carefully read the terms and conditions of the
                          following agreement. It contains very important
                          information about your rights and obligations, as well
                          as limitations and exclusions that may apply to you.
                        </p>

                        <p className="py-6 text-[#333333] text-center font-bold text-lg sm:text-xl md:text-3xl">
                          Privacy Policy
                          <p className="py-2 text-[#333333] text-center font-bold text-xs">
                            Last Updated: February 2022
                          </p>
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          SquareFeet is the Digital Building Management or
                          Property Platform which offers smart dweling
                          facilities to its users. SquareFeet builds easy &
                          flexible mobile application for its users to faciliate
                          the benefits of the SquareFeet Platform.
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          This page is used to inform visitors regarding our
                          policies with the collection, use, and disclosure of
                          Personal Information if anyone decided to use our
                          service. If you choose to use our Service, then you
                          agree to the collection and use of information in
                          relation to this policy. The Personal Information that
                          we collect is used for providing and improving the
                          Service. We will not use or share your information
                          with anyone except as described in this Privacy
                          Policy. The terms used in this Privacy Policy have the
                          same meanings as in our Terms and Conditions, which is
                          accessible at the apps unless otherwise defined in
                          this Privacy Policy.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Location Access
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          For providing service, We may require you to provide
                          us with enabling your location services to get track
                          of your service. This location information is only
                          used for track the path of the app user. The
                          information that We request will be retained on your
                          device and is not collected by us in any way. The app
                          does use third party services that may collect
                          information used to identify you.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Information Collection and Use
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          For a better experience, while using our Service, We
                          may require you to provide us with certain personally
                          identifiable information (user’s name, address,
                          location, pictures). The information that We request
                          will be retained on your device and is not collected
                          by us in any way. The app does use third party
                          services that may collect information used to identify
                          you. Link to privacy policy of third party service
                          providers used by the app
                        </p>

                        <div className="grid grid-cols-1">
                          <ul className="list-none">
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">Google Play Services</span>
                                  
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">Google Analytics for Firebase</span>
                                  
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">iOS Apps Privacy Policy</span>
                                  
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Log Data
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          We want to inform you that whenever you use our
                          Service, in a case of an error in the app. We collect
                          data and information (through third party products) on
                          your phone called Log Data. This Log Data may include
                          information such as your device Internet Protocol
                          address, device name, operating system version, the
                          configuration of the app when utilizing our Service,
                          the time and date of your use of the Service, and
                          other statistics.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Cookies
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          Cookies are files with a small amount of data that are
                          commonly used as anonymous unique identifiers. These
                          are sent to your browser from the websites that you
                          visit and are stored on your device's internal memory.
                          This Service does not use these “cookies” explicitly.
                          However, the app may use third party code and
                          libraries that use “cookies” to collect information
                          and improve their services. You have the option to
                          either accept or refuse these cookies and know when a
                          cookie is being sent to your device. If you choose to
                          refuse our cookies, you may not be able to use some
                          portions of this Service.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Service Providers
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          We may employ third-party companies and individuals
                          due to the following reasons:
                        </p>

                        <div className="grid grid-cols-1">
                          <ul className="list-none">
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">To facilitate our Service.</span>
                                  
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">To provide the Service on our behalf.</span>
                                  
                                </div>
                              </a>
                            </li>
                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                  <span className="ml-2">To perform Service-related services, or</span>
                                  
                                </div>
                              </a>
                            </li>

                            <li>
                              <a className="text-xs py-2 sm:text-base  text-[#326EBD] flex md:flex-row flex-col gap-4">
                                <div className="">
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="w-1 h-1 pb-1"
                                  />{" "}
                                 <span className="ml-2"> To assist us in analyzing how our Service is
                                  used.</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="py-2 text-base text-[#455A64]">
                          We want to inform users of this Service that these
                          third parties have access to your Personal
                          Information. The reason is to perform the tasks
                          assigned to them on our behalf. However, they are
                          obligated not to disclose or use the information for
                          any other purpose.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Security
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          We value your trust in providing us your Personal
                          Information, thus we are striving to use commercially
                          acceptable means of protecting it. But remember that
                          no method of transmission over the internet, or method
                          of electronic storage is 100% secure and reliable, and
                          we cannot guarantee its absolute security.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Links to Other Sites
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          This Service may contain links to other sites. If you
                          click on a third-party link, you will be directed to
                          that site. Note that these external sites are not
                          operated by us. Therefore, we strongly advise you to
                          review the Privacy Policy of these websites. We have
                          no control over and assume no responsibility for the
                          content, privacy policies, or practices of any
                          third-party sites or services.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Children’s Privacy
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          These Services do not address anyone under the
                          legitimate rules of the service provider. We do not
                          knowingly collect personally identifiable information
                          from children under 13. In the case, we discover that
                          a child under 13 has provided us with personal
                          information; we immediately delete this from our
                          servers. If you are a parent or guardian and you are
                          aware that your child has provided us with personal
                          information, please inform us so that, we will be able
                          to do necessary actions.
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Changes to This Privacy Policy
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          We may update our Privacy Policy from time to time.
                          Thus, you are advised to review this page periodically
                          for any changes. We will notify you of any changes by
                          posting the new Privacy Policy on this page.
                        </p>
                        <p className="py-2 text-base text-[#455A64]">
                          This policy is effective as of 2021-01-01
                        </p>

                        <p className="py-4 text-[#333333] font-semibold text-lg sm:text-xl">
                          Contact Us
                        </p>

                        <p className="py-2 text-base text-[#455A64]">
                          If you have any questions or suggestions about our
                          Privacy Policy, do not hesitate to contact us:
                          info@squarefeet.xyz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* terms & conditions tabs section end */}
      </section>
      {/* Terms & Conditions end */}
      <Footer></Footer>
    </section>
  );
};

export default TermsConditions;
