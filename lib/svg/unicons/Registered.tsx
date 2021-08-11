import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface RegisteredPropsI extends BoxProps {}

export const Registered = (props: RegisteredPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm.5-13h-3a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V14h2a1,1,0,0,1,1,1v1a1,1,0,0,0,2,0V15a3,3,0,0,0-.78-2,3,3,0,0,0,.78-2V10A3,3,0,0,0,12.5,7Zm1,4a1,1,0,0,1-1,1h-2V9h2a1,1,0,0,1,1,1Z" />
  </Box>
);
