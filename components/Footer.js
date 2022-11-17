import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import logo from "../imgs/logo.png";

//SMOOTH SCROLL
import { Link as Link1 } from "react-scroll";

function Footer() {
  return (
    <>
      <footer>
        <div className="h-[34.5rem] sm:h-[17.5rem] w-full bg-[#2A2A2A]">
          <div className="contentFooter max-w-[85.83%] mx-auto flex flex-col space-y-6 sm:flex-row flex-wrap justify-around lg:justify-between items-center pt-[3.75rem]">
            <Link href="/">
              <Image priority src={logo} alt="Main Logo" />
            </Link>

            <ul className="flex sm:space-x-12 xl:space-x-[3.813rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center">
              <li>
                <Link href="/" className="font-Poppins text-white text-base">
                  In-Home Services
                </Link>
              </li>
              <li>
                <Link1
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1200}
                  to="howitworks"
                  className="font-Poppins cursor-pointer text-white text-base"
                >
                  Store
                </Link1>
              </li>
              <li>
                <Link1
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1500}
                  to="blog"
                  className="font-Poppins cursor-pointer text-white text-base"
                >
                  Blog
                </Link1>
              </li>
              <li>
                <Link1
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={2000}
                  to="review"
                  className="font-Poppins cursor-pointer text-white text-base"
                >
                  Trust & Safety
                </Link1>
              </li>
            </ul>

            <ul className="flex sm:space-x-12 xl:space-x-[3.813rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center">
              <li>
                <Link href="/" className="font-Poppins text-white text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="font-Poppins text-white text-base">
                  Follow Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="endLine max-w-[85.83%] mx-auto mt-[2rem]"></div>

          <h2 className="font-Poppins text-white text-base text-center mt-4 lg:mt-8">
            2022, All rights powered by Eden SPA
          </h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
