import React from "react";
import Player from "../VideoPlayer/Player.css";
import ReactPlayer from 'react-player/youtube';
import v_couta from "../../Assets/sf_logo/v_couta.png";
import v_play from "../../Assets/sf_logo/v_play.png";
const VideoPlayer = () => {
  return (
    //
    <section className="bg-[#D9D9D9] max-w-5xl my-0 mx-auto float-none ">
      {/* <img className="flex md:justify-center -mt-8" src={v_couta} alt="" /> */}
      <div className="flex justify-center">
               <img className="-mt-9" src={v_couta} />
             </div>
      <div className="px-5 py-10 flex flex-col md:flex md:flex-row">
        <div className="w-full h-[17rem] md:w-1/2 px-3">
         
          <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=mV-B3hUfFxQ' controls={true}/>
         
       
        </div>
        <div className="w-full md:w-1/2 px-3 py-5">
          <h1 className="text-xl md:text-2xl text-black underline underline-offset-8">The best property management platform</h1>
          <p className="py-3 text-base font-normal">
          Want to access all the services of property management from one place? Then SquareFeet is the one-stop solution you are looking for. Here, you can deal digitally with all types of bill collection including rent, book the nearest field/ community center/ doctor’s appointment online, virtually chat with your neighbours, share your daily life, and more.
          </p>

          <div className="flex py-3 text-base font-semibold">
            <img className="h-8" src={v_play} alt="" />
            <p className="mt-1 mx-3">Watch Video About us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
