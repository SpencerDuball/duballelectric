import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface ToolsPropsI extends SystemProps {}

export const Tools = (props: ToolsPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M80.4 36.8C77.4 37.1 77.3 37.4 74.2 48.3C72.4 54.5 71 60.7 71 62.2C71 63.6 72.4 68.2 74 72.3L77 79.8V107.9V136H83.5H90V107.5V79.1L93 71.5C94.7 67.3 96 63 96 61.8C96 58.1 89 37 87.7 36.9C87 36.9 85.8 36.8 85 36.6C84.2 36.5 82.1 36.6 80.4 36.8Z" />
    <path d="M168.801 46.6C166.101 47.4 164.001 48.4 164.001 48.8C164.001 49.2 163.301 57.6 162.501 67.5C159.201 107.8 157.901 135.4 158.901 141.7C160.601 152.4 165.301 159 174.001 162.9C176.501 164 179.901 165 181.501 165C190.801 165.1 190.401 163.8 202.901 223.5C206.301 239.4 209.701 253.9 210.401 255.6C211.301 257.5 213.301 259.4 215.701 260.5C220.701 263 231.301 263 235.801 260.6C241.801 257.5 241.701 256.3 235.001 229.3C226.901 196.8 220.301 174.3 217.901 170.9C216.901 169.4 213.801 166.8 211.001 165.1C203.701 160.6 202.501 158.2 202.801 148.8C203.001 143.2 202.601 140.1 201.401 137.7C197.201 129.5 190.701 125.7 181.601 126.2C177.501 126.4 175.501 126.1 175.501 125.4C175.501 124.7 177.901 121.6 180.901 118.4L186.301 112.6L179.201 105.9C175.201 102.2 172.001 98.9 172.001 98.5C172.001 98.1 175.001 94.7 178.701 90.9L185.401 83.9L178.301 76.7L171.201 69.5L178.001 62.1L184.901 54.8L179.701 49.9C176.801 47.2 174.301 45.1 174.001 45.1C173.701 45.1 171.401 45.8 168.801 46.6ZM190.001 141C193.001 146.7 189.601 153 183.501 153C177.601 153 174.301 147.5 176.601 141.5C178.401 137 187.701 136.7 190.001 141Z" />
    <path d="M190.5 50L195.4 55L188.5 62C184.7 65.8 181.9 69.3 182.3 69.7C182.7 70.1 185.9 73.4 189.5 77L196 83.5L189 91.2L182 98.8L189 105.3C192.8 108.9 196 112.2 196 112.7C196 113.2 194.6 114.9 193 116.5L189.9 119.4L194.4 121.7C199.7 124.4 204.4 128.9 207 133.9L208.9 137.5L208.5 130.5C204.9 80.2 202.1 50.7 200.7 49.3C199.4 48.1 189.7 45 187.1 45C186.2 45 187.5 47 190.5 50Z" />
    <path d="M66.5002 144.5C62.7002 148.2 63.7002 153.2 68.7002 155.1C71.1002 156 71.2002 156.3 70.7002 161.2C70.3002 164.1 68.9002 168.6 67.5002 171.2C66.1002 173.8 63.8002 178.4 62.3002 181.2L59.5002 186.5L59.2002 217.1C58.9002 251.4 59.0002 252.6 65.3002 257.5C74.8002 264.6 92.1002 264.6 101.7 257.4C107.7 252.9 108.2 249.8 107.8 216.9L107.5 187.5L104.8 182C103.3 179 100.8 174.3 99.3002 171.6C97.5002 168.3 96.5002 164.7 96.2002 160.8C95.8002 155.6 96.0002 155 97.7002 155C100.6 155 102 153 102 148.9C102 142.7 100 142 83.2002 142C69.4002 142 68.8002 142.1 66.5002 144.5ZM71.1002 188C72.9002 189 73.0002 190.4 73.0002 219.4C73.0002 251.6 72.8002 252.7 68.3002 251.8C66.6002 251.5 66.5002 249.4 66.2002 220.6C65.9002 186.8 66.2002 185.4 71.1002 188ZM85.1002 188C86.9002 189 87.0002 190.4 87.0002 219.4C87.0002 251.6 86.8002 252.7 82.3002 251.8C80.6002 251.5 80.5002 249.4 80.2002 220.6C79.9002 186.8 80.2002 185.4 85.1002 188ZM99.3002 188.2C100.9 189.4 101 192.2 100.8 219.9C100.5 246.6 100.3 250.4 98.9002 251.3C98.0002 251.9 96.5002 252 95.6002 251.7C94.2002 251.1 94.0002 247.8 94.0002 219.6C94.0002 188.5 94.1002 187.5 97.1002 187.1C97.4002 187 98.4002 187.6 99.3002 188.2Z" />
    <path d="M155.8 165.1C152.2 167.6 149.3 170.5 148 172.9C145.6 177.8 138.9 201.2 131.5 231C125.3 255.9 125.3 257.5 131.4 260.7C136.1 263.2 146.5 263 151.6 260.3C156.4 257.7 157.1 256.3 160 242C163.6 224.7 174.9 173.3 175.6 171.7C175.9 170.7 175.3 170 173.5 169.6C172.1 169.2 168.9 167.1 166.6 165C164.2 162.8 162.1 161 161.9 161.1C161.7 161.1 158.9 163 155.8 165.1Z" />
  </XSvg>
);