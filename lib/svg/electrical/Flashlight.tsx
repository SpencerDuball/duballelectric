import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface FlashlightPropsI extends SystemProps {}

export const Flashlight = (props: FlashlightPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M193.7 43.7C192.6 47.3 188.8 67.2 189.2 67.4C189.4 67.5 191.6 68.1 194.2 68.7C197.6 69.4 199 69.4 199.3 68.6C200.3 66 204.3 44 203.9 43.6C203.7 43.4 201.4 42.9 198.8 42.5C194.8 41.9 194.1 42.1 193.7 43.7Z" />
    <path d="M222.5 69L212.5 79L216.3 82.7L220 86.5L230 76.5L240 66.4L236.2 62.7L232.4 59L222.5 69Z" />
    <path d="M166.7 75.3999C164.6 76.1999 162.7 76.9999 162.5 77.1999C162.3 77.2999 154 85.4999 144.1 95.3999C125.4 113.8 124 115.8 124 123.6C124 129.4 128 139.8 133.1 147.4C146 166.7 169.8 179.2 183.7 173.9C187.8 172.4 220.8 139.3 223.1 134.5C230.9 117.8 211.7 87.7999 186.5 77.2999C179.7 74.3999 171.5 73.5999 166.7 75.3999ZM187.7 89.4999C200 96.4999 211.3 110.5 213.9 122.2C215.9 131.1 212.6 134.4 203.6 132.8C195.9 131.4 189.3 127.4 180.9 119C169.3 107.5 163.4 93.5999 167.5 87.3999C169.1 84.8999 169.6 84.7999 175.1 85.2999C179.3 85.6999 182.8 86.7999 187.7 89.4999Z" />
    <path d="M241.7 97.4999C235.7 98.7999 230.6 99.9999 230.4 100.3C229.5 101.2 231.3 109.2 232.6 109.7C233.8 110.1 246 108 254.1 105.9L257.7 105L256.9 100.7C256.5 98.3999 256.1 96.1999 256 95.6999C256 94.6999 253.7 94.8999 241.7 97.4999Z" />
    <path d="M78.3001 174.2C39.4001 213.2 40.5001 211.8 42.9001 222.4C45.4001 233.8 57.0001 247.8 68.5001 253.4C76.6001 257.4 85.5001 258.1 90.2001 255.1C92.0001 254 108.7 237.8 127.4 219.1L161.3 185.3L154.7 182C140.4 175 125.4 160.2 117.9 145.6C116 142 114.3 139 114 139C113.7 139 97.6001 154.9 78.3001 174.2ZM119.2 179.9C122 182.4 122.5 183.5 122.5 187.5C122.5 191.5 122 192.6 119.2 195.1C116.8 197.3 115 198 112 198C109 198 107.2 197.3 104.8 195.1C102 192.6 101.5 191.5 101.5 187.5C101.5 183.5 102 182.4 104.8 179.9C107.2 177.7 109 177 112 177C115 177 116.8 177.7 119.2 179.9Z" />
  </XSvg>
);