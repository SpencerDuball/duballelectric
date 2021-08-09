import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface CoilplugPropsI extends SystemProps {}

export const Coilplug = (props: CoilplugPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M181.7 39.7C181.3 40 181 48.8 181 59.2V78H185.5H190V59.7C190 46.8 189.6 41 188.8 40.2C187.5 38.9 182.8 38.6 181.7 39.7Z" />
    <path d="M219.2 40.2C218.4 41 218 46.8 218 59.7V78H222.5H227V59.1C227 42.8 226.8 40.1 225.4 39.6C222.9 38.7 220.5 38.9 219.2 40.2Z" />
    <path d="M160 87.9C159.5 89 159 91.1 159 92.5C159 93.9 159.5 96 160 97.1C161 98.9 162.6 99 203 99C226 99 245.5 98.7 246.4 98.4C248.4 97.6 249.4 92.2 248.1 88.7L247 86H204.1C162.6 86 161 86.1 160 87.9Z" />
    <path d="M113.5 105.5C99.8 108.5 87.6 114.9 77.1 124.6C44 155.3 42.7 206.2 74.2 237.9C85.3 249.1 97.4 255.9 112.6 259.7C122.6 262.1 140.2 261.8 150.4 259.1C180.5 251.1 204.8 223.6 208.5 193.5C209 190.2 209.9 187.1 210.7 186.5C212.3 185.3 215 175.9 215 171.5V168.5H203.9H192.8L193.5 174C193.8 177 195.2 181.7 196.4 184.3C198.6 188.9 198.7 189.5 197.5 195.9C194.7 210.4 187.8 222.3 176.1 233.2C163.4 244.9 147.9 251 130.4 251C98.5 251 71.7 230 63.8 198.7C61 187.5 61.6 171.6 65.3 161.2C74.3 135.5 97 117.2 123.3 114.5L130 113.8V108.9V104L124.8 104.1C121.9 104.1 116.8 104.8 113.5 105.5Z" />
    <path d="M172 110.6C172 117 172.6 118.4 179.2 126.5L184 132.5V143.2C184 153.1 184.2 154 186.5 156.9C189.9 160.8 194.9 162.4 204 162.4C213.2 162.3 218.2 160.8 221.5 156.9C223.8 154 224 153.1 224 143.1V132.3L229.1 125.9C235.2 118.3 236 116.4 236 109.9V105H204H172V110.6Z" />
  </XSvg>
);
