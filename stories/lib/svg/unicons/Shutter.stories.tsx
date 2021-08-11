import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Shutter, ShutterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shutter",
  component: Shutter,
} as ComponentMeta<typeof Shutter>;

const Template: ComponentStory<typeof Shutter> = (args: ShutterPropsI) => (
  <Box display="flex" gap="20px">
    <Shutter {...args} />
    <Shutter {...args} fill="red.500" />
    <Shutter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
