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
  "3xl": "75em", // 1200px
});

const styles = {
  global: {
    "html, body": {
      fontFamily: '"Inter", sans-serif',
    },
  },
};

export const theme = extendTheme({ styles, config, breakpoints });
