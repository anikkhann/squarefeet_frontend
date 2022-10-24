import React from "react";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
import events from "../../Assets/events/events.png";
import news from "../../Assets/sf_logo/news.jpeg";
const Events = () => {
  return (
    //
    <section className="max-w-5xl my-0 mx-auto float-none bg-[#FDFAFA]" id="#event">
      {/* <h1 className="mt-8 text-secondary underline underline-offset-4 md:text-4xl px-3 text-center text-2xl font-semibold">
        
      </h1> */}
      <div className=" flex flex-row justify-items-center items-center justify-center py-3 px-5">
        <img src={quotation_one} alt="" className="mt-8" />
        <h1 className="mt-8 text-secondary underline underline-offset-8 md:text-4xl px-4 sm:px-8 text-2xl font-semibold">
          News and events of Squarefeet
        </h1>
        <img src={quotation_two} alt="" className="mt-8" />
      </div>
      {/* first row 3 card */}
      <div className="mt-5 px-5 py-3 sm:px-5 sm:py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full ">
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="object-cover w-full h-48 opacity-80"
            src={news}
          />

          <div className="absolute bottom-0 left-0 px-6 py-4">
            <h4 className="mb-3 leading-normal text-white">20 october 2022</h4>
            <p className="text-lg font-semibold tracking-tight text-white ">
              Headline of the news
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="object-cover w-full h-48 opacity-80"
            src={news}
          />

          <div className="absolute bottom-0 left-0 px-6 py-4">
            <h4 className="mb-3 leading-normal text-white">20 october 2022</h4>
            <p className="text-lg font-semibold tracking-tight text-white ">
              Headline of the news
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="object-cover w-full h-48 opacity-80"
            src={news}
          />

          <div className="absolute bottom-0 left-0 px-6 py-4">
            <h4 className="mb-3 leading-normal text-white">20 october 2022</h4>
            <p className="text-lg font-semibold tracking-tight text-white ">
              Headline of the news
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
          <img src={events} className="w-28 h-24 rounded-sm" />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">Event Name</p>
            <p className="text-sm text-gray-600">20 october 2022</p>
          </div>
        </div>

        <div className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
          <img src={events} className="w-28 h-24 rounded-sm" />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">Event Name</p>
            <p className="text-sm text-gray-600">20 october 2022</p>
          </div>
        </div>

        <div className="flex flex-col md:flex md:flex-row items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
          <img src={events} className="w-28 h-24 rounded-sm" />
          <div className="ml-3">
            <p className="font-medium text-gray-800 ">Event Name</p>
            <p className="text-sm text-gray-600">20 october 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
