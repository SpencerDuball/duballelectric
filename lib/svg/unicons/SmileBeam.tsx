import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface SmileBeamPropsI extends SystemProps {}

export const SmileBeam = (props: SmileBeamPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M14.36,14.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM9.21,10.54a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41,3.08,3.08,0,0,0-4.24,0,1,1,0,1,0,1.41,1.41A1,1,0,0,1,9.21,10.54Zm8.41-1.41a3.08,3.08,0,0,0-4.24,0,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,1.41,0A1,1,0,0,0,17.62,9.13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </XSvg>
);
