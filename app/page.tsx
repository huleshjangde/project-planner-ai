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
const russo = Russo_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  style: ["normal"],
});

const Home = () => {
  return (
    <div className="  p-0 w-full mt-20 ">
      <div className=" font-bold  text-center w-full flex flex-col items-center my-10 gap-5">
        <p
          className={`sm:w-8/12 w-full px-2 sm:px-20 text-2xl sm:text-6xl leading-tight font-extrabold ${russo.className}`}
        >
          Welcome to{" "}
          <span className="animated-text text-2xl sm:text-6xl"> AgileMind</span>{" "}
          Projects - Your <span className="animated-text"> AI-Powered </span>
          Planning Partner
        </p>
        <p className=" w-[100vw-20px] sm:w-6/12 mx-5 text-gray-400  mt-2 bg-gray-600/40 p-1 rounded-md backdrop-blur-lg text-[10px] sm:text-sm">
          AgileMind Projects: Where AI-driven innovation streamlines project
          management for unparalleled efficiency and creativity.
        </p>

        <Link
          href={"/project"}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-sm sm:text-2xl border-2 sm:mt-10 mt-5 border-green-400 px-5 py-2 rounded-lg hover:scale-110 ease-linear duration-200 shadow-xl shadow-blue-500/50"
        >
          Try it now for FREE
        </Link>

        <div className="w-full h-40 bg-transparent relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        {/* <Image
          src={"/hero3.png"}
          alt="hero"
          width={700}
          height={700}
          className="mt-10 rounded-md"
        /> */}

        <Content />
      </div>
      <ScrollSection />
      <Faq />
    </div>
  );
};

export default Home;
