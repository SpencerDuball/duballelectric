import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface UnlockAltPropsI extends BoxProps {}

export const UnlockAlt = (props: UnlockAltPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4H9V7a3,3,0,0,1,5.12-2.13,3.08,3.08,0,0,1,.78,1.38,1,1,0,1,0,1.94-.5,5.09,5.09,0,0,0-1.31-2.29A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9Zm1,10a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
  </Box>
);
