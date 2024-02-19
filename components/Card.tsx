import { Card } from "@/components/ui/card";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Component({ title, des, time, index }: any) {
  const createdAt = new Date(time).toLocaleString();
  return (
    <>
      <BackgroundGradient className="rounded-[22px] w-full max-w-sm bg-white dark:bg-zinc-900">
        <Link
          href={`/view/${index}`}
          className="w-full max-w-sm h-fit hover:scale-105 transition-all duration-75 hover:bg-gray-400 rounded-md"
        >
          <Card className="w-full max-w-sm hover:bg-gray-200 min-h-48 ">
            <div className="p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold leading-none tracking-tighter">
                  {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{createdAt}</p>
              </div>
              <p className="line-clamp-2">{des}</p>
            </div>
          </Card>
        </Link>
      </BackgroundGradient>
    </>
  );
}
