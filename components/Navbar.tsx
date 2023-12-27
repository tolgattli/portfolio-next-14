"use client";

import React from "react";
import { ModeToggle } from "./set-theme/ModeToggle";
import "../styles/navbar.css";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/public/profile.svg";
import { navRoutes } from "@/constants/navbar-routes";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  return (
    <nav
      className="hidden flex-row items-center justify-evenly
     bg-white py-5 shadow-sm px-[154px]
     transition-colors duration-200 ease-in dark:bg-black 
      dark:shadow-gray-900 md:flex"
    >
      <div>
        <Link href={"/"}>
          <Image
            src={profileImage}
            alt="profile icon"
            className="flex h-10 w-10 rounded-3xl"
          />
        </Link>
      </div>
      <div className="m-0 flex items-center justify-center gap-9  p-0">
        {navRoutes.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>
              <Button
                variant="ghost"
                size={"default"}
                className={`transition-none delay-0 px-4 py-5 font-sans text-md font-semibold ${router === item.url ? "border-2 border-black dark:border-white" : ""}
          `}
              >
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="transition duration-200 ease-in-out">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
