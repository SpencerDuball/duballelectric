import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface TumblrSquarePropsI extends BoxProps {}

export const TumblrSquare = (props: TumblrSquarePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M2,2V22H22V2ZM13.57,17.85a3.4,3.4,0,0,1-3.75-3.33V10.44H8.56V8.83A3.83,3.83,0,0,0,11,5.47a.09.09,0,0,1,.09-.09h1.82V8.55h2.5v1.89H12.92v3.89a1.11,1.11,0,0,0,1.2,1.23,3,3,0,0,0,1-.22l.6,1.78A3.34,3.34,0,0,1,13.57,17.85Z" />
  </Box>
);
