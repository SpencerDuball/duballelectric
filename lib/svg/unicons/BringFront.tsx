import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BringFrontPropsI extends BoxProps {}

export const BringFront = (props: BringFrontPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11.29,17.3,10,18.59V7A1,1,0,0,0,8,7v11.6L6.71,17.3a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.41A1,1,0,0,0,11.29,17.3ZM22,3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V9a1,1,0,0,0,1,1H5A1,1,0,0,0,5,8H4V4H20V8H13a1,1,0,0,0,0,2h1v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V9h0ZM20,14H16V10h4Z" />
  </Box>
);
