import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BullseyePropsI extends BoxProps {}

export const Bullseye = (props: BullseyePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13ZM12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
  </Box>
);
