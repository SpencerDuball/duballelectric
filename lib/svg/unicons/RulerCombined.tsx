import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface RulerCombinedPropsI extends BoxProps {}

export const RulerCombined = (props: RulerCombinedPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V10H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,8H18V7a1,1,0,0,0-2,0V8H14V7a1,1,0,0,0-2,0V8H10V7A1,1,0,0,0,8,7V8H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H4V4H20Z" />
  </Box>
);
