import React from "react";
import Image from "next/image";
import logo from "../imgs/logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="h-[34.5rem] sm:h-[17.5rem] w-full bg-[#2A2A2A]">
          <div className="contentFooter max-w-[85.83%] mx-auto flex flex-col space-y-6 sm:flex-row flex-wrap justify-around lg:justify-between items-center pt-[3.75rem]">
            <Image priority src={logo} alt="Main Logo" />

            <ul className="flex sm:space-x-12 xl:space-x-[3.813rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center">
              <li>
                <a className="font-Poppins text-white text-base">
                  In-Home Services
                </a>
              </li>
              <li>
                <a className="font-Poppins text-white text-base">Store</a>
              </li>
              <li>
                <a className="font-Poppins text-white text-base">Blog</a>
              </li>
              <li>
                <a className="font-Poppins text-white text-base">
                  Trust & Safety
                </a>
              </li>
            </ul>

            <ul className="flex sm:space-x-12 xl:space-x-[3.813rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center">
              <li>
                <a className="font-Poppins text-white text-base">Contact Us</a>
              </li>
              <li>
                <a className="font-Poppins text-white text-base">Follow Us</a>
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
