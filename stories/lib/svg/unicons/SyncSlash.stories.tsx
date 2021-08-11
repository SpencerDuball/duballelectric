import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SyncSlash, SyncSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SyncSlash",
  component: SyncSlash,
} as ComponentMeta<typeof SyncSlash>;

const Template: ComponentStory<typeof SyncSlash> = (args: SyncSlashPropsI) => (
  <Box display="flex" gap="20px">
    <SyncSlash {...args} />
    <SyncSlash {...args} fill="red.500" />
    <SyncSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
