import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface WebSectionPropsI extends BoxProps {}

export const WebSection = (props: WebSectionPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM14,20H4V4H14Zm6,0H16V4h4Z" />
  </Box>
);
