import React from "react";
import sf_logo from "../../Assets/sf_logo/sf_logo.png";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    //

    <section className="navbar bg-white px-5 md:text-lg text-white font-semibold max-w-5xl my-0 mx-auto float-none">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary bg-opacity-80 rounded-box w-52"
          >
            <li>
              <Link to={"/"} className="justify-between"> Home </Link>
            </li>

            <li tabindex="0">
              <Link  className="justify-between">
                Services
                {/* <svg
                  class="fill-current hover:transform hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg> */}
              </Link>
              {/* <ul class="p-2 bg-primary bg-opacity-90">
                <li>
                  <a>Our Company</a>
                </li>
                <li>
                  <a>Our Mission</a>
                </li>
                <li>
                  <a>Employess</a>
                </li>
              </ul> */}
            </li>
            <li tabindex="1">
              <Link  className="justify-between">
                Blog
                {/* <svg
                  class="fill-current hover:transform hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg> */}
              </Link>
              {/* <ul class="p-2 bg-primary bg-opacity-90">
                <li>
                  <a>DHK zone</a>
                </li>
                <li>
                  <a>CTG zone</a>
                </li>
                <li>
                  <a>SYT zone</a>
                </li>
              </ul> */}
            </li>

            <li>
              <Link to={"/price"} className="justify-between"> Pricing </Link>
            </li>

            <li>
              <Link className="justify-between"> News and Events </Link>
            </li>

            <li>
              <Link to={"/contact"}  className="justify-between"> Contact Us </Link>
            </li>
           
          </ul>
        </div>

        <Link to={"/"} href="" className="sm:flex sm:items-center hidden">
          <img src={sf_logo} className="ml-3 h-6 sm:h-6" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-normal">
          <li>
            <Link to={"/"} className="justify-between text-sm  text-black"> Home </Link>
          </li>

          <li tabindex="0">
            <Link  className="text-sm  text-black">
              Services
              {/* <svg
                class="fill-current hover:transform hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg> */}
            </Link>
            {/* <ul class="p-2 bg-primary bg-opacity-90">
              <li>
                <a>Our Company</a>
              </li>
              <li>
                <a>Our Mission</a>
              </li>
              <li>
                <a>Employess</a>
              </li>
            </ul> */}
          </li>
          <li tabindex="1">
            <Link  className="text-sm  text-black">
              Blog
              {/* <svg
                class="fill-current  hover:transform hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg> */}
            </Link>
            {/* <ul class="p-2 bg-primary bg-opacity-90">
              <li>
                <a>DHK zone</a>
              </li>
              <li>
                <a>CTG zone</a>
              </li>
              <li>
                <a>SYT zone</a>
              </li>
            </ul> */}
          </li>

          <li>
            <Link to={"/price"} className="justify-between text-sm text-black"> Pricing </Link>
          </li>

          <li>
            <Link  className="justify-between text-sm  text-black">
              {" "}
              News and Events{" "}
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className="justify-between text-sm  text-black"> Contact Us </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end sm:w-[50%] w-[150%]">
        {/* <button
          type="submit"
          className="rounded-md my-3 mx-2 md:mx-2 lg:mx-2 btn-sm bg-primary"
        >
          Log in
        </button> */}

        <button
          type="submit"
          className="rounded-md my-3 mx-2 md:mx-2 lg:mx-2 btn-sm bg-secondary"
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Navbar;
