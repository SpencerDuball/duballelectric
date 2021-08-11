import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Copy, CopyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Copy",
  component: Copy,
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = (args: CopyPropsI) => (
  <Box display="flex" gap="20px">
    <Copy {...args} />
    <Copy {...args} fill="red.500" />
    <Copy {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
