import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface ChannelAddPropsI extends BoxProps {}

export const ChannelAdd = (props: ChannelAddPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M18,7h1V8a1,1,0,0,0,2,0V7h1a1,1,0,0,0,0-2H21V4a1,1,0,0,0-2,0V5H18a1,1,0,0,0,0,2Zm2,9a3,3,0,0,0-1.73.56l-2.45-1.45A3.74,3.74,0,0,0,16,14a4,4,0,0,0-3-3.86V7.82a3,3,0,1,0-2,0v2.32A4,4,0,0,0,8,14a3.74,3.74,0,0,0,.18,1.11L5.73,16.56A3,3,0,0,0,4,16a3,3,0,1,0,3,3,3,3,0,0,0-.12-.8l2.3-1.37a4,4,0,0,0,5.64,0l2.3,1.37A3,3,0,1,0,20,16ZM4,20a1,1,0,1,1,1-1A1,1,0,0,1,4,20ZM12,4a1,1,0,1,1-1,1A1,1,0,0,1,12,4Zm0,12a2,2,0,1,1,2-2A2,2,0,0,1,12,16Zm8,4a1,1,0,1,1,1-1A1,1,0,0,1,20,20Z" />
  </Box>
);
