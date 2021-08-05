import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface LiraSignPropsI extends SystemProps {}

export const LiraSign = (props: LiraSignPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,12a1,1,0,0,0-1,1,7.00787,7.00787,0,0,1-7,7V11.13538l5.2168-1.15931a.99986.99986,0,0,0-.4336-1.95214L10,9.08685V7.13538l5.2168-1.15931a.99986.99986,0,1,0-.4336-1.95214L10,5.08685V3A1,1,0,0,0,8,3V5.53131l-2.2168.49262a.99986.99986,0,1,0,.4336,1.95214L8,7.57983V9.53131l-2.2168.49262a.99986.99986,0,1,0,.4336,1.95214L8,11.57983V21a1,1,0,0,0,1,1h1a9.01047,9.01047,0,0,0,9-9A1,1,0,0,0,18,12Z" />
  </XSvg>
);
