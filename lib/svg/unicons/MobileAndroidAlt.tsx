import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface MobileAndroidAltPropsI extends BoxProps {}

export const MobileAndroidAlt = (props: MobileAndroidAltPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V18H17Zm0-3H7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z" />
  </Box>
);
