import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface VerticalAlignTopPropsI extends BoxProps {}

export const VerticalAlignTop = (props: VerticalAlignTopPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,3,4H6V21a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h3a1,1,0,0,0,1-1V4h3a1,1,0,0,0,0-2ZM12,20H8V4h4Zm4-6H14V4h2Z" />
  </Box>
);
