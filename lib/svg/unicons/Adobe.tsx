import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface AdobePropsI extends SystemProps {}

export const Adobe = (props: AdobePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M9.07,17.28h2.78l1.75,3.44h2.54L12,9.87ZM2,3V21L9.42,3ZM14.48,3,22,20.81V3Z" />
  </XSvg>
);
