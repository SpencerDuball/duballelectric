import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface ArrowBreakPropsI extends BoxProps {}

export const ArrowBreak = (props: ArrowBreakPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M7,11H17a1,1,0,0,0,0-2H13V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V9H7a1,1,0,0,0,0,2Zm10,2H7a1,1,0,0,0,0,2h4v3.59l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42l-.79.8V15h4a1,1,0,0,0,0-2Z" />
  </Box>
);
