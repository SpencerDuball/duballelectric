import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface AlignJustifyPropsI extends BoxProps {}

export const AlignJustify = (props: AlignJustifyPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </Box>
);
