import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface ArrowsRightDownPropsI extends BoxProps {}

export const ArrowsRightDown = (props: ArrowsRightDownPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M20.92,6.62a1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L17.59,6H9A3,3,0,0,0,6,9v8.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42L8,17.59V9A1,1,0,0,1,9,8h8.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,20.92,6.62Z" />
  </Box>
);
