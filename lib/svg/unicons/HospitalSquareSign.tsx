import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface HospitalSquareSignPropsI extends SystemProps {}

export const HospitalSquareSign = (props: HospitalSquareSignPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M15,6a.99974.99974,0,0,0-1,1v4H10V7A1,1,0,0,0,8,7V17a1,1,0,0,0,2,0V13h4v4a1,1,0,0,0,2,0V7A.99974.99974,0,0,0,15,6Zm4-4H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2Zm1,17a1.001,1.001,0,0,1-1,1H5a1.001,1.001,0,0,1-1-1V5A1.001,1.001,0,0,1,5,4H19a1.001,1.001,0,0,1,1,1Z" />
  </XSvg>
);
