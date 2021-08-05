import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface AssistiveListeningSystemsPropsI extends SystemProps {}

export const AssistiveListeningSystems = (
  props: AssistiveListeningSystemsPropsI
) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11,3a7,7,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,10,0,5.07,5.07,0,0,1-.71,2.57L11.73,20A2,2,0,0,1,10,21a2,2,0,0,1-2-2,1,1,0,0,0-2,0,4,4,0,0,0,4,4,4,4,0,0,0,3.5-2.07l3.56-7.43A6.93,6.93,0,0,0,18,10,7,7,0,0,0,11,3ZM4,15a1,1,0,1,0,1,1A1,1,0,0,0,4,15ZM17.59,1.2a1,1,0,1,0-1.2,1.6A9,9,0,0,1,20,10a1,1,0,0,0,2,0A11.06,11.06,0,0,0,17.59,1.2ZM11,9a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-6,0,3,3,0,0,0,.51,1.68,3.5,3.5,0,0,0,.47.54l.2.22a1,1,0,0,1,0,1.11,1,1,0,0,0,.25,1.39,1,1,0,0,0,.57.18,1,1,0,0,0,.82-.43,3,3,0,0,0,0-3.39,3.39,3.39,0,0,0-.35-.42l-.14-.14a1.37,1.37,0,0,1-.16-.18A1,1,0,0,1,10,10,1,1,0,0,1,11,9ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Z" />
  </XSvg>
);
