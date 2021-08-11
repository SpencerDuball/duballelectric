import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Align, AlignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Align",
  component: Align,
} as ComponentMeta<typeof Align>;

const Template: ComponentStory<typeof Align> = (args: AlignPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Align {...args} />
    <Align {...args} fill="red.500" />
    <Align {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
