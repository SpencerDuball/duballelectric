import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Window, WindowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Window",
  component: Window,
} as ComponentMeta<typeof Window>;

const Template: ComponentStory<typeof Window> = (args: WindowPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Window {...args} />
    <Window {...args} fill="red.500" />
    <Window {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
