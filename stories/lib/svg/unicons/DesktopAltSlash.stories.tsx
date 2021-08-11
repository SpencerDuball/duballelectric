import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DesktopAltSlash, DesktopAltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DesktopAltSlash",
  component: DesktopAltSlash,
} as ComponentMeta<typeof DesktopAltSlash>;

const Template: ComponentStory<typeof DesktopAltSlash> = (
  args: DesktopAltSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <DesktopAltSlash {...args} />
    <DesktopAltSlash {...args} fill="red.500" />
    <DesktopAltSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
