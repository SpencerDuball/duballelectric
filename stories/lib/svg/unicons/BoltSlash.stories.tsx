import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BoltSlash, BoltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BoltSlash",
  component: BoltSlash,
} as ComponentMeta<typeof BoltSlash>;

const Template: ComponentStory<typeof BoltSlash> = (args: BoltSlashPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BoltSlash {...args} />
    <BoltSlash {...args} fill="red.500" />
    <BoltSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
