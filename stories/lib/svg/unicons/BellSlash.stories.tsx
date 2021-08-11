import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BellSlash, BellSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BellSlash",
  component: BellSlash,
} as ComponentMeta<typeof BellSlash>;

const Template: ComponentStory<typeof BellSlash> = (args: BellSlashPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BellSlash {...args} />
    <BellSlash {...args} fill="red.500" />
    <BellSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
