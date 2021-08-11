import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface ListUiAltPropsI extends BoxProps {}

export const ListUiAlt = (props: ListUiAltPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M3.5,6a1,1,0,1,0,1,1A1,1,0,0,0,3.5,6Zm4,2h14a1,1,0,0,0,0-2H7.5a1,1,0,0,0,0,2Zm0,3a1,1,0,1,0,1,1A1,1,0,0,0,7.5,11Zm4,5a1,1,0,1,0,1,1A1,1,0,0,0,11.5,16Zm10-5h-10a1,1,0,0,0,0,2h10a1,1,0,0,0,0-2Zm0,5h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
  </Box>
);
