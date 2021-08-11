import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudUnlock, CloudUnlockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudUnlock",
  component: CloudUnlock,
} as ComponentMeta<typeof CloudUnlock>;

const Template: ComponentStory<typeof CloudUnlock> = (
  args: CloudUnlockPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudUnlock {...args} />
    <CloudUnlock {...args} fill="red.500" />
    <CloudUnlock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
