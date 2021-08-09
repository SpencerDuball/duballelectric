import React from "react";
import { SystemProps } from "@xstyled/emotion";
import { XSvg } from "utility";

export interface IncandescantBulbPropsI extends SystemProps {}

export const IncandescantBulb = (props: IncandescantBulbPropsI) => (
  <XSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="black"
    {...props}
  >
    <path d="M105.8 47.9C100.9 51 97.9 54.7 96.2 59.9C95.4 62.3 95 76.9 95 108.1V153H103H110.9L111.2 100.7C111.4 72 111.9 47.7 112.4 46.7C113.7 44.1 111.1 44.5 105.8 47.9Z" />
    <path d="M187.6 47.2C188 48.5 188.6 72.8 188.7 101.2L189.1 153H197.1H205.1L204.8 106.7L204.5 60.5L201.7 55.7C197.5 48.6 185.4 41.4 187.6 47.2Z" />
    <path d="M95.4999 172.2C96.7999 188.6 99.9999 196.9 109.1 207.2L114.2 213H150H185.8L190.4 207.9C199.5 197.8 203.6 187.7 204.7 172.7L205.3 164H150.1H94.8999L95.4999 172.2Z" />
    <path d="M120.2 229.7L120.5 235.5H150H179.5L179.8 229.7L180.1 224H150H119.9L120.2 229.7Z" />
    <path d="M122 245.5C122 247.4 129.5 255.7 131.8 256.5C132.8 256.8 134.3 258.4 135.2 260C137.5 264 142.4 266 150 266C157.4 266 162.5 264 164.6 260.3C165.5 258.8 168 256.4 170.2 255C174 252.6 178 247.5 178 245.1C178 244.3 170.2 244 150 244C125.6 244 122 244.2 122 245.5Z" />
    <path d="M130.5 35.9C126.2 38.5 122.3 43.4 121 47.8C120.4 50.1 120 70.4 120 102.2V153H131H142V105V57H150H158V105V153H169H180V101.7V50.5L177.6 45.5C175 39.9 171.9 36.7 167.7 35.1C166.1 34.5 157.9 34 149.2 34C135.7 34 133.1 34.3 130.5 35.9Z" />
  </XSvg>
);
