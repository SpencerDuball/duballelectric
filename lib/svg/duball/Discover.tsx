import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { UseColorPalettePropsI, useColorPalette, filterProps } from "utility";

// default colors
// color1 = #251F20
// color2 = #FF9800
// color3 = #FF6100

const randomHash = () => (Math.random() + 1).toString(36).substring(7);

export interface DiscoverPropsI extends BoxProps, UseColorPalettePropsI {}

export const Discover = (props: DiscoverPropsI) => {
  const [color1, color2, color3] = useColorPalette(3, props);

  // generate random IDs for filters, clipPaths, etc.
  // This is because if they share the same ID, multiple
  // of the same icon cannot be styled differently
  const clip0 = randomHash();
  const paint0_linear = randomHash();

  return (
    <Box
      as="svg"
      viewBox="0 0 90 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...filterProps({ props, filterOut: ["colorPalette"] })}
    >
      <g clip-path={`url(#${clip0})`}>
        <path
          d="M5.12098 0.537354H1.15186V14.3962H5.10445C6.90088 14.5024 8.67164 13.9298 10.0659 12.792C10.8435 12.1416 11.4688 11.3282 11.8975 10.4094C12.3262 9.49065 12.5477 8.48891 12.5466 7.47506C12.5631 3.42324 9.50357 0.537354 5.12098 0.537354ZM8.27975 10.948C7.42804 11.6923 6.32826 12.0478 4.5835 12.0478H3.84756V2.88575H4.57523C6.31999 2.88575 7.37843 3.19998 8.27148 4.01034C8.74735 4.44916 9.12629 4.98256 9.38403 5.57635C9.64176 6.17014 9.77261 6.81122 9.76817 7.45852C9.77287 8.11118 9.64314 8.75782 9.38707 9.35816C9.131 9.95851 8.75406 10.4997 8.27975 10.948Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M16.5074 0.537354H13.8035V14.3962H16.5074V0.537354Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M23.1143 5.85436C21.4605 5.25899 21.014 4.86207 21.014 4.10959C21.014 3.35711 21.8657 2.59636 23.0316 2.59636C23.4551 2.60491 23.8711 2.70989 24.248 2.90333C24.6248 3.09676 24.9526 3.37356 25.2064 3.71268L26.6204 1.86042C25.5037 0.857017 24.0533 0.305716 22.552 0.314112C22.0076 0.279483 21.4617 0.354716 20.9469 0.535335C20.4321 0.715954 19.9589 0.99827 19.5554 1.36549C19.1519 1.73271 18.8264 2.17732 18.5983 2.67289C18.3701 3.16846 18.244 3.70485 18.2273 4.25017C18.2273 6.16031 19.1039 7.13605 21.6424 8.04565C22.2893 8.25676 22.9128 8.53385 23.503 8.87255C23.7541 9.01755 23.9628 9.22606 24.1079 9.47715C24.253 9.72823 24.3296 10.0131 24.3299 10.3031C24.3282 10.5709 24.2718 10.8356 24.1642 11.0809C24.0567 11.3261 23.9002 11.5469 23.7043 11.7296C23.5085 11.9123 23.2774 12.0531 23.0252 12.1433C22.7731 12.2336 22.5051 12.2715 22.2378 12.2546C21.6203 12.2649 21.013 12.0962 20.4892 11.769C19.9654 11.4418 19.5474 10.97 19.2858 10.4106L17.541 12.0644C18.0309 12.8934 18.7344 13.5755 19.5781 14.0395C20.4218 14.5036 21.3746 14.7324 22.337 14.7022C25.1485 14.7022 27.1165 12.8334 27.1165 10.1542C27.1 7.97949 26.1739 6.97894 23.1143 5.85436Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M27.9517 7.47499C27.9437 8.43436 28.1282 9.38558 28.4942 10.2724C28.8602 11.1593 29.4003 11.9637 30.0826 12.6383C30.7648 13.3128 31.5754 13.8437 32.4663 14.1996C33.3573 14.5555 34.3105 14.7292 35.2697 14.7104C36.4492 14.7058 37.6109 14.4224 38.66 13.8835V10.7164C38.2525 11.1953 37.7454 11.5794 37.1741 11.8422C36.6029 12.105 35.9812 12.24 35.3524 12.2379C34.7259 12.2562 34.1024 12.1439 33.5215 11.9084C32.9406 11.6729 32.4151 11.3193 31.9781 10.8699C31.5411 10.4205 31.2024 9.88515 30.9832 9.29789C30.7641 8.71063 30.6695 8.08424 30.7052 7.45845C30.6842 6.84398 30.7865 6.23152 31.0059 5.65719C31.2254 5.08285 31.5576 4.55827 31.983 4.11437C32.4084 3.67047 32.9184 3.31623 33.4829 3.07255C34.0474 2.82886 34.6549 2.70066 35.2697 2.6955C35.9114 2.70039 36.5447 2.8415 37.1277 3.1095C37.7108 3.3775 38.2302 3.76626 38.6518 4.25007V1.07477C37.6352 0.528298 36.4983 0.244082 35.3442 0.247867C34.3833 0.233658 33.4292 0.409682 32.5367 0.765803C31.6441 1.12192 30.8309 1.6511 30.1438 2.32286C29.4566 2.99462 28.9092 3.79568 28.533 4.67992C28.1568 5.56415 27.9592 6.51408 27.9517 7.47499V7.47499Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M60.0768 9.84L56.3805 0.537354H53.4368L59.316 14.7518H60.7631L66.7499 0.537354H63.8227L60.0768 9.84Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M67.9739 14.3962H75.6393V12.0478H70.6778V8.31023H75.4573V5.96183H70.6778V2.88575H75.6393V0.537354H67.9739V14.3962Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M86.3394 4.63052C86.3394 2.03405 84.5533 0.537354 81.4358 0.537354H77.4419V14.3962H80.1459V8.83118H80.4932L84.239 14.3962H87.5466L83.1806 8.5583C84.1072 8.42663 84.9491 7.94758 85.5357 7.21823C86.1222 6.48889 86.4095 5.56382 86.3394 4.63052V4.63052ZM80.9149 6.92104H80.088V2.72037H80.9149C82.5687 2.72037 83.5196 3.43151 83.5196 4.77936C83.5196 6.12721 82.6431 6.92104 80.9149 6.92104Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M88.4892 1.26517C88.4892 1.02537 88.3238 0.893066 88.0261 0.893066H87.6375V2.10861H87.9269V1.63728L88.2742 2.10861H88.6297L88.1915 1.6042C88.2756 1.59784 88.3538 1.55878 88.4095 1.49541C88.4651 1.43204 88.4937 1.34939 88.4892 1.26517V1.26517ZM87.9765 1.43055H87.9269V1.11633H87.9847C88.1253 1.11633 88.1997 1.16594 88.1997 1.27344C88.1997 1.38094 88.1253 1.43055 87.9765 1.43055V1.43055Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M88.0923 0.429816C87.8806 0.426534 87.6728 0.486295 87.4952 0.601493C87.3176 0.716691 87.1783 0.882117 87.0951 1.07672C87.0118 1.27132 86.9883 1.4863 87.0276 1.6943C87.0668 1.9023 87.1671 2.09391 87.3156 2.24475C87.4641 2.39559 87.6541 2.49884 87.8615 2.54135C88.0688 2.58387 88.2842 2.56374 88.48 2.48351C88.6759 2.40328 88.8435 2.26659 88.9615 2.09083C89.0794 1.91507 89.1424 1.70819 89.1424 1.49652C89.1425 1.21645 89.0324 0.94761 88.8359 0.748033C88.6394 0.548456 88.3723 0.434158 88.0923 0.429816V0.429816ZM88.0923 2.37304C87.9794 2.37324 87.8676 2.35032 87.7639 2.3057C87.6602 2.26108 87.5668 2.19569 87.4893 2.11357C87.4118 2.03145 87.352 1.93434 87.3135 1.82822C87.275 1.7221 87.2586 1.60921 87.2654 1.49652C87.2654 1.27721 87.3525 1.06689 87.5076 0.911811C87.6626 0.756737 87.873 0.669617 88.0923 0.669617C88.3116 0.669617 88.5219 0.756737 88.677 0.911811C88.8321 1.06689 88.9192 1.27721 88.9192 1.49652C88.926 1.60991 88.9094 1.72349 88.8704 1.83018C88.8314 1.93686 88.7708 2.03437 88.6924 2.11661C88.6141 2.19885 88.5196 2.26406 88.4149 2.30818C88.3102 2.3523 88.1976 2.37438 88.084 2.37304H88.0923Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M54.2058 7.45036C54.2074 8.90229 53.7786 10.3221 52.9735 11.5304C52.1683 12.7386 51.0231 13.6811 49.6824 14.2386C48.3418 14.7961 46.866 14.9437 45.4415 14.6626C44.0171 14.3816 42.7079 13.6845 41.6795 12.6596C40.6511 11.6346 39.9496 10.3278 39.6637 8.90431C39.3779 7.4808 39.5205 6.00449 40.0734 4.66198C40.6264 3.31948 41.565 2.17105 42.7705 1.36185C43.9761 0.552652 45.3944 0.119012 46.8464 0.115741C47.8113 0.113567 48.7673 0.301618 49.6595 0.669143C50.5518 1.03667 51.3628 1.57646 52.0463 2.25765C52.7298 2.93884 53.2724 3.74807 53.6429 4.63907C54.0134 5.53008 54.2047 6.48538 54.2058 7.45036V7.45036Z"
          fill={`url(#${paint0_linear})`}
        />
        <path
          d="M0.539955 25.7496C0.52754 25.1815 0.630276 24.6168 0.841971 24.0895C1.05367 23.5622 1.36994 23.0833 1.77172 22.6815C2.1735 22.2797 2.65248 21.9634 3.17977 21.7517C3.70707 21.54 4.27177 21.4373 4.83984 21.4497C5.5951 21.3998 6.34918 21.5633 7.01594 21.9215C7.6827 22.2797 8.23526 22.8183 8.61052 23.4756L7.48593 24.1702C7.25661 23.6728 6.87949 23.2583 6.40596 22.983C5.93243 22.7078 5.38554 22.5853 4.83984 22.6322C4.43153 22.6264 4.02629 22.7035 3.64864 22.8588C3.271 23.0142 2.9288 23.2445 2.64277 23.536C2.35674 23.8274 2.13283 24.1739 1.98458 24.5544C1.83633 24.9349 1.76684 25.3415 1.78031 25.7496C1.75288 26.1449 1.80761 26.5415 1.94105 26.9146C2.07448 27.2876 2.28374 27.629 2.55563 27.9172C2.82752 28.2054 3.15615 28.4342 3.52081 28.5891C3.88548 28.7441 4.27828 28.8218 4.67446 28.8174C5.33546 28.8797 5.99522 28.6865 6.51813 28.2774C7.04104 27.8683 7.38737 27.2744 7.48593 26.6178H4.59177V25.4436H8.6684V29.8841H7.46112V28.5859L7.51074 28.2716C7.27137 28.8282 6.86106 29.294 6.33924 29.6018C5.81741 29.9095 5.21116 30.0432 4.60831 29.9833C4.05781 29.9909 3.51163 29.8853 3.00364 29.6731C2.49564 29.4608 2.03668 29.1465 1.65521 28.7495C1.27374 28.3525 0.977911 27.8814 0.786065 27.3654C0.594218 26.8493 0.51045 26.2994 0.539955 25.7496V25.7496Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M10.1404 20.9041H11.3807V29.8842H10.1404V20.9041Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M12.563 26.7997C12.563 26.1668 12.7507 25.5481 13.1023 25.0218C13.454 24.4956 13.9538 24.0854 14.5385 23.8432C15.1233 23.601 15.7667 23.5376 16.3875 23.6611C17.0082 23.7846 17.5784 24.0894 18.026 24.5369C18.4735 24.9844 18.7783 25.5547 18.9018 26.1754C19.0252 26.7962 18.9619 27.4396 18.7197 28.0243C18.4775 28.6091 18.0673 29.1089 17.541 29.4605C17.0148 29.8121 16.3961 29.9998 15.7631 29.9998C15.3423 30.002 14.9252 29.9207 14.5359 29.7607C14.1467 29.6007 13.793 29.365 13.4954 29.0674C13.1978 28.7698 12.9622 28.4162 12.8022 28.0269C12.6421 27.6377 12.5608 27.2206 12.563 26.7997V26.7997ZM17.7477 26.7997C17.7331 26.4127 17.6051 26.0385 17.3797 25.7236C17.1542 25.4087 16.8412 25.167 16.4795 25.0285C16.1178 24.89 15.7234 24.8609 15.3453 24.9447C14.9671 25.0285 14.622 25.2215 14.3526 25.4998C14.0833 25.7781 13.9017 26.1294 13.8303 26.5101C13.759 26.8908 13.8011 27.284 13.9513 27.6409C14.1016 27.9979 14.3534 28.3028 14.6755 28.5179C14.9977 28.7329 15.3759 28.8485 15.7631 28.8504C16.0284 28.8472 16.2905 28.7915 16.5341 28.6865C16.7778 28.5815 16.9982 28.4292 17.1827 28.2386C17.3672 28.0479 17.5121 27.8226 17.6091 27.5757C17.7061 27.3287 17.7532 27.065 17.7477 26.7997V26.7997Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M21.353 28.9828V29.8841H20.1458V20.8792H21.3696V24.6167C21.6182 24.2975 21.9369 24.0397 22.3011 23.8633C22.6653 23.6869 23.0652 23.5967 23.4699 23.5997C24.3186 23.5997 25.1326 23.9368 25.7327 24.5369C26.3329 25.1371 26.67 25.951 26.67 26.7998C26.67 27.6485 26.3329 28.4625 25.7327 29.0626C25.1326 29.6627 24.3186 29.9999 23.4699 29.9999C23.0629 30.0029 22.6606 29.9128 22.2937 29.7365C21.9268 29.5602 21.6051 29.3024 21.353 28.9828V28.9828ZM25.347 26.7915C25.3646 26.5162 25.3256 26.2403 25.2324 25.9807C25.1392 25.721 24.9938 25.4833 24.8051 25.2821C24.6164 25.0809 24.3884 24.9206 24.1353 24.8109C23.8822 24.7013 23.6093 24.6448 23.3335 24.6448C23.0576 24.6448 22.7847 24.7013 22.5316 24.8109C22.2785 24.9206 22.0505 25.0809 21.8618 25.2821C21.6731 25.4833 21.5277 25.721 21.4345 25.9807C21.3413 26.2403 21.3023 26.5162 21.32 26.7915C21.3023 27.0668 21.3413 27.3427 21.4345 27.6023C21.5277 27.862 21.6731 28.0997 21.8618 28.3009C22.0505 28.5021 22.2785 28.6624 22.5316 28.7721C22.7847 28.8817 23.0576 28.9382 23.3335 28.9382C23.6093 28.9382 23.8822 28.8817 24.1353 28.7721C24.3884 28.6624 24.6164 28.5021 24.8051 28.3009C24.9938 28.0997 25.1392 27.862 25.2324 27.6023C25.3256 27.3427 25.3646 27.0668 25.347 26.7915Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M27.4309 28.2716C27.4309 27.0478 28.1999 26.4938 29.8703 26.2871C31.0693 26.1382 31.4745 26.0555 31.4745 25.6173C31.4745 25.179 31.1437 24.6333 30.201 24.6333C29.8419 24.6068 29.4857 24.7136 29.2004 24.9333C28.9152 25.153 28.7209 25.4701 28.6547 25.824L27.4723 25.3279C27.683 24.7897 28.0593 24.3323 28.5467 24.0217C29.0342 23.7111 29.6076 23.5633 30.1845 23.5996C31.7556 23.5996 32.7148 24.4265 32.7148 25.9232V29.8841H31.5241V28.9249C31.3283 29.2861 31.0296 29.5811 30.6661 29.7724C30.3025 29.9638 29.8902 30.043 29.4816 29.9998C28.2661 29.9998 27.4309 29.2887 27.4309 28.2716ZM31.0362 28.437C31.1887 28.3006 31.311 28.1337 31.395 27.9471C31.479 27.7605 31.523 27.5584 31.5241 27.3538V26.8245C31.5241 27.0643 31.1024 27.114 30.168 27.2297C29.2336 27.3455 28.6547 27.6184 28.6547 28.1807C28.6547 28.743 29.0516 28.9249 29.647 28.9249C30.1556 28.9473 30.6533 28.7725 31.0362 28.437V28.437Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M34.0626 20.9041H35.2699V29.8842H34.0295L34.0626 20.9041Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M39.5862 21.5654H40.9423L45.0768 27.8664V21.5654H46.2841V29.8841H45.052L40.8017 23.459V29.8841H39.5862V21.5654Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M47.4833 26.8247C47.4755 26.4012 47.5528 25.9804 47.7106 25.5872C47.8683 25.1941 48.1033 24.8366 48.4017 24.5359C48.7001 24.2352 49.0558 23.9974 49.4477 23.8366C49.8396 23.6758 50.2598 23.5953 50.6834 23.5998C51.1005 23.5861 51.516 23.6579 51.9043 23.8107C52.2927 23.9636 52.6456 24.1943 52.9415 24.4886C53.2374 24.7829 53.4699 25.1347 53.6248 25.5222C53.7797 25.9097 53.8537 26.3248 53.8421 26.742V27.2547H48.674C48.7692 27.664 48.9832 28.0361 49.289 28.3242C49.5949 28.6124 49.979 28.8038 50.3932 28.8744C50.8075 28.9451 51.2333 28.8918 51.6174 28.7214C52.0015 28.5509 52.3267 28.2708 52.5522 27.9162L53.5693 28.5199C53.2707 28.9906 52.8541 29.3749 52.3608 29.6346C51.8675 29.8943 51.3149 30.0203 50.7578 30C50.3305 30.0217 49.9033 29.9551 49.5028 29.8045C49.1023 29.6539 48.7371 29.4224 48.4299 29.1246C48.1227 28.8267 47.8802 28.4688 47.7173 28.0731C47.5544 27.6775 47.4748 27.2525 47.4833 26.8247V26.8247ZM48.7154 26.2045H52.6349C52.5654 25.756 52.3293 25.3501 51.9736 25.0681C51.618 24.786 51.1691 24.6485 50.7165 24.683C50.2596 24.6713 49.8124 24.8156 49.4486 25.0922C49.0848 25.3688 48.8262 25.7612 48.7154 26.2045V26.2045Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M55.562 27.8666V24.8319H54.3381V23.7238H55.562V22.3925L56.7692 21.6152V23.7321H58.4892V24.8402H56.7692V27.8666C56.7692 28.5364 57.1083 28.8341 57.5961 28.8341C57.9194 28.8397 58.2376 28.7537 58.514 28.586V29.7354C58.211 29.9201 57.8595 30.0094 57.5052 29.9918C56.2731 29.9835 55.562 29.3798 55.562 27.8666Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M59.1921 23.7236H60.4573L61.8878 28.2302L63.5416 23.7567H64.7324L66.3862 28.2302L67.8663 23.7567H69.1728L67.0146 29.8841H65.8652L64.2114 25.3692L62.4336 29.8841H61.2263L59.1921 23.7236Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M69.6111 26.7997C69.6111 26.1668 69.7988 25.5481 70.1504 25.0218C70.5021 24.4956 71.0019 24.0854 71.5866 23.8432C72.1714 23.601 72.8148 23.5376 73.4356 23.6611C74.0563 23.7846 74.6265 24.0894 75.0741 24.5369C75.5216 24.9844 75.8264 25.5547 75.9499 26.1754C76.0733 26.7962 76.01 27.4396 75.7678 28.0243C75.5256 28.6091 75.1154 29.1089 74.5891 29.4605C74.0629 29.8121 73.4442 29.9998 72.8112 29.9998C72.3904 30.002 71.9733 29.9207 71.584 29.7607C71.1948 29.6007 70.8411 29.365 70.5435 29.0674C70.2459 28.7698 70.0103 28.4162 69.8503 28.0269C69.6902 27.6377 69.6089 27.2206 69.6111 26.7997V26.7997ZM74.7875 26.7997C74.7729 26.4124 74.6447 26.0378 74.4189 25.7228C74.1931 25.4077 73.8796 25.166 73.5174 25.0278C73.1552 24.8895 72.7604 24.8609 72.3821 24.9453C72.0037 25.0298 71.6586 25.2236 71.3896 25.5028C71.1206 25.7819 70.9396 26.1339 70.8692 26.5151C70.7988 26.8963 70.8421 27.2898 70.9936 27.6466C71.1451 28.0034 71.3982 28.3078 71.7214 28.5218C72.0446 28.7359 72.4236 28.8502 72.8112 28.8504C73.0762 28.8472 73.3378 28.7915 73.581 28.6863C73.8242 28.5812 74.0441 28.4289 74.228 28.2381C74.4118 28.0473 74.5559 27.8219 74.652 27.575C74.7481 27.3281 74.7941 27.0646 74.7875 26.7997V26.7997Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M77.1855 23.7238H78.3928V24.7739C78.5396 24.4384 78.7873 24.1569 79.1015 23.9686C79.4157 23.7804 79.7807 23.6948 80.1458 23.7238H80.6585V24.9807H79.9226C78.9551 24.9807 78.3928 25.3858 78.3928 26.56V29.8677H77.1855V23.7238Z"
          fill={color1 ? color1 : "#251F20"}
        />
        <path
          d="M84.1397 27.081L83.0317 28.28V29.8842H81.8162V20.9041H83.0317V26.866L85.9011 23.7238H87.406L85.0245 26.312L87.5052 29.8759H86.0582L84.1397 27.081Z"
          fill={color1 ? color1 : "#251F20"}
        />
      </g>
      <defs>
        <linearGradient
          id={`${paint0_linear}`}
          x1="50.617"
          y1="13.3296"
          x2="45.5399"
          y2="5.37484"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color2 ? color2 : "#FF9800"} />
          <stop offset="1" stop-color={color3 ? color3 : "#FF6100"} />
        </linearGradient>
        <clipPath id="clip0">
          <rect
            width="88.6025"
            height="30"
            fill="white"
            transform="translate(0.540039)"
          />
        </clipPath>
      </defs>
    </Box>
  );
};