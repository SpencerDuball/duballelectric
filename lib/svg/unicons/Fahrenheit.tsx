import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface FahrenheitPropsI extends SystemProps {}

export const Fahrenheit = (props: FahrenheitPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M20.5,3h-7a3,3,0,0,0-3,3V20a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2h-6V6a1,1,0,0,1,1-1h7a1,1,0,0,0,0-2ZM5.5,3a3,3,0,1,0,3,3A3,3,0,0,0,5.5,3Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,5.5,7Z" />
  </XSvg>
);
