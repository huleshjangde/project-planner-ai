"use client";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
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
import Link from "next/link";
import Image from "next/image";
const navs = ["about", "help", "price"];
const Navbar = () => {
  return (
    <div className="w-5/6 mt-5 mx-auto bg-slate-200 backdrop-blur-xl py-2 px-10 rounded-md flex justify-between border-2 border-gray-900 shadow-lg">
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem className=" flex justify-center">
            <Image
              src={"/logo.png"}
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

            <div className="flex gap-10 ml-10 justify-center align-middle text-center items-center">
              <Link
                className="font-bold text-black/65 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm "
                href={"/about"}
              >
                Home
              </Link>
              <Link
                className="font-bold text-black/65 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={""}
              >
                Projects
              </Link>
              <Link
                className="font-bold text-black/65 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={""}
              >
                Contact us
              </Link>
              <Link
                className="font-bold text-black/65 text-lg text-center flex items-center justify-center h-fit hover:bg-black/10 px-3 rounded-sm  "
                href={""}
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
        <Button className=" text-gray-600 bg-transparent font-bold">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
