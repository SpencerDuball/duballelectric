import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface SickPropsI extends SystemProps {}

export const Sick = (props: SickPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,0a1,1,0,1,0-1-1A1,1,0,0,0,15,11Zm.27,3.2a1,1,0,0,0-1.2,0l-.74.55-.73-.55a1,1,0,0,0-1.2,0l-.73.55-.74-.55a1,1,0,0,0-1.2,0l-1.33,1a1,1,0,1,0,1.2,1.6l.73-.55.74.55,0,0,.12.06a.83.83,0,0,0,.22.08l.12,0a1,1,0,0,0,.25,0h.1a1.06,1.06,0,0,0,.34-.16l.73-.55.73.55a1,1,0,0,0,1,.11l.1-.05a.39.39,0,0,0,.11-.06l.74-.55.73.55a1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4,1,1,0,0,0-.2-1.4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </XSvg>
);
