import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface GridPropsI extends SystemProps {}

export const Grid = (props: GridPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V16h7Zm0-6H4V10h7Zm9,6H13V16h7Zm0-6H13V10h7Zm0-6H4V4H20Z" />
  </XSvg>
);
