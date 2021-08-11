import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface DribbblePropsI extends BoxProps {}

export const Dribbble = (props: DribbblePropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black"
    {...props}
  >
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a7.94,7.94,0,0,1,5.51,2.22A24.93,24.93,0,0,1,12.68,8.4,29.07,29.07,0,0,0,9.81,4.31,7.94,7.94,0,0,1,12,4ZM7.89,5.15A27.16,27.16,0,0,1,10.7,9a25.11,25.11,0,0,1-6,.74H4.34A8,8,0,0,1,7.89,5.15ZM6,17.31A7.9,7.9,0,0,1,4,12c0-.1,0-.2,0-.29h.68a26.67,26.67,0,0,0,7-1c.32.61.62,1.24.91,1.89a14.3,14.3,0,0,0-4.29,2.41l-.3.24A21,21,0,0,0,6,17.31ZM12,20a7.92,7.92,0,0,1-4.47-1.37,17.92,17.92,0,0,1,1.56-1.58l.32-.27a12.63,12.63,0,0,1,4-2.27,32,32,0,0,1,1.4,5A8.08,8.08,0,0,1,12,20Zm4.63-1.49a34.87,34.87,0,0,0-1.28-4.46l.34,0a.25.25,0,0,1,.12,0h.11l.1,0,.48,0a9.43,9.43,0,0,1,3.09.53A7.94,7.94,0,0,1,16.63,18.51ZM16.5,12c-.21,0-.42,0-.62,0a1.56,1.56,0,0,0-.39,0,6.64,6.64,0,0,0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57,26.57,0,0,0,5.13-2.4A8,8,0,0,1,20,12c0,.17,0,.34,0,.51A11.48,11.48,0,0,0,16.5,12Z" />
  </Box>
);
