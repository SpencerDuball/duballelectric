import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Backspace, BackspacePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Backspace",
  component: Backspace,
} as ComponentMeta<typeof Backspace>;

const Template: ComponentStory<typeof Backspace> = (args: BackspacePropsI) => (
  <Box display="flex" gap="20px">
    <Backspace {...args} />
    <Backspace {...args} fill="red.500" />
    <Backspace {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
