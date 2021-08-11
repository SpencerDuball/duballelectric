import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface CommentAltSlashPropsI extends BoxProps {}

export const CommentAltSlash = (props: CommentAltSlashPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M10.66,6H17a1,1,0,0,1,1,1v6.34a1,1,0,1,0,2,0V7a3,3,0,0,0-3-3H10.66a1,1,0,0,0,0,2ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l2,2A3,3,0,0,0,4,7V19a1,1,0,0,0,.62.92A.84.84,0,0,0,5,20a1,1,0,0,0,.71-.29L8.41,17h7.18l4.7,4.71a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM8,15a1,1,0,0,0-.71.29L6,16.59V7.41L13.59,15Z" />
  </Box>
);
