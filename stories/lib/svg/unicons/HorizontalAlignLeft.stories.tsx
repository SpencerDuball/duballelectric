import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  HorizontalAlignLeft,
  HorizontalAlignLeftPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalAlignLeft",
  component: HorizontalAlignLeft,
} as ComponentMeta<typeof HorizontalAlignLeft>;

const Template: ComponentStory<typeof HorizontalAlignLeft> = (
  args: HorizontalAlignLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <HorizontalAlignLeft {...args} />
    <HorizontalAlignLeft {...args} fill="red.500" />
    <HorizontalAlignLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
