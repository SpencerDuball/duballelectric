import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface VisualStudioPropsI extends BoxProps {}

export const VisualStudio = (props: VisualStudioPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M16.85,2,9.09,9.77,4.19,5.91,2.05,7V17L4.2,18.09l4.93-3.85L16.87,22,22,19.93V4ZM4.37,14.3V9.65l2.44,2.43ZM16.7,15.59,12.05,12,16.7,8.41Z" />
  </Box>
);
