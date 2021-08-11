import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface WindowMaximizePropsI extends BoxProps {}

export const WindowMaximize = (props: WindowMaximizePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V10H20ZM20,8H4V4H20Z" />
  </Box>
);
