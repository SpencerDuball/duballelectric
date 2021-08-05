import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ServerAltPropsI extends SystemProps {}

export const ServerAlt = (props: ServerAltPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M8,17a1,1,0,1,0,1,1A1,1,0,0,0,8,17Zm0-6a1,1,0,1,0,1,1A1,1,0,0,0,8,11ZM8,5A1,1,0,1,0,9,6,1,1,0,0,0,8,5ZM20,5a3,3,0,0,0-3-3H7A3,3,0,0,0,4,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,4,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,4,17v2a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,20,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,20,7ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,7V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1Z" />
  </XSvg>
);
