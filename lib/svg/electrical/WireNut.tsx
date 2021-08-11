import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface WireNutPropsI extends BoxProps {}

export const WireNut = (props: WireNutPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M117.8 41.0998C116.8 41.5998 115.6 42.8998 115 43.9998C114.4 45.0998 112.6 57.2998 111 71.1998C109.3 85.0998 107.3 101.9 106.5 108.5C105.7 115.1 105 120.6 105 120.7C105 120.9 102.9 121 100.3 121C95 121 90 123.5 87.6 127.2C86.7 128.7 85.1 139.4 83.1 157.5C79.5 190.2 79.4 191.8 81.8 193.6C83.2 194.7 96.1 194.9 149 195C223.3 195 219 195.5 219 187.4C219 177.8 212.9 129.5 211.4 127.2C208.9 123.4 204 121 198.8 121C196.1 121 194 120.6 194 120C194 119.5 192 102.3 189.5 81.8998C185.5 48.3998 184.8 44.3998 182.8 42.2998L180.7 39.9998H150.1C131.3 39.9998 118.8 40.4998 117.8 41.0998ZM137.4 59.5998C138.8 60.8998 139 65.1998 139 91.5998V122H134H129V91.1998C129 68.5998 129.3 60.0998 130.2 59.1998C131.9 57.4998 135.6 57.6998 137.4 59.5998ZM168.8 59.1998C169.7 60.0998 170 68.5998 170 91.1998V122H165H160V91.5998C160 65.1998 160.2 60.8998 161.6 59.5998C163.4 57.6998 167.1 57.4998 168.8 59.1998Z" />
    <path d="M124.7 210.9C123.4 225.4 110.7 237.8 94 241C91.1 241.5 80.2 242 69.9 242H51V251.1V260.2L73.8 259.8C95 259.4 97 259.2 104.6 256.7C124.8 250 138.9 234.6 142.1 215.4C143.9 205.2 143.7 205 133.7 205H125.3L124.7 210.9Z" />
    <path d="M156.5 206C156.2 206.5 156.4 210.4 157 214.6C158.5 225.5 162.8 234 170.9 242.1C178.4 249.5 184.1 253 195 256.8C202 259.2 203.9 259.4 225.3 259.8L248 260.2V251.1V242H229.1C218.8 242 207.8 241.5 204.9 241C188.4 237.9 175.8 225.4 174.3 210.6L173.7 205H165.4C160.9 205 156.8 205.4 156.5 206Z" />
  </Box>
);
