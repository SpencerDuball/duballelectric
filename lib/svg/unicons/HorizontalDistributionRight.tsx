import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface HorizontalDistributionRightPropsI extends BoxProps {}

export const HorizontalDistributionRight = (
  props: HorizontalDistributionRightPropsI
) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M19,2a1,1,0,0,0-1,1V4H13a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1h5v1a1,1,0,0,0,2,0V3A1,1,0,0,0,19,2ZM18,18H14V6h4ZM9,2A1,1,0,0,0,8,3V5H5A1,1,0,0,0,4,6V18a1,1,0,0,0,1,1H8v2a1,1,0,0,0,2,0V3A1,1,0,0,0,9,2ZM8,17H6V7H8Z" />
  </Box>
);
