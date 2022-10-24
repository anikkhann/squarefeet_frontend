import React from "react";
import blog_one from "../../Assets/blogs/blog_one.png";
import blog_two from "../../Assets/blogs/blog_two.png";
import blog_three from "../../Assets/blogs/blog_three.png";
const Blogs = () => {
  return (
    //
    <section className="bg-[#FDFAFA] max-w-5xl my-0 mx-auto float-none" id="#blog">
      <div className="px-5 py-10 md:px-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-secondary underline underline-offset-8 md:text-2xl px-3 text-xl font-semibold">
            Our Blogs
          </h1>
          <a className="text-base text-primary font-medium cursor-pointer">
            See More
          </a>
        </div>

        {/* Blogs card Start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 w-full">
          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                {/* <img src={blog_two} className="h-32 rounded-lg absolute w-full object-center"/> */}
                <div className="h-52  bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_one}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              Headline of the news
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">20 october 2022</p>

              <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                More Info
              </button>
            </div>
          </div>

          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                {/* <img src={blog_two} className="h-32 rounded-lg absolute w-full object-center"/> */}
                <div className="h-52  bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_two}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              Headline of the news
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">20 october 2022</p>

              <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                More Info
              </button>
            </div>
          </div>

          <div className="relative min-h-[160px] p-4 w-full bg-secondary rounded-lg overflow-hidden shadow hover:shadow-md">
            <div>
              <div className="relative block h-full">
                {/* <img src={blog_two} className="h-32 rounded-lg absolute w-full object-center"/> */}
                <div className="h-52  bg-gray-100 rounded-lg relative">
                  <img
                    src={blog_three}
                    className="absolute w-full h-full object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h2 className="mt-4 text-white text-base font-semibold line-clamp-1">
              Headline of the news
            </h2>

            <div className="flex flex-row justify-between mt-4">
              <p className=" text-white text-sm">20 october 2022</p>

              <button className="rounded-md text-secondary bg-white text-xs sm:text-sm md:text-base font-normal  btn-sm">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
