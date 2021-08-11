import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LockSlash, LockSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LockSlash",
  component: LockSlash,
} as ComponentMeta<typeof LockSlash>;

const Template: ComponentStory<typeof LockSlash> = (args: LockSlashPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <LockSlash {...args} />
    <LockSlash {...args} fill="red.500" />
    <LockSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
