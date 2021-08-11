import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface AlignCenterJustifyPropsI extends BoxProps {}

export const AlignCenterJustify = (props: AlignCenterJustifyPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,15H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM17,19H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2ZM21,7H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
  </Box>
);
