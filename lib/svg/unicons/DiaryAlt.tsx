import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface DiaryAltPropsI extends BoxProps {}

export const DiaryAlt = (props: DiaryAltPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M17,2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM8,20H6V4H8Zm10-1a1,1,0,0,1-1,1H10V4h7a1,1,0,0,1,1,1Z" />
  </Box>
);
