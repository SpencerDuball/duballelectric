import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface EqualCirclePropsI extends BoxProps {}

export const EqualCircle = (props: EqualCirclePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M15,13H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </Box>
);
