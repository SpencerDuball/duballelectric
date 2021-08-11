import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Setting, SettingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Setting",
  component: Setting,
} as ComponentMeta<typeof Setting>;

const Template: ComponentStory<typeof Setting> = (args: SettingPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Setting {...args} />
    <Setting {...args} fill="red.500" />
    <Setting {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
