import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface DockerPropsI extends BoxProps {}

export const Docker = (props: DockerPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M8.8,8.8h1.8c0.1,0,0.2-0.1,0.2-0.2V7.1c0-0.1-0.1-0.2-0.2-0.2H8.8C8.7,6.9,8.6,7,8.6,7.1v1.6C8.6,8.7,8.7,8.8,8.8,8.8z M11.2,11.1H13c0.1,0,0.2-0.1,0.2-0.2V9.3c0-0.1-0.1-0.2-0.2-0.2h-1.8c-0.1,0-0.2,0.1-0.2,0.2v1.6C11,11,11.1,11.1,11.2,11.1z M11.2,8.8H13c0.1,0,0.2-0.1,0.2-0.2V7.1C13.1,7,13,6.9,13,6.9h-1.8C11.1,6.9,11,7,11,7.1v1.6C11,8.7,11.1,8.8,11.2,8.8z M13.7,11.1h1.8c0.1,0,0.2-0.1,0.2-0.2V9.3c0-0.1-0.1-0.2-0.2-0.2h-1.8c-0.1,0-0.2,0.1-0.2,0.2v1.6C13.5,11,13.6,11.1,13.7,11.1z M11.2,6.5H13c0.1,0,0.2-0.1,0.2-0.2V4.8c0-0.1-0.1-0.2-0.2-0.2h-1.8c-0.1,0-0.2,0.1-0.2,0.2v1.6C11,6.5,11.1,6.5,11.2,6.5z M3.8,11.1h1.8c0.1,0,0.2-0.1,0.2-0.2V9.3c0-0.1-0.1-0.2-0.2-0.2H3.8c-0.1,0-0.2,0.1-0.2,0.2v1.6C3.7,11,3.8,11.1,3.8,11.1z M21.8,10.1c-0.5-0.3-1.1-0.5-1.6-0.4c-0.3,0-0.6,0-0.8,0.1c-0.2-0.9-0.7-1.7-1.4-2.1l-0.3-0.2l-0.2,0.3C17.2,8,17,8.4,16.9,8.9c-0.2,0.8-0.1,1.6,0.3,2.2c-0.5,0.2-1,0.3-1.5,0.4H2.6c-0.3,0-0.6,0.3-0.6,0.6c0,1.2,0.2,2.3,0.6,3.4c0.4,1.1,1.1,2,2,2.6c1.4,0.7,2.9,1,4.4,0.9c0.8,0,1.6-0.1,2.4-0.2c1.1-0.2,2.2-0.6,3.2-1.2c0.8-0.5,1.5-1.1,2.2-1.8c0.9-1.1,1.6-2.3,2.1-3.7h0.2c0.8,0,1.6-0.3,2.2-0.8c0.3-0.2,0.5-0.5,0.6-0.9l0.1-0.2L21.8,10.1z M6.3,11.1H8c0.1,0,0.2-0.1,0.2-0.2V9.3c0-0.1-0.1-0.2-0.2-0.2H6.3c-0.1,0-0.2,0.1-0.2,0.2v1.6C6.1,11,6.2,11.1,6.3,11.1z M6.3,8.8H8c0.1,0,0.2-0.1,0.2-0.2V7.1C8.2,7,8.1,6.9,8,6.9H6.3C6.2,6.9,6.1,7,6.1,7.1v1.6C6.1,8.7,6.2,8.8,6.3,8.8z M8.8,11.1h1.8c0.1,0,0.2-0.1,0.2-0.2V9.3c0-0.1-0.1-0.2-0.2-0.2H8.8c-0.1,0-0.2,0.1-0.2,0.2v1.6C8.6,11,8.7,11.1,8.8,11.1z" />
  </Box>
);
