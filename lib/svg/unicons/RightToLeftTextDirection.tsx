import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface RightToLeftTextDirectionPropsI extends BoxProps {}

export const RightToLeftTextDirection = (
  props: RightToLeftTextDirectionPropsI
) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M20.5,17H5.91l1.3-1.29a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.91,19H20.5a1,1,0,0,0,0-2Zm-9-7v4a1,1,0,0,0,2,0V4h2V14a1,1,0,0,0,2,0V4h1a1,1,0,0,0,0-2h-7a4,4,0,0,0,0,8Zm0-6V8a2,2,0,0,1,0-4Z" />
  </Box>
);
