import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CompressAltLeftPropsI extends SystemProps {}

export const CompressAltLeft = (props: CompressAltLeftPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M10.5,5.5a1,1,0,0,0-1,1V8.09L3.71,2.29A1,1,0,0,0,2.29,3.71L8.09,9.5H6.5a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54,1,1,0,0,0,.08-.38v-4A1,1,0,0,0,10.5,5.5ZM21.71,20.29l-5.8-5.79H17.5a1,1,0,0,0,0-2h-4a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54,1,1,0,0,0-.08.38v4a1,1,0,0,0,2,0V15.91l5.79,5.8a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Z" />
  </XSvg>
);
