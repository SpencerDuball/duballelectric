import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BitcoinCirclePropsI extends BoxProps {}

export const BitcoinCircle = (props: BitcoinCirclePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM14,7V6a1,1,0,0,0-2,0V7H11V6A1,1,0,0,0,9,6V7H8A1,1,0,0,0,8,9H9v6H8a1,1,0,0,0,0,2H9v1a1,1,0,0,0,2,0V17h1v1a1,1,0,0,0,2,0V17a3,3,0,0,0,3-3,3,3,0,0,0-.77-2A3,3,0,0,0,17,10,3,3,0,0,0,14,7Zm0,8H11V13h3a1,1,0,0,1,0,2Zm0-4H11V9h3a1,1,0,0,1,0,2Z" />
  </Box>
);
