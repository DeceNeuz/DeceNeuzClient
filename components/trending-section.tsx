import React from "react";
import coverImage from "@/public/cover-image.jpg";
import Image from "next/image";
import moment from "moment";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";

interface TrendingSectionProps {
  data: {
    ID: string;
    Title: string;
    CreatedAt: string;
  }[];
}

const TrendingSection = ({ data }: TrendingSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Heading */}
      <h1 className="font-oswald text-3xl font-medium uppercase text-slate-950">
        Trending
      </h1>
      {/* Articles */}
      <div className="grid w-full grid-cols-3 grid-rows-4 gap-4">
        {data.map((article) => (
          <div
            key={article.ID}
            className="group relative flex h-full w-full gap-3 overflow-hidden rounded border border-slate-200 bg-white p-2 first:col-span-2 first:row-span-4 first:p-0"
          >
            <div className="flex-[3] overflow-hidden rounded">
              <Image
                src={coverImage}
                alt="Article Cover Image"
                style={{ objectFit: "cover" }}
                className="h-full w-full"
              />
            </div>
            <div className="bottom-0 flex w-full flex-[4] flex-col justify-between gap-4 rounded from-black to-transparent group-first:absolute group-first:flex-row group-first:items-end group-first:gap-10 group-first:bg-gradient-to-t group-first:p-8">
              <div className="flex flex-col gap-2 group-first:flex-col-reverse">
                <p className="line-clamp-2 font-oswald font-medium uppercase group-first:text-3xl group-first:text-white">
                  {article.Title}
                </p>
                <p className="flex items-center gap-4 text-[10px] font-semibold capitalize text-slate-500 group-first:text-[12px] group-first:text-white">
                  <span className="hidden gap-2 rounded-full bg-orange-500 p-2 px-4 group-first:flex">
                    <TrendingUp size={16} />
                    Trending
                  </span>
                  {moment(article.CreatedAt).fromNow()}
                </p>
              </div>
              <Button
                variant={"outline"}
                className="flex h-fit w-fit gap-4 border-2 p-2 text-slate-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white group-first:border-orange-500 group-first:bg-orange-500 group-first:px-4 group-first:text-white"
              >
                <span className="hidden group-first:flex">Read More</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
