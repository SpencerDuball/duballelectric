import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface ColumnsPropsI extends BoxProps {}

export const Columns = (props: ColumnsPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V4h7Zm9,0H13V4h7Z" />
  </Box>
);
