import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface GlassMartiniPropsI extends BoxProps {}

export const GlassMartini = (props: GlassMartiniPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,20H13V14.94A9,9,0,0,0,21,6a8.72,8.72,0,0,0-.67-3.39,1,1,0,0,0-.22-.32L20,2.21a.92.92,0,0,0-.21-.13A.94.94,0,0,0,19.51,2l-.1,0H4.59L4.5,2a.94.94,0,0,0-.29.06A2.12,2.12,0,0,0,4,2.2l-.12.09a1,1,0,0,0-.22.32A8.72,8.72,0,0,0,3,6a9,9,0,0,0,8,8.94V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2ZM5,6a6.91,6.91,0,0,1,.29-2H18.71A6.91,6.91,0,0,1,19,6,7,7,0,0,1,5,6Z" />
  </Box>
);
