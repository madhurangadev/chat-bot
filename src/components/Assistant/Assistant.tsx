"use client";
export interface AssistantMessageProps {
  message: string;
}

export const Assistant = ({ message }: AssistantMessageProps) => {
  return (
    <div className="bg-[#f2f2f2] w-11/12 self-start p-2 ml-1 mb-2 rounded-lg">
      <p className="font-ubuntu text-grey-700 font-extralight">{message}</p>
    </div>
  );
};
