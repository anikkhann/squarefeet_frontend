import React from "react";
import axios from "axios";
import location from "../Assets/social_icon/location.png";
import phone from "../Assets/social_icon/phone.png";
import mail from "../Assets/social_icon/mail.png";
import {useForm}  from 'react-hook-form';
const Hover = () => {
  const { register, formState: { errors}, handleSubmit } = useForm();
  const onSubmit = async (data) => 
  {
  

    const queryData = {...data};

    try {
     await axios.post(`${process.env.REACT_APP_UNPLASH_BASEURL}/users`, queryData)
     
    } catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    //
    <section className="-mt-36 sm:-mt-44 md:-mt-52 w-full flex justify-center items-center bg-[#FDFAFA] bg-opacity-10">
    <div className="container w-[85%] md:w-90% max-w-[1000px] mt-[50px] mb-[50px] mr-auto ml-auto flex items-center justify-center">
      <div className="left relative hidden md:inset-y-5 z-10 md:w-[50%] min-h-[450px] bg-secondary md:flex items-center justify-center p-[30px] rounded-lg text-white">
        <div className=" content absolute min-h-[450px] w-full grid grid-cols-1 md:place-items-center md:justify-center md:px-6 sm:justify-items-center text-base font-medium">
          <div className="mb-5 ">
            <h4 className="py-4 text-2xl font-medium text-white underline underline-offset-8">
              Contact Information
            </h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center md:justify-start mb-4">
                <img src={location} className="w-4 mr-4" alt="" />

                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                >
                  14 Rd 16/A, Gulshan, Dhaka 1212, Bangladesh
                </a>
              </li>
              <li className="flex items-center md:justify-start mb-4">
                <img src={phone} className="w-4 mr-4" alt="" />
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                >
                  +8801940301000
                </a>
              </li>
              <li className="flex items-center md:justify-start mb-4">
                <img src={mail} className="w-4 mr-4" alt="" />
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400 text-sm"
                >
                  info@squarefeet.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right w-full md:-ml-[130px] md:w-[74%] h-[530px] rounded-lg bg-grey-lighter flex flex-col bg-white px-6 py-8 shadow-md">
        <div className="md:pl-[30%] md:pr-[10%] mt-3">
          <div>
            <h1 className="text-secondary text-2xl md:text-3xl font-semibold">
              Get In Touch
            </h1>
            <p class="py-4 text-sm font-medium">
              Don't be shy. Give us a call or drop us a line.
            </p>
          </div>
          
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
           <div>
           <input
              type="text"
              name="name"
              {...register("name", { required: true })}
               aria-invalid={errors.fullName ? "true" : "false"} 
              className="border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-sm"
             
              placeholder="Your Name"
            />
              {errors.name?.type === 'required' && <p role="alert" className="text-red-800 font-semibold">* Full name is required</p>}
           </div>

           <div>
           <input
              type="email"
              name="email"
                  {...register("email", { required: true })}
             aria-invalid={errors.fullName ? "true" : "false"} 
              className=" border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-sm"
            
              placeholder="Your Email"
            />
             {errors.email?.type === 'required' && <p role="alert" className="text-red-800 font-semibold">* Email name is required</p>}
           </div>

            <div>
            <textarea
              type="text"
              rows="4"
              name="query"
            {...register("query", { required: true })}
             aria-invalid={errors.fullName ? "true" : "false"} 
              className="shadow-sm rounded-md p-3 outline-none w-full placeholder:text-sm input-bordered border-transparent focus:border-transparent focus:right-0 bg-secondary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium"
              placeholder="Type Your Message Here"
            ></textarea>
             {errors.query?.type === 'required' && <p role="alert" className="text-red-800">* Text is required</p>}
            </div>

            <button type="submit" className="text-sm md:text-base px-5 py-1 mt-8 border-primary border-solid border-2 rounded-lg text-white text-center btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Hover;
