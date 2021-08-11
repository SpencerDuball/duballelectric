import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { NoEntry, NoEntryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/NoEntry",
  component: NoEntry,
} as ComponentMeta<typeof NoEntry>;

const Template: ComponentStory<typeof NoEntry> = (args: NoEntryPropsI) => (
  <Box display="flex" gap="20px">
    <NoEntry {...args} />
    <NoEntry {...args} fill="red.500" />
    <NoEntry {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
