import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ProgrammingLanguagePropsI extends SystemProps {}

export const ProgrammingLanguage = (props: ProgrammingLanguagePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M22,3l-3,15.1l-9.1,3l-7.9-3L2.8,14h3.4l-0.4,1.7l4.8,1.8l5.5-1.8l0.8-3.8H3.2l0.7-3.4h13.6L18,6.4H4.3L5,3H22z" />
  </XSvg>
);
