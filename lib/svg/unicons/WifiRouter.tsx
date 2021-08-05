import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface WifiRouterPropsI extends SystemProps {}

export const WifiRouter = (props: WifiRouterPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M8.9,17a1,1,0,1,0,1,1A1,1,0,0,0,8.9,17Zm-3,0a1,1,0,1,0,1,1A1,1,0,0,0,5.9,17Zm6,0a1,1,0,1,0,1,1A1,1,0,0,0,11.9,17ZM15,8.5a1,1,0,0,1,1.73,0,1,1,0,0,0,1.36.37A1,1,0,0,0,18.5,7.5a3,3,0,0,0-5.2,0A1,1,0,0,0,15,8.5ZM22,5.5a7,7,0,0,0-12.12,0,1,1,0,0,0,.37,1.37A1,1,0,0,0,10.7,7a1,1,0,0,0,.87-.5,5,5,0,0,1,8.66,0,1,1,0,0,0,1.37.37A1,1,0,0,0,22,5.5ZM17.9,14h-1V11a1,1,0,1,0-2,0v3H4.9a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h13a3,3,0,0,0,3-3V17A3,3,0,0,0,17.9,14Zm1,5a1,1,0,0,1-1,1H4.9a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1h13a1,1,0,0,1,1,1Z" />
  </XSvg>
);
