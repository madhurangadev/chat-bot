"use client";
import { SendIcon, FaceIcon } from "@/assets";

export interface TextInputProps {
  onSubmit: (value: string) => void;
  setText: (value: string) => void;
  text: string;
  setEnableEmojis: (value: boolean) => void;
  enableEmojis: boolean;
  disableSend: boolean;
}

export const TextInput = ({
  onSubmit,
  text,
  setText,
  setEnableEmojis,
  enableEmojis,
  disableSend,
}: TextInputProps) => {
  return (
    <div className="flex flex-row text-center items-center bottom-0 px-3 w-full">
      <textarea
        id="UserEmail"
        rows={1}
        value={text}
        placeholder="Write a reply..."
        onChange={(e) => setText(e.target.value)}
        className="w-full resize-none p-2 font-normal  outline-none mt-1  mb-1 sm:text-sm text-grey-500"
      />
      <button
        onClick={() => setEnableEmojis(!enableEmojis)}
        className=" w-5 mr-[5px]"
      >
        <FaceIcon />
      </button>
      {!disableSend && (
        <button
          onClick={() => onSubmit(text)}
          className=" flex items-center justify-center"
        >
          <SendIcon fill="#4c5270" />
        </button>
      )}
    </div>
  );
};
