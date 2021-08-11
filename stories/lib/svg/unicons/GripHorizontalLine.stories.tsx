import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GripHorizontalLine, GripHorizontalLinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GripHorizontalLine",
  component: GripHorizontalLine,
} as ComponentMeta<typeof GripHorizontalLine>;

const Template: ComponentStory<typeof GripHorizontalLine> = (
  args: GripHorizontalLinePropsI
) => (
  <Box display="flex" gap="20px">
    <GripHorizontalLine {...args} />
    <GripHorizontalLine {...args} fill="red.500" />
    <GripHorizontalLine {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
