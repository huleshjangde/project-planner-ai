/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Tzf6HbcWXPj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-100 dark:bg-gray-800 text-black">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
        <div className="flex flex-col items-center lg:items-start">
          <Link className="mb-2" href="#">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              className="w-11 h-auto rounded-full"
              width={44}
              height={44}
            />
            <span className="sr-only">AgileMind</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 AgileMind Inc. All rights reserved.
          </p>
        </div>
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            1234 Street Rd, Suite 100
            <br />
            City, State, 12345
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            P: (123) 456-7890
            <br />
            E: info@acmeinc.com
          </p>
        </div>
        <div className="space-y-4 text-black">
          <h3 className="text-lg font-semibold text-center lg:text-left">
            Send us a message
          </h3>
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
