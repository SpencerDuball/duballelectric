import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface VerticalAlignBottomPropsI extends BoxProps {}

export const VerticalAlignBottom = (props: VerticalAlignBottomPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,20H18V9a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-9,0H8V4h4Zm4,0H14V10h2Z" />
  </Box>
);
