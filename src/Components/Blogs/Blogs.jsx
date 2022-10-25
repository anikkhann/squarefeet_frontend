import React from "react";
import blog_one from "../../Assets/blogs/blog_one.jpg";
import blog_two from "../../Assets/blogs/blog_two.jpg";
import blog_three from "../../Assets/blogs/blog_three.jpg";
const Blogs = () => {
  return (
    //
    <section
      className="bg-[#FDFAFA] max-w-5xl my-0 mx-auto float-none"
      id="#blog"
    >
      <div className="px-5 py-10 md:px-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-secondary underline underline-offset-8 md:text-2xl px-3 text-xl font-semibold">
            Our Blogs
          </h1>
          <a href="https://blog.squarefeet.xyz/" target="_blank" className="text-base text-primary font-medium cursor-pointer">
            See More
          </a>
        </div>

        {/* Blogs card Start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 w-full">
          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                <div className="h-44 bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_one}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              How To Login In SquareFeet (Community)
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">Jan 12, 2022</p>
              <a
                href="https://blog.squarefeet.xyz/how-to-login-in-squarefeet-community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                  More Info
                </button>
              </a>
            </div>
          </div>

          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                {/* <img src={blog_two} className="h-32 rounded-lg absolute w-full object-center"/> */}
                <div className="h-44  bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_two}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              How To Generate Invoice Using SquareFeet Platform
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">Feb 16, 2022</p>
              <a
                href="https://blog.squarefeet.xyz/how-to-generate-invoice-using-squarefeet-platform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                  More Info
                </button>
              </a>
            </div>
          </div>

          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                {/* <img src={blog_two} className="h-32 rounded-lg absolute w-full object-center"/> */}
                <div className="h-44  bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_three}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              How To Complete User Profile In SquareFeet(Self Registration)
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">Jan 6, 2022</p>
              <a
                href="https://blog.squarefeet.xyz/complete-my-profile-in-squarefeet-self/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                  More Info
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
