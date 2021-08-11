import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DesktopSlash, DesktopSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DesktopSlash",
  component: DesktopSlash,
} as ComponentMeta<typeof DesktopSlash>;

const Template: ComponentStory<typeof DesktopSlash> = (
  args: DesktopSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <DesktopSlash {...args} />
    <DesktopSlash {...args} fill="red.500" />
    <DesktopSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
