import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface SadCryingPropsI extends SystemProps {}

export const SadCrying = (props: SadCryingPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,2A10,10,0,0,0,8.59,21.39l.06,0a9.81,9.81,0,0,0,6.7,0l.06,0A10,10,0,0,0,12,2Zm2,17.74a7.82,7.82,0,0,1-4,0V16.61a3.79,3.79,0,0,1,4,0Zm2-.82V11a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2v3.39a6,6,0,0,0-4,0V11a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2v7.92a8,8,0,1,1,8,0Z" />
  </XSvg>
);
