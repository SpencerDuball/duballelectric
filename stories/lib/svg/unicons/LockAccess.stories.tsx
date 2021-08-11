import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LockAccess, LockAccessPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LockAccess",
  component: LockAccess,
} as ComponentMeta<typeof LockAccess>;

const Template: ComponentStory<typeof LockAccess> = (
  args: LockAccessPropsI
) => (
  <Box display="flex" gap="20px">
    <LockAccess {...args} />
    <LockAccess {...args} fill="red.500" />
    <LockAccess {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
