import Navbar from "@/components/navbar";
import React from "react";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import ScrollSection from "@/components/Features";
import Faq from "@/components/Faq";

const russo = Russo_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  style: ["normal"],
});

const Home = () => {
  return (
    <div className="  p-0 w-full">
      <Navbar />

      <div className=" font-bold  text-center w-full flex flex-col items-center my-10 gap-5">
        <p
          className={`w-8/12 px-20 text-6xl leading-tight font-extrabold ${russo.className}`}
        >
          Welcome to <span className="animated-text text-6xl"> AgileMind</span>{" "}
          Projects - Your <span className="animated-text"> AI-Powered </span>
          Planning Partner
        </p>
        <p className="w-6/12 text-gray-400  mt-2 bg-gray-600/40 p-1 rounded-md backdrop-blur-lg text-sm">
          AgileMind Projects: Where AI-driven innovation streamlines project
          management for unparalleled efficiency and creativity.
        </p>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-2xl border-2 mt-10 border-green-400 px-5 py-2 rounded-lg hover:scale-110 ease-linear duration-200 shadow-xl shadow-blue-500/50">
          Try it now for FREE
        </button>
        <Image
          src={"/hero3.png"}
          alt="hero"
          width={700}
          height={700}
          className="mt-10 rounded-md"
        />
      </div>
      <ScrollSection />
      <Faq />
    </div>
  );
};

export default Home;
