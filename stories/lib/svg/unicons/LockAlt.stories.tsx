import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LockAlt, LockAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LockAlt",
  component: LockAlt,
} as ComponentMeta<typeof LockAlt>;

const Template: ComponentStory<typeof LockAlt> = (args: LockAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <LockAlt {...args} />
    <LockAlt {...args} fill="red.500" />
    <LockAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
