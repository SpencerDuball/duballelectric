import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface CommentNotesPropsI extends BoxProps {}

export const CommentNotes = (props: CommentNotesPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M11,11h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM7,9a1,1,0,1,0,1,1A1,1,0,0,0,7,9Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,7,13ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Zm5-7H11a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
  </Box>
);
