import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BasketballHoopPropsI extends BoxProps {}

export const BasketballHoop = (props: BasketballHoopPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,10H6a1,1,0,0,0,0,2H7v9a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V12h1a1,1,0,0,0,0-2Zm-7,8H9V16h2Zm0-4H9V12h2Zm4,4H13V16h2Zm0-4H13V12h2ZM20,2H4A3,3,0,0,0,1,5v8a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,3-3V5A3,3,0,0,0,20,2ZM14,8a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z" />
  </Box>
);
