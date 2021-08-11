import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignCenterH, AlignCenterHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenterH",
  component: AlignCenterH,
} as ComponentMeta<typeof AlignCenterH>;

const Template: ComponentStory<typeof AlignCenterH> = (
  args: AlignCenterHPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignCenterH {...args} />
    <AlignCenterH {...args} fill="red.500" />
    <AlignCenterH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
