import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface PliersPropsI extends SystemProps {}

export const Pliers = (props: PliersPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M218.1 41.5C207.7 44.3999 195.5 51.5999 186.4 60.2L181.3 65L182.6 72.2999C183.3 76.2 183.9 80 183.9 80.5999C184 81.2 182.2 82.5 179.9 83.5C177.7 84.5 173.9 87.5999 171.4 90.2999C161.4 101.4 162 117.6 172.7 127.7L176 130.9L172.5 153.7C168.8 178.1 165.7 191.2 161.2 201.9C155.1 216.5 145.6 227 133.4 232.8C129.6 234.7 124.9 236.9 123 237.8C115.5 241.5 114.1 250.3 120.1 256.3C122.8 259 123.6 259.2 128.4 258.8C134.2 258.3 145.8 253.3 153.7 247.9C161.1 242.8 170.1 233.2 175.2 225C184.8 209.5 190.1 191.6 195.2 157.5L198.5 134.9L202.5 133.1C212.3 128.7 218 120.7 218.8 110C219.2 104.3 218.9 102.4 216.8 97.7999C215.4 94.7999 212.9 90.7999 211.2 88.8999L208.1 85.3999L228.1 65.3999C239 54.5 248 45.2 248 44.8999C248 44.5 246.1 43.3999 243.8 42.5C237.8 40.0999 224.9 39.5999 218.1 41.5ZM196.1 99C201.4 101.9 202.2 111.1 197.3 115C191.7 119.4 182.7 116.3 181.4 109.6C180.8 105.9 182.8 100.8 185.7 99.0999C188 97.7999 193.6 97.7 196.1 99Z" />
    <path d="M237.6 67.9L220.8 84.7L223.3 88.6C227.1 94.4 229.3 103.1 228.8 110.8L228.5 117.5L231.8 117.8C234.7 118.1 235.8 117.5 239.6 113.3C245.8 106.6 252.7 96.2 255.5 89.2C258.6 81.7 260.4 71 259.6 65.7C258.8 60.6 256.1 52.2 255.1 51.6C254.7 51.3 246.8 58.7 237.6 67.9Z" />
    <path d="M134.7 105.1C105.8 109.7 89.4 114.8 75.3 123.6C61.1 132.4 52 142.6 44.8 157.6C38.4 170.8 38.6 176.9 45.3 181C49.1 183.4 53.1 183.5 56.9 181.6C59.6 180.1 60.9 178.1 65.4 167.8C73.6 148.9 92 136.8 122.2 130.6C126.2 129.8 135.8 128.2 143.4 127C151.1 125.9 157.5 124.9 157.6 124.7C157.7 124.6 156.9 121.8 155.8 118.5C154.4 114.4 153.9 110.9 154.2 107.2C154.5 103.8 154.3 102 153.6 102.1C153 102.2 144.5 103.5 134.7 105.1Z" />
  </XSvg>
);
