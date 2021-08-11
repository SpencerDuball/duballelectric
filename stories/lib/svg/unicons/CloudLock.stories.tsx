import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudLock, CloudLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudLock",
  component: CloudLock,
} as ComponentMeta<typeof CloudLock>;

const Template: ComponentStory<typeof CloudLock> = (args: CloudLockPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudLock {...args} />
    <CloudLock {...args} fill="red.500" />
    <CloudLock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
