"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSendEmail = async (e: Event) => {
    e.preventDefault();
    try {
      const response = await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Email sent successfully:", data);
        toast.success("Thank You!!");
        setEmail("");
        setName("");
        setMsg("");
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };
  return (
    <footer
      id="footer"
      className="footer w-full py-12 bg-gray-100 dark:bg-gray-800 text-black"
    >
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
            Bilaspur
            <br />
            Raipur, Chhattisgarh
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            P: +918962390730
            <br />
            E: huleshjangde@yahoo.com
          </p>
        </div>
        <div className="space-y-4 text-black">
          <h3 className="text-lg font-semibold text-center lg:text-left">
            Send us a message or Feedback
          </h3>
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
            </div>
            <Button onClick={(e) => handleSendEmail(e as any)}>Submit</Button>
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
