import React from "react";
import application from "../../Assets/sf_logo/application.png";
import a_store from "../../Assets/sf_logo/a_store.png";
import g_play from "../../Assets/sf_logo/g_play.png";
const Home = () => {
  return (
    <section className="max-w-5xl my-0 mx-auto float-none text-black bg-green-50">
      <div className="sm:flex sm:flex-row flex flex-col w-full py-8 sm:py-5 sm:px-5">
        <div className="md:w-[50%] sm:w-[50%] sm:px-5 px-5 my-5">
          <div className="w-28 rounded-full border bg-[#2DB28A] bg-opacity-20 flex justify-center py-1 mb-2">
            <a href="" className=" ">
              Application
            </a>
          </div>
          {/* <button className="rounded-full opacity-20 text-black   bg-[#2DB28A]">Application</button> */}
          <h1 className="text-lg sm:text-xl md:text-3xl underline underline-offset-8">
            Get our Free Mobile App
          </h1>
          <p className="text-sm font-light sm:font-light md:text-base sm:text-sm md:py-2 py-2 sm:pb-2 ">
            Download the SquareFeet app, and enjoy the digital services for your
            home. Now you can pay the bills, get invoices, access the service
            providers, book the nearest field/community center/ doctors chamber,
            and, even communicate with the neighbours within seconds with many
            more services!
          </p>
          <div className="flex justify-center my-5 ">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 bg-black">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-white">Download on </p>
                <p className="text-sm md:text-base text-white">
                  {" "}
                  Google Play Store{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2 bg-black">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8 "
              />
              <div className="text-left ml-3">
                <p className="text-xs text-white">Download on </p>
                <p className="text-sm md:text-base text-white"> Apple Store </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row mt-4">
          <img  src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="rounded-md w-8 h-8"/>
           
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="mx-8 rounded-md w-8 h-8"/>
         
      
          </div> */}
        </div>

        <div className="relative md:w-[50%] sm:w-[50%] md:px-5 sm:px-5 px-5 my-5">
          <img
            className="sm:absolute w-full h-full sm:w-[90%] sm:h-full "
            src={application}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
