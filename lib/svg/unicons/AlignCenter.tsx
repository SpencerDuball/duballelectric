import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface AlignCenterPropsI extends SystemProps {}

export const AlignCenter = (props: AlignCenterPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM7,9a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm14,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
  </XSvg>
);
