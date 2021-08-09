import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface EnergyPlugPropsI extends SystemProps {}

export const EnergyPlug = (props: EnergyPlugPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M157.2 54.2001C146.6 64.9001 138.7 72.1001 138.2 71.5001C134.7 66.5001 127.5 64.7001 122.2 67.4001C120.7 68.2001 110.3 78.2001 99 89.7001C80.8 108.1 78 111.4 74.8 118C69.9 128 68 136 68 146.3C68 157.5 69.4 163.7 74.1 173.9C80.5 187.6 96.1 201.6 110.6 206.4C122.5 210.3 138.8 210.2 150.5 206.1C161.7 202.2 166.9 198.1 189.3 176L211 154.4V149.9C211 145.8 209.2 141.6 206.6 139.8C205.9 139.3 212.9 131.6 223.8 120.8C233.8 110.7 242 101.8 242 100.9C242 99.0001 232.2 89.5001 231.2 90.4001C230.8 90.8001 222.3 99.2001 212.3 109.2L194 127.4L172.5 106L151.1 84.5001L169.5 65.9001C179.7 55.7001 188 46.9001 188 46.4001C188 44.9001 178.6 36.0001 177 36.0001C176.2 36.0001 167.3 44.2001 157.2 54.2001ZM170 125.9C170 126.9 169.4 128 168.7 128.3C168 128.6 162.8 131.8 157.2 135.5L147 142.2L151.2 147.1C158.6 155.7 159.4 157 158.4 157.9C157.9 158.4 145.1 159.5 130 160.4C114.9 161.3 100.1 162.3 97.3 162.6C92.6 163.1 92 162.9 92 161.3C92 159.9 95.8 157.9 108 152.6C116.8 148.7 124 145.4 124 145.1C124 144.8 121.9 141.8 119.5 138.6C117 135.3 115 132.1 115 131.4C115 129.9 116.5 129.7 145 126.6C172.1 123.6 170 123.7 170 125.9Z" />
    <path d="M188.3 76.2001L173 91.4001L179.2 97.7001L185.5 104.1L200.7 88.7001C216.8 72.6001 217.5 71.4001 214.9 65.7001C214.3 64.3001 212.7 62.7001 211.3 62.1001C205.6 59.5001 204.4 60.3001 188.3 76.2001Z" />
    <path d="M67.6999 200.7C59.3999 216.8 55.9999 235.1 57.8999 253C58.4999 258.7 59.1999 263.5 59.3999 263.7C59.4999 263.9 63.8999 263.2 68.9999 262.3L78.3999 260.5L78.4999 244.5C78.5999 227.5 79.2999 223.9 84.6999 211.7C86.0999 208.6 87.0999 205.9 86.8999 205.7C86.5999 205.6 83.2999 202.4 79.3999 198.7L72.2999 191.8L67.6999 200.7Z" />
  </XSvg>
);