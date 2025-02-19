import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./ui/navigation";
import { NavbarSheet } from "./ui/navbar-sheet";

export function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto z-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={'/'}>
              <div className="flex flex-row items-center space-x-2 mb-2 mt-2">
                <Image src={"/mkjlogo.png"}  width={60} height={60} alt="Logo" />
              </div>
            </Link>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <Navigation />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <NavbarSheet />
          </div>
        </div>
      </div>

  
    </nav>
  );
};
