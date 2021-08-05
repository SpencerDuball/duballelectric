import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface DiceTwoPropsI extends SystemProps {}

export const DiceTwo = (props: DiceTwoPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M9,11a1,1,0,1,0,1,1A1,1,0,0,0,9,11Zm8-9H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3Zm-5-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11Z" />
  </XSvg>
);
