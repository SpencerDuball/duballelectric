import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CaretRight, CaretRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CaretRight",
  component: CaretRight,
} as ComponentMeta<typeof CaretRight>;

const Template: ComponentStory<typeof CaretRight> = (
  args: CaretRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CaretRight {...args} />
    <CaretRight {...args} fill="red.500" />
    <CaretRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
