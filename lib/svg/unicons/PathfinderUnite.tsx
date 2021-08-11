import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface PathfinderUnitePropsI extends BoxProps {}

export const PathfinderUnite = (props: PathfinderUnitePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,7.54H16.46V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V15.46a1,1,0,0,0,1,1H7.54V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8.54A1,1,0,0,0,21,7.54ZM20,20H9.54V15.46a1,1,0,0,0-1-1H4V4H14.46V8.54a1,1,0,0,0,1,1H20Z" />
  </Box>
);
