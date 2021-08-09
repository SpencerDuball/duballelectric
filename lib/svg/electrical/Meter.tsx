import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface MeterPropsI extends SystemProps {}

export const Meter = (props: MeterPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M144.5 36.7001C126.8 38.0001 113.5 41.7001 98.8 49.2001C69.9 63.9001 48.5 90.6001 40.4 121.7C36.9 134.8 36 156.3 38.4 169.5C41.1 185.3 46.7 199.5 55.5 213C61.3 222 78.1 239.1 86.5 244.5C126.3 270.6 175.2 270.5 214.5 244.5C222.4 239.2 235.9 226.3 241.9 218.1C252.7 203.5 260.5 184.6 263 167.1C264.9 154.5 263.8 133.9 260.6 121.7C250.9 84.3001 221.3 53.2001 184.5 41.7001C172.9 38.1001 155.3 35.9001 144.5 36.7001ZM171.5 49.4001C208.8 57.5001 239 85.3001 249.4 121.3C265.4 176.6 234.1 233.4 178.7 249.4C126.1 264.7 70.1 235.1 52.7 182.8C48.7 170.9 47.7 163.7 47.7 149C47.8 133.1 50.4 121.4 56.8 107.7C62.5 95.6001 67 89.0001 76.3 79.3001C89 66.0001 102.5 57.5001 119.5 52.0001C134.8 47.0001 155.6 45.9001 171.5 49.4001Z" />
    <path d="M136.5 55.6001C135.4 55.9001 131.4 56.8001 127.5 57.7001C92.1 65.9001 64.5 94.9001 56.8 132C54.3 144.1 54.7 162.5 57.9 174.3C66.8 207.9 93.5 234.5 127 242.9C170.7 254 216 233.1 236.1 192.5C242.2 180.2 244.9 169.7 245.7 155.9C248.2 110.8 220.2 71.4001 176.5 58.4001C168.9 56.2001 165.2 55.7001 153 55.4001C145 55.3001 137.6 55.3001 136.5 55.6001ZM167.8 69.6001C185.8 73.3001 208.9 86.9001 203.2 90.4001C202.8 90.6001 197.3 89.1001 191 87.0001C163.6 77.7001 137.3 77.6001 111.5 86.6001C99.2 90.9001 97.6 91.1001 97.2 88.5001C96.6 84.2001 116.9 73.3001 131.4 70.0001C141.7 67.7001 157.6 67.5001 167.8 69.6001ZM111.5 112.3C117.8 116.5 120.4 121.1 120.8 129C121.1 134.3 120.8 136.5 119.1 139.7C115.6 146.7 107.2 152 99.9 152C87.4 152 76.8 139.5 78.6 127.2C79.5 121.2 84.5 114.1 90 111.2C96.3 107.9 105.7 108.4 111.5 112.3ZM159.5 110.9C164.4 113.1 169.4 118.6 171 123.5C174 132.5 169.6 143.8 161.2 148.7C147.6 156.7 130.5 147.6 129.2 131.6C127.9 115.8 144.9 104.2 159.5 110.9ZM210.8 111.1C215.8 113.6 220.5 119.5 222.1 125.4C223.8 131.7 221.8 138.8 216.9 144.4C206.8 155.9 188.9 153.5 181.8 139.7C178.9 133.8 179.5 123.7 183.3 118.4C185.9 114.6 190.3 111.2 194.5 109.8C198.9 108.4 206.4 109 210.8 111.1ZM201.4 168.6C202.8 169.1 203 171.9 203 189.4C203 203.8 202.7 209.9 201.8 210.8C200.1 212.5 100.9 212.5 99.2 210.8C98.3 209.9 98 203.9 98 190C98 176.1 98.3 170.1 99.2 169.2C100.1 168.3 112.8 168 150.1 168C177.5 168 200.5 168.3 201.4 168.6Z" />
    <path d="M100.5 124.2C91.9 127.4 91 128.1 91 132.2C91 137.3 97.5 140.9 101.8 138.2C102.9 137.5 109.3 121.9 108.7 121.4C108.6 121.4 104.9 122.6 100.5 124.2Z" />
    <path d="M142 121.9C142 123.9 147.3 137.6 148.3 138.2C150.3 139.5 154.4 139.1 156.8 137.4C159.7 135.4 159.9 128.6 157.1 127.1C153.5 125.2 142 121.2 142 121.9Z" />
    <path d="M194.5 123.5C191.8 126.1 191.3 129.7 193.3 132.2C194.4 133.6 208.9 139.5 209.6 138.8C209.7 138.6 208.6 135 207.2 130.8C205.3 125.2 203.9 122.8 202.2 122.1C198.7 120.5 197.2 120.8 194.5 123.5Z" />
    <path d="M151.7 174.7C151.3 175 151 178 151 181.2V187H154.9C158.6 187 158.9 186.8 158.7 184.2C158.5 181.9 158.9 181.4 161.3 181.2C163.7 180.9 164 181.2 164 183.9C164 186.8 164.3 187 167.5 187H171V180.5V174H161.7C156.5 174 152 174.3 151.7 174.7Z" />
    <path d="M174.8 180.5L174.5 187H178.3C181.7 187 182 186.8 182 184C182 181.5 182.4 181 184.5 181C186.6 181 187 181.5 187 184C187 186.8 187.3 187 190.5 187H194V180.5V174H184.6H175.2L174.8 180.5Z" />
    <path d="M164 195.7C164 198.6 163.7 199 161.5 199C159.1 199 158.7 198.4 158.7 194.7C158.7 193.4 157.9 193 154.8 193H150.9L151.2 199.2L151.5 205.5L161.3 205.8L171 206.1V199.6V193.2L167.5 192.8C164.1 192.4 164 192.5 164 195.7Z" />
    <path d="M175 199.5V206H184.5H194V199.5V193H190.5C187.3 193 187 193.2 187 196C187 198.5 186.6 199 184.5 199C182.4 199 182 198.5 182 196C182 193.2 181.7 193 178.5 193H175V199.5Z" />
  </XSvg>
);
