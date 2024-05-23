"use client";
import { SendIcon, FaceIcon } from "@/assets";

export interface NameFieldProps {
  setText: (value: string) => void;
  text: string;
}

export const NameField = ({ text, setText }: NameFieldProps) => {
  return (
    <div className="flex flex-row text-center items-center bottom-0 px-3 w-full">
      <input
        type="email"
        value={text}
        placeholder="Name"
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 font-normal border-b-[1px]  outline-none mt-1  mb-1 sm:text-sm text-grey-500"
      />
    </div>
  );
};
