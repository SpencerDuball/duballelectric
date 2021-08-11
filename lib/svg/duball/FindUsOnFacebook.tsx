import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface FindUsOnFacebookPropsI extends BoxProps {}

export const FindUsOnFacebook = (props: FindUsOnFacebookPropsI) => (
  <Box
    as="svg"
    viewBox="0 0 197 37"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    {...props}
  >
    <path d="M195.819 18.5183C195.819 8.67125 187.789 0.679688 177.894 0.679688C168 0.679688 159.97 8.67125 159.97 18.5183C159.97 27.4284 166.523 34.8137 175.107 36.1365V23.6623H170.529V18.5183H175.107V14.5868C175.107 10.1226 177.765 7.64245 181.863 7.64245C183.82 7.64245 185.85 8.00988 185.85 8.00988V12.3639H183.598C181.365 12.3639 180.663 13.7601 180.663 15.1564V18.4999H185.647L184.854 23.6439H180.663V36.1181C189.265 34.8138 195.819 27.4284 195.819 18.5183Z" />
    <path d="M5.50084 29.2289H2.49194V7.80786H17.1119V10.4166H5.50084V17.9121H15.5797V20.5209H5.50084V29.2289Z" />
    <path d="M23.7573 9.35106C23.7573 9.88383 23.5912 10.3247 23.2405 10.6371C22.8897 10.9494 22.4467 11.1147 21.9114 11.1147C21.3761 11.1147 20.933 10.9494 20.5823 10.6371C20.2316 10.3247 20.0654 9.88383 20.0654 9.35106C20.0654 8.81829 20.2316 8.37737 20.5823 8.06506C20.933 7.75275 21.3761 7.5874 21.9114 7.5874C22.4467 7.5874 22.8897 7.75275 23.2405 8.06506C23.5727 8.39574 23.7573 8.81829 23.7573 9.35106ZM23.3512 29.2289H20.4715V13.9255H23.3512V29.2289Z" />
    <path d="M41.94 29.2289H39.0603V20.3372C39.0603 19.0144 38.728 17.9856 38.045 17.2324C37.362 16.4792 36.439 16.1117 35.2576 16.1117C33.7809 16.1117 32.5995 16.5894 31.7319 17.5263C30.8458 18.4633 30.4028 19.6758 30.4028 21.1639V29.2473H27.5046V13.9255H30.3105L30.3659 16.2403C30.9566 15.432 31.7503 14.789 32.7287 14.293C33.707 13.7969 34.7962 13.5581 35.9591 13.5581C37.8235 13.5581 39.2818 14.1276 40.3525 15.2666C41.4231 16.4057 41.9584 17.9672 41.9584 19.9514V29.2289H41.94Z" />
    <path d="M61.1008 29.2289H58.295L58.2396 26.9141C57.612 27.7224 56.7998 28.3838 55.803 28.8615C54.8061 29.3391 53.717 29.5963 52.5356 29.5963C51.1142 29.5963 49.8405 29.2473 48.7145 28.5492C47.5885 27.851 46.7024 26.9141 46.0563 25.7016C45.4102 24.4891 45.0964 23.1112 45.0964 21.5864C45.0964 20.0432 45.4102 18.6653 46.0563 17.4712C46.7024 16.2587 47.5885 15.3034 48.7145 14.6236C49.8405 13.9255 51.1142 13.5765 52.5356 13.5765C53.6986 13.5765 54.7877 13.8153 55.7845 14.2929C56.7813 14.7706 57.5935 15.4136 58.2212 16.2036V6.42999L61.1008 6.11768V29.2289V29.2289ZM53.1263 27.0611C54.1231 27.0611 55.0092 26.8222 55.766 26.363C56.5413 25.8853 57.132 25.2423 57.5751 24.434C58.0181 23.6072 58.2212 22.6703 58.2212 21.6048C58.2212 20.5392 57.9996 19.5839 57.5751 18.7756C57.132 17.9489 56.5413 17.3059 55.766 16.8466C54.9907 16.3689 54.1231 16.1485 53.1263 16.1485C52.1295 16.1485 51.2435 16.3873 50.4866 16.8466C49.7113 17.3242 49.1206 17.9672 48.6776 18.7756C48.2346 19.6023 48.0315 20.5392 48.0315 21.6048C48.0315 22.6703 48.253 23.6256 48.6776 24.434C49.1206 25.2607 49.7113 25.9037 50.4866 26.363C51.2619 26.8222 52.148 27.0611 53.1263 27.0611Z" />
    <path d="M86.4274 29.229H83.6216L83.5662 26.9326C82.9755 27.7409 82.2002 28.3839 81.2403 28.8616C80.2804 29.3392 79.2097 29.5964 78.0653 29.5964C76.2008 29.5964 74.7425 29.0269 73.7088 27.8879C72.6751 26.7488 72.1582 25.1873 72.1582 23.2032V13.9256H75.0379V22.8174C75.0379 24.1401 75.3517 25.1689 75.9978 25.9221C76.6439 26.6754 77.5668 27.0428 78.7483 27.0428C80.225 27.0428 81.388 26.5651 82.2371 25.6282C83.0862 24.6912 83.5108 23.4787 83.5108 21.9906V13.9072H86.3905V29.229H86.4274V29.229Z" />
    <path d="M89.5471 27.7041L90.7654 25.5363C91.633 26.0507 92.5191 26.4365 93.4605 26.6753C94.402 26.9325 95.3434 27.0611 96.3033 27.0611C97.4109 27.0611 98.2415 26.8957 98.7584 26.5651C99.2753 26.2344 99.5337 25.7567 99.5337 25.1505C99.5337 24.4891 99.2199 24.0114 98.5923 23.7359C97.9646 23.4603 96.9494 23.148 95.528 22.7989C94.5496 22.5601 93.6267 22.2845 92.7591 21.9355C91.8915 21.6048 91.2085 21.1271 90.6732 20.5392C90.1378 19.9514 89.8794 19.143 89.8794 18.1326C89.8794 17.1589 90.1378 16.3322 90.6547 15.6524C91.1716 14.9727 91.873 14.4583 92.7591 14.0909C93.6451 13.7418 94.6235 13.5581 95.7126 13.5581C96.8571 13.5581 97.9831 13.7418 99.1276 14.0909C100.272 14.4399 101.214 14.8808 102.007 15.4136L100.789 17.5631C100.032 17.1222 99.2384 16.7547 98.3708 16.4792C97.5032 16.2036 96.654 16.075 95.7864 16.075C94.9188 16.075 94.1989 16.222 93.6451 16.5343C93.0913 16.8466 92.8144 17.3242 92.8144 17.9672C92.8144 18.647 93.1467 19.1246 93.8113 19.4002C94.4758 19.6758 95.4911 19.9881 96.8386 20.3188C97.8724 20.5576 98.8138 20.8515 99.6814 21.2006C100.531 21.5497 101.214 22.0089 101.73 22.6152C102.247 23.2031 102.506 24.0114 102.506 25.0402C102.506 26.4916 101.952 27.6122 100.863 28.4022C99.7737 29.1922 98.2785 29.5963 96.3771 29.5963C94.9927 29.5963 93.719 29.4126 92.5191 29.0268C91.3192 28.641 90.3224 28.2001 89.5471 27.7041Z" />
    <path d="M119.876 29.5963C118.27 29.5963 116.867 29.2472 115.667 28.5675C114.467 27.8877 113.507 26.9324 112.843 25.7383C112.16 24.5441 111.828 23.1479 111.828 21.5863C111.828 20.0248 112.16 18.6286 112.843 17.4344C113.526 16.2403 114.467 15.285 115.667 14.6052C116.867 13.9255 118.288 13.5764 119.876 13.5764C121.464 13.5764 122.885 13.9255 124.085 14.6052C125.285 15.285 126.245 16.2403 126.909 17.4344C127.592 18.6286 127.924 20.0248 127.924 21.5863C127.924 23.1479 127.592 24.5441 126.909 25.7383C126.226 26.9324 125.285 27.8877 124.085 28.5675C122.866 29.2472 121.464 29.5963 119.876 29.5963ZM119.876 27.061C120.873 27.061 121.759 26.8222 122.516 26.3629C123.291 25.8853 123.882 25.2423 124.325 24.4339C124.768 23.6072 124.971 22.6703 124.971 21.6047C124.971 20.5392 124.749 19.5839 124.325 18.7755C123.882 17.9488 123.291 17.3058 122.516 16.8465C121.74 16.3689 120.873 16.1484 119.876 16.1484C118.879 16.1484 117.993 16.3872 117.236 16.8465C116.461 17.3242 115.87 17.9672 115.427 18.7755C114.984 19.6022 114.781 20.5392 114.781 21.6047C114.781 22.6703 115.003 23.6256 115.427 24.4339C115.87 25.2606 116.461 25.9036 117.236 26.3629C117.993 26.8222 118.879 27.061 119.876 27.061Z" />
    <path d="M145.646 29.2289H142.766V20.3372C142.766 19.0144 142.434 17.9856 141.751 17.2324C141.068 16.4792 140.145 16.1117 138.945 16.1117C137.468 16.1117 136.287 16.5894 135.419 17.5263C134.533 18.4633 134.09 19.6758 134.09 21.1639V29.2473H131.21V13.9255H133.998L134.053 16.2403C134.644 15.432 135.437 14.789 136.416 14.293C137.394 13.7969 138.483 13.5581 139.646 13.5581C141.511 13.5581 142.969 14.1276 144.04 15.2666C145.11 16.4057 145.646 17.9672 145.646 19.9514V29.2289V29.2289Z" />
  </Box>
);
