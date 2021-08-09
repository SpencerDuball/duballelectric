import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ManInBoomPropsI extends SystemProps {}

export const ManInBoom = (props: ManInBoomPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M112 17.3001C103.5 20.5001 95.2002 29.0001 93.0002 36.9001C89.1002 50.9001 95.7002 66.2001 108.4 72.7001C112.6 74.9001 114.9 75.4001 121.5 75.4001C128.3 75.5001 130.4 75.1001 135.2 72.7001C152.6 64.1001 157.5 41.0001 144.9 26.6001C138.4 19.2001 133.2 16.7001 123.6 16.3001C118.6 16.1001 114.2 16.5001 112 17.3001Z" />
    <path d="M135.2 78.5C128.4 80.4 121.8 84.9 118.8 89.7C117.6 91.7 113.4 102.7 109.5 114L102.5 134.5L84.5 136.2C64.6 138 61.9 138.7 59.4 142.5C57.5 145.5 57.3 153 59.2 156C62.1 160.5 65.2 161 92 161C119.3 161 120.5 160.8 125.1 155.2C126.4 153.6 131.1 144.9 135.5 135.7L143.5 119L147 119.6C148.9 119.9 150.9 120.5 151.3 121C151.8 121.4 150.1 125.8 147.6 130.9C145.1 135.9 143 140.4 143 141C143 141.6 150.4 142 164 142C176.8 142 185 141.6 185 141C185 140.5 183.6 131.6 181.9 121.3C178.4 99.2 176.5 94.5 168.5 87.1C159.3 78.8 146.2 75.4 135.2 78.5Z" />
    <path d="M137.1 156.9C134.4 162.2 129.4 166.9 124 169.4C120 171.3 117.3 171.5 98.6999 171.8L77.8999 172.1L78.4999 180.8C78.8999 185.6 79.9999 205.8 80.9999 225.6C82.0999 247.2 83.1999 262.6 83.8999 263.9C84.5999 265 86.2999 266.8 87.6999 267.8C90.0999 269.3 93.9999 269.5 123 269.8L155.5 270.2L159.6 276.8L163.6 283.5L170.8 283.8C174.8 284 178 283.8 178 283.5C178 283.2 170.6 270.9 161.4 256.3C143.7 227.8 141.9 223.7 143.9 216.5C148.1 201.1 165 195.1 177.5 204.5C179.3 205.9 190.2 222.3 204.5 245.4L228.5 284H235.8C241.4 284 242.9 283.7 242.4 282.7C242 282.1 235.2 271 227.2 258.2L212.7 234.9L214.4 203.2C216.7 159.1 216.7 160.5 212.6 156.4L209.2 153H174.1H139L137.1 156.9Z" />
  </XSvg>
);