import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface AbacusPropsI extends SystemProps {}

export const Abacus = (props: AbacusPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2a1,1,0,0,0-1,1V6H16V5a1,1,0,0,0-2,0V6H12V5a1,1,0,0,0-2,0V6H8V5A1,1,0,0,0,6,5V6H4V3A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V3A1,1,0,0,0,21,2ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H6v1a1,1,0,0,0,2,0V16h2v1a1,1,0,0,0,2,0V16h4v1a1,1,0,0,0,2,0V16h2Zm0-5H18V13a1,1,0,0,0-2,0v1H12V13a1,1,0,0,0-2,0v1H8V13a1,1,0,0,0-2,0v1H4V8H6V9A1,1,0,0,0,8,9V8h2V9a1,1,0,0,0,2,0V8h2V9a1,1,0,0,0,2,0V8h4Z" />
  </XSvg>
);
