import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BagSlash, BagSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BagSlash",
  component: BagSlash,
} as ComponentMeta<typeof BagSlash>;

const Template: ComponentStory<typeof BagSlash> = (args: BagSlashPropsI) => (
  <Box display="flex" gap="20px">
    <BagSlash {...args} />
    <BagSlash {...args} fill="red.500" />
    <BagSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
