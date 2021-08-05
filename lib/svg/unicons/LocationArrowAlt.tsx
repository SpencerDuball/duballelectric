import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface LocationArrowAltPropsI extends SystemProps {}

export const LocationArrowAlt = (props: LocationArrowAltPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21.68,17.65l-7-14a3,3,0,0,0-5.36,0l-7,14a3,3,0,0,0,3.9,4.08l5.37-2.4h0a1.06,1.06,0,0,1,.82,0l5.37,2.4a3,3,0,0,0,3.9-4.08Zm-2,2a1,1,0,0,1-1.13.22l-5.37-2.39a3,3,0,0,0-2.44,0L5.41,19.9a1,1,0,0,1-1.3-1.35l7-14a1,1,0,0,1,1.78,0l7,14A1,1,0,0,1,19.72,19.68Z" />
  </XSvg>
);
