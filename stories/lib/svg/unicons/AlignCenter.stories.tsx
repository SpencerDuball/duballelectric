import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignCenter, AlignCenterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenter",
  component: AlignCenter,
} as ComponentMeta<typeof AlignCenter>;

const Template: ComponentStory<typeof AlignCenter> = (
  args: AlignCenterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignCenter {...args} />
    <AlignCenter {...args} fill="red.500" />
    <AlignCenter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
