import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface SurprisePropsI extends SystemProps {}

export const Surprise = (props: SurprisePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM10,9a1,1,0,1,0-1,1A1,1,0,0,0,10,9Zm5-1a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm-3,3a3.39,3.39,0,0,0-3.25,3.5A3.39,3.39,0,0,0,12,18a3.39,3.39,0,0,0,3.25-3.5A3.39,3.39,0,0,0,12,11Zm0,5a1.39,1.39,0,0,1-1.25-1.5A1.39,1.39,0,0,1,12,13a1.39,1.39,0,0,1,1.25,1.5A1.39,1.39,0,0,1,12,16Z" />
  </XSvg>
);
