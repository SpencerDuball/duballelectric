import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ArrowCircleDownPropsI extends SystemProps {}

export const ArrowCircleDown = (props: ArrowCircleDownPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11.29,15.71a1,1,0,0,0,.33.21,1,1,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42L13,12.59V9a1,1,0,0,0-2,0v3.59l-1.29-1.3a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42ZM12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22ZM12,4a8,8,0,1,1-8,8A8,8,0,0,1,12,4Z" />
  </XSvg>
);
