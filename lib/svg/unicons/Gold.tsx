import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface GoldPropsI extends SystemProps {}

export const Gold = (props: GoldPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M8,11h8a1,1,0,0,0,.77-.37A1,1,0,0,0,17,9.8l-1-5A1,1,0,0,0,15,4H9a1,1,0,0,0-1,.8l-1,5a1,1,0,0,0,.21.83A1,1,0,0,0,8,11ZM9.82,6h4.36l.6,3H9.22ZM22,13.8a1,1,0,0,0-1-.8H15a1,1,0,0,0-1,.8l-1,5a1,1,0,0,0,.21.83A1,1,0,0,0,14,20h8a1,1,0,0,0,.77-.37A1,1,0,0,0,23,18.8ZM15.22,18l.6-3h4.36l.6,3ZM9,13H3a1,1,0,0,0-1,.8l-1,5a1,1,0,0,0,.21.83A1,1,0,0,0,2,20h8a1,1,0,0,0,.77-.37A1,1,0,0,0,11,18.8l-1-5A1,1,0,0,0,9,13ZM3.22,18l.6-3H8.18l.6,3Z" />
  </XSvg>
);
