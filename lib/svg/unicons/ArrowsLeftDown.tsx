import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ArrowsLeftDownPropsI extends SystemProps {}

export const ArrowsLeftDown = (props: ArrowsLeftDownPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21.71,16.29a1,1,0,0,0-1.42,0L18,18.59V9a3,3,0,0,0-3-3H5.41l2.3-2.29A1,1,0,0,0,6.29,2.29l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,8H15a1,1,0,0,1,1,1v9.59l-2.29-2.3a1,1,0,0,0-1.42,1.42l4,4a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4A1,1,0,0,0,21.71,16.29Z" />
  </XSvg>
);
