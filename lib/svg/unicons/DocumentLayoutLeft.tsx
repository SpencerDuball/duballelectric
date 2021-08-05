import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface DocumentLayoutLeftPropsI extends SystemProps {}

export const DocumentLayoutLeft = (props: DocumentLayoutLeftPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,12H9a1,1,0,0,0,1-1V5A1,1,0,0,0,9,4H3A1,1,0,0,0,2,5v6A1,1,0,0,0,3,12ZM4,6H8v4H4Zm9,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Zm0,10H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
  </XSvg>
);
