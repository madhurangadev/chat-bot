import { ReactSVGElement, SVGAttributes } from "react";

export const FaceIcon = ({
  height,
  width,
}: SVGAttributes<ReactSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "16"}
      height={height ?? "16"}
      fill="none"
      viewBox="0 0 16 16"
    >
      <circle
        cx="8"
        cy="8"
        r="6.725"
        stroke="#757575"
        stroke-width="1.3"
      ></circle>
      <path
        fill="#757575"
        fill-rule="evenodd"
        d="M5.818 7.534a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2m4.364 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"
        clip-rule="evenodd"
      ></path>
      <path
        stroke="#757575"
        stroke-linecap="round"
        stroke-width="1.3"
        d="M10 10c-.44.604-1.172 1-2 1s-1.56-.396-2-1"
      ></path>
    </svg>
  );
};
