import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AutoFlash, AutoFlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AutoFlash",
  component: AutoFlash,
} as ComponentMeta<typeof AutoFlash>;

const Template: ComponentStory<typeof AutoFlash> = (args: AutoFlashPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AutoFlash {...args} />
    <AutoFlash {...args} fill="red.500" />
    <AutoFlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
