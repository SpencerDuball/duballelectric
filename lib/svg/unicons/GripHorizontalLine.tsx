import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface GripHorizontalLinePropsI extends BoxProps {}

export const GripHorizontalLine = (props: GripHorizontalLinePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,11H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </Box>
);
