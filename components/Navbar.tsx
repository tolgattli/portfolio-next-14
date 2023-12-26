import React from "react";
import { ModeToggle } from "./set-theme/ModeToggle";
import "../styles/navbar.css";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="hidden flex-row items-center justify-evenly
     bg-white px-5 py-5 shadow-sm transition-colors 
     duration-200 ease-in dark:bg-black
      dark:shadow-gray-900 md:flex"
    >
      <div>TOLGAASDASDAS</div>
      <div>
        
      </div>
      <div className="transition duration-200 ease-in-out">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
