import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PhoneSlash, PhoneSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhoneSlash",
  component: PhoneSlash,
} as ComponentMeta<typeof PhoneSlash>;

const Template: ComponentStory<typeof PhoneSlash> = (
  args: PhoneSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <PhoneSlash {...args} />
    <PhoneSlash {...args} fill="red.500" />
    <PhoneSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
