import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ArrowsShrinkVPropsI extends SystemProps {}

export const ArrowsShrinkV = (props: ArrowsShrinkVPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M13.79,10.21a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8v5.18l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42l-.79.8V9.41ZM7,4H17a1,1,0,0,0,0-2H7A1,1,0,0,0,7,4ZM17,20H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
  </XSvg>
);
