import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "../app/globals.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

import Image from "next/image";

interface PromptProps {
  output: string;
  setGeneratedOutput: (value: string) => void;
  editBtn: boolean;
  title: string;
}

interface OutputProps {
  output: any;
}

export default function Output({ output }: OutputProps) {
  console.log(output);
  function getYouTubeVideoId(url: string): string | null {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      return videoId;
    } catch (error) {
      console.error("Invalid URL provided:", error);
      return null;
    }
  }
  const vedio = output.slice(0, 10).map((video: any, index: any) => (
    <CarouselItem key={index} className="w-full">
      <div className="p-1 w-full">
        <Card className="w-full">
          <CardContent className="flex w-full items-center justify-center p-6">
            <div
              key={index}
              className="flex flex-col px-10 items-center  gap-4 mt-8 justify-between w-full bg-gray-100"
            >
              <div
                className="relative  w-full rounded-md overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                {/* <Image src={video.thumbnail.static} alt={video.title} width={200} height={200} className="w-full h-auto" /> */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.link)}`}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full text-center">
                <h3 className="text-lg font-bold mb-1">{video.title}</h3>
                <h3 className="text-sm font-medium mb-5">
                  {video.description}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="w-full flex items-center justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-md"
      >
        <CarouselContent>{vedio}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
