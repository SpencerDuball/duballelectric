import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface StethoscopePropsI extends BoxProps {}

export const Stethoscope = (props: StethoscopePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M19,8a2.99253,2.99253,0,0,0-1,5.81567V15.5a4.5,4.5,0,0,1-9,0v-.59033A6.00448,6.00448,0,0,0,14,9V3a1,1,0,0,0-1-1H11a1,1,0,0,0,0,2h1V9A4,4,0,0,1,4,9V4H5A1,1,0,0,0,5,2H3A1,1,0,0,0,2,3V9a6.00448,6.00448,0,0,0,5,5.90967V15.5a6.5,6.5,0,0,0,13,0V13.81573A2.99257,2.99257,0,0,0,19,8Zm0,4a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,19,12Z" />
  </Box>
);
