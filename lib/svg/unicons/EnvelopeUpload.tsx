import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface EnvelopeUploadPropsI extends BoxProps {}

export const EnvelopeUpload = (props: EnvelopeUploadPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0l1.64-1.64a1,1,0,1,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H11.5a1,1,0,0,0,0-2h-7a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Zm1.71-8.71-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42l1.29-1.3V11a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,5.29Z" />
  </Box>
);
