import React from "react";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
// import events from "../../Assets/events/events.png";
// import news from "../../Assets/sf_logo/news.jpeg";
import indiasoft from "../../Assets/events/indiasoft.jpg";
import partnership from "../../Assets/events/partnership.jpg";
import bylc from "../../Assets/events/bylc.png";
import sf_platform from "../../Assets/events/sf_platform.jpg";
import sf_contract from "../../Assets/events/sf_contract.jpg";
import sf_law from "../../Assets/events/sf_law.jpg";
const Events = () => {
  return (
    //
    <section
      className="max-w-5xl my-0 mx-auto float-none bg-[#FDFAFA]"
      id="#event"
    >
      {/* <h1 className="mt-8 text-secondary underline underline-offset-4 md:text-4xl px-3 text-center text-2xl font-semibold">
        
      </h1> */}
      <div className=" flex flex-row justify-items-center items-center justify-center py-6 px-5">
        <img src={quotation_one} alt="" className="mt-8" />
        <h1 className="mt-8 text-secondary underline underline-offset-8 md:text-4xl px-4 sm:px-8 text-2xl font-semibold">
          News and events of Squarefeet
        </h1>
        <img src={quotation_two} alt="" className="mt-8" />
      </div>

      {/* News Card */}
      <div className="flex justify-between items-center px-5 py-5">
        <div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            {/*className="h-80 sm:h-80  md:h-80 md:w-80 "*/}
            <div className="h-80 sm:h-80  md:h-80 md:w-80">
              {/* object-cover */}
              <img
              // h-[70%] sm:h-[70%] lg:w-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125
                className="h-[70%] sm:h-[70%] lg:w-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={sf_platform}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              {/* text-sm -mt-[65px] sm:text-base sm:-mt-[65px] font-semibold text-white */}
              <h1 className="text-3xl -mt-[65px] sm:text-3xl sm:-mt-[65px] font-semibold text-white">
              Launching Of
              </h1>
              <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Launching of SquareFeet Platform</p>
              {/*  className="mt-7" */}
              <a
                href="https://blog.squarefeet.xyz/launching-squarefeet-platform-bangladesh/"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <button className="rounded-full bg-secondary py-2 px-3.5 text-sm capitalize text-white shadow shadow-secondary/60">
                  See More
                </button>
              </a>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-80 sm:h-80  md:h-80 md:w-80">
              <img
                className="h-[70%] sm:h-[70%] lg:w-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={sf_contract}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl -mt-[65px] sm:text-3xl sm:-mt-[65px] font-semibold text-white">
                Rental Contract
              </h1>
              <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Create Digital Rental Contract</p>
              <a
                href="https://blog.squarefeet.xyz/easiest-way-to-create-the-rental-contract-in-bangladesh/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <button className="rounded-full bg-secondary py-2 px-3.5 text-sm capitalize text-white shadow shadow-secondary/60">
                  See More
                </button>
              </a>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-80 sm:h-80  md:h-80 md:w-80">
              <img
                className="h-[70%] sm:h-[70%] lg:w-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={sf_law}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl -mt-[65px] sm:text-3xl sm:-mt-[65px] font-semibold text-white">
                Renewing Rent
              </h1>
              <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Law for Renewing Rent in Bangladesh</p>
              <a
                href="https://blog.squarefeet.xyz/https-blog-squarefeet-xyz-law-for-renewing-rent-in-bangladesh/"
                target="_blank"
                rel="noopener noreferrer"
              
              >
                <button className="rounded-full bg-secondary py-2 px-3.5  text-sm capitalize text-white shadow shadow-secondary/60">
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* event cards */}
      <div className="mt-5 px-5 py-3 sm:px-5 sm:py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full ">
        {/* <a
          href="https://www.linkedin.com/posts/squarefeetxyz_indiasoft-startup-bangladesh-activity-6919930748015628288-0LvB?utm_source=share&utm_medium=member_desktop
"
          target="_blank"
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <div className=" w-full h-full ">
            <img className="object-cover w-full " src={indiasoft} />
          </div>

          <div className="absolute bottom-0 w-full left-0 px-8 py-2 bg-secondary opacity-70">
            <h4 className="mb-1 sm:text-xs  leading-3 text-white">
              March 23, 2022
            </h4>
            <p className="sm:text-sm md:text-xs lg:text-base font-semibold tracking-tight  text-white">
              Team SquareFeet has participated in IndiaSoft 2022
            </p>
          </div>
        </a>

        <a
          href="https://blog.squarefeet.xyz/squarefeet-is-the-billing-partner-of-urban-gaz/"
          target="_blank"
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <div className=" w-full h-full ">
            <img className="object-cover w-full " src={partnership} />
          </div>

          <div className="absolute bottom-0  w-full left-0 px-8 py-2 bg-secondary opacity-70">
            <h4 className="mb-1 sm:text-xs leading-3 text-white">
              April 1, 2022
            </h4>
            <p className="sm:text-sm md:text-xs lg:text-base font-semibold tracking-tight text-white ">
              Squarefeet is the Billing Partner of Urban Gaz
            </p>
          </div>
        </a>

        <a
          href="https://www.facebook.com/squarefeet.xyz/photos/a.135480668815960/225457423151617/ "
          target="_blank"
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <div className="sm:absolute w-full h-full ">
            <img className="object-cover w-full " src={bylc} />
          </div>

          <div className="absolute  w-full bottom-0 left-0 px-8 py-2 bg-secondary opacity-70">
            <h4 className="mb-1 sm:text-xs leading-3 text-white">
              October 20, 2022
            </h4>
            <p className="sm:text-sm md:text-xs lg:text-base font-semibold tracking-tight text-white ">
              Squarefeet is one of the winners of Cohort 5
            </p>
          </div>
        </a> */}

        <a
          href="https://www.linkedin.com/posts/squarefeetxyz_indiasoft-startup-bangladesh-activity-6919930748015628288-0LvB?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
        >
          <img
            src={indiasoft}
            className="w-96 h-60 sm:h-40 sm:w-40 md:w-28 md:h-24 rounded-sm"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">IndiaSoft2022</p>
            <p className="text-sm text-gray-600">March 23, 2022</p>
          </div>
        </a>

        <a
          href="https://blog.squarefeet.xyz/squarefeet-is-the-billing-partner-of-urban-gaz/"
          target="_blank"
          className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
        >
          <img
            src={partnership}
            className="w-96 h-60 sm:h-40 sm:w-40 md:w-28 md:h-24 rounded-sm"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">Partnership</p>
            <p className="text-sm text-gray-600">April 1, 2022</p>
          </div>
        </a>

        <a
          href="https://www.facebook.com/squarefeet.xyz/photos/a.135480668815960/225457423151617/ "
          target="_blank"
          className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
        >
          <img
            src={bylc}
            className="w-96 h-60 sm:h-40 sm:w-40 md:w-28 md:h-24 rounded-sm"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">Cohort 5 </p>
            <p className="text-sm text-gray-600">October 20, 2022</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Events;
