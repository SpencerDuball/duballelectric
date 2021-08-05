import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CommentAltRedoPropsI extends SystemProps {}

export const CommentAltRedo = (props: CommentAltRedoPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M10.3,10.75A1,1,0,1,0,9,9.25,3,3,0,1,1,7,4,3,3,0,0,1,9.23,5H8A1,1,0,0,0,8,7h3a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0h0a5,5,0,1,0,.3,7.75ZM19,6H15a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,21V9A3,3,0,0,0,19,6Z" />
  </XSvg>
);
