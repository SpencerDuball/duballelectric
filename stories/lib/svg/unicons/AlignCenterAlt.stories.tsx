import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignCenterAlt, AlignCenterAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenterAlt",
  component: AlignCenterAlt,
} as ComponentMeta<typeof AlignCenterAlt>;

const Template: ComponentStory<typeof AlignCenterAlt> = (
  args: AlignCenterAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignCenterAlt {...args} />
    <AlignCenterAlt {...args} fill="red.500" />
    <AlignCenterAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
