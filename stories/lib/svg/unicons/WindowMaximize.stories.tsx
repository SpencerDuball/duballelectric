import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WindowMaximize, WindowMaximizePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindowMaximize",
  component: WindowMaximize,
} as ComponentMeta<typeof WindowMaximize>;

const Template: ComponentStory<typeof WindowMaximize> = (
  args: WindowMaximizePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WindowMaximize {...args} />
    <WindowMaximize {...args} fill="red.500" />
    <WindowMaximize {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
