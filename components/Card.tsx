import { Card } from "@/components/ui/card";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Component({ title, des, time, index }: any) {
  const createdAt = new Date(time).toLocaleString();
  return (
    <>
      <BackgroundGradient className="rounded-[22px]   min-w-[380px] bg-red-500 dark:bg-zinc-900">
        <Link
          href={`/view/${index}`}
          className="w-full min-w-[380px] h-fit hover:scale-105 transition-all  bg-red-500 duration-75 hover:bg-gray-400 rounded-md"
        >
          <Card className="  max-w-sm min-w-sm border-2 border-blue-300  hover:bg-gray-200 min-h-48 ">
            <div className="p-4 divide-y-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold leading-none tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{createdAt}</p>
              </div>
              <p className="line-clamp-2 mt-4">{des}</p>
            </div>
          </Card>
        </Link>
      </BackgroundGradient>
    </>
  );
}
