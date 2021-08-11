import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface BeardHatPropsI extends BoxProps {}

export const BeardHat = (props: BeardHatPropsI) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M141.3 35.5C139.6 36.2 137.2 38.2 135.9 39.9C134 42.5 131.7 43.6 122.5 46.5C116.5 48.4 106.4 51.3 100.3 52.9C87 56.4 81.3 59.3 78.6 63.9C76.6 67.4 76.3 70 72.1 113C70.3 131 69.8 134.3 67.2 140C60.3 155.4 59.7 162 65.3 162C66.6 162 73.8 158.9 81.3 155.1C96.6 147.4 115.3 140.9 128.9 138.5C140.4 136.5 159.9 136.5 170.9 138.5C186.8 141.3 207 148.7 224.2 158C229.3 160.7 232.9 162 234.7 161.8C237.4 161.5 237.5 161.3 237.5 156C237.4 151.8 236.4 148.2 233.3 141L229.2 131.5L226.5 102C223.4 68.9 223 66.3 219.4 62C215.8 57.8 213.6 56.8 198 52.6C170.2 44.9 165.4 43.2 164.2 40.5C161.7 35.1 148.7 32.2 141.3 35.5ZM161.9 59C161.1 60 158.3 63.6 155.7 66.9C150.4 73.6 150.1 73 159.3 74.5C161.3 74.8 163 75.4 163 75.8C163 76.2 157.6 81.9 151 88.5C144.4 95.1 139 100 139 99.5C139 98.9 140.1 95 141.4 90.8C142.8 86.5 143.5 82.8 143.2 82.6C142.8 82.4 141 81.9 139.3 81.5C137.5 81.2 136 80.5 136 80.1C136 79.3 143.8 59.2 144.6 57.9C144.9 57.4 149.2 57 154.2 57C163 57 163.2 57.1 161.9 59ZM181 113.3C193.5 116.6 203.2 119.8 210.4 123.1C212.6 124.1 214.3 126.6 217.6 133.9C220.1 139.1 221.8 143.5 221.6 143.7C221.4 143.9 216.6 141.8 211 139C190.2 128.6 171.6 124 149.9 124C129.1 124 111.1 128.4 88.8 138.8C82.8 141.6 78 143.3 78.1 142.7C78.1 142 80 137.7 82.3 133C87.2 123.1 88.1 122.5 106.7 116.4C124.2 110.7 135.9 109 153 109.4C165.7 109.7 169.2 110.2 181 113.3Z" />
    <path d="M116.1 157.4C112.8 160.9 111.7 166 113.2 170.5C117.2 182.4 130 178.8 130 165.8C130 156.7 121.6 151.5 116.1 157.4Z" />
    <path d="M172.5 157.6C169.4 160.9 168.5 165.8 170 170.4C171.2 174 175.2 178 177.6 178C185.4 178 189.7 166.3 184.7 158.9C181.6 154.2 176.2 153.6 172.5 157.6Z" />
    <path d="M76.1 168.7L71.8 171.3L72.5 179.4C74.6 203.3 86 229 101.5 244.6C110 253.2 115.8 257.2 125.1 261.1C139.5 267 154.8 267.5 169.9 262.4C180 259.1 188.2 253.9 197.2 245.3C214.1 228.9 226.9 200.6 228.2 176.5L228.4 171.5L223.5 168.8C220.7 167.3 218.2 166 217.8 166C217.4 166 216.9 168.6 216.5 171.7C213 203.1 204.1 221 191.8 221C188.3 221 187.6 220.5 184.7 216.3C179.5 208.7 173.9 203 170.9 202.2C169.3 201.8 158.8 201.7 147.6 202C124.2 202.6 124.3 202.5 117.8 212.1C112.5 220 111.3 221 108 221C99.2 221 92.5 212.8 87.6 195.7C85.6 188.9 83 172.5 83 167C83 165.4 80.9 166 76.1 168.7ZM135.7 213.1C135.6 214.4 136.6 216 138.3 217.4C140.7 219.1 142.5 219.5 149.3 219.5C158.6 219.5 163.3 217.8 163.8 214.2C164.2 211.5 164.6 211.5 168.8 214C174.9 217.7 172.2 225 163.3 228.8C156 231.9 149.2 232.4 141.9 230.6C131.4 227.9 125.4 221.8 127.8 216.5C128.7 214.5 133.2 211.5 135.7 211C135.9 211 135.9 211.9 135.7 213.1Z" />
  </Box>
);
