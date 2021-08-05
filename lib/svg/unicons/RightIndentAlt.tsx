import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface RightIndentAltPropsI extends SystemProps {}

export const RightIndentAlt = (props: RightIndentAltPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3.64,9.56A1,1,0,1,0,2.36,11.1l1.08.9-1.08.9a1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.13l2-1.67a1,1,0,0,0,0-1.54ZM9,5A1,1,0,0,0,8,6V18a1,1,0,0,0,2,0V6A1,1,0,0,0,9,5Zm4,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Zm8,10H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-8H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0,4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
  </XSvg>
);
