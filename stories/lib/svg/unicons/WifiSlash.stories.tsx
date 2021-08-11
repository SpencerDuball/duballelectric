import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WifiSlash, WifiSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WifiSlash",
  component: WifiSlash,
} as ComponentMeta<typeof WifiSlash>;

const Template: ComponentStory<typeof WifiSlash> = (args: WifiSlashPropsI) => (
  <Box display="flex" gap="20px">
    <WifiSlash {...args} />
    <WifiSlash {...args} fill="red.500" />
    <WifiSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
