"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Link as ScrollLink } from "react-scroll";
import { Transition } from "@headlessui/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FiAlignLeft } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Users from "./User";
import { MdMenuOpen } from "react-icons/md";
const navs = ["about", "help", "price"];
const Navbar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <div className="w-[95vw] mt-1 px-[10vw] pb-4 border-b-1 border-gray-500  mx-auto bg-black/85 backdrop-blur-xl py-2  rounded-md flex justify-between  shadow-lg fixed top-0 z-[200]">
      <NavigationMenu className=" ">
        <NavigationMenuList>
          <NavigationMenuItem className=" flex justify-center">
            <Image
              src={"/logo.jpeg"}
              alt={"logo"}
              className="w-11 h-auto rounded-full"
              width={44}
              height={44}
            />
            {/* <NavigationMenuLink
              href={`/`}
              className={`${navigationMenuTriggerStyle()} ml-2 text-[18px] font-extrabold text-black px-7 h-fit py-1 bg-transparent capitalize`}
            >
              Home
            </NavigationMenuLink> */}

            {/* {navs.map((item, index) => {
              return (
                <NavigationMenuLink
                  href={`/${item}`}
                  key={index}
                  className={`${navigationMenuTriggerStyle()} text-lg ml-2  text-black px-5 h-fit py-1 bg-transparent font-extrabold  text-[18px] capitalize`}
                >
                  {item}
                </NavigationMenuLink>
              );
            })} */}

            <div className=" hidden sm:flex  gap-10 ml-10 justify-center align-middle text-center items-center">
              <Link
                className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm "
                href={"/"}
              >
                Home
              </Link>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={700}
                className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
              >
                Contact us
              </ScrollLink>
              <Link
                className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={"/projects"}
              >
                My projects
              </Link>
              <Link
                className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={"#footer"}
              >
                Contact us
              </Link>
              <Link
                className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={"#footer"}
              >
                Feedback
              </Link>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className=" flex gap-5 ">
        {/* <Button
          as={Link}
          color="primary"
          href="#"
          variant="flat"
          className="bg-slate-100 font-bold "
        >
          Sign Up
        </Button> */}

        <Users />
        <button className="block sm:hidden" onClick={showMenu}>
          <FiAlignLeft />
        </button>
      </div>
      <Transition
        show={show}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed w-screen transition-all ease-linear ${show ? "flex" : "hidden"} duration-700  flex justify-center items-center h-screen top-20 right-1 bg-black`}
        >
          <div className=" flex flex-col  gap-10 ml-10 justify-center align-middle text-center items-center">
            <Link
              className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm "
              href={"/"}
              onClick={showMenu}
            >
              Home
            </Link>
            <ScrollLink
              onClick={showMenu}
              to="footer"
              smooth={true}
              duration={700}
              className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
            >
              Contact us
            </ScrollLink>
            <Link
              onClick={showMenu}
              className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
              href={"/projects"}
            >
              My projects
            </Link>
            <Link
              onClick={showMenu}
              className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
              href={"#footer"}
            >
              Contact us
            </Link>
            <Link
              onClick={showMenu}
              className="font-bold text-white hover:border-blue-500 duration-100 hover:scale-105  uppercase border-b-1 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
              href={"#footer"}
            >
              Feedback
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
