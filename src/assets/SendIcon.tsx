import { ReactSVGElement, SVGAttributes } from "react";

export const SendIcon = ({
  className,
  fill,
  height,
  width,
}: SVGAttributes<ReactSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width ?? "18"}
      height={height ?? "18"}
      viewBox="0 0 18 18"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="m4.394 14.7 9.356-5.4c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 0 0-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 0 0 2.25 1.299"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
