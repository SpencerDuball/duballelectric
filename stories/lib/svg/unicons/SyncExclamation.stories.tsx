import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SyncExclamation, SyncExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SyncExclamation",
  component: SyncExclamation,
} as ComponentMeta<typeof SyncExclamation>;

const Template: ComponentStory<typeof SyncExclamation> = (
  args: SyncExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SyncExclamation {...args} />
    <SyncExclamation {...args} fill="red.500" />
    <SyncExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
