import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface PercentagePropsI extends SystemProps {}

export const Percentage = (props: PercentagePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M7.75781,10.75781a3,3,0,1,0-3-3A3.00328,3.00328,0,0,0,7.75781,10.75781Zm0-4a1,1,0,1,1-1,1A1.00067,1.00067,0,0,1,7.75781,6.75781Zm8.48438,6.48438a3,3,0,1,0,3,3A3.00328,3.00328,0,0,0,16.24219,13.24219Zm0,4a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,16.24219,17.24219ZM19.707,4.293a.99962.99962,0,0,0-1.41406,0l-14,14A.99989.99989,0,1,0,5.707,19.707l14-14A.99962.99962,0,0,0,19.707,4.293Z" />
  </XSvg>
);
