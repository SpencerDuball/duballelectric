import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../../theme/theme";

/**
 * Adds the ChakraProvider to all stories. This allows the custom styles
 * from the Chakra theme to be available to all stories.
 *
 * @param {ReactNode} Story - A storybook Story component.
 * @returns {ReactNode}
 */
export const withChakraTheme = (Story) => (
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  </>
);
