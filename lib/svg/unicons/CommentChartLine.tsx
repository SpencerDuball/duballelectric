import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CommentChartLinePropsI extends SystemProps {}

export const CommentChartLine = (props: CommentChartLinePropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,10a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10ZM8,13a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V14A1,1,0,0,0,8,13ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20ZM16,8a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z" />
  </XSvg>
);
