import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface PentagonPropsI extends SystemProps {}

export const Pentagon = (props: PentagonPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21.59,9.17l-9-6.54a1,1,0,0,0-1.18,0l-9,6.54a1,1,0,0,0-.36,1.12L5.49,20.87a1,1,0,0,0,1,.69H17.56a1,1,0,0,0,1-.69L22,10.29A1,1,0,0,0,21.59,9.17ZM16.84,19.56H7.16l-3-9.2L12,4.68l7.82,5.68Z" />
  </XSvg>
);
