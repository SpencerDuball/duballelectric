import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface UsdCirclePropsI extends BoxProps {}

export const UsdCircle = (props: UsdCirclePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
  </Box>
);
