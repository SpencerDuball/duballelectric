import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface WireStrippersPropsI extends SystemProps {}

export const WireStrippers = (props: WireStrippersPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M242.5 36.5C242 36.7 236.2 37.6 229.7 38.6L217.8 40.3L203.6 52.4C195.8 59.1 186.9 66.5 184 69C164.1 85.7 143.2 103.7 141.8 105.5C131.4 117.7 133.9 137.3 147.6 152L151.8 156.5L137.6 175.7C129.9 186.2 117.2 203.3 109.6 213.6C92.0001 237.4 91.6001 238.1 91.6001 244.6C91.6001 248.7 92.1001 250.5 94.3001 253.3C102.7 264.3 115.8 267.1 123.4 259.7C125.3 257.9 140.1 235.6 156.5 210C185 165.4 186.4 163.4 191.4 160.5C208 150.8 209.3 126.7 194.2 109.8L189.6 104.7L194.1 100.6C198.2 96.9 198.7 96 198.2 93.2C197.2 86.1 202.8 80.2 209.5 81.4C214.1 82.3 218.6 78 218.6 72.8C218.6 67.5 222.1 64 227.3 64C230.4 64 231.8 63.3 234.1 60.9C235.7 59.2 237 57 237 56C237 53.3 240.6 49.3 243.7 48.7C246.5 48.1 252 43.9 252 42.2C252 41.8 250.7 40.2 249.2 38.7C246.6 36.2 245 35.7 242.5 36.5ZM171.4 121.4C178.5 124.3 181.3 131.3 178.2 138.3C174 147.8 161.4 148.6 156 139.7C152 133.1 154.4 125.1 161.5 121.9C166.3 119.7 167.1 119.6 171.4 121.4Z" />
    <path d="M254.7 50.8001C253.2 52.3001 252 54.7001 252 56.1001C252 59.3001 248.2 63.0001 244.9 63.0001C241.8 63.0001 236 68.7001 236 71.9001C236 76.9001 232.2 80.9001 227.4 81.0001C223.2 81.0001 218 86.4001 218 90.9001C218 97.4001 212.1 103.1 206.8 101.7C205.6 101.3 204 101.5 203.4 102.1C202.4 102.9 203 104.6 206.1 109.2C210.4 115.9 214 126.2 214 131.7C214 133.6 214.4 135 214.9 134.8C215.3 134.6 225.6 122.8 237.7 108.5L259.8 82.5001L262 68.2001L264.3 53.9001L261.4 50.9001C259.9 49.3001 258.3 48.0001 258 48.0001C257.7 48.0001 256.2 49.3001 254.7 50.8001Z" />
    <path d="M98.9999 138.4C84.9999 146.8 65.6999 158.3 56.1999 163.9C43.7999 171.2 38.2999 175 36.8999 177.3C33.0999 183.6 35.1999 194.7 41.3999 201.2C45.7999 205.7 49.6999 207.3 55.5999 206.8C60.1999 206.4 62.3999 205.4 70.6999 199.8C81.7999 192.3 121.3 165.6 130.7 159.2L136.9 155L133.8 150.3C129.5 144 126 133.9 126 128C126 125.2 125.7 123 125.3 123.1C124.8 123.1 113 130 98.9999 138.4Z" />
  </XSvg>
);