"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { createClient } from "@/lib/supabase/browser";
import { FaGithub } from "react-icons/fa";
import { Russo_One } from "next/font/google";
const russo = Russo_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin", "latin-ext"],
  style: ["normal"],
});

export default function Login() {
  const handelLoginWith = (pro: any) => {
    const supabse = createClient();

    const data = supabse.auth.signInWithOAuth({
      provider: pro,
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
    console.log(data);
  };

  return (
    <div className=" min-h-screen flex my-10 items-center justify-center w-full">
      <div className=" w-full flex flex-col justify-center items-center text-center rounded-lg shadow-lg  p-6 space-y-6  ">
        <div className="space-y-2 text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-2 font-semibold text-red-100">
            Please sign in to continue
          </h1>
          <p className="text-red-100">
            ( Feel confident logging in. Your email will not be used for spam or
            any unauthorized communication. )
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
        </div>
        <div className="space-y-4">
          {/* <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div> */}
          <div className="flex items-center space-x-2">
            {/* <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" /> */}
          </div>
          <Button
            onClick={() => handelLoginWith("google")}
            className="w-full bg-[#4285F4] text-white"
            variant="outline"
          >
            <div className="flex items-center justify-center">
              <ChromeIcon className="w-5 h-5 mr-2" />
              Login with Google
            </div>
          </Button>
          <button
            onClick={() => handelLoginWith("github")}
            className="w-full bg-black text-white border rounded-md"
          >
            <div className="flex items-center justify-center">
              <FaGithub className="w-5 h-10 mr-2 py-2" />
              Login with Github
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function AppleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
