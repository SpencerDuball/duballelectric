import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CompressPropsI extends SystemProps {}

export const Compress = (props: CompressPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M16,9h5a1,1,0,0,0,0-2H17V3a1,1,0,0,0-2,0V8A1,1,0,0,0,16,9ZM8,15H3a1,1,0,0,0,0,2H7v4a1,1,0,0,0,2,0V16A1,1,0,0,0,8,15ZM8,2A1,1,0,0,0,7,3V7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2ZM21,15H16a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2Z" />
  </XSvg>
);
