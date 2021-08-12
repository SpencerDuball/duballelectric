import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "22em", // 352px
  md: "31.25em", // 500px
  lg: "37.5em", // 600px
  xl: "53.125em", // 850px
  "2xl": "68.75em", // 1100px
});

export const theme = extendTheme({ config, breakpoints });
