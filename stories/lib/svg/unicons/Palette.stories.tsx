import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Palette, PalettePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Palette",
  component: Palette,
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = (args: PalettePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Palette {...args} />
    <Palette {...args} fill="red.500" />
    <Palette {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
