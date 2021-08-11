import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface TemperaturePlusPropsI extends BoxProps {}

export const TemperaturePlus = (props: TemperaturePlusPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M10.5,15.28V5.5a1,1,0,0,0-2,0v9.78A2,2,0,0,0,7.5,17a2,2,0,0,0,4,0A2,2,0,0,0,10.5,15.28Zm9-12.78H19V2a1,1,0,0,0-2,0v.5h-.5a1,1,0,0,0,0,2H17V5a1,1,0,0,0,2,0V4.5h.5a1,1,0,0,0,0-2ZM14,5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,9.49,23,6,6,0,0,0,14,13ZM12,20.11a4,4,0,0,1-6.42-2.2,4,4,0,0,1,1.1-3.76,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6Z" />
  </Box>
);
