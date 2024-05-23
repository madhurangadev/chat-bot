"use client";
import themeStore from "@/store/themeStore";

export interface UserMessageProps {
  message: string;
}

export const UserMessage = ({ message }: UserMessageProps) => {
  const { primaryColor } = themeStore((state) => state);

  return (
    <div
      className="rounded-lg w-11/12 p-2 self-end mr-1 mb-2"
      style={{
        backgroundColor: primaryColor,
      }}
    >
      <p className="font-ubuntu text-white-100">{message}</p>
    </div>
  );
};
