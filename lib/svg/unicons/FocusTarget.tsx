import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface FocusTargetPropsI extends BoxProps {}

export const FocusTarget = (props: FocusTargetPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3,9A1,1,0,0,0,4,8V5A1,1,0,0,1,5,4H8A1,1,0,0,0,8,2H5A3,3,0,0,0,2,5V8A1,1,0,0,0,3,9ZM8,20H5a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm9-7a1,1,0,0,0,0-2H15.86A4,4,0,0,0,13,8.14V7a1,1,0,0,0-2,0V8.14A4,4,0,0,0,8.14,11H7a1,1,0,0,0,0,2H8.14A4,4,0,0,0,11,15.86V17a1,1,0,0,0,2,0V15.86A4,4,0,0,0,15.86,13Zm-5,1a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm9,1a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V16A1,1,0,0,0,21,15ZM19,2H16a1,1,0,0,0,0,2h3a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,19,2Z" />
  </Box>
);
