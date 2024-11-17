"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  job: string;
  time: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 md:mt-16 mb-36 z-10 text-justify"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 ">
          As a Full Stack Developer with one year of experience, I have been involved in developing web applications that integrate front-end and back-end. With a deep understanding of technologies such as React, Next.js, and Laravel, I am able to design responsive and functional applications. Additionally, my experience in working with Firebase and various other modern tools allows me to create safe and efficient solutions for users.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start  md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="space-y-4">
                <h3 className="hidden md:block text-xl  md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
                <h3 className="hidden md:block text-xl  md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.time}
                </h3>
                <h3 className="hidden md:block text-xl  md:pl-20 md:text-2xl font-bold text-white ">
                  {item.job}
                </h3>
              </div>
            </div>

            <div className="sticky mt-16 md:mt-0 pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
                <p className=" text-lg mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.time}
                </p>
                <p className="text-white text-lg block md:hidden">
                  {item.job}
                </p>
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div >
  );
};
