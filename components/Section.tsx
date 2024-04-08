"use client";
import React from "react";
import { GrOverview } from "react-icons/gr";
import Markdown from "markdown-to-jsx";
import { Skeleton } from "@/components/ui/skeleton";
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
      <div className="mt-10 w-full bg-black/85 overflow-y-hidden border-2 border-gray-300 rounded-xl shadow-md px-2 flex-1 relative">
        <span className="w-36 absolute top-12 h-60 rounded-full bg-blue-500 blur-[100px] -z-2"></span>

        <Card className="w-full overflow-y-hidden mt-3 backdrop-blur-md bg-black/65">
          <CardHeader className="flex gap-3">
            <GrOverview className=" bg-black/55 text-4xl p-1 rounded-md text-white" />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-slate-200">{title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="text-white">
            {value ? (
              <Markdown>{value}</Markdown>
            ) : (
              <div className="space-y-2">
                <Skeleton className="h-4 bg-gray-700 w-[750px]" />
                <Skeleton className="h-4  bg-gray-700 w-[600px]" />
                <Skeleton className="h-4  bg-gray-700 w-[500px]" />
              </div>
            )}
          </CardBody>
          <Divider />
          {/* <CardFooter>
            <p>
              <span className="font-bold">Disclaimer: </span>This AI-generated
              project plan is for guidance only and may not cover all aspects of
              your project. The creators are not responsible for any errors,
              omissions, or inaccuracies.
            </p>
          </CardFooter> */}
        </Card>
      </div>
    </>
  );
};

export default Section;
