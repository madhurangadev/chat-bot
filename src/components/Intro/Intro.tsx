"use client";
import themeStore from "@/store/themeStore";
import { cn } from "@/utils/classname";

export const Intro = () => {
  const { primaryColor, avatar, avatarColor, intro } = themeStore(
    (state) => state
  );

  return (
    <div
      className={cn(
        "px-10 flex justify-center items-center  overflow-auto flex-col  w-full h-[200px]"
      )}
      style={{
        backgroundColor: primaryColor,
      }}
    >
      <div
        style={{
          backgroundColor: avatarColor,
        }}
        className={cn(
          "text-2xl mb-2 rounded-full font-inter flex justify-center items-center w-12 h-12"
        )}
      >
        {avatar}
      </div>
      <p className=" text-center font-inter text-base">
        We will reply as soon as we can
      </p>
      <p className="mt-4 text-center font-inter text-xs">{intro}</p>
    </div>
  );
};
