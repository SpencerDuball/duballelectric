import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface N3PlusPropsI extends BoxProps {}

export const N3Plus = (props: N3PlusPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,5h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2ZM15.5,9a3,3,0,0,0-3-3h-1a3,3,0,0,0-3,3,1,1,0,0,0,2,0,1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H12a1,1,0,0,0,0,2h.5a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V14a3,3,0,0,0-.78-2,3,3,0,0,0,.78-2Zm6.1,0a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9Z" />
  </Box>
);
