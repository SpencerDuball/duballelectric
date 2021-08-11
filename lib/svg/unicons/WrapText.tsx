import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface WrapTextPropsI extends BoxProps {}

export const WrapText = (props: WrapTextPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm6,8H3a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9.5-5H3a1,1,0,0,0,0,2H18.5a1.5,1.5,0,0,1,0,3H15.41l.3-.29a1,1,0,0,0-1.42-1.42l-2,2a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29H18.5a3.5,3.5,0,0,0,0-7Z" />
  </Box>
);
