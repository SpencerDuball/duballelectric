import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface WindsockPropsI extends BoxProps {}

export const Windsock = (props: WindsockPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18.08,5,10,4.33h0L7,4.08V3A1,1,0,0,0,5,3V21a1,1,0,0,0,2,0V13.92l3-.25h0L18.08,13A1,1,0,0,0,19,12V6A1,1,0,0,0,18.08,5ZM9,11.75l-2,.16V6.09l2,.16Zm4-.34-2,.17V6.42l2,.17Zm4-.33-2,.17V6.75l2,.17Z" />
  </Box>
);
