import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignCenterJustify, AlignCenterJustifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenterJustify",
  component: AlignCenterJustify,
} as ComponentMeta<typeof AlignCenterJustify>;

const Template: ComponentStory<typeof AlignCenterJustify> = (
  args: AlignCenterJustifyPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignCenterJustify {...args} />
    <AlignCenterJustify {...args} fill="red.500" />
    <AlignCenterJustify {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
