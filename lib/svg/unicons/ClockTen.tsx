import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ClockTenPropsI extends SystemProps {}

export const ClockTen = (props: ClockTenPropsI) => (
  <XSvg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,6a.99974.99974,0,0,0-1,1v3.26758L9.90234,9.63379a1.00016,1.00016,0,0,0-1,1.73242l2.59766,1.5A1,1,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Zm0-4A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" />
  </XSvg>
);
