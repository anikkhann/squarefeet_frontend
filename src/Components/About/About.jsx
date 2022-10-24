import React from "react";
import quotation_one from "../../Assets/sf_logo/quotation_one.png";
import quotation_two from "../../Assets/sf_logo/quotation_two.png";
const About = () => {
  return (
    //
    <section className="bg-[#FDFAFA] max-w-5xl my-0 mx-auto float-none">
      <div className="py-5 px-5 md:px-5">
        <div className="flex flex-row justify-items-center items-center justify-center py-3 ">
          <img src={quotation_one} alt="" />
          <h1 className="text-secondary underline underline-offset-4 md:text-4xl px-3 text-2xl font-semibold">
            About Us
          </h1>
          <img src={quotation_two} alt="" />
        </div>

        <div>
          <p className="text-sm sm:font-normal md:text-base sm:text-sm md:py-4 py-3 sm:pb-2">
            City life consumes most of our time. But, we can save time to manage
            our community, and maintaining the bills and charges if we use
            technology. Again, the security of our family can be tightened if
            digital gatekeeping is maintained. SquareFeet uses technology to
            give you the best experience in all these sectors. We also provide a
            booking system to book your desired places near your residence.
            Along with many other services, even the hassle of making a rental
            contract can be reduced using our rental contract feature.
          </p>

          <p className="text-sm sm:font-normal md:text-base sm:text-sm md:py-2 py-2 sm:pb-2 text-center">
            Our target is to ease your community-based city life difficulties
            and strengthen the bond between neighbours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
