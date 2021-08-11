import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DesktopAlt, DesktopAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DesktopAlt",
  component: DesktopAlt,
} as ComponentMeta<typeof DesktopAlt>;

const Template: ComponentStory<typeof DesktopAlt> = (
  args: DesktopAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DesktopAlt {...args} />
    <DesktopAlt {...args} fill="red.500" />
    <DesktopAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
