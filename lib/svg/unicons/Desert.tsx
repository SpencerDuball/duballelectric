import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface DesertPropsI extends SystemProps {}

export const Desert = (props: DesertPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,2a4,4,0,1,0,4,4A4,4,0,0,0,18,2Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,8ZM15,20H13V18a1,1,0,0,0-2,0v2H9V16.62l3.45-1.73A1,1,0,0,0,13,14V10a1,1,0,0,0-2,0v3.38l-2,1V8A1,1,0,0,0,7,8v8.38l-2-1V13a1,1,0,0,0-2,0v3a1,1,0,0,0,.55.89L7,18.62V20H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z" />
  </XSvg>
);
