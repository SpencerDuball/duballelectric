import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface GlassPropsI extends SystemProps {}

export const Glass = (props: GlassPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M19.75,2.33A1,1,0,0,0,19,2H5a1,1,0,0,0-.75.33A1,1,0,0,0,4,3.11l1.8,16.22a3,3,0,0,0,3,2.67h6.42a3,3,0,0,0,3-2.67L20,3.11A1,1,0,0,0,19.75,2.33ZM16.2,19.11a1,1,0,0,1-1,.89H8.79a1,1,0,0,1-1-.89L6.78,10H17.22ZM17.44,8H6.56L6.12,4H17.88Z" />
  </XSvg>
);
