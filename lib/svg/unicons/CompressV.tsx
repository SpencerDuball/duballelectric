import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CompressVPropsI extends SystemProps {}

export const CompressV = (props: CompressVPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12.71,13.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V21a1,1,0,0,0,2,0V16.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-1.42-2.58a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,1,0-1.42-1.42l-.79.8V3a1,1,0,0,0-2,0V7.59l-.79-.8A1,1,0,1,0,8.79,8.21Z" />
  </XSvg>
);
