import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Windows, WindowsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Windows",
  component: Windows,
} as ComponentMeta<typeof Windows>;

const Template: ComponentStory<typeof Windows> = (args: WindowsPropsI) => (
  <Box display="flex" gap="20px">
    <Windows {...args} />
    <Windows {...args} fill="red.500" />
    <Windows {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
