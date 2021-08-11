import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeLock, EnvelopeLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeLock",
  component: EnvelopeLock,
} as ComponentMeta<typeof EnvelopeLock>;

const Template: ComponentStory<typeof EnvelopeLock> = (
  args: EnvelopeLockPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeLock {...args} />
    <EnvelopeLock {...args} fill="red.500" />
    <EnvelopeLock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
