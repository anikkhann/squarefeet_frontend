import React from "react";
import facebook from "../../Assets/social_icon/facebook.png";
import instagram from "../../Assets/social_icon/instagram.png";
import linkedIn from "../../Assets/social_icon/linkedIn.png";
import mail from "../../Assets/social_icon/mail.png";
import phone from "../../Assets/social_icon/phone.png";
import location from "../../Assets/social_icon/location.png";
const Header = () => {
  return (
    //
    <section
      className="bg-[#f8f6f6]  md:flex-row top-0 md:flex md:justify-between md:items-center
z-20 py-2 lg:py-2 bg-gradient-to-r from-primary to-secondary max-w-5xl my-0 mx-auto float-none"
    >
      <div className=" sm:flex sm:flex-row sm:justify-between flex-col w-full sm:px-5">
        <div className="sm:flex sm:flex-row text-white ">
          <div className="flex md:flex md:flex-row md:mx-1">
            <a href="">
              <img
                src={location}
                className="flex text-xl w-3 h-4 my-3 mx-1 md:mx-1 lg:mx-2"
                alt=""
              />
            </a>
            <p className="my-3 px-2 text-sm md:text-xs sm:text-[9px]">
              14 Rd 16/A, Gulshan, Dhaka 1212, Bangladesh
            </p>
          </div>
          <div className="flex md:flex md:flex-row md:mx-1">
            <a href="">
              <img
                src={mail}
                className="text-xl w-3 h-4 my-3 mx-1 md:mx-1 lg:mx-2"
                alt=""
              />
            </a>
            <p className="my-3 px-2 text-sm md:text-xs sm:text-[9px]">
              info@staging.squarefeet.xyz
            </p>
          </div>
          <div className="flex md:flex md:flex-row md:mx-1">
            <a href="">
              <img
                src={phone}
                className="text-xl w-3 h-4 my-3 mx-1 md:mx-1 lg:mx-2"
                alt=""
              />
            </a>
            <p className="my-3 px-2 text-sm md:text-xs sm:text-[9px]">
              +880 1999999999
            </p>
          </div>
        </div>

        <div className="flex justify-center md:flex md:flex-row  sm:pt-[0.15rem]">
          <a href="">
            <img
              src={facebook}
              className="text-xl my-2 mx-1 md:mx-1 lg:mx-2"
              alt=""
            />
          </a>
          <a href="">
            <img
              src={instagram}
              className="text-xl  my-2 mx-1 md:mx-1 lg:mx-2"
              alt=""
            />
          </a>

          <a href="">
            <img
              src={linkedIn}
              className="text-xl my-2 mx-1 md:mx-1 lg:mx-2"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
