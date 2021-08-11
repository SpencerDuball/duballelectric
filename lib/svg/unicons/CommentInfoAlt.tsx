import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface CommentInfoAltPropsI extends BoxProps {}

export const CommentInfoAlt = (props: CommentInfoAltPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,9a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Zm7-7H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM12,6a1,1,0,1,0,1,1A1,1,0,0,0,12,6Z" />
  </Box>
);
