import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Desktop, DesktopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Desktop",
  component: Desktop,
} as ComponentMeta<typeof Desktop>;

const Template: ComponentStory<typeof Desktop> = (args: DesktopPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Desktop {...args} />
    <Desktop {...args} fill="red.500" />
    <Desktop {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
