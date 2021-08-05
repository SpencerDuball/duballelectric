import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface MouseAlt2PropsI extends SystemProps {}

export const MouseAlt2 = (props: MouseAlt2PropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,2A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9a5,5,0,0,1,4-4.9V12a1,1,0,0,0,2,0V4.1A5,5,0,0,1,17,9Z" />
  </XSvg>
);
