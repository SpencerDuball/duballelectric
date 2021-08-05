import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CancelPropsI extends SystemProps {}

export const Cancel = (props: CancelPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21.77,11.36l-5-6A1,1,0,0,0,16,5H5A3,3,0,0,0,2,8v8a3,3,0,0,0,3,3H16a1,1,0,0,0,.77-.36l5-6A1,1,0,0,0,21.77,11.36ZM15.53,17H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7H15.53l4.17,5ZM12.71,9.29a1,1,0,0,0-1.42,0L10,10.59,8.71,9.29a1,1,0,1,0-1.42,1.42L8.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L10,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,12l1.3-1.29A1,1,0,0,0,12.71,9.29Z" />
  </XSvg>
);
