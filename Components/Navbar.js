import React, { useState } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import logo from "../imgs/logo.png";
import navVector from "../imgs/navvector.png";

function Navbar() {
  //MOBILE NAV STATES

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // FUNCTION FOR HAMBURGER

  function MenuItem({ children, href }) {
    const hideHam = () => {
      setOpen(false);
    };
    return (
      <div className="p-2">
        <Link onClick={hideHam} href={href} className={style.item}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f6f4f2] pt-[0.1rem]">
        <nav className="max-w-[85.83%] mx-auto mt-8 xl:mt-[1rem] flex justify-between items-center">
          <ul className="gap-[4.5rem] hidden xl:flex">
            <div className="dropdown relative inline-block">
              <li className="flex items-center space-x-3 cursor-pointer">
                <a className="font-Poppins text-[#2A2A2A] text-base">
                  In-Home Services
                </a>
                <Image src={navVector} alt="vector" />
              </li>
              <div className="dropdown-content">
                <a href="#">Swedish</a>
                <a href="#">Deep Tissue</a>
                <a href="#">Prenatal</a>
              </div>
            </div>
            <li>
              <Link href="/" className="font-Poppins text-[#969696] text-base">
                Store
              </Link>
            </li>
            <li>
              <Link href="/" className="font-Poppins text-[#969696] text-base">
                Blog
              </Link>
            </li>
          </ul>

          <Image quality={100} priority src={logo} alt="Main Logo" />

          <div className="mobileMenu mt-2 xl:hidden">
            <div
              className="HAMBURGER-ICON space-y-[0.39rem] pr-4 sm:pr-7"
              onClick={toggle}
            >
              <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-black"></span>
            </div>
            <Menu open={open}>
              <button
                aria-label="Close"
                className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
                onClick={toggle}
              >
                &times;
              </button>
              <MenuContainer>
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/">Store</MenuItem>
                <MenuItem href="/">Blog</MenuItem>
                <MenuItem href="/">Trust & Safety</MenuItem>
                <MenuItem href="/">Make an appointment</MenuItem>
              </MenuContainer>
            </Menu>
          </div>

          <ul className="gap-[4.5rem] items-center hidden xl:flex">
            <li>
              <Link href="/" className="font-Poppins text-[#969696] text-base">
                Trust & Safety
              </Link>
            </li>
            <li>
              <button className="navBtn">Make an appointment</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

// Logic
const style = {
  container: `relative top-[8rem] w-full text-center mt-8 space-y-6`,
  item: `text-2xl text-gray-400 cursor-pointer hover:text-white`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Navbar;
