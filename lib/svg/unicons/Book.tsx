import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface BookPropsI extends SystemProps {}

export const Book = (props: BookPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M15,6H9A1,1,0,0,0,8,7v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V7A1,1,0,0,0,15,6Zm-1,4H10V8h4Zm3-8H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H6V4H17a1,1,0,0,1,1,1Z" />
  </XSvg>
);
