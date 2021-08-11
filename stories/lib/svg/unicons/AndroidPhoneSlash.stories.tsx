import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AndroidPhoneSlash, AndroidPhoneSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AndroidPhoneSlash",
  component: AndroidPhoneSlash,
} as ComponentMeta<typeof AndroidPhoneSlash>;

const Template: ComponentStory<typeof AndroidPhoneSlash> = (
  args: AndroidPhoneSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AndroidPhoneSlash {...args} />
    <AndroidPhoneSlash {...args} fill="red.500" />
    <AndroidPhoneSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
