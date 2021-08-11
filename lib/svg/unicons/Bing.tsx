import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BingPropsI extends BoxProps {}

export const Bing = (props: BingPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M10.1,8.6l1.7,4.3l2.8,1.3L9,17.5V3.4L5,2v17.8L9,22l10-5.8v-4.5L10.1,8.6z" />
  </Box>
);
