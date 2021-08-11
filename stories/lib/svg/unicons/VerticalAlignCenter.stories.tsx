import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  VerticalAlignCenter,
  VerticalAlignCenterPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalAlignCenter",
  component: VerticalAlignCenter,
} as ComponentMeta<typeof VerticalAlignCenter>;

const Template: ComponentStory<typeof VerticalAlignCenter> = (
  args: VerticalAlignCenterPropsI
) => (
  <Box display="flex" gap="20px">
    <VerticalAlignCenter {...args} />
    <VerticalAlignCenter {...args} fill="red.500" />
    <VerticalAlignCenter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
