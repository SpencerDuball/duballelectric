import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface HeroTransitionArchPropsI extends BoxProps {}

export const HeroTransitionArch = (props: HeroTransitionArchPropsI) => (
  <Box
    as="svg"
    viewBox="0 0 1440 25"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1440 0L0 0C0 0 205.5 25 720 25C1234.5 25 1440 0 1440 0Z" />
  </Box>
);
