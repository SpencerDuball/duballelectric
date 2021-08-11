import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Plug, PlugPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Plug",
  component: Plug,
} as ComponentMeta<typeof Plug>;

const Template: ComponentStory<typeof Plug> = (args: PlugPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Plug {...args} />
    <Plug {...args} fill="red.500" />
    <Plug {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
