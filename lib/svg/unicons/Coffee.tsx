import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CoffeePropsI extends SystemProps {}

export const Coffee = (props: CoffeePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M9,17h4a5,5,0,0,0,5-5V11h1a3,3,0,0,0,0-6H18V4a1,1,0,0,0-1-1H5A1,1,0,0,0,4,4v8A5,5,0,0,0,9,17ZM18,7h1a1,1,0,0,1,0,2H18ZM6,5H16v7a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3ZM21,19H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </XSvg>
);
