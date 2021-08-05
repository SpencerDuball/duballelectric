import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface RssInterfacePropsI extends SystemProps {}

export const RssInterface = (props: RssInterfacePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,14a1,1,0,0,0,0,2,3,3,0,0,1,3,3,1,1,0,0,0,2,0A5,5,0,0,0,3,14Zm-.71,4.29a1,1,0,1,0,1.42,0A1,1,0,0,0,2.29,18.29ZM19,4H5A3,3,0,0,0,2,7,1,1,0,0,0,4,7,1,1,0,0,1,5,6H19a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H15a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM3,10a1,1,0,0,0,0,2,7,7,0,0,1,7,7,1,1,0,0,0,2,0A9,9,0,0,0,3,10Z" />
  </XSvg>
);
