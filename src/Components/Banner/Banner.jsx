import React from "react";
import bg from "../../Assets/sf_logo/bg.png";
import about from "../../Assets/sf_logo/about.png";
const Banner = () => {
  return (
    <section className="max-w-5xl my-0 mx-auto float-none text-black ">
      <div className="relative md:relative">
        <img
          className="w-full h-[740px] sm:h-96 md:h-[400px] "
          src={bg}
          alt=""
        />
        <div className="absolute inset-0 sm:flex sm:flex-row flex-col w-full py-8 sm:py-5 sm:px-5">
          <div className="md:w-[50%] sm:w-[50%] sm:px-5 px-5 my-5">
            <h1 className="text-secondary font-semibold text-base sm:text-lg">
              Let Us Define
            </h1>
            <h1 className="text-lg sm:text-xl md:text-3xl">Squarefeet-</h1>
            <p className="text-sm font-light sm:font-light md:text-base sm:text-sm md:py-2 py-2 sm:pb-2 ">
              The first Bangladeshi community-based property management
              platform, that wants to redefine the concept of urban
              neighbourhood is SquareFeet. The one-stop digital services for a
              building and community, like - Accounting & Billing, Neighbours,
              NewsFeed, Gatekeeper, Service Provider, Booking, Notice, Contract,
              and Police Verification are altogether present here.
            </p>
            <a
              href="https://blog.squarefeet.xyz/what-is-squarefeet-of-bangladesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md text-white text-xs sm:text-sm md:text-base font-medium btn-sm btn-primary mt-4">
                Learn More
              </button>
            </a>
          </div>

          <div className="relative md:w-[50%] sm:w-[50%] md:px-5 sm:px-5 px-5 my-5">
            <img
              className="sm:absolute w-full h-full sm:w-[90%] sm:h-full "
              src={about}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
