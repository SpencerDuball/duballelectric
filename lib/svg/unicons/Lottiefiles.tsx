import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface LottiefilesPropsI extends BoxProps {}

export const Lottiefiles = (props: LottiefilesPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M17,6c-2.8,0-4.4,2.8-5.9,5.5C9.9,13.8,8.7,16,7,16c-0.6,0-1,0.4-1,1s0.4,1,1,1c2.8,0,4.4-2.8,5.9-5.5C14.1,10.2,15.3,8,17,8c0.6,0,1-0.4,1-1S17.6,6,17,6z M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z" />
  </Box>
);
