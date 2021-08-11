import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface EnvelopeTimesPropsI extends BoxProps {}

export const EnvelopeTimes = (props: EnvelopeTimesPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M21,11a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.41L9.88,14.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L12.7,12.88a1,1,0,0,1-1.4,0L5.41,7H13a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V12A1,1,0,0,0,21,11Zm-.59-5,1.3-1.29a1,1,0,1,0-1.42-1.42L19,4.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L17.59,6l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L19,7.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
  </Box>
);
