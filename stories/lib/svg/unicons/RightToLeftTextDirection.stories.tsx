import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  RightToLeftTextDirection,
  RightToLeftTextDirectionPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RightToLeftTextDirection",
  component: RightToLeftTextDirection,
} as ComponentMeta<typeof RightToLeftTextDirection>;

const Template: ComponentStory<typeof RightToLeftTextDirection> = (
  args: RightToLeftTextDirectionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <RightToLeftTextDirection {...args} />
    <RightToLeftTextDirection {...args} fill="red.500" />
    <RightToLeftTextDirection {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
