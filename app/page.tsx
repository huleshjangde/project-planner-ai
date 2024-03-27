import Navbar from "@/components/navbar";
import React from "react";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import ScrollSection from "@/components/Features";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { SparklesCore } from "@/components/ui/sparkles";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
const russo = Russo_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  style: ["normal"],
});

const Home = () => {
  return (
    <div className="  p-0 w-full mt-20 ">
      <div className=" font-bold flex justify-center  text-center w-full  flex-col items-center my-10 z-50 relative">
        <p className="bg-white/20 px-5 py-2 rounded-md mb-4 text-slate-300">
          Get started with idea
        </p>
        <p
          className={`sm:w-8/12 w-full px-2 sm:px-20 text-2xl sm:text-6xl leading-tight font-extrabold ${russo.className}`}
        >
          Welcome to{" "}
          <span className="animated-text text-2xl sm:text-6xl">
            {" "}
            VisionSync
          </span>{" "}
          Projects - Your <span className="animated-text"> AI-Powered </span>
          Planning Partner
        </p>
        <p className=" w-[100vw-20px] sm:w-6/12 mx-5 text-gray-400  mt-2 bg-gray-600/40 p-1 rounded-md backdrop-blur-lg text-[10px] sm:text-sm">
          VisionSync Projects: Where AI-driven innovation streamlines project
          management for unparalleled efficiency and creativity.
        </p>

        <Link
          href={"/project"}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-sm sm:text-2xl border-2 sm:mt-10 mt-5 border-green-400 px-5 py-2 rounded-lg hover:scale-110 ease-linear duration-200 shadow-xl shadow-blue-500/50"
        >
          Try it now for FREE
        </Link>

        <div className="w-full h-full flex fixed -z-[1] ">
          <div className="w-[446px] h-[446px] left-[908px] top-[131px] absolute opacity-20 bg-fuchsia-500 rounded-full blur-[100px]"></div>
          <div className="w-[464px] h-[462px] left-0 top-[90px] absolute opacity-20 bg-indigo-400 rounded-full blur-[100px]"></div>
          <div className="w-[467px] h-[467px] left-[434px] top-0 absolute opacity-20 bg-indigo-500 rounded-full blur-[250px]"></div>
        </div>

        <InfiniteMovingCardsDemo />

        <Content />
      </div>
      <ScrollSection />
      <Faq />
    </div>
  );
};

export default Home;
