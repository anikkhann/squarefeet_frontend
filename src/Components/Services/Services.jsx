import React, { Component } from "react";
// react multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceStyle from "../Services/ServiceStyle.css";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import accounting from "../../Assets/services/accounting.png";
import s_one from "../../Assets/services/s_one.png";
import service from "../../Assets/services/service.png";
import s_two from "../../Assets/services/s_two.png";
import booking from "../../Assets/services/booking.png";
import s_three from "../../Assets/services/s_three.png";
import security from "../../Assets/services/security.png";
import s_four from "../../Assets/services/s_four.png";
import newsfeed from "../../Assets/services/newsfeed.png";
import s_five from "../../Assets/services/s_five.png";
import s_six from "../../Assets/services/s_six.png";
import s_seven from "../../Assets/services/s_seven.png";
import neighbour from "../../Assets/services/neighbour.png";
import s_eight from "../../Assets/services/s_eight.png";
import s_nine from "../../Assets/services/s_nine.png";
import contract from "../../Assets/services/contract.png";
import police_v from "../../Assets/services/police_v.png";
import notice from "../../Assets/services/notice.png";
const Services = () => {
  // services slider values
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 480 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    extrasmall: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    //
    <section
      className="bg-[#FDFAFA] max-w-5xl my-0 mx-auto float-none"
      id="#service"
    >
      <div className="py-5 px-5 md:px-5">
        <div className="flex flex-row justify-items-center items-center justify-center ">
          <img src={quotation_one} alt="" />
          <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 text-2xl font-semibold">
            Our Services
          </h1>
          <img src={quotation_two} alt="" />
        </div>

        {/* multi carousel */}
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          arrows={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["extrasmall", "mobile"]}
          //  deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="py-10"
        >
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_one} />
              </div>
              <div className="px-6 py-5">
                <img className="w-[69px] h-[60px]" src={accounting} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Accounting & Billing
                </div>
                <p className="text-gray-700 text-base">
                  The digital invoice with an online payment facility.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/account-billing-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}

          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_two} />
              </div>
              <div className="px-6 py-5">
                <img src={service} alt="" />

                <div className="font-bold text-lg mb-2 mt-2  text-black">
                  Service Provider
                </div>
                <p className="text-gray-700 text-base">
                  All sorts of nearby service providers’ information, with
                  online payment.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/service-provider-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_three} />
              </div>
              <div className="px-6 py-5">
                <img src={booking} alt="" />
                {/* mb-2 mt-2 */}
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Booking
                </div>
                <p className="text-gray-700 text-base">
                  Book the nearest field/ community center/ clinic online from
                  here.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/booking-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* fourth card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_four} />
              </div>
              <div className="px-6 py-5">
                <img src={security} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Gatekeeper
                </div>
                <p className="text-gray-700 text-base">
                  Digital visitor management system with staff attendance.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/gatekeeper-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5th card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_five} />
              </div>
              <div className="px-6 py-5">
                <img src={newsfeed} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  NewsFeed
                </div>
                <p className="text-gray-700 text-base">
                  Share information and stories of daily life with your
                  neighbors.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/newsfeed-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 6th card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_six} />
              </div>
              <div className="px-6 py-5">
                <img src={contract} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Contract
                </div>
                <p className="text-gray-700 text-base">
                  Make your rental contract with the necessary terms within a
                  minute.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/contract-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 7th card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_seven} />
              </div>
              <div className="px-6 py-5">
                <img src={neighbour} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Neighbour
                </div>
                <p className="text-gray-700 text-base">
                  Get to know your neighbors sitting in your room.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/neighbour-in-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 8th card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_eight} />
              </div>
              <div className="px-6 py-5">
                <img className="w-[69px] h-[60px]" src={police_v} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Police Verification
                </div>
                <p className="text-gray-700 text-base">
                  Fill up the online police verification form within seconds.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/police-verification-in-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 9th card */}
          <div className="px-2 block">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-[420px] md:h-[410px]">
              <div className="flex justify-end">
                <img className="w-12 h-12 mx-2 my-2" src={s_nine} />
              </div>
              <div className="px-6 py-5">
                <img src={notice} alt="" />
                <div className="font-bold text-lg mb-2 mt-2 text-black">
                  Notice
                </div>
                <p className="text-gray-700 text-base">
                  Send Notice to all the tenants at once.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                  <a
                    href="https://blog.squarefeet.xyz/notice-of-squarefeet/"
                    target="_blank"
                    className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        {/* multi cariusel end */}
      </div>
    </section>
  );
};

export default Services;
