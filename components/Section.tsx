"use client";
import React from "react";
import { GrOverview } from "react-icons/gr";
import Markdown from "markdown-to-jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
const Section = ({ value, title }: { value: string; title: string }) => {
  return (
    <>
      <div className="mt-10 bg-gray-300 overflow-y-hidden border-2 border-gray-300 rounded-md shadow-md px-2 flex-1 relative">
        <span className="w-36 absolute top-12 h-60 rounded-full bg-blue-500 blur-[100px] -z-2"></span>

        <Card className="w-full overflow-y-hidden mt-10 backdrop-blur-md bg-white/65">
          <CardHeader className="flex gap-3">
            <GrOverview className=" bg-slate-300  text-4xl p-1 rounded-md text-black" />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-slate-800">{title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Markdown>{value}</Markdown>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>
              <span className="font-bold">Disclaimer: </span>This AI-generated
              project plan is for guidance only and may not cover all aspects of
              your project. The creators are not responsible for any errors,
              omissions, or inaccuracies.
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Section;