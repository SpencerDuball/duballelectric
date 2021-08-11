import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface AlignRightPropsI extends BoxProps {}

export const AlignRight = (props: AlignRightPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </Box>
);
