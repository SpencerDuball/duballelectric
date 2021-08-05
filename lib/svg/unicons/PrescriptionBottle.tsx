import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface PrescriptionBottlePropsI extends SystemProps {}

export const PrescriptionBottle = (props: PrescriptionBottlePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M19,2H5A2,2,0,0,0,3,4V6A2,2,0,0,0,5,8V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8a2,2,0,0,0,2-2V4A2,2,0,0,0,19,2ZM17,16H11V12h6Zm0-6H10a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h7v1a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17ZM5,6V4H19V6Z" />
  </XSvg>
);
