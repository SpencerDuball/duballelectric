import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Swatchbook, SwatchbookPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Swatchbook",
  component: Swatchbook,
} as ComponentMeta<typeof Swatchbook>;

const Template: ComponentStory<typeof Swatchbook> = (
  args: SwatchbookPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Swatchbook {...args} />
    <Swatchbook {...args} fill="red.500" />
    <Swatchbook {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
