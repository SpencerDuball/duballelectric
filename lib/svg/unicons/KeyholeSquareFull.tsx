import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface KeyholeSquareFullPropsI extends BoxProps {}

export const KeyholeSquareFull = (props: KeyholeSquareFullPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11,11.72V15a1,1,0,0,0,2,0V11.72A2,2,0,0,0,14,10a2,2,0,0,0-4,0A2,2,0,0,0,11,11.72ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" />
  </Box>
);
